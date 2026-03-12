---
created: '2026-03-12T06:00:32.463150Z'
description: A serious type of skin cancer that develops from the pigment-producing
  cells known as melanocytes. It is less common than other skin cancers but much more
  dangerous if it spreads.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/melanoma/
slug: melanoma
tags:
- condition
- oncology
- dermatology
- skin
- cancer
templateEngineOverride: njk
title: Melanoma
type: condition
updated: '2026-03-12T06:00:32.463150Z'
---

{% raw %}
<h1>Melanoma</h1>
<h2>Overview</h2>
<p>A serious type of skin cancer that develops from the pigment-producing cells known as melanocytes. It is less common than other skin cancers but much more dangerous if it spreads.</p>
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
FROM [[Melanoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Melanoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Melanoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/biomarker/s100b/" class="internal-link">S100B</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/gene/src/" class="internal-link">SRC</a></p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}