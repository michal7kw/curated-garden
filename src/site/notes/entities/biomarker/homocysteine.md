---
created: '2026-03-12T06:00:31.949785Z'
description: A sulfur-containing amino acid produced during methionine metabolism.
  Elevated levels are a risk factor for cardiovascular disease, cognitive decline,
  and neural tube defects.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/homocysteine/
slug: homocysteine
tags:
- biomarker
templateEngineOverride: njk
title: Homocysteine
type: biomarker
updated: '2026-03-12T06:00:31.949785Z'
---

{% raw %}
<h1>Homocysteine</h1>
<h2>Overview</h2>
<p>Sulfur-containing amino acid that is an intermediate in the methylation cycle. Elevated homocysteine is an independent risk factor for cardiovascular disease, cognitive decline, and other conditions. Levels are modifiable through B vitamin supplementation.</p>
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
<h3>Increased By</h3>
<p>INCREASED_BY::<a class="internal-link is-unresolved" href="/404">Vitamin_B12_Deficiency</a><br />
INCREASED_BY::<a class="internal-link is-unresolved" href="/404">MTHFR_Gene</a><br />
INCREASED_BY::<a class="internal-link is-unresolved" href="/404">Folate_Deficiency</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/osteoporosis/" class="internal-link">Osteoporosis</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Alzheimers_Disease</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/folate/" class="internal-link">Folate</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-b6/" class="internal-link">Vitamin_B6</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/vascular-dementia/" class="internal-link">Vascular_Dementia</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-b12/" class="internal-link">Vitamin_B12</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a class="internal-link is-unresolved" href="/404">Methionine</a><br />
CONVERTED_TO::<a href="/garden/michal.k7w@gmail.com/labtest/glutathione/" class="internal-link">Glutathione</a></p>
<h3>Produced From</h3>
<p>PRODUCED_FROM::<a class="internal-link is-unresolved" href="/404">Methionine</a></p>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Blood</a></p>
<h2>💊 Supplements That Affect This Biomarker</h2>
<p>No supplement effects documented yet. Add effects in the respective supplement notes.</p>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<p>No lab tests linked yet. Add biomarker measurements in the respective lab test notes.</p>
<h2>References</h2>
<p>No references available.</p>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Homocysteine]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}