---
created: '2026-03-12T06:00:32.238920Z'
description: Alcohol Use Disorder (AUD) is a chronic relapsing brain disorder characterized
  by compulsive alcohol use, loss of control over intake, and negative emotional state
  when not using. Also known as alcoholism, it involves both physical and psychological
  dependence on alcohol.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/alcoholism/
slug: alcoholism
tags:
- condition
- substance_use_disorder
- chronic
- mental_health
- addiction
templateEngineOverride: njk
title: Alcoholism
type: condition
updated: '2026-03-12T06:00:32.238920Z'
---

{% raw %}
<h1>Alcoholism</h1>
<h2>Overview</h2>
<p>Alcohol Use Disorder (AUD) is a chronic relapsing brain disorder characterized by compulsive alcohol use, loss of control over intake, and negative emotional state when not using. Also known as alcoholism, it involves both physical and psychological dependence on alcohol.</p>
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
FROM [[Alcoholism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/drug/prazosin/" class="internal-link">PRAZOSIN</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Alcoholism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Alcoholism]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}