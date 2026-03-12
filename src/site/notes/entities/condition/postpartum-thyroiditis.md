---
created: '2026-03-12T06:00:32.551883Z'
description: An autoimmune inflammatory condition of the thyroid gland that occurs
  within the first year after childbirth, characterized by a transient hyperthyroid
  phase followed by a hypothyroid phase.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/postpartum-thyroiditis/
slug: postpartum-thyroiditis
tags:
- condition
- endocrinology
- thyroid
- autoimmune
- function-health
templateEngineOverride: njk
title: Postpartum Thyroiditis
type: condition
updated: '2026-03-12T06:00:32.551883Z'
---

{% raw %}
<h1>Postpartum Thyroiditis</h1>
<h2>Overview</h2>
<p>An autoimmune inflammatory condition of the thyroid gland that occurs within the first year after childbirth, characterized by a transient hyperthyroid phase followed by a hypothyroid phase.</p>
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
FROM [[Postpartum Thyroiditis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/postpartum-thyroiditis/" class="internal-link">Postpartum_Thyroiditis</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/thyroid-peroxidase-antibodies-tpo/" class="internal-link">thyroid_peroxidase_antibodies_tpo</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Postpartum Thyroiditis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Postpartum Thyroiditis]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}