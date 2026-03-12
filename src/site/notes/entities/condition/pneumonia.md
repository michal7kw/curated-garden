---
created: '2026-03-12T06:00:32.544682Z'
description: An infection that inflames the air sacs (alveoli) in one or both lungs,
  which may fill with fluid or pus.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/pneumonia/
slug: pneumonia
tags:
- condition
- respiratory
- infection
- acute
templateEngineOverride: njk
title: Pneumonia
type: condition
updated: '2026-03-12T06:00:32.544682Z'
---

{% raw %}
<h1>Pneumonia</h1>
<h2>Overview</h2>
<p>An infection that inflames the air sacs (alveoli) in one or both lungs, which may fill with fluid or pus.</p>
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
FROM [[Pneumonia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Pneumonia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Pneumonia]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}