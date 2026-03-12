---
created: '2026-03-12T06:00:32.137786Z'
description: Trimethylamine N-oxide is a gut microbiome-derived metabolite produced
  from dietary choline, betaine, and L-carnitine. Elevated levels are strongly associated
  with increased cardiovascular disease risk, atherosclerosis, and thrombotic events.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/tmao/
slug: tmao
tags:
- biomarker
templateEngineOverride: njk
title: TMAO
type: biomarker
updated: '2026-03-12T06:00:32.137786Z'
---

{% raw %}
<h1>TMAO</h1>
<h2>Overview</h2>
<p>Trimethylamine N-oxide (TMAO) is a metabolite produced through a two-step process: gut bacteria convert dietary nutrients (choline, betaine, L-carnitine) into trimethylamine (TMA), which is then oxidized to TMAO by hepatic flavin monooxygenase 3 (FMO3) in the liver.</p>
<p>TMAO has emerged as a significant cardiovascular risk biomarker. Elevated levels promote atherosclerosis by enhancing cholesterol accumulation in macrophages, increasing platelet reactivity, and promoting vascular inflammation. Multiple large prospective studies have demonstrated that elevated TMAO independently predicts major adverse cardiovascular events (MACE), even after adjusting for traditional risk factors.</p>
<p>The clinical significance of TMAO lies in its connection between diet, gut microbiome composition, and cardiovascular health. It represents a modifiable risk factor through dietary intervention (reducing red meat and egg consumption) and microbiome-targeted therapies.</p>
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
<td>&lt;2.0 umol/L</td>
<td>Lower cardiovascular risk</td>
</tr>
<tr>
<td><strong>Normal</strong></td>
<td>2.0-6.2 umol/L</td>
<td>Average risk</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;6.2 umol/L</td>
<td>Elevated cardiovascular risk</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;3.0 umol/L</td>
<td>Functional medicine target</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: umol/L</li>
<li><strong>Sample Type</strong>: Blood (plasma)</li>
<li><strong>Fasting Required</strong>: True (12-hour fast recommended)</li>
<li><strong>Recommended Test Frequency</strong>: Annually for cardiovascular risk assessment</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/probiotics/" class="internal-link">Probiotics</a> - May decrease TMAO by modulating gut microbiome composition (moderate effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/resveratrol/" class="internal-link">Resveratrol</a> - May decrease TMAO via gut microbiome modulation (mild effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a> - May reduce TMAO through gut bacteria modification (moderate effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/metabolon-global/" class="internal-link">metabolon global</a> - Includes TMAO in comprehensive metabolomics panel</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<p>CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/metabolite/homocysteine/" class="internal-link">Homocysteine</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/apolipoprotein-b/" class="internal-link">Apolipoprotein_B</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/hs-crp/" class="internal-link">Hs_Crp</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/oxidized-ldl/" class="internal-link">Oxidized_LDL</a></p>
<h3>Related Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Atherosclerosis</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/chronic-kidney-disease/" class="internal-link">Chronic_Kidney_Disease</a></p>
<h2>References</h2>
<ul>
<li>PMID:23563705 - Tang et al. (2013) Intestinal microbial metabolism of phosphatidylcholine and cardiovascular risk</li>
<li>PMID:28060131 - Li et al. (2017) Gut microbiota-dependent TMAO pathway contributes to arterial thrombosis</li>
<li>PMID:31581379 - Qiu et al. (2018) Effects of probiotics on TMAO levels</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[TMAO]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}