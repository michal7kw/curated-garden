---
created: '2026-03-12T06:00:32.381306Z'
description: A range of conditions affecting the gallbladder, most commonly involving
  gallstones or inflammation (cholecystitis).
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/gallbladder-disease/
slug: gallbladder-disease
tags:
- condition
- gastroenterology
- function-health
templateEngineOverride: njk
title: Gallbladder Disease
type: condition
updated: '2026-03-12T06:00:32.381306Z'
---

{% raw %}
<h1>Gallbladder Disease</h1>
<h2>Overview</h2>
<p>A range of conditions affecting the gallbladder, most commonly involving gallstones or inflammation (cholecystitis).</p>
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
FROM [[Gallbladder Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/gallbladder-disease/" class="internal-link">Gallbladder_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/amylase/" class="internal-link">amylase</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/lipase/" class="internal-link">lipase</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/bilirubin-urine/" class="internal-link">bilirubin_urine</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Gallbladder Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Gallbladder Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}