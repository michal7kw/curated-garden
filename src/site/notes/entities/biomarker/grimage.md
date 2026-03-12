---
created: '2026-03-12T06:00:31.937535Z'
description: An advanced epigenetic clock that uses DNA methylation patterns to predict
  mortality and biological age.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/grimage/
slug: grimage
tags:
- biomarker
- longevity
- epigenetics
- biological_age
templateEngineOverride: njk
title: GrimAge
type: biomarker
updated: '2026-03-12T06:00:31.937535Z'
---

{% raw %}
<h1>GrimAge</h1>
<h2>Overview</h2>
<p>An advanced epigenetic clock that uses DNA methylation patterns to predict mortality and biological age.</p>
<h2>Reference Ranges</h2>
<p>Reference ranges not available.</p>
<h2>Optimal Ranges</h2>
<pre><code class="language-yaml">'{&quot;optimal&quot;: &quot;&lt; Chronological Age&quot;}'
</code></pre>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: Not specified</li>
<li><strong>Sample Type</strong>: Blood</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: Annually or bi-annually</li>
</ul>
<h2>Interpretation Guidelines</h2>
<ul>
<li>GrimAge acceleration (GrimAge - Chronological Age) &gt; 0 indicates faster biological aging.</li>
<li>GrimAge acceleration &lt; 0 indicates slower biological aging (longevity benefit).</li>
</ul>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[GrimAge]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}