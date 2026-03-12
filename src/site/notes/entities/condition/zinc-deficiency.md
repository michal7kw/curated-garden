---
created: '2026-03-12T06:00:32.632988Z'
description: A nutritional deficiency state characterized by insufficient levels of
  zinc, an essential trace element involved in immune function, protein synthesis,
  and wound healing.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/zinc-deficiency/
slug: zinc-deficiency
tags:
- condition
- nutrition
- metabolic
- mineral
- function-health
templateEngineOverride: njk
title: Zinc Deficiency
type: condition
updated: '2026-03-12T06:00:32.632988Z'
---

{% raw %}
<h1>Zinc Deficiency</h1>
<h2>Overview</h2>
<p>A nutritional deficiency state characterized by insufficient levels of zinc, an essential trace element involved in immune function, protein synthesis, and wound healing.</p>
<h2>Clinical Presentation</h2>
<h3>Symptoms</h3>
<p>Not specified.</p>
<h2>Diagnostic Information</h2>
<h2>Risk Factors</h2>
<h2>Management</h2>
<h3>Interventions</h3>
<pre><code class="language-dataview">TABLE 
    effectiveness AS &quot;Effectiveness&quot;,
    confidence_score AS &quot;Confidence&quot;
FROM [[Zinc Deficiency]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/zinc-deficiency/" class="internal-link">Zinc_Deficiency</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/zinc/" class="internal-link">zinc</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Zinc Deficiency]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Zinc Deficiency]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}