---
created: '2026-03-12T06:00:31.930538Z'
description: Blood glucose level after 8+ hours of fasting. Used to diagnose diabetes
  and assess metabolic health.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/glucose-fasting/
slug: glucose-fasting
tags:
- biomarker
templateEngineOverride: njk
title: Glucose Fasting
type: biomarker
updated: '2026-03-12T06:00:31.930538Z'
---

{% raw %}
<h1>Glucose Fasting</h1>
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
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive_metabolic_panel</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/basic-metabolic-panel/" class="internal-link">basic_metabolic_panel</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/fasting-glucose/" class="internal-link">fasting_glucose</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Pancreas</a></p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a> - Decreases fasting glucose (moderate effect, evidence level 4)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a> - Modulates fasting glucose in deficient individuals</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/fasting-glucose/" class="internal-link">fasting glucose</a> - Fasting glucose measurement</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/comprehensive-metabolic-panel/" class="internal-link">comprehensive metabolic panel</a> - Part of CMP</li>
<li><a href="/garden/michal.k7w@gmail.com/labtest/basic-metabolic-panel/" class="internal-link">basic metabolic panel</a> - Part of BMP</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Glucose Fasting]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}