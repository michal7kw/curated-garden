---
created: '2026-03-12T06:00:32.337243Z'
description: A type of heart disease characterized by the narrowing or blockage of
  the coronary arteries, usually caused by atherosclerosis, which reduces blood flow
  to the heart muscle.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/coronary-artery-disease/
slug: coronary-artery-disease
tags:
- condition
- cardiology
- vascular
- chronic
- function-health
templateEngineOverride: njk
title: Coronary Artery Disease
type: condition
updated: '2026-03-12T06:00:32.337243Z'
---

{% raw %}
<h1>Coronary Artery Disease</h1>
<h2>Overview</h2>
<p>A type of heart disease characterized by the narrowing or blockage of the coronary arteries, usually caused by atherosclerosis, which reduces blood flow to the heart muscle.</p>
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
FROM [[Coronary Artery Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/coronary-artery-disease/" class="internal-link">Coronary_Artery_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/clinicalpattern/cardiovascular-risk-pattern/" class="internal-link">Cardiovascular_Risk_Pattern</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Coronary Artery Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Coronary Artery Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}