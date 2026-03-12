---
created: '2026-03-12T06:00:32.522687Z'
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/pain/
slug: pain
tags:
- condition
templateEngineOverride: njk
title: Pain
type: condition
updated: '2026-03-12T06:00:32.522687Z'
---

{% raw %}
<h1>Pain</h1>
<h2>Overview</h2>
<p>No description available.</p>
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
FROM [[Pain]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Treats</h3>
<h3>Relatedtophenotype</h3>
<p>RELATED_TO_PHENOTYPE::<a href="/garden/michal.k7w@gmail.com/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a><br />
RELATED_TO_PHENOTYPE::<a href="/garden/michal.k7w@gmail.com/phenotype/arthralgia/" class="internal-link">Arthralgia</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Pain]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Pain]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>References</h2>
<p>No references available.</p>
<h2>Relationships</h2>

{% endraw %}