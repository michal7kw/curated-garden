---
created: '2026-03-12T06:00:32.482389Z'
description: A rare autoimmune disorder characterized by overlapping features of at
  least two other systemic autoimmune diseases, such as lupus, scleroderma, and polymyositis.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/mixed-connective-tissue-disease/
slug: mixed-connective-tissue-disease
tags:
- condition
- rheumatology
- autoimmune
- immunology
- function-health
templateEngineOverride: njk
title: Mixed Connective Tissue Disease
type: condition
updated: '2026-03-12T06:00:32.482389Z'
---

{% raw %}
<h1>Mixed Connective Tissue Disease</h1>
<h2>Overview</h2>
<p>A rare autoimmune disorder characterized by overlapping features of at least two other systemic autoimmune diseases, such as lupus, scleroderma, and polymyositis.</p>
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
FROM [[Mixed Connective Tissue Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/mixed-connective-tissue-disease/" class="internal-link">Mixed_Connective_Tissue_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/antinuclear-antibodies-ana-screen/" class="internal-link">antinuclear_antibodies_ana_screen</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Mixed Connective Tissue Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Mixed Connective Tissue Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}