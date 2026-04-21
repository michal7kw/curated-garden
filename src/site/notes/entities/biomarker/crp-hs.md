---
created: '2026-04-21T16:52:58.069472Z'
description: High-sensitivity C-reactive protein (hs-CRP) is an acute-phase protein
  produced by the liver in response to systemic inflammation. It is a validated independent
  predictor of cardiovascular disease risk and is used to assess chronic low-grade
  inflammation distinct from acute infection.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/crp-hs/
slug: crp-hs
tags:
- biomarker
templateEngineOverride: njk
title: CRP (hs)
type: biomarker
updated: '2026-04-21T16:52:58.069472Z'
---

{% raw %}
<h1>CRP (hs)</h1>
<h2>Overview</h2>
<p>High-sensitivity C-reactive protein (hs-CRP) is a sensitive marker of systemic inflammation produced by the liver under the regulation of interleukin-6 (IL-6). Unlike standard CRP assays that detect acute inflammation (&gt;10 mg/L), the hs-CRP assay detects low-grade chronic inflammation in the 0.1–10 mg/L range, making it valuable for cardiovascular risk stratification.</p>
<p>The CDC/AHA have endorsed hs-CRP as an independent risk marker for cardiovascular disease. The JUPITER trial demonstrated that apparently healthy individuals with elevated hs-CRP (&gt;2 mg/L) but normal LDL cholesterol benefited from statin therapy, establishing hs-CRP as a clinically actionable biomarker.</p>
<p>hs-CRP reflects the inflammatory component of atherosclerosis rather than lipid burden. It complements lipid panels and is most useful in intermediate-risk patients where additional risk stratification may change management decisions.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>Range</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Low cardiovascular risk</td>
<td>&lt;1.0 mg/L</td>
<td>Low inflammatory burden</td>
</tr>
<tr>
<td>Average risk</td>
<td>1.0–3.0 mg/L</td>
<td>Moderate inflammatory burden</td>
</tr>
<tr>
<td>High risk</td>
<td>&gt;3.0 mg/L</td>
<td>Elevated cardiovascular risk</td>
</tr>
<tr>
<td>Acute inflammation</td>
<td>&gt;10 mg/L</td>
<td>Suggests acute infection or inflammation (not useful for CVD risk)</td>
</tr>
</tbody>
</table>
<ul>
<li>hs-CRP should be measured twice, two weeks apart, in a metabolically stable state (no acute illness in prior 2 weeks).</li>
<li>Values &gt;10 mg/L should prompt evaluation for acute infection or inflammation; repeat testing after resolution.</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated hs-CRP:</strong></p>
<ul>
<li>Cardiovascular disease risk (independent of LDL cholesterol)</li>
<li>Metabolic syndrome and insulin resistance</li>
<li>Autoimmune conditions (RA, lupus, IBD)</li>
<li>Chronic infections</li>
<li>Obesity (adipose tissue produces IL-6)</li>
<li>Smoking</li>
</ul>
<p><strong>Reduced hs-CRP:</strong></p>
<ul>
<li>Effective anti-inflammatory intervention</li>
<li>Low cardiovascular risk</li>
<li>Favorable metabolic profile</li>
<li>Regular exercise, Mediterranean diet, omega-3 supplementation</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a> (key predictor of cardiovascular risk from systemic inflammation, Evidence Level 1a)<br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/immune-system/" class="internal-link">Immune System</a> (acute phase reactant reflecting systemic inflammatory status, Evidence Level 1a)</p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a href="/entities/condition/type-2-diabetes/" class="internal-link">Type 2 Diabetes</a> (when elevated, Evidence Level 2a)</p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/vitamin-d/" class="internal-link">vitamin_d</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/curcumin/" class="internal-link">Curcumin</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/probiotics/" class="internal-link">Probiotics</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/nac/" class="internal-link">NAC</a></p>
<h3>Measured By Test</h3>
<p>MEASURED_BY_TEST::<a href="/entities/labtest/high-sensitivity-c-reactive-protein-hs-crp/" class="internal-link">high_sensitivity_c_reactive_protein_hs_crp</a><br />
MEASURED_BY_TEST::<a href="/entities/labtest/hs-crp/" class="internal-link">hs_crp</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[CRP (hs)]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}