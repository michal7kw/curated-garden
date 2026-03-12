---
created: '2026-03-12T06:00:32.487129Z'
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/myalgia/
slug: myalgia
tags:
- condition
templateEngineOverride: njk
title: Myalgia
type: condition
updated: '2026-03-12T06:00:32.487129Z'
---

{% raw %}
<h1>Myalgia</h1>
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
FROM [[Myalgia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a class="internal-link is-unresolved" href="/404">INDOMETHACIN</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/pain/" class="internal-link">Pain</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Myalgia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Myalgia]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}