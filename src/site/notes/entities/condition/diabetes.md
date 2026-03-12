---
created: '2026-03-12T06:00:32.349996Z'
description: Diabetes mellitus is a group of metabolic diseases characterized by high
  blood sugar levels over a prolonged period. This high blood sugar can cause symptoms
  such as frequent urination, increased thirst, and increased hunger. If left untreated,
  diabetes can cause many complications.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/diabetes/
slug: diabetes
tags:
- condition
- metabolic
- chronic
templateEngineOverride: njk
title: Diabetes
type: condition
updated: '2026-03-12T06:00:32.349996Z'
---

{% raw %}
<h1>Diabetes</h1>
<h2>Overview</h2>
<p>Diabetes mellitus is a group of metabolic diseases characterized by high blood sugar levels over a prolonged period. This high blood sugar can cause symptoms such as frequent urination, increased thirst, and increased hunger. If left untreated, diabetes can cause many complications.</p>
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
FROM [[Diabetes]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Complicates</h3>
<p>COMPLICATES::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a></p>
<h3>Worsened By Condition</h3>
<h3>Worsened By Intervention</h3>
<p>AFFECTED_BY_INTERVENTION::<a href="/garden/michal.k7w@gmail.com/intervention/keto-diet/" class="internal-link">Keto_Diet</a></p>
<h3>May Improve Condition</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/berberine/" class="internal-link">Berberine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/metabolite/glucose/" class="internal-link">Glucose</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/intervention/keto-diet/" class="internal-link">Keto_Diet</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-d/" class="internal-link">Vitamin_D</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/glucose-urine/" class="internal-link">glucose_urine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>May Detect</h3>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Diabetes]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Diabetes]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h3>Affected By Intervention</h3>
<h3>Worsened By Intervention</h3>
<h3>Complicates</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}