---
created: '2026-03-12T06:00:32.382910Z'
description: Any bleeding that occurs in the digestive tract, ranging from the esophagus
  to the rectum, which can be acute or chronic.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/gastrointestinal-bleeding/
slug: gastrointestinal-bleeding
tags:
- condition
- gastroenterology
- emergency
- function-health
templateEngineOverride: njk
title: Gastrointestinal Bleeding
type: condition
updated: '2026-03-12T06:00:32.382910Z'
---

{% raw %}
<h1>Gastrointestinal Bleeding</h1>
<h2>Overview</h2>
<p>Any bleeding that occurs in the digestive tract, ranging from the esophagus to the rectum, which can be acute or chronic.</p>
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
FROM [[Gastrointestinal Bleeding]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/gastrointestinal-bleeding/" class="internal-link">Gastrointestinal_Bleeding</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/blood-urea-nitrogen/" class="internal-link">blood_urea_nitrogen</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/bun-creatinine-ratio/" class="internal-link">bun_creatinine_ratio</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Gastrointestinal Bleeding]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Gastrointestinal Bleeding]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}