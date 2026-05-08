---
created: '2026-05-08T08:21:33.495163Z'
description: 5-Methyltetrahydrofolate (5-MTHF) is the biologically active, circulating
  form of folate (vitamin B9) that serves as the primary methyl donor for remethylation
  of homocysteine to methionine via the methionine synthase reaction. It is essential
  for DNA synthesis, neurotransmitter production, epigenetic regulation, and one-carbon
  metabolism. 5-MTHF is particularly critical for individuals with MTHFR C677T polymorphisms
  who have impaired conversion of folic acid to its active form.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/methylfolate/
slug: methylfolate
tags:
- metabolite
- folate
- vitamin_b9
- methylation
- one_carbon_metabolism
- homocysteine
- epigenetics
templateEngineOverride: njk
title: Methylfolate
type: metabolite
updated: '2026-05-08T08:21:33.495163Z'
---

{% raw %}
<h1>Methylfolate</h1>
<h2>Overview</h2>
<p>5-Methyltetrahydrofolate (5-MTHF, methylfolate) is the predominant circulating form of folate in human plasma, accounting for approximately 80-90% of total plasma folate. It is the biologically active form that directly participates in one-carbon transfer reactions without requiring enzymatic activation. Unlike synthetic folic acid, which must undergo reduction by dihydrofolate reductase (DHFR) and then methylation by MTHFR (methylenetetrahydrofolate reductase) to become 5-MTHF, supplemental methylfolate is immediately available for metabolic use.</p>
<p>The critical clinical significance of methylfolate relates to the MTHFR C677T polymorphism, one of the most common genetic variations in human populations (allele frequency ~35% in Caucasians, up to 50% in some populations). Individuals homozygous for the C677T variant (TT genotype, ~10-15% of Caucasians) have 30-70% reduced MTHFR enzyme activity, leading to decreased 5-MTHF production, elevated homocysteine, impaired methylation, and increased risk for neural tube defects, cardiovascular disease, and neuropsychiatric conditions. These individuals benefit directly from methylfolate supplementation, which bypasses the MTHFR enzymatic bottleneck entirely.</p>
<p>Beyond homocysteine remethylation, methylfolate is essential for three interconnected metabolic processes: (1) purine and pyrimidine synthesis required for DNA replication and repair (via THF-derived one-carbon units), (2) methylation reactions that regulate gene expression through DNA and histone methylation, and (3) neurotransmitter synthesis — the methionine cycle produces SAMe, which is required for the synthesis and metabolism of dopamine, serotonin, and norepinephrine. This neurochemical link explains the emerging evidence for methylfolate as an adjunctive treatment for depression.</p>
<h2>Biosynthesis and the Folate Cycle</h2>
<h3>From Dietary Folate to 5-MTHF</h3>
<p>Dietary folates (polyglutamyl tetrahydrofolates from green vegetables, legumes, liver) are hydrolyzed to monoglutamate forms by folylpolyglutamate carboxypeptidase in the intestinal brush border, absorbed via the proton-coupled folate transporter (PCFT), and released into portal circulation as 5-MTHF. Synthetic folic acid from fortified foods and supplements follows a different path:</p>
<ol>
<li><strong>Folic acid → DHF:</strong> Dihydrofolate reductase (DHFR) reduces folic acid to dihydrofolate (DHF)</li>
<li><strong>DHF → THF:</strong> DHFR reduces DHF to tetrahydrofolate (THF)</li>
<li><strong>THF → 5,10-MTHF:</strong> Serine hydroxymethyltransferase (SHMT) transfers a one-carbon unit from serine to THF, forming 5,10-methylenetetrahydrofolate</li>
<li><strong>5,10-MTHF → 5-MTHF:</strong> MTHFR (FAD-dependent, riboflavin-requiring) reduces 5,10-MTHF to 5-MTHF — this is the step impaired by C677T polymorphism</li>
</ol>
<h3>The Methionine Cycle and Homocysteine Remethylation</h3>
<p>5-MTHF donates its methyl group in a B12-dependent reaction:</p>
<p>5-MTHF + Homocysteine → THF + Methionine (catalyzed by methionine synthase, MTR; requires methylcobalamin)</p>
<p>MTR is maintained in its active form by MTRR (methionine synthase reductase). Methionine is then adenylated by methionine adenosyltransferase (MAT) to form S-adenosylmethionine (SAMe), the universal methyl donor. After donating its methyl group (to DNA, histones, neurotransmitters, phospholipids, etc.), SAMe becomes S-adenosylhomocysteine (SAH), which is hydrolyzed to homocysteine — completing the cycle.</p>
<h3>Folate vs. Folic Acid vs. Methylfolate</h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Food Folate</th>
<th>Folic Acid</th>
<th>5-MTHF (Methylfolate)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Source</td>
<td>Natural foods</td>
<td>Fortified foods, basic supplements</td>
<td>Active-form supplements</td>
</tr>
<tr>
<td>Requires DHFR</td>
<td>No</td>
<td>Yes (rate-limiting)</td>
<td>No</td>
</tr>
<tr>
<td>Requires MTHFR</td>
<td>Yes (partial)</td>
<td>Yes (full)</td>
<td>No</td>
</tr>
<tr>
<td>Unmetabolized folic acid</td>
<td>No</td>
<td>Yes (detectable in plasma)</td>
<td>No</td>
</tr>
<tr>
<td>Masks B12 deficiency</td>
<td>Less likely</td>
<td>Yes</td>
<td>Less likely</td>
</tr>
<tr>
<td>Bioavailability</td>
<td>~50%</td>
<td>~85%</td>
<td>~95%</td>
</tr>
<tr>
<td>Effective in MTHFR C677T TT</td>
<td>Variable</td>
<td>Reduced</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>MTHFR Polymorphisms and Personalized Nutrition</h3>
<p>The MTHFR C677T (rs1801133) variant produces a thermolabile enzyme with reduced activity:</p>
<ul>
<li><strong>CC genotype (wild-type):</strong> Normal MTHFR activity</li>
<li><strong>CT genotype (heterozygous):</strong> ~35% reduced activity</li>
<li><strong>TT genotype (homozygous):</strong> ~70% reduced activity</li>
</ul>
<p>The A1298C (rs1801131) variant also reduces MTHFR activity, and compound heterozygotes (C677T/A1298C) have functional impairment similar to C677T homozygotes. For all these variants, methylfolate supplementation bypasses the enzymatic defect.</p>
<h3>Depression and Neuropsychiatric Health</h3>
<ul>
<li>The methionine cycle produces SAMe, which is required for the synthesis of dopamine, serotonin, and norepinephrine through methylation of their precursors and metabolic intermediates.</li>
<li>Low folate status is one of the most common nutritional deficiencies in depression, with 15-38% of depressed patients showing low folate levels.</li>
<li>A meta-analysis of randomized controlled trials found that methylfolate augmentation of antidepressant therapy significantly improved treatment response compared to antidepressants alone.</li>
<li>L-methylfolate (brand name Deplin) is FDA-approved as a medical food for adjunctive treatment of major depressive disorder at doses of 15 mg/day.</li>
<li>The MTHFR C677T polymorphism is associated with increased risk of depression, schizophrenia, and bipolar disorder in multiple meta-analyses.</li>
</ul>
<h3>Neural Tube Defects and Pregnancy</h3>
<ul>
<li>Periconceptional folic acid supplementation (400 mcg/day) reduces neural tube defect risk by 50-70%. However, women with MTHFR C677T TT genotype may not convert folic acid efficiently to 5-MTHF.</li>
<li>Some evidence suggests methylfolate may be superior to folic acid for preventing neural tube defects in MTHFR-variant mothers, though folic acid remains the standard recommendation.</li>
<li>The MTHFR polymorphism is also associated with increased risk of recurrent miscarriage, preeclampsia, and placental abruption.</li>
</ul>
<h3>Cardiovascular Disease and Homocysteine</h3>
<ul>
<li>Elevated homocysteine (hyperhomocysteinemia) is an independent risk factor for cardiovascular disease, stroke, and venous thromboembolism.</li>
<li>5-MTHF is the primary folate form responsible for homocysteine remethylation. Low 5-MTHF status directly elevates homocysteine.</li>
<li>B-vitamin supplementation (folic acid + B12 + B6) lowers homocysteine by 25-30% but clinical trials show mixed results for cardiovascular event reduction, suggesting homocysteine may be a marker rather than a causal factor.</li>
</ul>
<h3>Cancer</h3>
<ul>
<li>Folate has a dual role in cancer: adequate folate protects against cancer initiation (DNA synthesis and repair), but high folate may promote progression of established tumors.</li>
<li>The MTHFR C677T polymorphism is associated with reduced risk of certain cancers (colorectal, acute lymphoblastic leukemia) but increased risk of others, reflecting the balance between DNA synthesis capacity and methylation status.</li>
</ul>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/supplement/folate/" class="internal-link">Folate</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/s-adenosylmethionine/" class="internal-link">S-Adenosylmethionine</a><br />
CONVERTED_TO::<a href="/entities/labtest/homocysteine/" class="internal-link">Homocysteine</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/s-adenosylmethionine/" class="internal-link">S-Adenosylmethionine</a></p>
<h3>Related Supplements</h3>
<p>RELATED::<a href="/entities/supplement/folate/" class="internal-link">Folate</a><br />
RELATED::<a href="/entities/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a><br />
RELATED::<a href="/entities/supplement/vitamin-b6/" class="internal-link">Vitamin B6</a></p>
<h3>Related Neurotransmitters</h3>
<p>RELATED::<a href="/entities/neurotransmitter/dopamine/" class="internal-link">Dopamine</a><br />
RELATED::<a href="/entities/neurotransmitter/serotonin/" class="internal-link">Serotonin</a><br />
RELATED::<a href="/entities/neurotransmitter/norepinephrine/" class="internal-link">Norepinephrine</a></p>
<h3>Related Conditions</h3>
<p>RELATED::<a href="/entities/condition/mthfr-gene-variants/" class="internal-link">MTHFR Gene Variants</a></p>
<h2>References</h2>
<ul>
<li>Crider KS, Yang TP, Berry RJ, Bailey LB. Folate and DNA methylation: a review of molecular mechanisms and the evidence for folate's role. <em>Adv Nutr.</em> 2012;3(1):21-38 (PMID: 22332098)</li>
<li>Fava M, Mischoulon D. Folate in depression: efficacy, safety, differences in formulations, and clinical issues. <em>J Clin Psychiatry.</em> 2009;70(Suppl 5):12-17 (PMID: 19909688)</li>
<li>Schwahn BC, Rozen R. Methylenetetrahydrofolate reductase polymorphisms: pharmacogenetic effects and cardiovascular disease. <em>Pharmacogenomics.</em> 2001;2(2):137-149 (PMID: 11258196)</li>
<li>Scaglione F, Panzavolta G. Folate, folic acid, 5-methyltetrahydrofolate, 5-MTHF calcium salt, and 5-MTHF glucosamine salt. <em>Eur Rev Med Pharmacol Sci.</em> 2014;18(18):2737-2743 (PMID: 25352663)</li>
<li>Pietz K, Ben-Menachem E, Soderfeldt B, et al. Homocysteine and MTHFR genotypes as biomarkers of cardiovascular disease. <em>Arch Cardiovasc Dis.</em> 2013;106(3):188-195 (PMID: 23567065)</li>
<li>Sarris J, Murphy J, Mischoulon D, et al. Adjunctive nutraceuticals for depression: a systematic review and meta-analyses. <em>Am J Psychiatry.</em> 2016;173(6):575-587 (PMID: 26806873)</li>
</ul>

{% endraw %}