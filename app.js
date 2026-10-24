import { sources, genes, references, reviewNotice } from './reference-data.js?v=share-2';
import { panel, panelCode } from './panel.js?v=panel-8';
import { riskFormat, riskSources } from './risk-format.js?v=risk-format-8';
import { invitaeGuides, twoCopyGenes } from './invitae-guides.js?v=invitae-4';
import { zygosityStates, stateSources } from './zygosity-states.js?v=zyg-12';

// Audit check marks removed 24 October 2026: they described the 23 October record audit, not the current pages.

(() => {
 const root = document.getElementById('gene-library');
 const defaults = {category:'All categories', query:'', gene:'BRCA2', tab:'Overview', finding:'plp', population:'women', reading:false};
 function readRoute() {
  const params = new URLSearchParams(location.search);
  const candidate = params.get('gene');
  const gene = genes.find(g => g.symbol === candidate);
  const categories = ['All categories', ...new Set(genes.map(g=>g.category))];
  return {...defaults,
   gene: gene ? gene.symbol : defaults.gene,
   tab: ['Overview','Guidance'].includes(params.get('view')) ? params.get('view') : defaults.tab,
   finding: params.get('finding') === 'vus' ? 'vus' : 'plp',
   category: categories.includes(params.get('category')) ? params.get('category') : defaults.category,
   query: (params.get('q') || '').slice(0, 200),
   population: ['women','men'].includes(params.get('population')) ? params.get('population') : 'women',
   reading: Boolean(gene)
  };
 }
 const state = readRoute();
 const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const byGene=()=>genes.find(g=>g.symbol===state.gene);
 function save(replace = false) {
  const params = new URLSearchParams();
  if (state.reading) params.set('gene', state.gene);
  if (state.tab !== 'Overview') params.set('view', state.tab);
  if (state.finding !== 'plp') params.set('finding', state.finding);
  if (state.category !== 'All categories') params.set('category', state.category);
  if (state.query) params.set('q', state.query);
  params.set('population', state.population);
  const url = location.pathname + '?' + params.toString();
  if (url !== location.pathname + location.search) history[replace ? 'replaceState' : 'pushState']({}, '', url);
 }
 const haystack = g => [g.symbol, g.full, g.sub, g.category, ...g.conditions.map(c=>c.name+' '+c.tags), ...(references[g.symbol]?.table.rows.map(r=>r.name) || [])].join(' ').toLowerCase();
 function filtered(){return genes.filter(g=>(state.category==='All categories'||g.category===state.category)&&haystack(g).includes(state.query.trim().toLowerCase()));}
 function renderList(){
  root.querySelector('#gl-categories').innerHTML=['All categories','Cancer','Cardiovascular','Metabolic','Other conditions'].map(cat=>`<button type="button" class="gl-category" data-category="${cat}" aria-pressed="${cat===state.category}"><span>${cat}</span><span>${cat==='All categories'?genes.length:genes.filter(g=>g.category===cat).length}</span></button>`).join('');
  const rows=filtered();root.querySelector('#gl-count').textContent=rows.length;
  root.querySelector('#gl-list').innerHTML=rows.length?rows.map(g=>`<button type="button" class="gl-gene" data-gene="${g.symbol}" aria-pressed="${g.symbol===state.gene}"><strong>${g.symbol}</strong><span class="gl-genename">${escape(g.sub)}</span></button>`).join(''):'<p class="gl-empty">No genes found.</p>';
 }
 // Every gene uses one reference format: zygosity, risk table, guidance, then collapsed detail.
 const groupLabel={women:'Women',men:'Men',all:'Women and men'};
 function riskTable(t, cite) {
  const span=t.measures.length;
  const cell=(row,group)=>{
   const v=row[group];
   if(!v)return `<td class="gl-not-applicable gl-atm-sex-start" colspan="${span}">Not applicable</td>`;
   return t.measures.map((m,i)=>{
    const text=v[m.key]||'Not established';
    const unknown=/^(Not |Verification pending)/.test(text);
    return `<td${i===0?' class="gl-atm-sex-start"':''}><span class="${unknown?'gl-atm-unknown':'gl-atm-value'}">${escape(text)}${!unknown&&v.preliminary?'†':''}</span>${!unknown&&v.citations?.[m.key]?cite(v.citations[m.key],true):''}${m.key==='risk'&&v.horizon?`<small class="gl-risk-period">${escape(v.horizon)}</small>`:''}</td>`;
   }).join('');
  };
  const wide=t.groups.length*span>2;
  return `<div class="gl-matrix-wrap${wide?' gl-atm-scroll':''}" tabindex="0" role="region" aria-label="${escape(t.caption)}${wide?', scroll horizontally on small screens':''}"><table class="gl-cancer-matrix gl-atm-matrix${wide?'':' gl-compact'}"><caption>${escape(t.caption)}</caption><colgroup><col class="gl-atm-cancer-col"></colgroup>${t.groups.map(()=>`<colgroup span="${span}"></colgroup>`).join('')}<thead><tr><th scope="col" rowspan="2">${escape(t.rowHeader)}</th>${t.groups.map(g=>`<th class="gl-atm-sex-start" scope="colgroup" colspan="${span}">${groupLabel[g]}</th>`).join('')}</tr><tr>${t.groups.map(()=>t.measures.map((m,i)=>`<th${i===0?' class="gl-atm-sex-start"':''} scope="col">${escape(m.label)}</th>`).join('')).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr><th scope="row">${escape(r.name)}</th>${t.groups.map(g=>cell(r,g)).join('')}</tr>`).join('')}</tbody></table></div>${wide?`<p class="gl-atm-scroll-hint">${t.groups.length>1?'Scroll horizontally to compare women and men.':'Scroll horizontally to see every column.'}</p>`:''}<p class="gl-risk-note">${escape(t.note)}</p>`;
 }
 // Risk table under qa/risk-communication-spec.md: absolute risk, baseline risk and risk comparison for women and for men.
 function comparisonTable(f, t, cite) {
  if(!f.rows.length) return '<p class="gl-risk-note">No condition on this page has a general-population comparison. Absolute risks are listed under the sections below.</p>';
  const td=(v,first,unknown)=>`<td${first?' class="gl-atm-sex-start"':''}><span class="${unknown?'gl-atm-unknown':'gl-atm-value'}">${escape(v.text)}</span>${v.sources?.length?cite(v.sources):''}${v.line?`<small class="gl-risk-period">${escape(v.line)}</small>`:''}</td>`;
  // Pooled figures say so under the figure, so the note no longer lists the pooled rows (24 October 2026).
  const note=f.note||'', pooledList=(note.match(/pool women and men: ([^.]*)\./)||[])[1]||'';
  const pooled=r=>/pool women and men for every row/.test(note)||pooledList.includes(r.name);
  const own=(v,r)=>v&&v.line&&pooled(r)&&!/pooled/.test(v.line)?{...v,line:`${v.line} · sexes pooled`}:v;
  const cells=f.rows.flatMap(r=>[r.women,r.men]).filter(v=>v&&v!=='NA');
  const has=re=>cells.some(v=>[v.risk?.text,v.baseline?.text,v.ratio].some(x=>x&&re.test(x)));
  // The legend defines only what this table shows.
  const legend=[
   cells.some(v=>/×$/.test(v.ratio||''))?`Risk comparison is absolute risk divided by baseline risk${has(/^about /)?'; "about" means the two come from different studies':''}.`:'',
   has(/^Not comparable/)?'Not comparable: both figures exist but cannot be divided.':'',
   has(/^Not applicable/)?'Not applicable: the condition occurs only with the variant.':''];
  const kept=note.split(/(?<=\.)\s+/).filter(x=>x&&!/pool women and men|is sex-specific/.test(x));
  const foot=[...kept,...legend].filter(Boolean).join(' ');
  const cell=(row,group)=>{
   const v=row[group];
   if(v==='NA')return '<td class="gl-not-applicable gl-atm-sex-start" colspan="3">Not applicable</td>';
   const none={text:'Not established'};
   if(!v.risk&&!v.baseline&&!v.ratio)return '<td class="gl-atm-sex-start" colspan="3"><span class="gl-atm-unknown">Not established</span></td>';
   return td(own(v.risk,row)||none,true,!v.risk)+td(v.baseline||none,false,!v.baseline||v.baseline.na)+td(v.ratio?{text:v.ratio}:none,false,!v.ratio||!/×$/.test(v.ratio));
  };
  const heads=['Absolute risk','Baseline risk','Risk comparison'];
  return `<div class="gl-matrix-wrap gl-atm-scroll" tabindex="0" role="region" aria-label="${escape(t.caption)}, scroll horizontally on small screens"><table class="gl-cancer-matrix gl-atm-matrix"><caption>${escape(t.caption)}</caption><colgroup><col class="gl-atm-cancer-col"></colgroup><colgroup span="3"></colgroup><colgroup span="3"></colgroup><thead><tr><th scope="col" rowspan="2">${escape(t.rowHeader)}</th>${['Women','Men'].map(s=>`<th class="gl-atm-sex-start" scope="colgroup" colspan="3">${s}</th>`).join('')}</tr><tr>${['women','men'].map(()=>heads.map((h,i)=>`<th${i===0?' class="gl-atm-sex-start"':''} scope="col">${h}</th>`).join('')).join('')}</tr></thead><tbody>${f.rows.map(r=>`<tr><th scope="row">${escape(r.name)}</th>${cell(r,'women')}${cell(r,'men')}</tr>`).join('')}</tbody></table></div><p class="gl-atm-scroll-hint">Scroll horizontally to compare women and men.</p>${foot?`<p class="gl-risk-note">${escape(foot)}</p>`:''}`;
 }
 function renderReference(g, r) {
  // Zygosity first: the selected result decides which risk table and which guides apply (prototype: ATM).
  const zs=zygosityStates[g.symbol];
  const zst=zs?(zs.find(x=>x.key===state.zygosity)||zs.find(x=>x.default)||zs[0]):null;
  // Top row: the kind of result (one variant, two variants). A state with a parent is a specific variant, offered as a second row under its parent.
  const top=zst?(zst.parent||zst.key):null;
  const subs=zs?zs.filter(x=>x.parent===top):[];
  const sub=subs.length?`<div class="gl-zygosity-sub"><p class="gl-zygosity-label" id="gl-zygosity-sub-label">Specific variant</p><div class="gl-population-switch gl-zygosity-switch" role="group" aria-labelledby="gl-zygosity-sub-label"><button type="button" data-zygosity="${top}" aria-pressed="${zst.key===top}">Any other variant</button>${subs.map(x=>`<button type="button" data-zygosity="${x.key}" aria-pressed="${x===zst}">${escape(x.label)}</button>`).join('')}</div></div>`:'';
  const multi=zs&&zs.length>1, topMulti=zs&&zs.filter(x=>!x.parent).length>1;
  const topState=zs?zs.find(x=>x.key===(zst.parent||zst.key)):null;
  const fixed=zs&&!topMulti?`<p class="gl-zygosity-fixed"><strong>${escape(topState.label)}</strong>${topState.report?` · ${escape(topState.report)}`:''}</p>`:'';
  const zswitch=zs?`<div class="gl-zygosity"><p class="gl-zygosity-label" id="gl-zygosity-label">Zygosity</p>${topMulti?`<div class="gl-population-switch gl-zygosity-switch" role="group" aria-labelledby="gl-zygosity-label">${zs.filter(x=>!x.parent).map(x=>`<button type="button" data-zygosity="${x.key}" aria-pressed="${x.key===top}">${escape(x.label)}${x.report?`<small>${escape(x.report)}</small>`:''}</button>`).join('')}</div>`:fixed}${sub}<section class="gl-zygosity-meaning"><p>${escape(zst.meaning)}</p>${zst.check?`<p class="gl-zygosity-check">${escape(zst.check)}</p>`:''}</section></div>`:'';
  // Citations render as numbered links in reading order; the numbered list sits at the end of the view.
  const cited=[];
  const src=k=>sources[k]||riskSources[k]||stateSources[k];
  const cite=(keys,internal=false)=>`<span class="gl-cite">${keys.map(k=>{let i=cited.indexOf(k);if(i<0)i=cited.push(k)-1;return `<a href="${internal?'#gl-reference-'+(i+1):src(k).url}" ${internal?'data-reference="'+(i+1)+'"':'target="_blank" rel="noopener noreferrer"'} title="${escape(src(k).label)}" aria-label="Source ${i+1}: ${escape(src(k).label)}">${i+1}</a>`;}).join(',')}</span>`;
  const sections=items=>items.map(d=>`<section class="gl-section"><h3>${escape(d.title)}</h3>${d.lead?`<p class="gl-row">${escape(d.lead)}</p>`:''}<p class="gl-row">${escape(d.text)}${cite(d.sources)}</p></section>`).join('');
  let body;
  if(state.finding==='vus') {
   body=`<section class="gl-section"><h3>Use clinical and family history</h3><p class="gl-row">Invitae test ${panelCode} reports only pathogenic and likely pathogenic variants. A variant of uncertain significance from another test does not establish this condition; do not apply these estimates or change management based on it.${cite(['acmg'])}</p></section>`;
  } else {
   const evidence=detail=>`${detail.notes.map(n=>`<p class="gl-row">${escape(n)}</p>`).join('')}${detail.sections.map(s=>`<section class="gl-section"><h3>${escape(s.title)}</h3>${s.rows.map((x,i,a)=>`<p class="gl-row">${x.label?`<strong>${escape(x.label)}.</strong> `:''}${escape(x.text)}${i===a.length-1?cite(s.sources):''}</p>`).join('')}</section>`).join('')}`;
   let f=riskFormat[g.symbol];
   if(zst&&zst.risk==='none'){f=null;}
   else if(zst){
    if(zst.risk==='base'){
     f={...f,rows:f.rows.map(row=>zst.rowOverrides?.[row.name]||row),about:zst.about?[...f.about,zst.about]:f.about};
    } else f=zst.risk;
   }
   const study=()=>r.studyDetails?`<details class="gl-caption"><summary>Study details</summary>${evidence(r.studyDetails)}</details>`:'';
   // Items with no figure share one line instead of repeating "Absolute risk not established" under each name (24 October 2026).
   const bare=i=>/^Absolute risk not established\.?$/.test(i.text);
   const below=b=>{const none=b.items.filter(bare), rest=b.items.filter(i=>!bare(i)), refs=none.flatMap(i=>i.sources||[]);
    return `<details class="gl-caption"><summary>${escape(b.title)}</summary>${rest.map(i=>`<section class="gl-section"><h3>${escape(i.name)}</h3><p class="gl-row">${escape(i.text)}${i.sources.length?cite(i.sources):''}</p></section>`).join('')}${none.length?`<p class="gl-row">No absolute risk established: ${escape(none.map(i=>i.name).join('; '))}.${refs.length?cite([...new Set(refs)]):''}</p>`:''}</details>`;};
   const about=inner=>`<details class="gl-caption gl-plan-evidence"><summary>About these estimates</summary>${inner}${study()}</details>`;
   const summary=zst?'':`<p class="gl-row">${escape(r.summary)}</p>`;
   let main, more='';
   if(zst&&zst.risk==='none') main=`<section class="gl-physician-decision"><h3>${escape(zst.noTableTitle||'No personal risk table')}</h3><p>${escape(zst.noTable)}</p></section>`;
   else if(f){
    main=summary+comparisonTable(f,multi?{...r.table,caption:`${r.table.caption} · ${zst.label}`}:r.table,cite);
    more=f.below.map(below).join('')+about(f.about.filter(a=>a.title!=='Association evidence').map(a=>`<section class="gl-section"><h3>${escape(a.title)}</h3><p class="gl-row">${escape(a.text)}</p></section>`).join(''));
   } else { main=summary+riskTable(r.table,cite); more=about(evidence(d)); }
   // Guidance sits on the page under the table, not behind a tab: it is one link (24 October 2026).
   let guidance='';
   if(invitaeGuides[g.symbol]){
    const guides=zst?invitaeGuides[g.symbol].filter(x=>zst.guides.some(l=>x.label.startsWith(l))):invitaeGuides[g.symbol];
    const carrier=!zst&&twoCopyGenes.includes(g.symbol)&&!guides.some(x=>/^One variant/.test(x.label));
    guidance=`<section class="gl-guidance"><h3>Guidance</h3>${guides.length?`<ul class="gl-guide-list">${guides.map(x=>`<li><a class="gl-source" href="${x.url}#page=${x.tablePage||1}" target="_blank" rel="noopener noreferrer">Management options${guides.length>1?` · ${escape(x.label)}`:''} ↗</a><small class="gl-risk-period">Invitae positive results guide, PDF${x.pages?`, ${x.pages} pages`:''}, opens at the management table${x.date?` · updated ${escape(x.date)}`:''}</small></li>`).join('')}</ul>`:`<p class="gl-row">Invitae has no positive results guide for this result.</p>`}${carrier?`<p class="gl-risk-note">A carrier does not have the condition; the finding matters for family planning and partner testing.</p>`:''}<p class="gl-risk-note">Questions on this result: <a href="mailto:clinconsult@invitae.com">clinconsult@invitae.com</a> or 800-436-3037. The patient can book post-test counseling, included in the test cost, in their Invitae portal.</p></section>`;
   }
   body=main+guidance+more;
  }
  // Association evidence lives in one place: the figures from the risk record first, then the interpretation and its sources (24 October 2026).
  const assoc=riskFormat[g.symbol]?.about?.find(a=>a.title==='Association evidence');
  const clinical=!assoc?r.details:r.details.some(d=>d.title==='Association evidence')
   ?r.details.map(d=>d.title==='Association evidence'?{...d,lead:assoc.text}:d)
   :[...r.details,{title:'Association evidence',text:assoc.text,sources:[]}];
  const details=state.finding==='vus'?'':`<details class="gl-caption gl-plan-evidence"><summary>Clinical detail</summary>${sections(clinical)}</details>${r.otherGenotype&&(!multi||zst.showOtherGenotype)?`<details class="gl-caption"><summary>${escape(r.otherGenotype.title)}</summary><p class="gl-row">${escape(r.otherGenotype.text)}${cite(r.otherGenotype.sources)}</p></details>`:''}`;
  const sourceList=cited.length?`<details class="gl-caption"${r.table.inlineReferences?' data-reference-list':''}><summary>Sources</summary><ol class="gl-sourcelist">${cited.map((k,i)=>`<li${r.table.inlineReferences?' id="gl-reference-'+(i+1)+'" tabindex="-1"':''}><a class="gl-source" href="${src(k).url}" target="_blank" rel="noopener noreferrer">${escape(src(k).label)} ↗</a></li>`).join('')}</ol></details>`:'';
  return `<button type="button" class="gl-back" data-back="true">All genes</button><div class="gl-titleline"><h2>${g.symbol}</h2></div><p class="gl-atm-genotype">${zst?escape(g.sub):escape(r.genotype)} · ${panel[g.symbol].transcript}</p>${zswitch}${zst?'':`<p class="gl-risk-note" role="note">${escape(reviewNotice)}</p>`}<div class="gl-body" aria-live="polite">${body}${details}${sourceList}${zst?`<p class="gl-risk-note gl-review-notice" role="note">${escape(reviewNotice)}</p>`:''}</div>`;
 }
 function renderDetail(){
  const matches=filtered();const box=root.querySelector('#gl-detail');
  if(!matches.length){box.innerHTML='<div class="gl-empty"><h2>No genes found</h2></div>';return;}
  if(!matches.some(x=>x.symbol===state.gene)){state.gene=matches[0].symbol;return renderDetail();}
  const g=byGene();
  box.innerHTML=renderReference(g,references[g.symbol]);
 }
 function render(){renderDetail();renderList();root.classList.toggle('reading', state.reading);}
 root.addEventListener('click', e => {
  const reference=e.target.closest('a[data-reference]');
  if(reference){
   const target=root.querySelector('#gl-reference-'+reference.dataset.reference);
   const list=root.querySelector('[data-reference-list]');
   if(target&&list){e.preventDefault();list.open=true;target.focus({preventScroll:true});target.scrollIntoView({block:'center'});}
   return;
  }
  const b = e.target.closest('button');
  if (!b) return;
  let focus;
  if (b.dataset.category) { state.category = b.dataset.category; focus = '[data-category="' + state.category + '"]'; }
  else if (b.dataset.gene) { state.gene = b.dataset.gene; state.reading = true; state.zygosity = null; focus = '[data-gene="' + state.gene + '"]'; }
  else if (b.dataset.zygosity) { state.zygosity=b.dataset.zygosity; focus='[data-zygosity="'+state.zygosity+'"]'; }
  else if (b.dataset.populationFilter) { state.population=b.dataset.populationFilter; focus='[data-population-filter="'+state.population+'"]'; }
  else if (b.dataset.tab) { state.tab = b.dataset.tab; focus = '[data-tab="' + state.tab + '"]'; }
  else if (b.dataset.back) { state.reading = false; focus = '[data-gene="' + state.gene + '"]'; }
  else return;
  render(); save();
  // Columns scroll on their own above phone width: a new gene or tab starts at the top, a new category resets the list.
  if (b.dataset.gene || b.dataset.tab) root.querySelector('#gl-detail').scrollTop = 0;
  if (b.dataset.category) root.querySelector('#gl-list').closest('.gl-results').scrollTop = 0;
  if (b.dataset.gene && matchMedia('(max-width: 680px)').matches) {
    const back = root.querySelector('.gl-back');
    back?.focus({preventScroll:true});
    root.querySelector('#gl-detail').scrollIntoView({block:'start'});
  } else root.querySelector(focus)?.focus({preventScroll:true});
 });
 root.querySelector('#gl-search').value=state.query;
 root.querySelector('#gl-search').addEventListener('input',e=>{state.query=e.target.value;state.reading=false;render();save(true);root.querySelector('.gl-results').scrollTop=0;});
 // On load or Back/Forward, bring the selected gene into view inside the list column.
 const revealSelected=()=>{if(matchMedia('(min-width: 681px)').matches)root.querySelector('.gl-gene[aria-pressed=true]')?.scrollIntoView({block:'nearest'});};
 window.addEventListener('popstate', () => {Object.assign(state, readRoute());root.querySelector('#gl-search').value=state.query;render();revealSelected();});
 render();revealSelected();
})();
