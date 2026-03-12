---
created: '2026-03-12T06:00:32.606506Z'
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/
slug: thyroid-dysfunction
tags:
- condition
templateEngineOverride: njk
title: Thyroid Dysfunction
type: condition
updated: '2026-03-12T06:00:32.606506Z'
---

{% raw %}
<h1>Thyroid Dysfunction</h1>
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
FROM [[thyroid_dysfunction]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Requires Biomarker</h3>
<p>REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/labtest/tsh/" class="internal-link">TSH</a><br />
REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/biomarker/free-t4/" class="internal-link">Free_T4</a><br />
REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/biomarker/free-t3/" class="internal-link">Free_T3</a></p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Hypothyroidism</a><br />
INCREASES_RISK_FOR::<a href="/garden/michal.k7w@gmail.com/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a><br />
INCREASES_RISK_FOR::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a href="/garden/michal.k7w@gmail.com/supplement/zinc/" class="internal-link">Zinc</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/michal.k7w@gmail.com/supplement/selenium/" class="internal-link">Selenium</a></p>
<h3>Modulated By Pathway</h3>
<p>MODULATED_BY_PATHWAY::<a class="internal-link is-unresolved" href="/404">Thyroid_Hormone_Synthesis</a></p>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/tsh/" class="internal-link">TSH</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/biomarker/free-t4/" class="internal-link">Free_T4</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/biomarker/free-t3/" class="internal-link">Free_T3</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Hypothyroidism</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/hyperthyroidism/" class="internal-link">Hyperthyroidism</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/zinc/" class="internal-link">Zinc</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/selenium/" class="internal-link">Selenium</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Thyroid_Hormone_Synthesis</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Thyroid</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Heart</a></p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Thyroid</a><br />
AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Heart</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[thyroid_dysfunction]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[thyroid_dysfunction]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/sex-hormone-binding-globulin-shbg/" class="internal-link">sex_hormone_binding_globulin_shbg</a></p>
<h3>Modulated By Pathway</h3>
<h3>Increases Risk For</h3>
<h3>Requires Biomarker</h3>
<h3>Improved By Supplement</h3>
<h3>Affects Organ</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}