---
created: '2026-03-12T06:00:31.875465Z'
description: Copper is an essential trace mineral required as a cofactor for numerous
  enzymes involved in energy production, iron metabolism, connective tissue synthesis,
  neurotransmitter synthesis, and antioxidant defense (superoxide dismutase). Both
  deficiency and excess are clinically significant.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/copper/
slug: copper
tags:
- biomarker
templateEngineOverride: njk
title: Copper
type: biomarker
updated: '2026-03-12T06:00:31.875465Z'
---

{% raw %}
<h1>Copper</h1>
<h2>Overview</h2>
<p>Copper is an essential trace mineral that serves as a cofactor for over 30 enzymes critical to biological function. Key copper-dependent enzymes include cytochrome c oxidase (mitochondrial energy production), superoxide dismutase (SOD, antioxidant defense), ceruloplasmin (iron metabolism), lysyl oxidase (collagen/elastin cross-linking), dopamine beta-hydroxylase (norepinephrine synthesis), and tyrosinase (melanin production).</p>
<p>Approximately 95% of serum copper is bound to ceruloplasmin, with the remainder as free (non-ceruloplasmin-bound) copper. The copper-zinc ratio is increasingly recognized as an important health metric, with elevated copper/zinc ratios associated with inflammation, cardiovascular disease, and mortality risk. Zinc and copper compete for absorption, making their balance clinically relevant.</p>
<p>Copper deficiency can cause microcytic anemia (mimicking iron deficiency), neutropenia, osteoporosis, neurological dysfunction (myelopathy), and impaired wound healing. Copper excess (as in Wilson's disease or from environmental exposure) causes liver damage, neurological symptoms, and oxidative stress. Functional copper assessment requires evaluating serum copper, ceruloplasmin, and free copper together.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Low</strong></td>
<td>&lt;70 mcg/dL</td>
<td>Deficiency risk; may cause anemia/neutropenia</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>70-140 mcg/dL (M), 80-155 mcg/dL (F)</td>
<td>Adequate copper status</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;155 mcg/dL</td>
<td>Excess; evaluate for Wilson's, inflammation</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>90-120 mcg/dL</td>
<td>Functional medicine range</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: mcg/dL (serum)</li>
<li><strong>Sample Type</strong>: Blood (serum)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually or when clinically indicated</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/copper/" class="internal-link">Copper</a> (supplement) - Directly increases serum copper (strong effect, evidence level 2)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/zinc/" class="internal-link">Zinc</a> - Competes for absorption, may decrease copper with high-dose supplementation (moderate effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/vitamin-c/" class="internal-link">Vitamin C</a> - High-dose may reduce copper absorption (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/zinc-serum/" class="internal-link">zinc serum</a> - Often ordered alongside copper for ratio</li>
<li>Serum copper test - Direct measurement via atomic absorption spectrophotometry</li>
</ul>
<h2>Relationships</h2>
<h3>Related Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Wilsons_Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Menkes_Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/osteoporosis/" class="internal-link">Osteoporosis</a></p>
<h3>Correlations</h3>
<p>CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/ferritin/" class="internal-link">Ferritin</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/biomarker/serum-iron/" class="internal-link">Serum_Iron</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/supplement/zinc/" class="internal-link">Zinc</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/hs-crp/" class="internal-link">Hs_Crp</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/white-blood-cell-count/" class="internal-link">White_Blood_Cell_Count</a></p>
<h2>References</h2>
<ul>
<li>PMID:24401818 - Collins et al. (2010) Copper: functions, metabolism, and requirements</li>
<li>PMID:20150599 - Prasad (2008) Zinc in human health: effect on the immune, antioxidant and enzyme systems</li>
<li>PMID:15743017 - Turnlund et al. (2004) Long-term high copper intake effects</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Copper]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}