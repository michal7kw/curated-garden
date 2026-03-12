---
created: '2026-03-12T06:00:32.623415Z'
description: A condition where a blood clot forms in a vein, encompassing Deep Vein
  Thrombosis (DVT) and Pulmonary Embolism (PE).
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/venous-thromboembolism/
slug: venous-thromboembolism
tags:
- condition
- hematology
- cardiology
- vascular
- emergency
templateEngineOverride: njk
title: Venous Thromboembolism
type: condition
updated: '2026-03-12T06:00:32.623415Z'
---

{% raw %}
<h1>Venous Thromboembolism</h1>
<h2>Overview</h2>
<p>A condition where a blood clot forms in a vein, encompassing Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE).</p>
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
FROM [[Venous Thromboembolism]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/venous-thromboembolism/" class="internal-link">Venous_Thromboembolism</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Venous Thromboembolism]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Venous Thromboembolism]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<p>No relationships found.</p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}