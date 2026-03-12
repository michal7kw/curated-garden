---
created: '2026-03-12T06:00:31.782829Z'
description: The AA/EPA ratio measures the balance between arachidonic acid (AA),
  a pro-inflammatory omega-6 fatty acid, and eicosapentaenoic acid (EPA), an anti-inflammatory
  omega-3 fatty acid. It is a critical marker of cellular inflammation and cardiovascular
  risk.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/aaepa-ratio/
slug: aaepa-ratio
tags:
- biomarker
- inflammation
- cardiovascular
- metabolic
templateEngineOverride: njk
title: AA/EPA Ratio
type: biomarker
updated: '2026-03-12T06:00:31.782829Z'
---

{% raw %}
<h1>AA/EPA Ratio</h1>
<h2>Overview</h2>
<p>The AA/EPA ratio is a significant biomarker that reflects the balance between arachidonic acid (AA), an omega-6 fatty acid, and eicosapentaenoic acid (EPA), an omega-3 fatty acid, in the body. This ratio provides deep insights into an individual's systemic inflammatory status.</p>
<p>Arachidonic acid is the precursor to pro-inflammatory eicosanoids (like PGE2 and LTB4), while EPA is the precursor to anti-inflammatory or pro-resolving eicosanoids and resolvins. A higher ratio indicates a pro-inflammatory state, typical of a standard Western diet high in omega-6 and low in omega-3. Conversely, a lower ratio indicates an anti-inflammatory state, which is associated with reduced risk of chronic diseases, particularly cardiovascular disease, and improved metabolic health.</p>
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
<td><strong>Ideal</strong></td>
<td>1.5 - 2.0</td>
<td>Optimal anti-inflammatory balance; associated with longevity</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>1.5 - 3.0</td>
<td>Target range for therapeutic omega-3 supplementation</td>
</tr>
<tr>
<td><strong>Desirable</strong></td>
<td>2.5 - 11.0</td>
<td>Generally healthy range for the general population</td>
</tr>
<tr>
<td><strong>Elevated</strong></td>
<td>11.0 - 15.0</td>
<td>Moderate cellular inflammation</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;15.0</td>
<td>Strongly pro-inflammatory state; increased chronic disease risk</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Ratio (dimensionless)</li>
<li><strong>Sample Type</strong>: Blood (Red Blood Cell membranes preferred for long-term status; Plasma for short-term)</li>
<li><strong>Fasting Required</strong>: True (9-12 hours recommended to avoid interference from recent dietary fats)</li>
<li><strong>Recommended Test Frequency</strong>: Every 3-6 months when monitoring supplementation</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Significantly decreases the ratio by increasing EPA levels (High magnitude, Evidence Level 5)</li>
<li><a href="/garden/michal.k7w@gmail.com/biomarker/epa/" class="internal-link">EPA</a> - The most direct way to lower the ratio as it specifically increases the denominator (High magnitude, Evidence Level 5)</li>
<li><a class="internal-link is-unresolved" href="/404">Fish Oil</a> - Common source of EPA/DHA that lowers the ratio (Moderate to high magnitude, Evidence Level 4)</li>
<li><a class="internal-link is-unresolved" href="/404">GLA</a> - Gamma-linolenic acid; though an omega-6, it can sometimes influence the inflammatory balance depending on DGLA conversion.</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><strong>Omega-3 Index</strong> - Often includes the AA/EPA ratio as part of a comprehensive fatty acid profile.</li>
<li><strong>Fatty Acid Profile, RBC</strong> - Measures the composition of fatty acids in red blood cell membranes.</li>
<li><strong>Inflammation Profiles</strong> - Some advanced cardiovascular panels include AA/EPA as a marker of cellular inflammation.</li>
</ul>
<h2>Relationships</h2>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/biomarker/f2-isoprostanes/" class="internal-link">F2_Isoprostanes</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/omega3-index/" class="internal-link">Omega3_Index</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/hs-crp/" class="internal-link">Hs_Crp</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/triglycerides/" class="internal-link">Triglycerides</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/depression/" class="internal-link">Depression</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Autoimmune_Diseases</a></p>
<h3>Predicts Risk</h3>
<p>PREDICTS_RISK::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a></p>
<h2>References</h2>
<ul>
<li>PMID:17614129 - Valavanidis et al. (2009) Fatty acids and inflammation.</li>
<li>PMID:22332096 - Simopoulos AP. (2002) The importance of the ratio of omega-6/omega-3 essential fatty acids.</li>
<li>PMID:26878148 - Sears B. (2015) Anti-inflammatory Diets.</li>
<li>Rupa Health - AA/EPA Ratio: A Guide for Practitioners.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[AA/EPA Ratio]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}