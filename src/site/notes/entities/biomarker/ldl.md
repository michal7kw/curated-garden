---
created: '2026-03-12T06:00:31.970801Z'
description: Low-density lipoprotein (LDL) cholesterol carries cholesterol to tissues.
  High levels increase cardiovascular disease risk.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/ldl/
slug: ldl
tags:
- biomarker
templateEngineOverride: njk
title: Ldl
type: biomarker
updated: '2026-03-12T06:00:31.970801Z'
---

{% raw %}
<h1>Ldl</h1>
<h2>Overview</h2>
<p>No description available.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Not specified</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Not specified</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Heart</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/advanced-lipid-panel/" class="internal-link">advanced_lipid_panel</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/lipid-panel-standard/" class="internal-link">lipid_panel_standard</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a></p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a> - Decreases LDL cholesterol (moderate effect, evidence level 4)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3 Fatty Acids</a> - Decreases LDL cholesterol (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/ldl-cholesterol/" class="internal-link">ldl cholesterol</a> - Direct LDL measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/lipid-panel-standard/" class="internal-link">lipid panel standard</a> - Standard lipid panel</li>
<li><a href="/garden/michal.k7w@gmail.com/labtest/advanced-lipid-panel/" class="internal-link">advanced lipid panel</a> - Advanced lipid panel with LDL particle analysis</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Ldl]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}