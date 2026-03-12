---
created: '2026-03-12T06:00:32.634418Z'
description: A large group of diseases characterized by the uncontrolled growth and
  spread of abnormal cells, which can invade nearby tissues and metastasize to distant
  organs.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/cancer/
slug: cancer
tags:
- condition
- oncology
- malignant_neoplasm
- genetic_disorder
templateEngineOverride: njk
title: Cancer
type: condition
updated: '2026-03-12T06:00:32.634418Z'
---

{% raw %}
<h1>Cancer</h1>
<h2>Overview</h2>
<p>A large group of diseases characterized by the uncontrolled growth and spread of abnormal cells, which can invade nearby tissues and metastasize to distant organs.</p>
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
FROM [[Cancer]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Increases Risk For</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Cancer]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Cancer]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/gene/ctcf/" class="internal-link">CTCF</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/gene/src/" class="internal-link">SRC</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/gene/akt1/" class="internal-link">AKT1</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/gene/cdk2/" class="internal-link">CDK2</a></p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}