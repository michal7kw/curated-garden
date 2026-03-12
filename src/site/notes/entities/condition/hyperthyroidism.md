---
created: '2026-03-12T06:00:32.417919Z'
description: A condition where the thyroid gland produces and releases excessive amounts
  of thyroid hormones (T3 and T4), accelerating the body's metabolism.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/hyperthyroidism/
slug: hyperthyroidism
tags:
- condition
- endocrinology
- thyroid
- metabolic
- function-health
templateEngineOverride: njk
title: Hyperthyroidism
type: condition
updated: '2026-03-12T06:00:32.417919Z'
---

{% raw %}
<h1>Hyperthyroidism</h1>
<h2>Overview</h2>
<p>A condition where the thyroid gland produces and releases excessive amounts of thyroid hormones (T3 and T4), accelerating the body's metabolism.</p>
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
FROM [[Hyperthyroidism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Hyperthyroidism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Hyperthyroidism]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a></p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}