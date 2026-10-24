// Zygosity states (prototype, ATM only, 24 October 2026). Each gene lists the results a report can return; each state
// carries what it means for the patient, its own risk table (riskFormat shape) and the Invitae guides that apply.
// A state with risk: 'base' uses the gene's entry in risk-format.js; rowOverrides replace named rows of that table.
// A state with parent is a specific variant within that result; it shows as a second choice under its parent.
// Top-level states are clinical states named in report terms: Heterozygous, Biallelic, or for X-linked genes Hemizygous (men)
// and Heterozygous (women). Homozygous and compound heterozygous share one Biallelic state. report is the report's wording,
// shown under the button. meaning is one or two sentences; check appears only where it prevents a wrong action.
export const stateSources = {
  zsMoghadasi2018: {"label": "Moghadasi et al. · J Med Genet 2018", "url": "https://pubmed.ncbi.nlm.nih.gov/28490613/"},
  zsSunZhang2025: {"label": "Sun Zhang et al. · Sci Rep 2025", "url": "https://pubmed.ncbi.nlm.nih.gov/41057495/"},
  zsBernstein2006: { label: 'Bernstein et al. · Hum Mutat 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/16958054/' },
  zsMagnarelli2024: { label: 'Magnarelli et al. · J Allergy Clin Immunol 2025', url: 'https://pubmed.ncbi.nlm.nih.gov/39521281/' },
  zsCrawford2006: { label: 'Crawford et al. · Arch Dis Child 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/16790721/' },
  zsGryfe1999: { label: 'Gryfe et al. · Am J Hum Genet 1999', url: 'https://pubmed.ncbi.nlm.nih.gov/9973276/' },
  zsSeer: { label: 'SEER*Explorer, risk from birth, 2021–2023', url: 'https://seer.cancer.gov/statistics-network/explorer/' }
};

