---
created: '2026-03-12T06:00:32.490333Z'
description: A group of rare autoimmune diseases characterized by chronic muscle inflammation
  and weakness, including polymyositis and dermatomyositis.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/myositis/
slug: myositis
tags:
- condition
- rheumatology
- autoimmune
- musculoskeletal
- function-health
templateEngineOverride: njk
title: Myositis
type: condition
updated: '2026-03-12T06:00:32.490333Z'
---

{% raw %}
<h1>Myositis</h1>
<h2>Overview</h2>
<p>A group of rare autoimmune diseases characterized by chronic muscle inflammation and weakness, including polymyositis and dermatomyositis.</p>
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
FROM [[Myositis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Myositis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Myositis]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}