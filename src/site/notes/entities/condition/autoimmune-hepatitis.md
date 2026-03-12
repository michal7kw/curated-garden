---
created: '2026-03-12T06:00:32.264861Z'
description: A chronic liver disease in which the body's immune system mistakenly
  attacks liver cells, causing inflammation and liver damage.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/autoimmune-hepatitis/
slug: autoimmune-hepatitis
tags:
- condition
- hepatology
- immunology
- autoimmune
- function-health
templateEngineOverride: njk
title: Autoimmune Hepatitis
type: condition
updated: '2026-03-12T06:00:32.264861Z'
---

{% raw %}
<h1>Autoimmune Hepatitis</h1>
<h2>Overview</h2>
<p>A chronic liver disease in which the body's immune system mistakenly attacks liver cells, causing inflammation and liver damage.</p>
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
FROM [[Autoimmune Hepatitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/autoimmune-hepatitis/" class="internal-link">Autoimmune_Hepatitis</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/phenotype/arthralgia/" class="internal-link">Arthralgia</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/phenotype/abdominal-pain/" class="internal-link">Abdominal_pain</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/phenotype/anxiety/" class="internal-link">Anxiety</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Autoimmune Hepatitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Autoimmune Hepatitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}