---
created: '2026-03-12T06:00:32.447702Z'
description: A broad range of conditions that damage the liver and impair its essential
  functions, including detoxification, metabolism, and bile production.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/liver-disease/
slug: liver-disease
tags:
- condition
- hepatology
- gastroenterology
- function-health
templateEngineOverride: njk
title: Liver Disease
type: condition
updated: '2026-03-12T06:00:32.447702Z'
---

{% raw %}
<h1>Liver Disease</h1>
<h2>Overview</h2>
<p>A broad range of conditions that damage the liver and impair its essential functions, including detoxification, metabolism, and bile production.</p>
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
FROM [[Liver Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/liver-disease/" class="internal-link">Liver_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/iron/" class="internal-link">iron</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/iron-saturation/" class="internal-link">iron_saturation</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/iron-binding-capacity/" class="internal-link">iron_binding_capacity</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/total-protein/" class="internal-link">total_protein</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Liver Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Liver Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}