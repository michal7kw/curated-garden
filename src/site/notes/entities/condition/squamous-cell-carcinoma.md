---
created: '2026-03-12T06:00:32.595976Z'
description: An uncontrolled growth of abnormal cells arising from the squamous cells
  in the epidermis (skin) or linings of digestive/respiratory tracts.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/squamous-cell-carcinoma/
slug: squamous-cell-carcinoma
tags:
- condition
- oncology
- dermatology
- skin
- cancer
templateEngineOverride: njk
title: Squamous Cell Carcinoma
type: condition
updated: '2026-03-12T06:00:32.595976Z'
---

{% raw %}
<h1>Squamous Cell Carcinoma</h1>
<h2>Overview</h2>
<p>An uncontrolled growth of abnormal cells arising from the squamous cells in the epidermis (skin) or linings of digestive/respiratory tracts.</p>
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
FROM [[Squamous Cell Carcinoma]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/squamous-cell-carcinoma/" class="internal-link">Squamous_Cell_Carcinoma</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Squamous Cell Carcinoma]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Squamous Cell Carcinoma]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}