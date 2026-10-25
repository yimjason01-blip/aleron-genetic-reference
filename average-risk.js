// Average-risk standards shown under each guidance row, so a physician can see what the variant changes.
// One standard per screening area, from the current USPSTF recommendation, verified on uspreventiveservicestaskforce.org on 24 October 2026.
// match: which guidance rows get the standard. topic is tested against the row topic; text against the row text, only for rows that group several organs.
const B = 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/';
export const averageRisk = {
 breast: { text: 'Mammogram every 2 years from age 40 to 74; no routine MRI.', source: 'USPSTF 2024', url: B + 'breast-cancer-screening' },
 colorectal: { text: 'Screening from age 45 to 75, such as colonoscopy every 10 years.', source: 'USPSTF 2021', url: B + 'colorectal-cancer-screening' },
 prostate: { text: 'PSA is an individual decision from age 55 to 69, and not recommended from age 70.', source: 'USPSTF 2018, update in progress', url: B + 'prostate-cancer-screening' },
 pancreas: { text: 'Screening is not recommended.', source: 'USPSTF 2019', url: B + 'pancreatic-cancer-screening' },
 ovarian: { text: 'Screening is not recommended.', source: 'USPSTF 2018', url: B + 'ovarian-cancer-screening' },
 skin: { text: 'Evidence is insufficient for or against routine skin exams.', source: 'USPSTF 2023', url: B + 'skin-cancer-screening' },
 thyroid: { text: 'Screening is not recommended.', source: 'USPSTF 2017', url: B + 'thyroid-cancer-screening' },
 lung: { text: 'Low-dose CT every year from age 50 to 80 only with a 20 pack-year smoking history, current or quit within 15 years.', source: 'USPSTF 2021', url: B + 'lung-cancer-screening' },
 cervical: { text: 'Cytology every 3 years from age 21; from age 30, HPV testing every 5 years is an option; stop at 65.', source: 'USPSTF 2018', url: B + 'cervical-cancer-screening' },
 ecg: { text: 'No ECG screening when 10-year cardiovascular risk is under 10%.', source: 'USPSTF 2018', url: B + 'cardiovascular-disease-risk-screening-with-electrocardiography' },
 statin: { text: 'Statin from age 40 to 75 with a risk factor and a 10-year cardiovascular risk of 10% or more.', source: 'USPSTF 2022', url: B + 'statin-use-in-adults-preventive-medication' },
 diabetes: { text: 'Screen from age 35 to 70 with overweight or obesity.', source: 'USPSTF 2021', url: B + 'screening-for-prediabetes-and-type-2-diabetes' }
};
// Which guidance rows carry a standard. A row matches when its topic matches `topic` (or, for rows that group
// several organs, its text matches `group`), its text matches `needs` when given, and its topic does not match `not`.
// `any` matches the text of any row.
export const averageRiskMatch = [
 { key: 'breast', topic: /breast/i, group: /breast|mammogra/i, needs: /mammogra|MRI|screen/i, not: /surgery|risk reduction|after/i },
 { key: 'colorectal', topic: /colon|colorectal|rectal|polyp/i, group: /colon|colorectal/i },
 { key: 'prostate', topic: /prostate/i, group: /prostate|PSA/ },
 { key: 'pancreas', topic: /pancrea/i, group: /pancrea/i },
 { key: 'ovarian', topic: /ovar/i, group: /ovar/i },
 { key: 'skin', any: /full-body skin|total body skin|skin exams? every|skin cancer|melanoma/i, not: /^eye|evaluate/i },
 { key: 'thyroid', topic: /(?<!para)thyroid/i, group: /(?<!para)thyroid/i, needs: /ultrasound|exam|screen/i },
 { key: 'lung', any: /lung cancer|low-dose CT/i },
 { key: 'cervical', topic: /cervi/i, group: /cervical/i },
 { key: 'ecg', topic: /heart|cardiac|rhythm|arrhythm|ECG|QT/i, needs: /ECG|electrocardiogra|echocardiogra|Holter|cardiac MRI|heart MRI/i, not: /treatment|affected|symptom/i },
 { key: 'statin', topic: /cholesterol|lipid|LDL/i, any: /LDL cholesterol|statin/i },
 { key: 'diabetes', topic: /diabet/i, any: /diabetes/i }
];
// Rows that group several organs: match on their text instead of their topic.
export const groupTopics = /no added screening|^other/i;
// Rows that are never screening, so they never carry a standard.
export const skipTopics = /family|care team|genetic counseling|confirm|referral|avoid|pregnan|children/i;
export function averageRiskFor([topic, text]) {
 if (skipTopics.test(topic)) return [];
 const grouped = groupTopics.test(topic);
 return averageRiskMatch.filter(m => {
  if (m.not && m.not.test(topic)) return false;
  const hit = (m.topic && !grouped && m.topic.test(topic)) || (m.group && grouped && m.group.test(text)) || (m.any && m.any.test(text));
  return hit && (!m.needs || m.needs.test(text) || grouped);
 }).map(m => m.key);
}
