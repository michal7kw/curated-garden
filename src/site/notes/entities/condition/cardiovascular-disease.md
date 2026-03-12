---
created: '2026-03-12T06:00:32.298549Z'
description: A broad group of disorders of the heart and blood vessels, often caused
  by atherosclerosis and leading to events such as heart attacks and strokes.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/cardiovascular-disease/
slug: cardiovascular-disease
tags:
- condition
- cardiology
- vascular
- chronic
- function-health
templateEngineOverride: njk
title: Cardiovascular Disease
type: condition
updated: '2026-03-12T06:00:32.298549Z'
---

{% raw %}
<h1>Cardiovascular Disease</h1>
<h2>Overview</h2>
<p>A broad group of disorders of the heart and blood vessels, often caused by atherosclerosis and leading to events such as heart attacks and strokes.</p>
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
FROM [[Cardiovascular Disease]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>May Detect</h3>
<h3>Increases Risk For</h3>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/apolipoprotein-b-apob/" class="internal-link">apolipoprotein_b_apob</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hdl-cholesterol/" class="internal-link">hdl_cholesterol</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/hdl-large/" class="internal-link">hdl_large</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-cholesterol/" class="internal-link">ldl_cholesterol</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-medium/" class="internal-link">ldl_medium</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-particle-number/" class="internal-link">ldl_particle_number</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-pattern/" class="internal-link">ldl_pattern</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-peak-size/" class="internal-link">ldl_peak_size</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ldl-small/" class="internal-link">ldl_small</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/non-hdl-cholesterol/" class="internal-link">non_hdl_cholesterol</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/total-cholesterol/" class="internal-link">total_cholesterol</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/total-cholesterol-hdl-ratio/" class="internal-link">total_cholesterol_hdl_ratio</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/triglycerides/" class="internal-link">triglycerides</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/arachidonic-acid-epa-ratio/" class="internal-link">arachidonic_acid_epa_ratio</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/mean-platelet-volume-mpv/" class="internal-link">mean_platelet_volume_mpv</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/uric-acid/" class="internal-link">uric_acid</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/chronic-inflammation/" class="internal-link">Chronic_Inflammation</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/clinicalpattern/kidney-stress-pattern/" class="internal-link">Kidney_Stress_Pattern</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/metabolic-syndrome/" class="internal-link">Metabolic_Syndrome</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">Thyroid_Dysfunction</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Cardiovascular Disease]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Cardiovascular Disease]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/intervention/mediterranean-diet/" class="internal-link">Mediterranean_Diet</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/thyroid-dysfunction/" class="internal-link">thyroid_dysfunction</a></p>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}