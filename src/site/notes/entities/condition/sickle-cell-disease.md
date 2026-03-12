---
created: '2026-03-12T06:00:32.588954Z'
description: A group of inherited red blood cell disorders characterized by abnormal
  hemoglobin (HbS) that causes cells to become rigid and sickle-shaped.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/sickle-cell-disease/
slug: sickle-cell-disease
tags:
- condition
- hematology
- genetic
- function-health
templateEngineOverride: njk
title: Sickle Cell Disease
type: condition
updated: '2026-03-12T06:00:32.588954Z'
---

{% raw %}
<h1>Sickle Cell Disease</h1>
<h2>Overview</h2>
<p>A group of inherited red blood cell disorders characterized by abnormal hemoglobin (HbS) that causes cells to become rigid and sickle-shaped.</p>
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
FROM [[Sickle Cell Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/sickle-cell-disease/" class="internal-link">Sickle_Cell_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/mean-corpuscular-hemoglobin-concentration-mchc/" class="internal-link">mean_corpuscular_hemoglobin_concentration_mchc</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Sickle Cell Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Sickle Cell Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}