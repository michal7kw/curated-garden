---
created: '2026-04-30T06:31:02.891822Z'
description: Urea is the primary end product of nitrogen metabolism in mammals, synthesized
  by the urea cycle (ornithine cycle) in the liver. It converts highly toxic ammonia
  — generated from amino acid catabolism and intestinal bacterial metabolism — into
  a water-soluble, non-toxic compound that is excreted by the kidneys. Blood urea
  nitrogen (BUN) is one of the most commonly measured clinical biomarkers, used alongside
  creatinine to assess kidney function, hydration status, protein metabolism, and
  gastrointestinal bleeding.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/urea/
slug: urea
tags:
- metabolite
- nitrogen
- urea_cycle
- kidney_function
- liver
- biomarker
templateEngineOverride: njk
title: Urea
type: metabolite
updated: '2026-04-30T06:31:02.891822Z'
---

{% raw %}
<h1>Urea</h1>
<h2>Overview</h2>
<p>Urea (CH4N2O, molecular weight 60.06) is the principal nitrogenous waste product in mammals and the end product of the <strong>urea cycle</strong> (also called the ornithine cycle), which takes place primarily in the liver. The urea cycle was the first metabolic cycle discovered, described by Hans Krebs and Kurt Henseleit in 1932 (five years before the citric acid cycle). Its essential function is to convert highly toxic ammonia (NH3) — produced from amino acid deamination, purine/pyrimidine catabolism, and gut bacterial metabolism — into water-soluble urea, which is approximately 100,000 times less toxic than ammonia and can be safely excreted by the kidneys.</p>
<p>An average adult produces approximately <strong>25-30 grams of urea per day</strong>, depending on dietary protein intake. Approximately 90% of this is excreted in urine; a small fraction diffuses into the gut, where it is hydrolyzed by bacterial urease back to ammonia and CO2, playing a role in nitrogen recycling and the gut-liver axis. Clinically, blood urea nitrogen (BUN) — the nitrogen content of urea measured in blood — is one of the most widely ordered laboratory tests, used alongside serum creatinine to assess renal function, hydration status, and protein catabolism.</p>
<p>Urea also has therapeutic applications: it is used topically as a keratolytic and humectant in dermatology (10-40% creams for psoriasis, ichthyosis, and xerosis), and has osmotic diuretic properties. Friedrich Wohler's synthesis of urea from ammonium cyanate in 1828 was a landmark event in chemistry — the first synthesis of an organic compound from inorganic precursors, disproving the vitalism theory.</p>
<p>Evidence Level: 5/5</p>
<p><strong>Chemical Formula:</strong> CH4N2O<br />
<strong>Molecular Weight:</strong> 60.06 g/mol</p>
<h2>The Urea Cycle</h2>
<p>The urea cycle occurs partly in the mitochondria and partly in the cytosol of hepatocytes, consisting of five enzymatic reactions:</p>
<pre><code>                        MITOCHONDRIA                    CYTOSOL
                        ──────────                      ──────
                    NH3 + CO2 + 2ATP
                         │
                    [CPS1]⭐                    Ornithine ───→ Citrulline
                         │                         ↑              │
                   Carbamoyl phosphate             │         [ASS] + Aspartate
                         │                         │              │
                         └──→ Citrulline ──────────┘        Argininosuccinate
                          [OTC + Ornithine]                       │
                                                            [ASL]
                                                                │
                                                         Fumarate + Arginine
                                                                │
                                                           [ARG1]
                                                                │
                                                        UREA + Ornithine ←── (recycled)
