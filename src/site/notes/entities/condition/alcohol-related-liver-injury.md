---
created: '2026-03-12T06:00:32.237141Z'
description: A spectrum of liver damage resulting from excessive alcohol consumption,
  ranging from fatty liver to cirrhosis.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/alcohol-related-liver-injury/
slug: alcohol-related-liver-injury
tags:
- condition
- hepatology
- gastroenterology
- addiction
- function-health
templateEngineOverride: njk
title: Alcohol-Related Liver Injury
type: condition
updated: '2026-03-12T06:00:32.237141Z'
---

{% raw %}
<h1>Alcohol-Related Liver Injury</h1>
<h2>Overview</h2>
<p>A spectrum of liver damage resulting from excessive alcohol consumption, ranging from fatty liver to cirrhosis.</p>
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
FROM [[Alcohol-Related Liver Injury]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/alcohol-related-liver-injury/" class="internal-link">Alcohol-Related_Liver_Injury</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/alanine-transaminase-alt/" class="internal-link">alanine_transaminase_alt</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/aspartate-aminotransferase-ast/" class="internal-link">aspartate_aminotransferase_ast</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/gamma-glutamyl-transferase-ggt/" class="internal-link">gamma_glutamyl_transferase_ggt</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Alcohol-Related Liver Injury]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Alcohol-Related Liver Injury]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}