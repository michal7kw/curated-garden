---
created: '2026-03-12T06:00:32.426649Z'
description: A chronic, non-infectious condition causing bladder pressure, bladder
  pain, and sometimes pelvic pain, also known as bladder pain syndrome.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/interstitial-cystitis/
slug: interstitial-cystitis
tags:
- condition
- urology
- chronic_pain
- function-health
templateEngineOverride: njk
title: Interstitial Cystitis
type: condition
updated: '2026-03-12T06:00:32.426649Z'
---

{% raw %}
<h1>Interstitial Cystitis</h1>
<h2>Overview</h2>
<p>A chronic, non-infectious condition causing bladder pressure, bladder pain, and sometimes pelvic pain, also known as bladder pain syndrome.</p>
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
FROM [[Interstitial Cystitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/interstitial-cystitis/" class="internal-link">Interstitial_Cystitis</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/leukocyte-esterase-urine/" class="internal-link">leukocyte_esterase_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/leukocyte-urine/" class="internal-link">leukocyte_urine</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Interstitial Cystitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Interstitial Cystitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}