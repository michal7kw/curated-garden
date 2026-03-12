---
created: '2026-03-12T06:00:32.369390Z'
description: A transient and generally benign increase in the excretion of protein
  in the urine following strenuous physical activity.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/exercise-induced-proteinuria/
slug: exercise-induced-proteinuria
tags:
- condition
- nephrology
- sports_medicine
- function-health
templateEngineOverride: njk
title: Exercise-Induced Proteinuria
type: condition
updated: '2026-03-12T06:00:32.369390Z'
---

{% raw %}
<h1>Exercise-Induced Proteinuria</h1>
<h2>Overview</h2>
<p>A transient and generally benign increase in the excretion of protein in the urine following strenuous physical activity.</p>
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
FROM [[Exercise-Induced Proteinuria]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/exercise-induced-proteinuria/" class="internal-link">Exercise-Induced_Proteinuria</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hyaline-casts-urine/" class="internal-link">hyaline_casts_urine</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Exercise-Induced Proteinuria]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Exercise-Induced Proteinuria]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}