export const zygosityStates = {
  BAG3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Dilated cardiomyopathy, present in most carriers older than 40 years and tending toward heart failure. p.Pro209Leu instead causes a childhood myofibrillar myopathy with cardiomyopathy."
  }
],
  BAP1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Uveal melanoma, mesothelioma, cutaneous melanoma, and clear cell kidney cancer, usually at younger ages. Lifetime risks are not established; family-based figures probably overstate risk for a panel finding."
  }
],
  BARD1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Moderately raises breast cancer risk in women, mainly ER-negative and triple-negative disease. The ovarian link is disputed."
  }
],
  BMPR1A: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Juvenile polyposis: gastrointestinal hamartomatous polyps and increased colorectal cancer risk. Gastric polyposis is generally less extensive than with SMAD4, and it does not carry the SMAD4 telangiectasia risk.",
    "check": "Confirm the report classifies the variant for juvenile polyposis syndrome."
  }
],
  BMPR2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Pulmonary arterial hypertension, its commonest genetic cause. Penetrance in PAH families is about 42% in women and 14% in men; carriers are diagnosed younger and sicker."
  }
],
  BRCA1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "High risk of breast and ovarian cancer and a smaller increase in pancreatic cancer."
  },
  {
    "key": "r1699q",
    "parent": "one",
    "label": "c.5096G>A",
    "guides": [
      "Specific variant c.5096G>A"
    ],
    "meaning": "A reduced-penetrance BRCA1 variant: breast and ovarian cancer risks are well below those of other BRCA1 variants.",
    "risk": {
      "rows": [
        {
          "name": "Breast cancer",
          "women": {
            "risk": {
              "text": "20%",
              "line": "by age 70 years · carrier families",
              "sources": [
                "zsMoghadasi2018"
              ]
            },
            "baseline": {
              "text": "7.62%",
              "line": "by age 70 years · general population",
              "sources": [
                "rf-seer-explorer-risk-from-birth-2021-2023"
              ]
            },
            "ratio": "about 2.6×"
          },
          "men": {
            "risk": null,
            "baseline": null,
            "ratio": null
          }
        },
        {
          "name": "Ovarian, fallopian tube or peritoneal cancer",
          "women": {
            "risk": {
              "text": "6%",
              "line": "by age 70 years · carrier families",
              "sources": [
                "zsMoghadasi2018"
              ]
            },
            "baseline": {
              "text": "0.629%",
              "line": "by age 70 years · general population",
              "sources": [
                "rf-seer-explorer-risk-from-birth-2021-2023"
              ]
            },
            "ratio": "about 9.5×"
          },
          "men": "NA"
        }
      ],
      "note": "From 129 carrier families; family-based figures can overstate risk for a panel finding.",
      "below": [],
      "about": [
        {
          "title": "Population and measure",
          "text": "Moghadasi 2018 (ENIGMA) estimated cumulative risks by age 70 years of 20% for breast and 6% for ovarian cancer by modified segregation analysis in 129 families, against about 72% and 44% by age 80 years for other BRCA1 variants. An earlier analysis of 30 families gave 24% for breast or ovarian cancer combined (Spurdle 2012). Baselines are US risks by age 70 years from SEER. The ovarian baseline is ovary only."
        }
      ]
    }
  }
],
  BRCA2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "High breast cancer risk in women, and raised ovarian, prostate, pancreatic and male breast cancer risk."
  },
  {
    "key": "c9699",
    "parent": "one",
    "label": "c.9699_9702del",
    "risk": "base",
    "guides": [
      "Specific variant c.9699_9702del"
    ],
    "meaning": "A late BRCA2 frameshift thought to carry reduced risk; the figures below are for typical BRCA2 variants and likely overstate it."
  }
],
  BRIP1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Ovarian, fallopian tube, and peritoneal cancer, mostly after age 50 years. A clinically relevant increase in breast cancer risk has not been established."
  }
],
  BTD: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier, about 1 in 120. Carriers have no biotinidase deficiency.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of biotinidase deficiency."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Biotinidase deficiency. Profound deficiency (below 10% of mean normal activity) can cause neurologic, hearing, vision and skin disease; partial deficiency (10–30%) usually causes symptoms only under stress.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  CACNA1C: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Long QT: severe from infancy in Timothy syndrome, usually milder as nonsyndromic LQT8. Brugada and short QT links are disputed, so the exact variant decides the plan.",
    "check": "Confirm the condition the report classified the variant for: Timothy syndrome or long QT."
  }
],
  CACNA1S: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Malignant hyperthermia under volatile anesthetics or succinylcholine with p.Arg1086His or p.Arg174Trp. Certain other arginine changes instead cause hypokalemic periodic paralysis: attacks of flaccid weakness with low potassium.",
    "check": "Confirm which condition the report classifies the variant for."
  }
],
  CALM1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Calmodulinopathy: severe early-onset long QT, catecholaminergic polymorphic ventricular tachycardia (CPVT), or idiopathic ventricular fibrillation, usually in childhood. Milder familial cases occur, so an adult result is not reassuring by itself."
  }
],
  CALM2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Calmodulinopathy: rare, often severe childhood long QT, catecholaminergic polymorphic ventricular tachycardia (CPVT), or idiopathic ventricular fibrillation, mostly de novo. Milder carriers exist, so an adult result is not reassuring by itself."
  }
],
  CALM3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Calmodulinopathy: rare, often severe childhood long QT, catecholaminergic polymorphic ventricular tachycardia (CPVT), or idiopathic ventricular fibrillation, mostly de novo. Milder carriers exist, so an adult result is not reassuring by itself."
  }
],
  CASQ2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "meaning": "Carrier, usually low penetrance, but a minority show CPVT: 17 of 51 evaluated carrier relatives, 33.3%, met CPVT criteria in one series.",
    "check": "A missense variant reported with dominant CPVT, such as p.Lys180Arg, carries more weight than a truncating one.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of recessive CPVT."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Recessive catecholaminergic polymorphic ventricular tachycardia (CPVT): polymorphic or bidirectional ventricular tachycardia with exercise or emotion in a structurally normal heart, nearly always expressed and usually starting in childhood.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  CAV1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Heritable pulmonary arterial hypertension, sometimes in early childhood. Only about 10 affected families or individuals are reported, so penetrance is unknown."
  }
],
  CAV3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Caveolinopathy: a muscle disease ranging from raised CK alone to exercise intolerance, rippling muscles, and mild weakness, often with little functional impact. Heart involvement is uncommon and weakly supported."
  }
],
  CDC73: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hyperparathyroidism-jaw tumor syndrome: primary hyperparathyroidism, with a risk of parathyroid carcinoma."
  }
],
  CDH1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Cancer predisposition mainly of the stomach and, in women, the breast. Gastric risk varies substantially by family history and study population."
  }
],
  CDK4: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial melanoma, clinically identical to CDKN2A melanoma: early onset, atypical nevi, multiple primaries. Only a few dozen families are known, so risk figures are imprecise.",
    "check": "Confirm the variant is activating, almost always at codon 24."
  }
],
  CDKN1B: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Multiple endocrine neoplasia type 4: a rare MEN1-like condition led by primary hyperparathyroidism and pituitary adenomas, with occasional pancreatic neuroendocrine tumors. About 50 affected people are reported; penetrance is unknown."
  }
],
  CDKN2A: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "High risk of cutaneous melanoma, often multiple and early, and substantial pancreatic cancer risk. Smoking raises pancreatic risk further and adds mouth, throat, and lung cancers."
  }
],
  CHEK2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "A truncating variant, most often c.1100delC, roughly doubles to triples breast cancer odds in women and is associated with prostate cancer in men.",
    "check": "Confirm the variant is truncating; the risk table describes those."
  },
  {
    "key": "s428f",
    "parent": "one",
    "label": "c.1283C>T (S428F)",
    "risk": "none",
    "guides": [
      "Specific variant c.1283C>T"
    ],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "A low-risk missense variant, not a truncating one; the standard CHEK2 breast cancer figures do not apply.",
    "noTable": "It was no more common in Ashkenazi Jewish women with breast cancer than in matched controls (Laitman 2022). No absolute risk is published."
  },
  {
    "key": "i157t",
    "parent": "one",
    "label": "c.470T>C (I157T)",
    "risk": "none",
    "guides": [
      "Specific variant c.470T>C"
    ],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "A common missense variant with much smaller breast cancer risk than truncating CHEK2 variants.",
    "noTable": "No absolute risk from a cohort is published; the often-quoted lifetime risk under 20% is not a measured figure (Han 2013 meta-analysis)."
  }
],
  COL3A1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Vascular Ehlers-Danlos syndrome: arteries, colon, and pregnant uterus can rupture without warning, often in young adults and without prior dilation. Null variants run a milder, later course, but none is risk-free."
  }
],
  COL5A1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Classical Ehlers-Danlos syndrome: fragile, stretchy skin, wide atrophic scars, easy bruising, and loose joints. Aortic root dilation is uncommon and mild; arterial dissection or rupture is rare."
  }
],
  COL5A2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Classical Ehlers-Danlos syndrome, often more severe than with COL5A1: fragile, stretchy skin, wide atrophic scars, easy bruising, and loose joints. Aortic root dilation is uncommon and mild.",
    "check": "If the variant is null (loss-of-function), have genetics review it; COL5A2 disease usually comes from missense variants."
  }
],
  CRYAB: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Myofibrillar myopathy, cardiomyopathy, early cataract, or late-onset axonal neuropathy, alone or together, depending on the variant. Evidence is sparse; no gene-specific risk figure exists.",
    "check": "If the variant abolishes the protein, ask genetics whether it causes dominant disease or carrier status only."
  }
],
  CSRP3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy, usually milder and later with one copy. The only penetrance estimate is about 38% in cascade-screened relatives, from fewer than 50 carriers."
  }
],
  DES: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Dilated, restrictive, or arrhythmogenic cardiomyopathy with atrioventricular block, often with slowly progressive skeletal myopathy. Cardiac disease usually starts in the 30s and can precede weakness."
  }
],
  DICER1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Thyroid nodules (goiter in most women by age 40 years), thyroid cancer, usually low stage, and, in women, ovarian sex cord-stromal tumors. The dangerous childhood tumors are past for an adult.",
    "check": "If the report calls the variant mosaic or a hotspot missense, refer to clinical genetics."
  }
],
  DMD: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "Men found on a panel usually have Becker-type muscular dystrophy or a dystrophin cardiomyopathy with little weakness. About 1 in 6 carrier women have weakness; all carry a lifelong dilated cardiomyopathy risk rising with age."
  }
],
  DSC2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Arrhythmogenic cardiomyopathy, an established but uncommon cause. Single-copy penetrance is not established; severe disease from founder variants occurs mainly with two copies."
  }
],
  DSG2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Arrhythmogenic cardiomyopathy, often biventricular, with more left ventricular involvement and heart failure than PKP2 disease. One variant usually causes milder disease than two."
  }
],
  DSP: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Arrhythmogenic cardiomyopathy that more often scars the left ventricle than the right and can flare like myocarditis. Arrhythmia and heart failure risk exceeds PKP2 disease, women are not protected, and right-ventricle criteria miss many cases."
  }
],
  EGFR: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Inherited lung adenocarcinoma, including in never smokers, principally from p.Thr790Met.",
    "check": "Confirm the variant is activating; loss-of-function EGFR variants do not carry this risk."
  }
],
  EMD: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "Emery-Dreifuss muscular dystrophy in men: contractures, slowly progressive weakness, and heart disease from heart block to sudden death. Women rarely have muscle findings; many develop atrial arrhythmia or conduction disease after about age 50 years."
  }
],
  ENG: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary hemorrhagic telangiectasia type 1. ENG has the highest rates of lung and brain arteriovenous malformations, which can be present with only nosebleeds and cause sudden stroke, abscess, or hemorrhage."
  }
],
  EPCAM: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Lynch syndrome: the deletion silences MSH2. Colorectal cancer risk was about 75% by age 70 years in a selected family cohort; endometrial risk was lower and varied with deletion extent.",
    "check": "Confirm a 3′ EPCAM deletion; a deletion directly involving MSH2 follows the MSH2 page."
  }
],
  F11: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Factor XI usually about half of normal, though some missense variants lower it further. Many carriers never bleed; some bleed after surgery, dental work or childbirth, and bleeding history predicts this better than the level."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "none",
    "guides": [
      "Two variants"
    ],
    "noTableTitle": "No risk figures with a baseline",
    "showOtherGenotype": true,
    "meaning": "Severe factor XI deficiency, usually below 15 to 20% of normal. Bleeding after surgery or tooth extraction is common without replacement.",
    "check": "For two different variants, confirm they are on opposite copies before acting.",
    "noTable": "Published figures for severe deficiency come from diagnosed patients without a population comparison. They are under If both copies are affected below."
  }
],
  F2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "noTableTitle": "No risk figures for this result",
    "meaning": "An F2 variant other than the prothrombin variant c.*97G>A.",
    "noTable": "The figures on this page describe the prothrombin variant c.*97G>A. No thrombosis figures are established for other F2 variants."
  },
  {
    "key": "g20210a",
    "parent": "one",
    "default": true,
    "label": "c.*97G>A (G20210A)",
    "risk": "base",
    "guides": [
      "Specific variant c.*97G>A"
    ],
    "meaning": "Roughly triples the odds of a first venous thromboembolism, yet most carriers never have one.",
    "check": "Estrogen-containing contraception is contraindicated."
  },
  {
    "key": "g20210a2",
    "parent": "one",
    "label": "Homozygous c.*97G>A",
    "risk": "none",
    "guides": [
      "Specific variant c.*97G>A"
    ],
    "showOtherGenotype": true,
    "noTableTitle": "No risk figures with a baseline",
    "meaning": "Two copies of the prothrombin variant: higher venous thromboembolism risk than one copy.",
    "noTable": "The figures for two copies are odds ratios and pregnancy estimates. They are under If both copies are affected below."
  }
],
  F5: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "noTableTitle": "No risk figures for this result",
    "meaning": "An F5 variant other than factor V Leiden.",
    "noTable": "The figures on this page describe factor V Leiden. No thrombosis figures are established for other F5 variants."
  },
  {
    "key": "leiden",
    "parent": "one",
    "default": true,
    "label": "Factor V Leiden",
    "risk": "base",
    "guides": [
      "Specific variant c.1601G>A"
    ],
    "meaning": "Raises the odds of a first venous thromboembolism about fourfold, yet most carriers never have one.",
    "check": "Estrogen-containing contraception is contraindicated."
  },
  {
    "key": "leiden2",
    "parent": "one",
    "label": "Homozygous factor V Leiden",
    "risk": "none",
    "guides": [
      "Specific variant c.1601G>A"
    ],
    "showOtherGenotype": true,
    "noTableTitle": "No risk figures with a baseline",
    "meaning": "Two copies of factor V Leiden: much higher venous thromboembolism risk than one copy.",
    "noTable": "The figures for two copies are odds ratios and per-pregnancy rates. They are under If both copies are affected below."
  }
],
  F9: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hemophilia B in every man with a loss-of-function variant. A quarter to a third of carrier women have factor IX below 40 IU/dL; others may bleed with procedures and childbirth.",
    "check": "Confirm the variant is loss-of-function; factor IX Padua is linked to thrombosis instead. A woman with variants on both copies is rare; her risk is closest to the Men column."
  }
],
  FBN1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Marfan syndrome: aortic root enlargement and dissection, lens dislocation, and mitral valve prolapse. Carriers found by population sequencing show aortic dilation far less often than clinic-diagnosed patients."
  }
],
  FH: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary leiomyomatosis and renal cell cancer (HLRCC): skin and uterine leiomyomas and an uncommon, aggressive kidney cancer.",
    "check": "Confirm an HLRCC-type variant; many panel FH results, including p.Lys477dup, are recessive carrier variants without kidney risk."
  }
],
  FHL1: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "X-linked myopathy and a usually hypertrophic cardiomyopathy with arrhythmia and sudden death. Men are typically affected by early adulthood; women are usually unaffected or mildly affected, though arrhythmia and sudden death occur."
  }
],
  FLCN: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Birt-Hogg-Dubé syndrome: lung cysts with frequent spontaneous pneumothorax, benign facial papules, and often multiple, usually slow-growing kidney tumors. Kidney risk is lower in population-detected carriers."
  }
],
  FLNC: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Truncating variants cause a left-dominant dilated or arrhythmogenic cardiomyopathy with high sudden death risk. Missense and in-frame variants cause hypertrophic or restrictive cardiomyopathy or myofibrillar myopathy.",
    "check": "Confirm whether the variant is truncating; the risk table describes truncating variants."
  }
],
  G6PD: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "G6PD deficiency: hemolysis after oxidant drugs, fava beans, or infection, and a falsely low HbA1c. Men are deficient; heterozygous women range from deficient to normal.",
    "check": "In a woman, only a quantitative G6PD activity test shows whether she is deficient."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Two variants in a woman",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "A woman with two variants on opposite X chromosomes is G6PD deficient like an affected man.",
    "check": "For two different variants, confirm they are on opposite X chromosomes, or measure quantitative G6PD activity."
  }
],
  GAA: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier, about 1 in 77 to 100. Carriers do not develop Pompe disease; intermediate enzyme activity does not indicate disease.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of Pompe disease."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Pompe disease. An adult most likely has or will develop the late-onset form: progressive proximal, trunk, and diaphragm weakness leading to wheelchair use, ventilation, and earlier death.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  GCH1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Dopa-responsive dystonia in most women and about half of men, usually from childhood. Low-dose levodopa gives a dramatic, lasting response."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "none",
    "guides": [
      "Two variants"
    ],
    "noTableTitle": "No risk figures with a baseline",
    "showOtherGenotype": true,
    "meaning": "Usually GTP cyclohydrolase I deficiency, an infantile neurometabolic disorder usually found by newborn screening. The one-variant dystonia risk applies as a minimum; an adult needs specialist assessment for an attenuated form.",
    "check": "For two different variants, confirm they are on opposite copies before acting.",
    "noTable": "No absolute risks are published for this result. The detail is under If both copies are affected below."
  }
],
  GDF2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Heritable pulmonary arterial hypertension, and probably a syndrome like hereditary hemorrhagic telangiectasia (HHT) with nosebleeds, telangiectases, and lung arteriovenous malformations. Penetrance is unknown; many heterozygous relatives have no signs."
  }
],
  GLA: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "Fabry disease. Classic variants in men cause childhood pain, then kidney failure, cardiomyopathy, and stroke; later-onset variants such as N215S mainly cause cardiomyopathy. Women are often affected, later and more variably."
  }
],
  GREM1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary mixed polyposis: adenomatous, serrated, hyperplastic, and atypical juvenile colon polyps, with increased colorectal cancer risk of unmeasured size.",
    "check": "Confirm the result is the upstream duplication, most often the 40 kb Ashkenazi Jewish founder duplication."
  }
],
  HAMP: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. Digenic hemochromatosis with HFE C282Y is recognized but needs strict proof of pathogenicity.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of juvenile hemochromatosis."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Juvenile hemochromatosis: iron loads fast, typically from the first to third decades, causing liver fibrosis, hypogonadism, and cardiomyopathy; heart disease is the main cause of death.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  HCN4: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial sinus bradycardia or sick sinus syndrome decades earlier than usual, often with atrial fibrillation and left ventricular noncompaction."
  }
],
  HFE: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. A C282Y heterozygote, about 14% of UK Biobank, has no clinically significant iron overload.",
    "noTable": "If the partner also carries C282Y, each child has a 25% chance of two C282Y copies."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous C282Y, p.Cys282Tyr",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Hereditary hemochromatosis. Most men and about half of women develop raised iron studies; liver disease, liver cancer, and arthropathy follow in a minority, mostly men.",
    "check": "This table is for two C282Y copies only; C282Y with H63D carries low risk."
  }
],
  HJV: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. Iron overload is rare: 15 published single-variant cases, 10 with a variant in another iron gene.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of juvenile hemochromatosis."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Juvenile hemochromatosis: iron loads fast, before age 30 years in most reported patients, often with hypogonadism and cardiomyopathy; heart failure is the main cause of death.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  HMBS: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Acute porphyria: drugs, fasting, alcohol, smoking, or progesterone can trigger attacks of abdominal pain, neuropathy, and hyponatremia. About 0.5 to 1% of population carriers ever have an attack; active disease brings high liver cancer risk."
  }
],
  HNF1A: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "HNF1A-MODY: diabetes from a progressive insulin-secretion defect, usually from adolescence or early adulthood in referred families, far less often in carriers without a family history. It is unusually sensitive to low-dose sulfonylurea."
  }
],
  HNF1B: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "A multisystem disorder led by kidney malformation and slowly progressive kidney disease; diabetes, often early and insulin-requiring, in about 60%, with low magnesium and genital tract malformations in some. Expression varies even within families."
  }
],
  HOXB13: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "A HOXB13 variant other than G84E or X285K.",
    "noTable": "Published prostate cancer figures describe G84E. None are established for other HOXB13 variants."
  },
  {
    "key": "g84e",
    "parent": "one",
    "default": true,
    "label": "c.251G>A (G84E)",
    "risk": "base",
    "guides": [
      "Specific variant c.251G>A"
    ],
    "meaning": "The Northern European founder variant: raises prostate cancer risk about threefold (33% against 12% by age 80 years) and shifts diagnosis earlier. No risk for women is established."
  },
  {
    "key": "x285k",
    "parent": "one",
    "label": "c.853del (X285K)",
    "risk": "none",
    "guides": [
      "Specific variant c.853del"
    ],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "A West African ancestry variant: prostate cancer odds about 2.4 times, and about 5 times for aggressive disease.",
    "noTable": "No absolute risk is published (Darst 2022)."
  }
],
  JUP: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Usually a carrier state for Naxos disease, a recessive arrhythmogenic right ventricular cardiomyopathy (ARVC) with woolly hair and palmoplantar keratoderma; these carriers did not develop significant heart disease. Dominant JUP ARVC is rare.",
    "check": "Confirm which condition the report classifies the variant for, Naxos disease or dominant ARVC."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "none",
    "guides": [],
    "showOtherGenotype": true,
    "noTableTitle": "No risk figures with a baseline",
    "meaning": "Naxos disease: arrhythmogenic right ventricular cardiomyopathy with woolly hair and palmoplantar keratoderma. All 26 homozygous adults in 12 Greek families met criteria; annual sudden death was 2.3%.",
    "check": "For two different variants, confirm they are on opposite copies before acting.",
    "noTable": "The table describes one copy. The detail for two copies is under If both copies are affected below."
  }
],
  KCNE1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "A low-penetrance QT risk, not established long QT syndrome. The clearer risk is drug-induced QT prolongation."
  },
  {
    "key": "d85n",
    "parent": "one",
    "label": "c.253G>A (D85N)",
    "risk": "none",
    "guides": [
      "Reportable low-risk variant c.253G>A"
    ],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "A common QT modifier: it lengthens QT by about 10 ms and raises drug-induced long QT risk, but does not cause long QT syndrome alone.",
    "noTable": "No absolute arrhythmia risk is published (Marjamaa 2009)."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "none",
    "guides": [],
    "showOtherGenotype": true,
    "noTableTitle": "No risk figures with a baseline",
    "meaning": "Jervell and Lange-Nielsen syndrome type 2: congenital sensorineural deafness with QT prolongation, milder than the KCNQ1 form.",
    "check": "For two different variants, confirm they are on opposite copies before acting.",
    "noTable": "No absolute risks with a baseline are published for this result. The detail is under If both copies are affected below."
  }
],
  KCNH2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Long QT syndrome type 2: arrhythmias triggered by sudden noise, emotional arousal, and rest. Risk exceeds LQT1 and is highest in adult women and after childbirth."
  }
],
  KCNJ2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Andersen-Tawil syndrome type 1: ventricular ectopy and tachycardia with prominent U waves, episodic weakness, and subtle facial and limb features, any of which may be absent.",
    "check": "Confirm the variant is loss-of-function; rare gain-of-function variants cause short QT syndrome instead."
  }
],
  KCNQ1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Long QT syndrome type 1: arrhythmias triggered mainly by exertion, swimming, and emotional stress. Risk follows the QTc and syncope history.",
    "check": "Confirm the report classifies the variant for long QT syndrome; the table does not apply otherwise."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "none",
    "guides": [],
    "showOtherGenotype": true,
    "noTableTitle": "No risk figures with a baseline",
    "meaning": "Can cause severe recessive long QT syndrome, often with congenital hearing loss (Jervell and Lange-Nielsen syndrome); normal hearing does not exclude it.",
    "check": "Confirm both variants are disease-causing and on opposite copies.",
    "noTable": "No absolute risks with a baseline are published for this result. The detail is under If both copies are affected below."
  }
],
  KIT: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Primary familial GIST: usually multiple GISTs from early or mid adulthood, often with skin hyperpigmentation, dysphagia, and sometimes mastocytosis.",
    "check": "Confirm the variant is activating; a KIT variant reported for piebaldism carries no GIST risk."
  }
],
  LAMP2: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "Danon disease, a severe, highly penetrant cardiomyopathy. Men develop massive hypertrophy with pre-excitation in childhood or adolescence; women develop cardiomyopathy one to two decades later, with a similar eventual rate of death or transplant."
  }
],
  LDLR: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial hypercholesterolemia: high LDL cholesterol from childhood and premature coronary disease. Risk varies with the variant and cumulative LDL-C exposure.",
    "check": "Confirm the report calls the variant FH-causing."
  }
],
  LDLRAP1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. LDL cholesterol is normal: 141 against 137 mg/dL in noncarriers in Sardinia.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of autosomal recessive hypercholesterolemia."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Autosomal recessive hypercholesterolemia, a form of homozygous FH: untreated LDL cholesterol usually above 400 mg/dL, with early coronary and aortic valve disease.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  LMNA: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Cardiomyopathy in which conduction disease, atrial arrhythmia, and life-threatening ventricular arrhythmia often precede heart failure. Penetrance is high and onset often in the 30s; some variants instead cause lipodystrophy or muscular dystrophy.",
    "check": "Confirm the condition the report classifies the variant for; the table describes cardiomyopathy families."
  }
],
  LZTR1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Most variants predispose to schwannomatosis, benign nerve sheath tumors that can cause chronic pain: well under 1% lifetime without personal or family history, 40 to 50% in families with schwannomatosis.",
    "check": "Confirm the condition the variant is classified for; a minority cause dominant Noonan syndrome."
  }
],
  MAX: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Pheochromocytoma, often bilateral, and less often paraganglioma. Tumors usually appear in the 30s, secrete norepinephrine, and arise mainly after paternal transmission.",
    "check": "Ask which parent transmitted it; tumors arise mainly after paternal transmission, and the table does not separate parent of origin."
  }
],
  MEFV: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. A minority, particularly with p.Met694Val, have milder symptoms or raised inflammatory markers.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of familial Mediterranean fever."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Familial Mediterranean fever: recurrent fever and serositis and, if uncontrolled, renal AA amyloidosis. Penetrance depends on genotype: close to 100% lifetime with two p.Met694Val copies, 13.5% with p.Met694Val and p.Glu148Gln.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  MEN1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Multiple endocrine neoplasia type 1: nearly all carriers develop primary hyperparathyroidism, and many develop pancreatic or duodenal neuroendocrine tumors and pituitary adenomas. Metastatic neuroendocrine tumors are the main cause of early death."
  }
],
  MET: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary papillary renal carcinoma: many small, slow-growing type 1 papillary kidney cancers in both kidneys, with high penetrance by old age in the families studied.",
    "check": "Confirm the variant is an activating missense variant; truncating MET variants are not expected to cause it."
  }
],
  MITF: [
  {
    "key": "one",
    "label": "Heterozygous",
    "report": "c.952G>A (E318K)",
    "risk": "base",
    "guides": [
      "Specific variant c.952G>A"
    ],
    "meaning": "A moderate-risk melanoma allele that roughly doubles to triples melanoma odds and is linked to multiple primary melanomas.",
    "check": "Loss-of-function MITF variants cause Waardenburg syndrome instead; confirm the report names E318K."
  }
],
  MLH1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Lynch syndrome: colorectal cancer risk is 48 to 56% by age 75 years despite colonoscopy, and endometrial risk is 37%. Gastric, small bowel, ovarian, and urinary tract cancers are less common."
  }
],
  MSH2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Lynch syndrome with a broad spectrum. By age 75 years, colorectal risk is 42.6% in women and 55.8% in men, and endometrial risk 44.1%; urinary tract, ovarian, prostate, and brain tumors also matter."
  }
],
  MSH3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. One copy does not cause MSH3 polyposis. A 2026 study found single loss-of-function variants more often in people with colorectal cancer or many polyps, without a lifetime-risk estimate.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of MSH3 polyposis."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Recessive MSH3 adenomatous polyposis with colorectal and duodenal adenomas. Too few people are described to quantify cancer risk.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  MSH6: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Lynch syndrome weighted to the endometrium. By age 75 years, endometrial cancer risk is 45.7%, and colorectal risk is 17.3% in women and 16.4% in men."
  }
],
  MUTYH: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "meaning": "Carrier, found in about 1 to 2% of European-ancestry people. Modeled colorectal cancer risk by age 70 years is 7.2% in men and 5.6% in women; ClinGen rates the dominant association Disputed.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of MUTYH-associated polyposis."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "MUTYH-associated polyposis, with high colorectal cancer risk even when few polyps are present.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  MYBPC3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy, of which MYBPC3 is a major cause. Some carriers never develop hypertrophy, and a normal examination does not end risk because expression can appear later in life."
  }
],
  MYH11: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Heritable thoracic aortic aneurysm and dissection, sometimes with patent ductus arteriosus; type A dissection can occur below 5.0 cm. Penetrance is incomplete and risk data are very limited.",
    "check": "Confirm the variant is classified for aortic disease; some MYH11 variants instead mark recessive visceral myopathy."
  }
],
  MYH7: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic or dilated cardiomyopathy; some variants also cause skeletal muscle disease. The specific variant, family history, and cardiac findings determine which pathway applies."
  }
],
  MYL2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy with widely varying penetrance; MYL2 variants are found in about 1% of patients with hypertrophic cardiomyopathy.",
    "check": "Confirm the condition the variant is classified for; some cause infantile disease only with two copies."
  }
],
  MYL3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy, with lower penetrance in relatives than the commonest HCM genes.",
    "check": "Confirm the variant is classified for HCM; biallelic loss-of-function variants cause a different, recessive cardiomyopathy."
  }
],
  MYLK: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Thoracic aortic disease, usually type A dissection after age 40 years with little or no prior enlargement. Penetrance is incomplete."
  }
],
  NF1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Neurofibromatosis 1, near fully penetrant but very variable. The adult threats are malignant nerve sheath tumors in plexiform neurofibromas and breast cancer in women from age 30 years.",
    "check": "In an adult without café au lait macules, freckling or neurofibromas, confirm the result with clinical genetics."
  }
],
  NF2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "NF2-related schwannomatosis: bilateral vestibular schwannomas with progressive hearing loss in nearly all carriers, usually from 18 to 24 years, plus meningiomas and spinal tumors.",
    "check": "A variant at low allele fraction suggests mosaicism; review with clinical genetics before applying these risks."
  }
],
  NTHL1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. A single variant does not raise colorectal cancer risk enough to change screening; a small breast cancer increase has been reported.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of NTHL1 tumor syndrome."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "NTHL1 tumor syndrome: colorectal polyposis and raised cancer risk across several organs, especially colorectal and breast. Risk estimates come from small cohorts.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  OTC: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "OTC deficiency: ammonia can rise dangerously with illness, fasting, a large protein load, surgery, childbirth, or drugs such as valproate. A well adult can still have a fatal hyperammonemic crisis at any age."
  }
],
  PALB2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises breast cancer risk in women and men, and ovarian and pancreatic cancer risk.",
    "check": "Confirm the reported variant is loss-of-function; the risk table describes those variants."
  }
],
  PCSK9: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial hypercholesterolemia: raised LDL cholesterol and premature coronary risk.",
    "check": "Confirm the variant is FH-causing gain-of-function; loss-of-function variants lower LDL cholesterol and coronary risk."
  }
],
  PDGFRA: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "PDGFRA-mutant syndrome: gastric gastrointestinal stromal tumors (GISTs), inflammatory fibroid polyps, and other benign gut tumors, with incomplete penetrance. Only a handful of families are published.",
    "check": "Confirm the variant is activating; this syndrome applies only to those."
  }
],
  PKP2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Arrhythmogenic right ventricular cardiomyopathy, with ventricular arrhythmias and sudden death from the teens to middle age. Penetrance is high in affected families, low in carriers found by population sequencing."
  }
],
  PLN: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Arrhythmogenic and dilated cardiomyopathy with malignant ventricular arrhythmias and heart failure, from adolescence into old age.",
    "check": "The risks describe p.Arg14del; for any other PLN variant they are not established."
  }
],
  PMS2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Lynch syndrome with lower, later risks than other Lynch genes. By age 75 years, colorectal risk is 8.5% in women and 32.8% in men, and endometrial risk 21.2%, with wide uncertainty."
  }
],
  POLD1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Polymerase proofreading-associated polyposis: raised colorectal polyp, colorectal cancer, and endometrial cancer risk. Estimates come from small selected families.",
    "check": "Confirm the variant is reported as PPAP-causing; other POLD1 variant types cause different conditions."
  }
],
  POLE: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Polymerase proofreading-associated polyposis: raised colorectal polyp and cancer risk. Duodenal, endometrial, and other tumors are reported, with less certain risks.",
    "check": "Confirm the variant is reported as PPAP-causing; the risks depend on the exact variant."
  }
],
  POT1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises the risk of melanoma, often multiple, and of rarer cancers including cardiac angiosarcoma, chronic lymphocytic leukemia, and glioma. Risks are modest and probably inflated by ascertainment."
  }
],
  PRKAG2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "PRKAG2 cardiac syndrome, a glycogen storage disease that mimics but is not sarcomeric HCM. The dangers are conduction disease needing a pacemaker, pre-excitation, atrial fibrillation, heart failure, and sudden death."
  }
],
  PRKAR1A: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Carney complex, with penetrance above 95% by age 50 years. Cardiac myxoma, which can embolize, obstruct, and recur, is the main danger."
  }
],
  PRKG1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Thoracic aortic disease with type A and type B dissections from the late teens, often before the aorta enlarges.",
    "check": "The risks describe p.Arg177Gln only; other PRKG1 variants are not established causes."
  }
],
  PROC: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Protein C deficiency, a high-risk thrombophilia that raises the odds of a first venous thromboembolism about 7.5-fold."
  }
],
  PROS1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Protein S deficiency, a high-risk thrombophilia that raises the odds of a first venous thromboembolism about fivefold."
  }
],
  PTCH1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Gorlin syndrome: multiple basal cell carcinomas in most carriers by age 50 years and jaw keratocysts from the teens. Life expectancy is near normal; radiation multiplies skin cancers."
  }
],
  PTEN: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "PTEN hamartoma tumor syndrome: raised breast, endometrial, thyroid, kidney, colorectal, and melanoma risk. Referral cohorts may overestimate risk for people found through population testing."
  }
],
  RAD51C: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises ovarian and fallopian tube cancer risk, mostly after age 50 years, and moderately raises breast cancer risk, mainly ER-negative and triple-negative."
  }
],
  RAD51D: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises ovarian and fallopian tube cancer risk, mostly after age 50 years, and moderately raises breast cancer risk, mainly ER-negative and triple-negative."
  }
],
  RB1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Heritable retinoblastoma. For an adult survivor the issue is second cancers, about one in three within 50 years, highest after radiotherapy.",
    "check": "The table describes retinoblastoma survivors, nearly 90% irradiated; risk is likely lower without radiotherapy."
  }
],
  RBM20: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Aggressive, arrhythmogenic dilated cardiomyopathy that starts young and is more severe in men. Ventricular arrhythmia can occur before LVEF falls to 35%.",
    "check": "The risks describe missense variants in the exon 9 and exon 11 hotspots."
  }
],
  RET: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "MEN2: medullary thyroid carcinoma in nearly every carrier, plus pheochromocytoma and, in MEN2A, hyperparathyroidism. The codon sets the American Thyroid Association risk category.",
    "check": "Confirm the variant is activating and note its codon."
  }
],
  RPE65: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "meaning": "Carrier, with no expected retinal disease. The exception, p.Asp477Gly, causes dominant adult-onset night blindness and central vision loss, with incomplete penetrance.",
    "check": "If the variant is p.Asp477Gly, this is dominant retinal disease, not a carrier result.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of RPE65 retinal dystrophy."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "RPE65 retinal dystrophy: night blindness from infancy or childhood, usually reaching legal blindness by early adulthood.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  RYR1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Malignant hyperthermia susceptibility: a potentially fatal crisis with volatile anesthetics or succinylcholine.",
    "check": "Confirm the variant is classified as MH-causative; the risk table describes those variants."
  }
],
  RYR2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Catecholaminergic polymorphic ventricular tachycardia: normal resting ECG and echocardiogram, with exercise- or emotion-triggered ventricular tachycardia that can cause syncope or sudden death.",
    "check": "Loss-of-function variants cause calcium release deficiency syndrome instead, where the exercise test is usually normal."
  }
],
  SCN5A: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Gain-of-function variants cause long QT syndrome type 3, with events at rest and in sleep. Loss-of-function variants cause Brugada syndrome, conduction disease, sinus node dysfunction, and dilated cardiomyopathy.",
    "check": "Confirm gain- or loss-of-function first; the two need opposite drug precautions."
  }
],
  SDHA: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises paraganglioma, pheochromocytoma, gastrointestinal stromal tumor, and renal cancer risk, with the lowest penetrance of the succinate dehydrogenase genes. Most carriers never develop a tumor."
  }
],
  SDHAF2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Paragangliomas, mostly multiple and in the head and neck, rarely secreting catecholamines. Tumors arise almost only after paternal transmission; data come from very few families.",
    "check": "Establish which parent passed the variant on."
  }
],
  SDHB: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Paragangliomas and pheochromocytomas with the highest metastatic risk of the SDH genes. About a quarter of carriers found through family testing develop a tumor by age 60 years. Renal cancer also occurs."
  }
],
  SDHC: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Paragangliomas, mostly in the head and neck, with low metastatic risk. Penetrance is poorly defined, about a quarter by age 60 years."
  }
],
  SDHD: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Paragangliomas, mostly in the head and neck and often multiple, when inherited from the father. Inherited from the mother, it rarely causes tumors.",
    "check": "Establish which parent passed the variant on; it decides the plan."
  }
],
  SERPINA1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. PI*MZ (2 to 4% of European ancestry) is not alpha-1 antitrypsin deficiency but raises COPD and cirrhosis risk, sharply with alcohol misuse or fatty liver disease.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of AATD.",
    "check": "Note the allele: this describes PI*MZ; the S allele shows at most a borderline liver link."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Two severe deficiency alleles, most often PI*ZZ",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Alpha-1 antitrypsin deficiency: emphysema from mid-adulthood, strongly driven by smoking, and liver fibrosis that rises after age 50 years.",
    "check": "Confirm both alleles are severe and on opposite copies; the table uses PI*ZZ data; PI*SZ carries lower lung risk."
  }
],
  SERPINC1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Antithrombin deficiency, one of the most severe inherited thrombophilias, raising the odds of a first venous thromboembolism about 16-fold. Heparin-binding-site variants carry lower risk."
  }
],
  SGCD: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier, with no expected muscle disease. Evidence that one variant causes dilated cardiomyopathy is weak; a cardiomyopathy should not be attributed to it.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of delta-sarcoglycanopathy."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Delta-sarcoglycanopathy, LGMD R6: a usually severe muscular dystrophy starting in childhood, often ending independent walking in the early teens. Heart and breathing involvement can be silent.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  SLC40A1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loss-of-function variants cause ferroportin disease: high ferritin with normal or low transferrin saturation. Gain-of-function variants cause hemochromatosis that behaves like HFE hemochromatosis.",
    "check": "Confirm loss- or gain-of-function; standard phlebotomy causes anemia in ferroportin disease."
  }
],
  SMAD3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loeys-Dietz syndrome type 3: aortic root aneurysm and dissection, often at mildly enlarged diameters, arterial aneurysms, and early osteoarthritis. About half of carriers have an aortic event by age 54 years."
  }
],
  SMAD4: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Juvenile polyposis with raised colorectal and gastric cancer risk, overlapping with hereditary hemorrhagic telangiectasia; vascular malformations and thoracic aortic disease can be silent.",
    "check": "Confirm the variant is the juvenile polyposis type; specific variants cause Myhre syndrome instead."
  }
],
  SMAD9: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Heritable pulmonary arterial hypertension, an uncommon cause reported in roughly 15 to 25 patients, with unknown but incomplete penetrance."
  }
],
  SMARCA4: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Women carry a high risk of small cell carcinoma of the ovary, hypercalcemic type, an aggressive cancer of young women. Infants who inherit it risk rhabdoid tumors; men carry no ovarian risk.",
    "check": "Confirm the variant is truncating or a deletion; the risk applies to those."
  }
],
  SMARCB1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Depending on the variant, rhabdoid tumor predisposition in infants or schwannomatosis: multiple painful benign nerve sheath tumors, usually after age 30 years, with a small risk of meningioma and malignant change."
  }
],
  STK11: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Peutz-Jeghers syndrome: hamartomatous polyps that can cause intussusception, and high breast, gastrointestinal, and pancreatic cancer risks, probably overestimated by how families were found."
  }
],
  TCAP: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [
      "One variant"
    ],
    "meaning": "Carrier of limb-girdle muscular dystrophy R7, the more common panel result; no muscular dystrophy. TCAP is an uncommon cause of cardiomyopathy: ClinGen rates dilated Limited and hypertrophic Disputed.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of LGMD R7."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [],
    "meaning": "Limb-girdle muscular dystrophy R7: slowly progressive weakness of the hips, thighs, and lower legs, usually beginning in childhood or adolescence.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  TFR2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier; no guideline recommends monitoring or treatment. Disease from one TFR2 variant plus HFE C282Y is recognized but needs strict proof of pathogenicity.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of TFR2 hemochromatosis.",
    "check": "If the panel also reports HFE C282Y, do not treat this as a simple carrier result."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "TFR2 hemochromatosis: iron loads earlier than in HFE disease, usually evident in the third decade, with severity between HFE and juvenile disease.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  TGFB2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loeys-Dietz syndrome type 4: aortic root aneurysm and dissection, with intracranial aneurysm and mitral valve disease in some families. The aortic course appears milder than with TGFBR1, TGFBR2, or SMAD3.",
    "check": "Confirm the variant is loss-of-function; the risks describe those variants."
  }
],
  TGFB3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loeys-Dietz syndrome type 5, with a later, less penetrant aortic course than other LDS genes. About 3 in 10 carriers have aortic dilation; dissections occur mostly in mid-adult life."
  }
],
  TGFBR1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loeys-Dietz syndrome type 1: aortic root aneurysm and dissection at younger ages than in Marfan syndrome, with aneurysm and tortuosity throughout the arterial tree.",
    "check": "Confirm a kinase-domain missense variant; loss-of-function variants cause multiple self-healing squamous epithelioma instead."
  }
],
  TGFBR2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Loeys-Dietz syndrome type 2: aortic root aneurysm and dissection at smaller diameters and younger ages than in Marfan syndrome, more type B dissection, and arterial aneurysm and tortuosity."
  }
],
  TMEM127: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Pheochromocytoma, sometimes bilateral, usually in mid-adulthood and rarely metastatic. Paraganglioma and kidney cancer are reported but uncommon."
  }
],
  TMEM43: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "p.Ser358Leu causes fully penetrant arrhythmogenic right ventricular cardiomyopathy type 5, often with left ventricular involvement. Sudden death can be the first event and causes most deaths in men.",
    "check": "Confirm the variant is p.Ser358Leu; other TMEM43 variants have little supporting evidence."
  }
],
  TNNC1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic or dilated cardiomyopathy. TNNC1 is a rare cause with no published penetrance."
  }
],
  TNNI3: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy, less often restrictive or dilated. About 60% of carrier relatives in HCM families have HCM when screened; population-found carriers have low penetrance."
  }
],
  TNNT2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic or dilated cardiomyopathy. About half of carrier relatives in affected families develop HCM within 15 years of a normal first screen; population-found carriers have much lower penetrance."
  }
],
  TP53: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Li-Fraumeni syndrome: high risk of several cancers, beginning in childhood.",
    "check": "A variant found only in blood may be acquired, not inherited; confirm it is constitutional."
  },
  {
    "key": "g334r",
    "parent": "one",
    "label": "c.1000G>C (G334R)",
    "risk": "none",
    "guides": [
      "Specific variant c.1000G>C"
    ],
    "noTableTitle": "No risk figures for this variant",
    "meaning": "Low-penetrance Li-Fraumeni syndrome with later-onset cancers, found mainly in Ashkenazi Jewish families.",
    "noTable": "Published penetrance appears only in a figure, with no stated numbers (Powers 2020).",
    "check": "Lower penetrance alone does not justify reducing Li-Fraumeni surveillance (AACR 2025)."
  },
  {
    "key": "r181h",
    "parent": "one",
    "label": "c.542G>A (R181H)",
    "guides": [
      "Specific variant c.542G>A"
    ],
    "meaning": "Reduced-penetrance Li-Fraumeni syndrome: 5% of Swedish carriers had cancer by age 30 years, against 15 to 20% for the Brazilian founder variant.",
    "risk": {
      "rows": [
        {
          "name": "Any cancer",
          "women": {
            "risk": {
              "text": "5%",
              "line": "by age 30 years · carrier families · sexes pooled",
              "sources": [
                "zsSunZhang2025"
              ]
            },
            "baseline": {
              "text": "0.93%",
              "line": "by age 30 years · general population",
              "sources": [
                "rf-seer-explorer-risk-from-birth-2021-2023"
              ]
            },
            "ratio": "about 5.4×"
          },
          "men": {
            "risk": {
              "text": "5%",
              "line": "by age 30 years · carrier families · sexes pooled",
              "sources": [
                "zsSunZhang2025"
              ]
            },
            "baseline": {
              "text": "0.83%",
              "line": "by age 30 years · general population",
              "sources": [
                "rf-seer-explorer-risk-from-birth-2021-2023"
              ]
            },
            "ratio": "about 6.0×"
          }
        }
      ],
      "note": "From 43 carriers in 19 Swedish families. No figure beyond age 30 years is published.",
      "below": [],
      "about": [
        {
          "title": "Population and measure",
          "text": "Sun Zhang 2025 reported that 5% of 43 R181H carriers in the Swedish national TP53 database had cancer by age 30 years, against 15 to 20% for the Brazilian founder variant. In unselected biobanks, 3 of 9 carriers had ever had cancer (de Andrade 2024). Baselines are US all-site cancer risk by age 30 years from SEER."
        }
      ]
    },
    "check": "Lower penetrance alone does not justify reducing Li-Fraumeni surveillance (AACR 2025)."
  }
],
  TPM1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy or, for other variants, dilated cardiomyopathy, sometimes from childhood. Penetrance in relatives resembles the commonest HCM genes but is imprecise."
  }
],
  TRDN: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier. Carriers normally have no phenotype, and no dominant TRDN disease is established.",
    "noTable": "If the partner is also a carrier, each child has a 25% chance of triadin knockout syndrome."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two loss-of-function variants",
    "risk": "base",
    "guides": [
      "Two variants"
    ],
    "meaning": "Triadin knockout syndrome: exercise-triggered cardiac arrest or syncope, usually in early childhood, with precordial T-wave inversion and frequent breakthrough events despite treatment.",
    "check": "Confirm both variants are loss-of-function and, if different, on opposite copies before acting."
  }
],
  TSC1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Tuberous sclerosis complex, established even without features. Adult threats are renal angiomyolipoma with bleeding and kidney disease, and lymphangioleiomyomatosis in women; on average milder than TSC2."
  }
],
  TSC2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Tuberous sclerosis complex, established even without features. Adult threats are renal angiomyolipoma with bleeding and kidney disease, and lymphangioleiomyomatosis in women; on average more severe than TSC1.",
    "check": "If the report shows a deletion extending into PKD1, expect early severe polycystic kidney disease."
  }
],
  TTN: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises the risk of dilated cardiomyopathy, heart failure, and rhythm problems, which may develop later in life even after a normal baseline heart assessment.",
    "check": "Confirm the variant is a DCM-associated truncating variant; the risk table describes those."
  }
],
  TTR: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary transthyretin amyloidosis of the heart, nerves, eyes, and kidneys, with onset from the third to ninth decade by variant. V122I (p.Val142Ile) mainly causes heart failure after age 60 years; penetrance is incomplete.",
    "check": "The table rows describe V122I (p.Val142Ile); V30M and other variants differ."
  }
],
  VCL: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Raises dilated cardiomyopathy risk, mostly with childhood onset, but penetrance is low and one variant is often insufficient alone.",
    "check": "The evidence is for loss-of-function variants; for missense variants it is weak."
  }
],
  VHL: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Von Hippel-Lindau disease: retinal and central nervous system hemangioblastomas, clear cell kidney cancer, and pheochromocytoma. Nearly all carriers are affected, often before age 30 years."
  }
],
  WT1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "WT1 disorder: steroid-resistant kidney disease, Wilms tumor, and disorders of testicular development from childhood. In adults the issues are kidney function, gonadal tumor risk with 46,XY gonadal dysgenesis, and pregnancy.",
    "check": "Confirm the variant type: missense and intron 9 splice variants drive kidney disease; truncating variants mainly Wilms tumor."
  }
],
  ABCD1: [
  {
    "key": "one",
    "label": "Hemizygous in men, heterozygous in women",
    "risk": "base",
    "check": "A woman with variants on both copies is rare; her risk is closest to the Men column.",
    "guides": [
      "One variant"
    ],
    "meaning": "X-linked adrenoleukodystrophy. Men face near-universal spinal cord disease, adrenal failure, and cerebral disease treatable only if caught early on MRI; most women develop milder spinal cord disease after age 40 years."
  }
],
  ACTA2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Thoracic aortic aneurysm and dissection, often presenting as a dissection without a known aneurysm. Some variants also cause early coronary disease and stroke."
  }
],
  ACTC1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hypertrophic cardiomyopathy, often apical. Some variants cause dilated cardiomyopathy or left ventricular noncompaction instead."
  }
],
  ACTN2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Cardiomyopathy that often fits no single type, frequently with early atrial fibrillation or conduction disease."
  }
],
  ACVRL1: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Hereditary hemorrhagic telangiectasia type 2: nosebleeds and vascular malformations, most often in the gut and liver but also in the lungs and brain. It can also cause pulmonary arterial hypertension, sometimes before any other sign."
  }
],
  APC: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial adenomatous polyposis: colorectal cancer is near certain without colectomy, about 70% by age 80 years in attenuated forms. Polyposis care continues after colectomy.",
    "check": "Promoter 1B variants cause gastric polyposis instead; check where the variant lies before planning colectomy."
  },
  {
    "key": "i1307k",
    "parent": "one",
    "label": "c.3920T>A (I1307K)",
    "guides": [
      "Specific variant c.3920T>A"
    ],
    "meaning": "A modest rise in colorectal cancer risk, best established in Ashkenazi Jewish ancestry. It does not cause polyposis.",
    "risk": "none",
    "noTableTitle": "No risk figures for this variant",
    "noTable": "No absolute risk is published. Colorectal neoplasia odds are about 1.5 to 1.9 times those of noncarriers (Gryfe 1999)."
  }
],
  APOB: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Familial hypercholesterolemia: can raise LDL cholesterol and the risk of early coronary disease.",
    "check": "Other APOB variants lower LDL instead; confirm the report calls this variant FH-causing."
  }
],
  ATP7B: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "none",
    "guides": [],
    "meaning": "Carrier, as are about 1 in 90 people. Carriers are not expected to develop Wilson disease and need no copper monitoring.",
    "noTable": "A carrier does not have Wilson disease. If the partner is also a carrier, each child has a 25% chance of Wilson disease.",
    "check": "Unexplained liver or neurologic disease still warrants copper studies; a second variant can be missed."
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "risk": "base",
    "guides": [
      "Two variants, one on each copy"
    ],
    "meaning": "Wilson disease: copper builds up in the liver, brain and eyes. Lifelong copper-lowering treatment prevents or reverses most of the damage.",
    "check": "For two different variants, confirm they are on opposite copies before acting."
  }
],
  AXIN2: [
  {
    "key": "one",
    "label": "Heterozygous",
    "risk": "base",
    "guides": [
      "One variant"
    ],
    "meaning": "Oligodontia-colorectal cancer syndrome: missing permanent teeth in many carriers, and colorectal polyps or cancer. Cancer risk by age is not established.",
    "check": "Confirm the report classifies the variant for oligodontia-cancer predisposition."
  }
],
  ATM: [
  {
    "key": "one",
    "label": "Heterozygous",
    "meaning": "Raises breast cancer risk in women, pancreatic cancer risk in both sexes, and likely prostate cancer risk. It is not ataxia-telangiectasia and not a reason to avoid radiotherapy.",
    "check": "In an older or previously treated patient, a variant found only in blood may be acquired, not inherited.",
    "risk": "base",
    "guides": [
      "One variant"
    ]
  },
  {
    "key": "v7271",
    "parent": "one",
    "label": "c.7271T>G",
    "meaning": "Higher breast cancer risk than other ATM variants: about 52% by age 70 years in one small study, with wide uncertainty. Other risks are as for any ATM variant.",
    "risk": "base",
    "rowOverrides": {
      "Breast cancer": {
        "name": "Breast cancer",
        "women": {
          "risk": {
            "text": "52%",
            "line": "by age 70 years · carrier families",
            "sources": [
              "zsBernstein2006"
            ]
          },
          "baseline": {
            "text": "7.62%",
            "line": "by age 70 years · general population",
            "sources": [
              "zsSeer"
            ]
          },
          "ratio": "about 6.8×"
        },
        "men": {
          "risk": null,
          "baseline": null,
          "ratio": null
        }
      }
    },
    "about": {
      "title": "c.7271T>G",
      "text": "The breast cancer figure is the cumulative risk to age 70 years (95% CI 28–80%) from the Breast Cancer Family Registry, where 7 of 3,743 women with breast cancer and none of 1,268 controls carried c.7271T>G (Bernstein 2006). A family-based study gives 60% by age 80 years for c.7271T>G and truncating variants pooled (Goldgar 2011). The baseline is US breast cancer by age 70 years from SEER."
    },
    "guides": [
      "Specific variant c.7271T>G",
      "One variant"
    ]
  },
  {
    "key": "two",
    "label": "Biallelic",
    "report": "Homozygous, or two variants",
    "meaning": "Ataxia-telangiectasia, with high cancer risk and marked sensitivity to ionizing radiation. An adult without symptoms most likely has the milder variant form.",
    "check": "For two different variants, confirm they are on opposite copies before acting.",
    "risk": {
      "rows": [
        {
          "name": "Cancer, mostly leukemia or lymphoma",
          "women": {
            "risk": {
              "text": "26.2%",
              "line": "by age 30 years · classic A-T, diagnosed in childhood · sexes pooled",
              "sources": [
                "zsMagnarelli2024"
              ]
            },
            "baseline": {
              "text": "0.93%",
              "line": "by age 30 years · general population",
              "sources": [
                "zsSeer"
              ]
            },
            "ratio": "about 28×"
          },
          "men": {
            "risk": {
              "text": "26.2%",
              "line": "by age 30 years · classic A-T, diagnosed in childhood · sexes pooled",
              "sources": [
                "zsMagnarelli2024"
              ]
            },
            "baseline": {
              "text": "0.83%",
              "line": "by age 30 years · general population",
              "sources": [
                "zsSeer"
              ]
            },
            "ratio": "about 32×"
          }
        }
      ],
      "note": "From classic A-T diagnosed in childhood. Adults with the milder form, which screening usually finds, likely face a lower risk.",
      "below": [],
      "about": [
        {
          "title": "Population and measure",
          "text": "Cancer is the cumulative incidence of any primary cancer by age 30 years in 508 people with A-T at the Johns Hopkins clinical center (95% CI 20.7–31.8%); about three-quarters were leukemias or lymphomas, and no site-specific cumulative figures are published, so this one composite row is shown. The cohort is mostly classic A-T diagnosed in childhood. In classic A-T, median survival is about 25 years (prospective Johns Hopkins cohort, Crawford 2006). Both classic and variant A-T are highly sensitive to ionizing radiation."
        }
      ]
    },
    "guides": [
      "Two variants, one on each copy"
    ]
  }
],
};
