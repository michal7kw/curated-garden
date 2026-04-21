---
created: '2026-04-21T16:52:58.062373Z'
description: Serum CoQ10 (ubiquinone/ubiquinol) concentration reflects endogenous
  synthesis, dietary intake, and supplementation status. It is a critical biomarker
  for mitochondrial function, cardiovascular health, and monitoring patients on statin
  therapy.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/coq10-serum/
slug: coq10-serum
tags:
- biomarker
- mitochondrial
- cardiovascular
- antioxidant
- energy_metabolism
templateEngineOverride: njk
title: CoQ10 (Serum)
type: biomarker
updated: '2026-04-21T16:52:58.062373Z'
---

{% raw %}
<h1>CoQ10 (Serum)</h1>
<h2>Overview</h2>
<p>Coenzyme Q10 (CoQ10, ubiquinone) is a fat-soluble compound endogenously synthesized via the mevalonate pathway and obtained in small amounts from dietary sources (organ meats, fatty fish). Serum CoQ10 concentration reflects the balance of endogenous production, dietary intake, and supplementation. Levels decline with age — approximately 25% from age 20 to 80 — and can be significantly reduced by statin medications, which inhibit HMG-CoA reductase and thereby suppress the mevalonate pathway shared with CoQ10 synthesis.</p>
<p>CoQ10 exists in two redox forms: oxidized ubiquinone and reduced ubiquinol. Most commercial assays measure total CoQ10 (both forms). As a critical component of the mitochondrial electron transport chain (Complex III) and the primary lipid-soluble antioxidant in cell membranes, serum CoQ10 serves as a useful biomarker for mitochondrial function, cardiovascular risk, and oxidative stress status.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>Range</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Deficient</td>
<td>&lt;0.5 mcg/mL</td>
<td>Associated with heart failure, mitochondrial disorders</td>
</tr>
<tr>
<td>Normal</td>
<td>0.5-1.5 mcg/mL</td>
<td>Adults, HPLC method</td>
</tr>
<tr>
<td>Optimal</td>
<td>&gt;1.0 mcg/mL</td>
<td>Target for cardiovascular protection</td>
</tr>
<tr>
<td>Supplemented</td>
<td>1.5-3.5 mcg/mL</td>
<td>Common with 100-300 mg/day supplementation</td>
</tr>
</tbody>
</table>
<p>Ranges vary by assay method (HPLC, LC-MS/MS, spectrophotometry). HPLC is the most widely used reference method. Always compare results against the specific laboratory's reference interval.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mcg/mL (µg/mL)</li>
<li><strong>Sample Type</strong>: Blood (serum or plasma)</li>
<li><strong>Fasting Required</strong>: Not typically required, though some labs recommend fasting for consistency</li>
<li><strong>Recommended Test Frequency</strong>: Annually for general health monitoring; every 3-6 months when monitoring statin therapy or adjusting CoQ10 supplementation</li>
</ul>
<h2>Factors Affecting Levels</h2>
<ul>
<li><strong>Age</strong>: Declines ~25% from age 20 to 80 due to reduced endogenous synthesis</li>
<li><strong>Statin medications</strong>: Inhibit HMG-CoA reductase in the mevalonate pathway, reducing CoQ10 synthesis by up to 40%</li>
<li><strong>CoQ10 supplementation</strong>: Directly raises serum levels; ubiquinol form has superior bioavailability compared to ubiquinone</li>
<li><strong>Diet</strong>: Organ meats, fatty fish contribute ~5 mg/day — minimal relative to endogenous synthesis (~200-500 mg/day)</li>
<li><strong>Genetic variants</strong>: Mutations in COQ genes (COQ2, COQ6, COQ8A) can impair biosynthesis</li>
<li><strong>Disease states</strong>: Heart failure, mitochondrial disorders, Parkinson's disease, and chronic fatigue syndrome are associated with lower levels</li>
</ul>
<h2>Clinical Significance</h2>
<p>Low serum CoQ10 is associated with heart failure, cardiomyopathy, statin-induced myopathy, mitochondrial dysfunction, Parkinson's disease, and chronic fatigue. The Q-SYMBIO trial (Mortensen et al., 2014) demonstrated that CoQ10 supplementation (300 mg/day) significantly reduced major cardiovascular events and all-cause mortality in chronic heart failure patients over 2 years.</p>
<p>Statin therapy monitoring is a primary clinical application. Statins inhibit HMG-CoA reductase, the rate-limiting enzyme in the mevalonate pathway responsible for both cholesterol and CoQ10 synthesis. Serum CoQ10 can drop 16-54% depending on statin type and dose, with atorvastatin showing particularly strong depletion effects. Patients developing myalgia on statins often have the lowest CoQ10 levels.</p>
<h2>Strategies to Improve</h2>
<ul>
<li><strong>CoQ10 supplementation</strong>: 100-200 mg/day for general support; up to 300 mg/day for heart failure or migraine prophylaxis</li>
<li><strong>Ubiquinol form</strong>: Preferred over ubiquinone for superior absorption and bioavailability, especially in adults over 40</li>
<li><strong>Take with fat-containing meals</strong>: CoQ10 is highly lipophilic; absorption is significantly enhanced by dietary fat</li>
<li><strong>Statin dose adjustment</strong>: If levels are depleted on statin therapy, consider dose reduction or switching to a less CoQ10-depleting statin under physician guidance (rosuvastatin may have less impact than atorvastatin)</li>
<li><strong>Avoid warfarin interactions</strong>: CoQ10 shares structural similarity with vitamin K and may reduce warfarin anticoagulant effect</li>
</ul>
<h2>Relationships</h2>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a> (directly increases serum CoQ10 levels, Evidence Level 1a)</p>
<h3>Reduced By Drug</h3>
<p>REDUCED_BY_DRUG::<a href="/entities/drug/atorvastatin/" class="internal-link">Atorvastatin</a> (inhibits HMG-CoA reductase, reducing endogenous CoQ10 synthesis by up to 40%, Evidence Level 1a)</p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a> (essential for mitochondrial energy production in cardiac tissue, Evidence Level 2a)<br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/muscles/" class="internal-link">Muscles</a> (cofactor in electron transport chain critical for skeletal muscle function, Evidence Level 2b)<br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/brain/" class="internal-link">Brain</a> (important for neuronal mitochondrial function and neuroprotection, Evidence Level 2b)</p>
<h3>Associated With Biomarker</h3>
<p>ASSOCIATED_WITH_BIOMARKER::<a href="/entities/labtest/bnp/" class="internal-link">BNP</a> (both elevated in heart failure; CoQ10 depletion correlates with disease severity, Evidence Level 2a)<br />
ASSOCIATED_WITH_BIOMARKER::<a href="/entities/biomarker/creatine-kinase/" class="internal-link">Creatine Kinase</a> (both affected by statin therapy; CoQ10 depletion and CK elevation co-occur in statin myopathy, Evidence Level 2a)<br />
ASSOCIATED_WITH_BIOMARKER::<a href="/entities/labtest/oxidized-ldl/" class="internal-link">Oxidized LDL</a> (inverse relationship; adequate CoQ10 reduces LDL oxidation, Evidence Level 2b)</p>
<h3>Predicts Risk</h3>
<p>PREDICTS_RISK::<a href="/entities/condition/heart-failure/" class="internal-link">Heart Failure</a> (low CoQ10 associated with worse outcomes; Q-SYMBIO trial showed supplementation reduces mortality, Evidence Level 1b)<br />
PREDICTS_RISK::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (low levels independently predict cardiovascular events, Evidence Level 2a)<br />
PREDICTS_RISK::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a> (low serum CoQ10 is a hallmark of impaired mitochondrial electron transport, Evidence Level 2a)</p>
<h2>References</h2>
<ol>
<li>Mortensen SA, Rosenfeldt F, Kumar A, et al. The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO. <em>J Am Coll Cardiol</em>. 2014;64(21):e1-e78. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/25257605/">25257605</a></li>
<li>Littarru GP, Tiano L. Clinical aspects of coenzyme Q10: an update. <em>Mol Syndromol</em>. 2010;1(1):1-14. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/20838586/">20838586</a></li>
<li>Marcoff L, Thompson PD. The role of coenzyme Q10 in statin-associated myopathy. <em>J Am Coll Cardiol</em>. 2007;49(23):2231-2237. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/17493453/">17493453</a></li>
<li>Examine.com. Coenzyme Q10 — Evidence-based analysis. Updated 2026. Available at: <a href="https://examine.com/supplements/coenzyme-q10/">examine.com/supplements/coenzyme-q10</a></li>
</ol>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CoQ10 (Serum)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}