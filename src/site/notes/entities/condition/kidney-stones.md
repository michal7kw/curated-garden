---
created: '2026-03-12T06:00:32.437142Z'
description: Hard deposits made of minerals and salts that form inside the kidneys,
  often causing severe pain when passing through the urinary tract.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/kidney-stones/
slug: kidney-stones
tags:
- condition
- urology
- nephrology
- metabolic
- function-health
templateEngineOverride: njk
title: Kidney Stones
type: condition
updated: '2026-03-12T06:00:32.437142Z'
---

{% raw %}
<h1>Kidney Stones</h1>
<h2>Overview</h2>
<p>Hard deposits made of minerals and salts that form inside the kidneys, often causing severe pain when passing through the urinary tract.</p>
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
FROM [[Kidney Stones]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/kidney-stones/" class="internal-link">Kidney_Stones</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/occult-blood-urine/" class="internal-link">occult_blood_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ph-urine/" class="internal-link">ph_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/red-blood-cell-urine/" class="internal-link">red_blood_cell_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/white-blood-cell-urine/" class="internal-link">white_blood_cell_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/uric-acid/" class="internal-link">uric_acid</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Kidney Stones]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Kidney Stones]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}