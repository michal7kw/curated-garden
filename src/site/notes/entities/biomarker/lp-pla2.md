---
created: '2026-03-12T06:00:31.976115Z'
description: Lipoprotein-associated phospholipase A2 is a vascular-specific inflammatory
  enzyme produced by macrophages within atherosclerotic plaques. Elevated levels indicate
  active vascular inflammation and unstable plaque, independently predicting coronary
  events and ischemic stroke.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/lp-pla2/
slug: lp-pla2
tags:
- biomarker
templateEngineOverride: njk
title: Lp-PLA2
type: biomarker
updated: '2026-03-12T06:00:31.976115Z'
---

{% raw %}
<h1>Lp-PLA2</h1>
<h2>Overview</h2>
<p>Lipoprotein-associated phospholipase A2 (Lp-PLA2), also known as platelet-activating factor acetylhydrolase (PAF-AH), is an enzyme produced primarily by macrophages, T-lymphocytes, and mast cells within atherosclerotic plaques. Unlike hs-CRP which reflects systemic inflammation, Lp-PLA2 is specific to vascular inflammation.</p>
<p>Lp-PLA2 hydrolyzes oxidized phospholipids within LDL particles, generating pro-inflammatory mediators (lyso-phosphatidylcholine and oxidized fatty acids) that promote endothelial dysfunction, macrophage recruitment, and plaque instability. This makes it a direct marker of the inflammatory processes driving atherosclerosis.</p>
<p>The PLAC test (Lp-PLA2 activity) is FDA-cleared for assessing risk of coronary heart disease and ischemic stroke. It adds predictive value beyond traditional risk factors and hs-CRP, particularly in identifying patients with vulnerable, rupture-prone plaques.</p>
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
<td><strong>Low Risk</strong></td>
<td>&lt;200 ng/mL</td>
<td>Low vascular inflammation</td>
</tr>
<tr>
<td><strong>Borderline</strong></td>
<td>200-235 ng/mL</td>
<td>Moderate risk</td>
</tr>
<tr>
<td><strong>High Risk</strong></td>
<td>&gt;235 ng/mL</td>
<td>Elevated vascular inflammation, unstable plaque likely</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;200 ng/mL</td>
<td>Target for cardiovascular prevention</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL (mass) or nmol/min/mL (activity)</li>
<li><strong>Sample Type</strong>: Blood (plasma)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually for cardiovascular risk assessment</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Decreases Lp-PLA2 activity (moderate effect, evidence level 3)</li>
<li><a class="internal-link is-unresolved" href="/404">Niacin</a> - Decreases Lp-PLA2 in dyslipidemia (mild effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/curcumin/" class="internal-link">Curcumin</a> - May decrease via anti-inflammatory mechanisms (mild effect, evidence level 4)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>PLAC Test - Lp-PLA2 activity assay (FDA-cleared)</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<p>CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/apolipoprotein-b/" class="internal-link">Apolipoprotein_B</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/oxidized-ldl/" class="internal-link">Oxidized_LDL</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/hs-crp/" class="internal-link">Hs_Crp</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/biomarker/ldl-p/" class="internal-link">Ldl_P</a></p>
<h3>Related Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Stroke</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Atherosclerosis</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a></p>
<h2>References</h2>
<ul>
<li>PMID:21360686 - Corson (2011) Lp-PLA2 as a biologic marker of vascular inflammation</li>
<li>PMID:18541889 - Muhlestein et al. (2008) Effect of niacin on Lp-PLA2</li>
<li>PMID:24958564 - Wallentin et al. (2014) Lp-PLA2 and cardiovascular events</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Lp-PLA2]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}