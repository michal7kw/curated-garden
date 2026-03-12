---
created: '2026-03-12T06:00:32.342478Z'
description: A serious mood disorder characterized by persistent feelings of sadness,
  hopelessness, and a loss of interest in activities once enjoyed.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/depression/
slug: depression
tags:
- condition
- psychiatry
- mental_health
- function-health
templateEngineOverride: njk
title: Depression
type: condition
updated: '2026-03-12T06:00:32.342478Z'
---

{% raw %}
<h1>Depression</h1>
<h2>Overview</h2>
<p>A serious mood disorder characterized by persistent feelings of sadness, hopelessness, and a loss of interest in activities once enjoyed.</p>
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
FROM [[Depression]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/creatine/" class="internal-link">Creatine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/vitamin-d-deficiency/" class="internal-link">Vitamin_D_Deficiency</a></p>
<h3>May Improve Condition</h3>
<h3>Increases Risk For</h3>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Depression]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Depression]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/drug/imipramine/" class="internal-link">Imipramine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/drug/amitriptyline/" class="internal-link">Amitriptyline</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/vitamin-d-deficiency/" class="internal-link">vitamin_d_deficiency</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/drug/doxepin/" class="internal-link">Doxepin</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/drug/clomipramine/" class="internal-link">Clomipramine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/drug/quetiapine/" class="internal-link">Quetiapine</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Omega-3_DHA</a></p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}