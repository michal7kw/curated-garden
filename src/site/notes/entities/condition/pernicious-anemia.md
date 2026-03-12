---
created: '2026-03-12T06:00:32.538813Z'
description: An autoimmune condition characterized by the body's inability to absorb
  Vitamin B12 due to a lack of intrinsic factor, leading to megaloblastic anemia and
  neurological issues.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/pernicious-anemia/
slug: pernicious-anemia
tags:
- condition
- hematology
- immunology
- autoimmune
- function-health
templateEngineOverride: njk
title: Pernicious Anemia
type: condition
updated: '2026-03-12T06:00:32.538813Z'
---

{% raw %}
<h1>Pernicious Anemia</h1>
<h2>Overview</h2>
<p>An autoimmune condition characterized by the body's inability to absorb Vitamin B12 due to a lack of intrinsic factor, leading to megaloblastic anemia and neurological issues.</p>
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
FROM [[Pernicious Anemia]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/pernicious-anemia/" class="internal-link">Pernicious_Anemia</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/methylmalonic-acid/" class="internal-link">methylmalonic_acid</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Pernicious Anemia]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Pernicious Anemia]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}