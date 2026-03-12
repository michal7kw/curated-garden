---
created: '2026-03-12T06:00:32.559810Z'
description: A chronic, progressive disease of the bile ducts characterized by inflammation,
  scarring, and narrowing of the ducts both inside and outside the liver.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/primary-sclerosing-cholangitis/
slug: primary-sclerosing-cholangitis
tags:
- condition
- hepatology
- gastroenterology
- autoimmune
- function-health
templateEngineOverride: njk
title: Primary Sclerosing Cholangitis
type: condition
updated: '2026-03-12T06:00:32.559810Z'
---

{% raw %}
<h1>Primary Sclerosing Cholangitis</h1>
<h2>Overview</h2>
<p>A chronic, progressive disease of the bile ducts characterized by inflammation, scarring, and narrowing of the ducts both inside and outside the liver.</p>
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
FROM [[Primary Sclerosing Cholangitis]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/primary-sclerosing-cholangitis/" class="internal-link">Primary_Sclerosing_Cholangitis</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Primary Sclerosing Cholangitis]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Primary Sclerosing Cholangitis]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}