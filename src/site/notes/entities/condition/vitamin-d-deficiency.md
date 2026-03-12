---
created: '2026-03-12T06:00:32.624952Z'
description: A condition characterized by inadequate levels of vitamin D in the body,
  which is essential for calcium absorption, bone health, and immune function.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/vitamin-d-deficiency/
slug: vitamin-d-deficiency
tags:
- condition
- nutrition
- metabolic
- bone_health
- function-health
templateEngineOverride: njk
title: Vitamin D Deficiency
type: condition
updated: '2026-03-12T06:00:32.624952Z'
---

{% raw %}
<h1>vitamin_d_deficiency</h1>
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
FROM [[vitamin_d_deficiency]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Requires Biomarker</h3>
<p>REQUIRES_BIOMARKER::<a class="internal-link is-unresolved" href="/404">25-OH_Vitamin_D</a></p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/garden/michal.k7w@gmail.com/condition/osteoporosis/" class="internal-link">Osteoporosis</a><br />
INCREASES_RISK_FOR::<a href="/garden/michal.k7w@gmail.com/condition/depression/" class="internal-link">Depression</a><br />
INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Immune_Dysfunction</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Vitamin_D3</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-k2/" class="internal-link">Vitamin_K2</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a></p>
<h3>Modulated By Pathway</h3>
<p>MODULATED_BY_PATHWAY::<a class="internal-link is-unresolved" href="/404">Calcium_Homeostasis</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/vitamin-d-deficiency/" class="internal-link">vitamin_d_deficiency</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">25-OH_Vitamin_D</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/osteoporosis/" class="internal-link">Osteoporosis</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/depression/" class="internal-link">Depression</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Immune_Dysfunction</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Vitamin_D3</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-k2/" class="internal-link">Vitamin_K2</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/magnesium/" class="internal-link">Magnesium</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Calcium_Homeostasis</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Bones</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Immune_System</a></p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Bones</a><br />
AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Immune_System</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[vitamin_d_deficiency]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[vitamin_d_deficiency]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/vitamin-d-deficiency/" class="internal-link">Vitamin_D_Deficiency</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/alkaline-phosphatase-alp/" class="internal-link">alkaline_phosphatase_alp</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/calcium/" class="internal-link">calcium</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-d/" class="internal-link">vitamin_d</a></p>
<h3>Modulated By Pathway</h3>
<h3>Improved By Supplement</h3>
<h3>Increases Risk For</h3>
<h3>Requires Biomarker</h3>
<h3>Affects Organ</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}