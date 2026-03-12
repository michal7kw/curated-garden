---
created: '2026-03-12T06:00:32.318529Z'
description: A long-term condition where the kidneys are damaged and gradually lose
  their ability to filter waste and excess fluid from the blood.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/chronic-kidney-disease/
slug: chronic-kidney-disease
tags:
- condition
- nephrology
- chronic
- function-health
templateEngineOverride: njk
title: Chronic Kidney Disease
type: condition
updated: '2026-03-12T06:00:32.318529Z'
---

{% raw %}
<h1>Chronic Kidney Disease</h1>
<h2>Overview</h2>
<p>A long-term condition where the kidneys are damaged and gradually lose their ability to filter waste and excess fluid from the blood.</p>
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
FROM [[Chronic Kidney Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Increases Risk For</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/chronic-kidney-disease/" class="internal-link">Chronic_Kidney_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/lead/" class="internal-link">lead</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/mercury/" class="internal-link">mercury</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/calcium/" class="internal-link">calcium</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/methylmalonic-acid/" class="internal-link">methylmalonic_acid</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/albumin-microalbumin-urine/" class="internal-link">albumin_microalbumin_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/chloride/" class="internal-link">chloride</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/creatinine-based-estimated-glomerular-filtration-rate-egfr/" class="internal-link">creatinine_based_estimated_glomerular_filtration_rate_egfr</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hyaline-casts-urine/" class="internal-link">hyaline_casts_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/uric-acid/" class="internal-link">uric_acid</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Chronic Kidney Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Chronic Kidney Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}