</code></pre>
<h3>Enzyme Steps</h3>
<table>
<thead>
<tr>
<th>Step</th>
<th>Enzyme</th>
<th>Location</th>
<th>Reaction</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><strong>CPS1</strong> (carbamoyl phosphate synthetase I)</td>
<td>Mitochondria</td>
<td>NH3 + CO2 + 2ATP → Carbamoyl phosphate</td>
<td>Rate-limiting step; requires N-acetylglutamate (NAG) as allosteric activator; NAG deficiency causes secondary urea cycle disorder</td>
</tr>
<tr>
<td>2</td>
<td><strong>OTC</strong> (ornithine transcarbamylase)</td>
<td>Mitochondria</td>
<td>Carbamoyl phosphate + Ornithine → Citrulline</td>
<td>Most common urea cycle disorder (X-linked); orotic acid accumulates as diagnostic marker</td>
</tr>
<tr>
<td>3</td>
<td><strong>ASS</strong> (argininosuccinate synthetase)</td>
<td>Cytosol</td>
<td>Citrulline + Aspartate + ATP → Argininosuccinate</td>
<td>Citrullinemia type I results from ASS deficiency</td>
</tr>
<tr>
<td>4</td>
<td><strong>ASL</strong> (argininosuccinate lyase)</td>
<td>Cytosol</td>
<td>Argininosuccinate → Arginine + Fumarate</td>
<td>Fumarate enters TCA cycle; ASL deficiency causes citrullinemia type II</td>
</tr>
<tr>
<td>5</td>
<td><strong>ARG1</strong> (arginase)</td>
<td>Cytosol</td>
<td>Arginine + H2O → Urea + Ornithine</td>
<td>Ornithine is recycled to mitochondria; ARG1 deficiency causes hyperargininemia</td>
</tr>
</tbody>
</table>
<h3>Key Features</h3>
<ul>
<li><strong>N-acetylglutamate (NAG)</strong>: Essential allosteric activator of CPS1; synthesized from glutamate and acetyl-CoA by NAG synthase; NAG deficiency (due to NAGS gene mutations) is a rare but treatable urea cycle disorder (treated with carglumic acid, a NAG analog)</li>
<li><strong>Link to TCA cycle</strong>: The urea cycle and TCA cycle are interconnected via fumarate (produced in step 4) and aspartate (consumed in step 3, produced from oxaloacetate via transamination) — this is sometimes called the &quot;urea-TCA bicycle&quot;</li>
<li><strong>Energetics</strong>: Synthesis of one urea molecule requires 4 high-energy phosphate bonds (3 ATP equivalents: 2 for CPS1, 1 for ASS)</li>
</ul>
<h2>Clinical Significance: BUN</h2>
<p>Blood urea nitrogen (BUN) measures the nitrogen content of urea in blood. Since urea contains two nitrogen atoms (MW 28 out of 60), <strong>BUN = serum urea / 2.14</strong> (or equivalently, serum urea = BUN x 2.14).</p>
<h3>Reference Ranges</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Normal Range</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>BUN</td>
<td>7-20 mg/dL</td>
<td>Varies by lab; affected by age, diet, hydration</td>
</tr>
<tr>
<td>Serum Urea</td>
<td>15-40 mg/dL</td>
<td>Direct measurement</td>
</tr>
<tr>
<td>BUN/Creatinine ratio</td>
<td>10:1 to 20:1</td>
<td>Key diagnostic ratio</td>
</tr>
</tbody>
</table>
<h3>BUN Interpretation</h3>
<table>
<thead>
<tr>
<th>Condition</th>
<th>BUN</th>
<th>BUN/Cr Ratio</th>
<th>Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Prerenal azotemia</strong> (dehydration, GI bleed, heart failure)</td>
<td>Elevated (&gt;20)</td>
<td>&gt;20:1</td>
<td>Increased urea reabsorption in proximal tubule; GI bleed adds protein load</td>
</tr>
<tr>
<td><strong>Renal disease</strong> (acute/chronic kidney disease)</td>
<td>Elevated</td>
<td>~10-15:1</td>
<td>Both BUN and creatinine rise proportionally; impaired filtration</td>
</tr>
<tr>
<td><strong>Postrenal obstruction</strong></td>
<td>Elevated</td>
<td>&gt;20:1</td>
<td>Increased back-pressure and urea reabsorption</td>
</tr>
<tr>
<td><strong>Liver failure</strong></td>
<td>Low</td>
<td>Low</td>
<td>Impaired urea synthesis (reduced CPS1 activity, low hepatic mass)</td>
</tr>
<tr>
<td><strong>Overhydration</strong></td>
<td>Low</td>
<td>Variable</td>
<td>Dilutional effect</td>
</tr>
<tr>
<td><strong>Malnutrition / low protein diet</strong></td>
<td>Low</td>
<td>Variable</td>
<td>Reduced substrate (amino acids) for urea production</td>
</tr>
<tr>
<td><strong>High protein diet</strong></td>
<td>Elevated</td>
<td>Normal</td>
<td>Increased amino acid catabolism → more ammonia → more urea</td>
</tr>
<tr>
<td><strong>Catabolic states</strong> (corticosteroids, trauma, sepsis)</td>
<td>Elevated</td>
<td>&gt;20:1</td>
<td>Increased protein breakdown</td>
</tr>
</tbody>
</table>
<h3>Factors Affecting BUN Levels</h3>
<p><strong>Increased BUN:</strong></p>
<ul>
<li>High dietary protein intake</li>
<li>Dehydration (most common non-renal cause)</li>
<li>Gastrointestinal bleeding (digested blood protein → urea)</li>
<li>Corticosteroid use (increased protein catabolism)</li>
<li>Catabolic states (sepsis, trauma, burns, surgery)</li>
<li>Kidney disease (reduced GFR)</li>
<li>Urinary tract obstruction</li>
<li>Congestive heart failure (reduced renal perfusion)</li>
</ul>
<p><strong>Decreased BUN:</strong></p>
<ul>
<li>Liver failure (impaired urea synthesis)</li>
<li>Malnutrition / protein-calorie malnutrition</li>
<li>Overhydration (dilutional)</li>
<li>Pregnancy (increased GFR, expanded plasma volume)</li>
<li>Anabolic states (growth, tissue repair)</li>
</ul>
<h2>Urea Cycle Disorders</h2>
<p>Inborn errors of the urea cycle are rare (combined incidence ~1:35,000) but clinically important:</p>
<table>
<thead>
<tr>
<th>Disorder</th>
<th>Deficient Enzyme</th>
<th>Inheritance</th>
<th>Key Features</th>
</tr>
</thead>
<tbody>
<tr>
<td>NAGS deficiency</td>
<td>NAG synthase</td>
<td>Autosomal recessive</td>
<td>Treatable with carglumic acid; only UCD with specific pharmacological treatment</td>
</tr>
<tr>
<td>CPS1 deficiency</td>
<td>CPS1</td>
<td>Autosomal recessive</td>
<td>Severe hyperammonemia in neonates; very low orotic acid (distinguishes from OTC)</td>
</tr>
<tr>
<td>OTC deficiency</td>
<td>OTC</td>
<td><strong>X-linked</strong></td>
<td>Most common UCD (~60%); orotic aciduria is diagnostic marker; variable severity in females</td>
</tr>
<tr>
<td>Citrullinemia type I</td>
<td>ASS</td>
<td>Autosomal recessive</td>
<td>Severe hyperammonemia; very high citrulline levels</td>
</tr>
<tr>
<td>Argininosuccinic aciduria</td>
<td>ASL</td>
<td>Autosomal recessive</td>
<td>Argininosuccinate accumulates; may present with hepatic fibrosis, trichorrhexis nodosa</td>
</tr>
<tr>
<td>Arginase deficiency</td>
<td>ARG1</td>
<td>Autosomal recessive</td>
<td>Unique: presents with progressive spastic diplegia and seizures rather than neonatal hyperammonemia</td>
</tr>
</tbody>
</table>
<h3>Hyperammonemia Presentation</h3>
<ul>
<li>Acute: lethargy → vomiting → seizures → coma → death (ammonia is directly neurotoxic; causes cerebral edema)</li>
<li>Chronic: developmental delay, behavioral changes, protein aversion</li>
<li>Treatment: low-protein diet, nitrogen scavengers (sodium phenylbutyrate, sodium benzoate), arginine supplementation, hemodialysis for acute crisis</li>
</ul>
<h2>Extrahepatic Roles</h2>
<h3>Gut-Liver Nitrogen Cycle</h3>
<ul>
<li>Approximately 10-20% of urea produced by the liver diffuses into the intestinal lumen</li>
<li>Gut bacteria express <strong>urease</strong>, which hydrolyzes urea back to ammonia (NH3) and CO2</li>
<li>This ammonia can be: (1) reabsorbed and returned to the liver for reprocessing, (2) used by gut bacteria to synthesize amino acids (nitrogen salvage), or (3) converted to glutamine</li>
<li>This gut-liver urea cycle is important for nitrogen economy and is disrupted in liver disease (contributing to hepatic encephalopathy) and in dysbiosis</li>
</ul>
<h3>Dermatological Use</h3>
<ul>
<li><strong>Urea 10%</strong>: Humectant (moisturizer) — draws water into the stratum corneum</li>
<li><strong>Urea 20-40%</strong>: Keratolytic — dissolves desmosomes between corneocytes; used for psoriasis, ichthyosis, xerosis, nail dystrophy, and callus removal</li>
<li>Urea is a component of the natural moisturizing factor (NMF) of skin</li>
</ul>
<h3>Renal Medullary Gradient</h3>
<ul>
<li>Urea contributes ~50% of the renal medullary osmotic gradient essential for urine concentration</li>
<li>Urea transporters (UT-A1, UT-A3 in collecting duct; UT-B in vasa recta) facilitate urea recycling in the medulla</li>
<li>ADH (antidiuretic hormone) regulates urea transporter insertion, linking urea to water balance</li>
</ul>
<h2>Relationships</h2>
<h3>Organs</h3>
<p>PRODUCED_BY::<a href="/entities/organ/liver/" class="internal-link">Liver</a><br />
EXCRETED_BY::<a href="/entities/organ/kidneys/" class="internal-link">Kidneys</a><br />
AFFECTS_ORGAN::<a href="/entities/organ/gut/" class="internal-link">Gut</a><br />
AFFECTS_ORGAN::<a href="/entities/organ/muscles/" class="internal-link">Muscles</a></p>
<h3>Biomarkers</h3>
<p>MEASURED_BY::<a href="/entities/labtest/blood-urea-nitrogen/" class="internal-link">Blood Urea Nitrogen</a><br />
CORRELATED_WITH::<a href="/entities/labtest/creatinine/" class="internal-link">Creatinine</a></p>
<h3>Nutrients</h3>
<p>SYNTHESIZED_FROM::<a class="internal-link is-unresolved" href="/404">Protein</a></p>
<h3>Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/protein/atp-synthase/" class="internal-link">ATP Synthase</a></p>
<h2>References</h2>
<ul>
<li>Morris SM. Regulation of enzymes of the urea cycle and arginine metabolism. <em>Annu Rev Nutr.</em> 2002;22:87-105 — Comprehensive review of urea cycle enzyme regulation and metabolic integration. (PMID: 12055339)</li>
<li>Summar ML, Tuchman M. Proceedings of a consensus conference for the management of patients with urea cycle disorders. <em>J Pediatr.</em> 2001;138(1 Suppl):S6-S10 — Consensus guidelines for diagnosis and management of urea cycle disorders. (PMID: 11148544)</li>
<li>Walser M. Determinants of ureagenesis, with particular reference to clinical applications. <em>J Clin Invest.</em> 1984;73(2):371-8 — Classic review of factors regulating urea production and clinical implications. (PMID: 6323579)</li>
<li>Weiner ID, Mitch WE, Sands JM. Urea and ammonia metabolism and the control of renal nitrogen excretion. <em>Clin J Am Soc Nephrol.</em> 2015;10(8):1444-58 — Review of renal urea handling, transporters, and nitrogen balance. (PMID: 25304810)</li>
<li>Lee B, Singh RH. Urea cycle disorders. In: <em>GeneReviews.</em> 2022 — Authoritative clinical reference for all urea cycle disorders, diagnosis, and management. (PMID: 20301396)</li>
<li>Stewart GS, Graham C, Cattell S, et al. Urea transporters and the urea cycle. <em>J Clin Invest.</em> 2004;113(8):1088-91 — Review of urea transporters in renal medullary concentration and their physiological significance. (PMID: 15057308)</li>
</ul>

{% endraw %}