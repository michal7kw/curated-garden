---
created: '2026-03-12T06:00:31.939203Z'
description: Hemoglobin A1c (HbA1c) reflects average blood glucose over 2-3 months.
  Used to diagnose and monitor diabetes control.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/hba1c/
slug: hba1c
tags:
- biomarker
templateEngineOverride: njk
title: Hba1C
type: biomarker
updated: '2026-03-12T06:00:31.939203Z'
---

{% raw %}
<h1>Hba1C</h1>
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
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin_a1c_hba1c</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Pancreas</a></p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a> - Decreases HbA1c (moderate effect, evidence level 4)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a> - Decreases HbA1c in type 2 diabetics (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/labtest/hba1c/" class="internal-link">hba1c</a> - HbA1c measurement</li>
<li><a href="/garden/michal.k7w@gmail.com/labtest/hemoglobin-a1c-hba1c/" class="internal-link">hemoglobin a1c hba1c</a> - Hemoglobin A1c test</li>
</ul>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Hba1C]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}