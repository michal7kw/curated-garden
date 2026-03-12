---
created: '2026-03-12T06:00:32.493832Z'
description: A kidney disorder that causes the body to excrete too much protein in
  the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/nephrotic-syndrome/
slug: nephrotic-syndrome
tags:
- condition
- nephrology
- function-health
templateEngineOverride: njk
title: Nephrotic Syndrome
type: condition
updated: '2026-03-12T06:00:32.493832Z'
---

{% raw %}
<h1>Nephrotic Syndrome</h1>
<h2>Overview</h2>
<p>A kidney disorder that causes the body to excrete too much protein in the urine, characterized by a specific group of symptoms including edema and hypoalbuminemia.</p>
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
FROM [[Nephrotic Syndrome]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/nephrotic-syndrome/" class="internal-link">Nephrotic_Syndrome</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/albumin/" class="internal-link">albumin</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Nephrotic Syndrome]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Nephrotic Syndrome]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}