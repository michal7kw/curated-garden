---
created: '2026-03-12T06:00:32.547273Z'
description: A slow-growing blood cancer in which the bone marrow makes too many red
  blood cells, causing the blood to thicken and increasing the risk of clots.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/polycythemia-vera/
slug: polycythemia-vera
tags:
- condition
- hematology
- oncology
- function-health
templateEngineOverride: njk
title: Polycythemia Vera
type: condition
updated: '2026-03-12T06:00:32.547273Z'
---

{% raw %}
<h1>Polycythemia Vera</h1>
<h2>Overview</h2>
<p>A slow-growing blood cancer in which the bone marrow makes too many red blood cells, causing the blood to thicken and increasing the risk of clots.</p>
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
FROM [[Polycythemia Vera]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/polycythemia-vera/" class="internal-link">Polycythemia_Vera</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hematocrit/" class="internal-link">hematocrit</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hemoglobin/" class="internal-link">hemoglobin</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/red-blood-cell-count/" class="internal-link">red_blood_cell_count</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Polycythemia Vera]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Polycythemia Vera]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}