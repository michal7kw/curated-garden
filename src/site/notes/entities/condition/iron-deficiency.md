---
created: '2026-03-12T06:00:32.430111Z'
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/condition/iron-deficiency/
slug: iron-deficiency
tags:
- condition
templateEngineOverride: njk
title: Iron Deficiency
type: condition
updated: '2026-03-12T06:00:32.430111Z'
---

{% raw %}
<h1>Iron Deficiency Pattern</h1>
<h2>Overview</h2>
<p>Iron deficiency indicated by low ferritin, elevated TIBC, and low transferrin saturation. Most common nutritional deficiency worldwide.</p>
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
FROM [[Iron Deficiency Pattern]] AND #intervention
SORT confidence_score DESC
</code></pre>
<h2>Other Relationships</h2>
<h3>Requires Biomarker</h3>
<p>REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/labtest/ferritin/" class="internal-link">Ferritin</a><br />
REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/biomarker/tibc/" class="internal-link">TIBC</a><br />
REQUIRES_BIOMARKER::<a href="/garden/michal.k7w@gmail.com/biomarker/transferrin-saturation/" class="internal-link">Transferrin_Saturation</a></p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/garden/michal.k7w@gmail.com/condition/iron-deficiency-anemia/" class="internal-link">Iron_Deficiency_Anemia</a><br />
INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Restless_Leg_Syndrome</a></p>
<h3>Affects Organ</h3>
<p>AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Bone_Marrow</a><br />
AFFECTS_ORGAN::<a class="internal-link is-unresolved" href="/404">Brain</a></p>
<h3>Improved By Supplement</h3>
<p>IMPROVED_BY_SUPPLEMENT::<a class="internal-link is-unresolved" href="/404">Iron_Bisglycinate</a><br />
IMPROVED_BY_SUPPLEMENT::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-c/" class="internal-link">Vitamin_C</a></p>
<h3>Modulated By Pathway</h3>
<p>MODULATED_BY_PATHWAY::<a class="internal-link is-unresolved" href="/404">Iron_Metabolism</a></p>
<h3>Related</h3>
<p>RELATED::<a class="internal-link is-unresolved" href="/404">Iron_Deficiency_Pattern</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/ferritin/" class="internal-link">Ferritin</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/biomarker/tibc/" class="internal-link">TIBC</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/biomarker/transferrin-saturation/" class="internal-link">Transferrin_Saturation</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/iron-deficiency-anemia/" class="internal-link">Iron_Deficiency_Anemia</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Restless_Leg_Syndrome</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Bone_Marrow</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Brain</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Iron_Bisglycinate</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/vitamin-c/" class="internal-link">Vitamin_C</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Iron_Metabolism</a></p>
<h2>Research</h2>
<h3>Recent Studies</h3>
<pre><code class="language-dataview">LIST
FROM [[Iron Deficiency Pattern]] AND #research
WHERE date &gt;= date(today) - dur(1 year)
SORT date DESC
</code></pre>
<h3>Clinical Trials</h3>
<pre><code class="language-dataview">LIST status
FROM [[Iron Deficiency Pattern]] AND #clinical-trial
SORT date DESC
</code></pre>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/condition/iron-deficiency/" class="internal-link">Iron_Deficiency</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/condition/iron-deficiency/" class="internal-link">iron_deficiency</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/iron-binding-capacity/" class="internal-link">iron_binding_capacity</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/iron/" class="internal-link">iron</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/labtest/iron-saturation/" class="internal-link">iron_saturation</a></p>
<h3>Modulated By Pathway</h3>
<h3>Improved By Supplement</h3>
<h3>Affects Organ</h3>
<h3>Increases Risk For</h3>
<h3>Requires Biomarker</h3>
<h2>References</h2>
<p>No references available.</p>

{% endraw %}