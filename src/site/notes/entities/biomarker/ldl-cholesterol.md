---
created: '2026-04-19T18:22:19.116687Z'
description: Low-density lipoprotein cholesterol (LDL-C) is the primary atherogenic
  lipoprotein and the main target of lipid-lowering therapy. Elevated LDL-C is a causal
  risk factor for atherosclerotic cardiovascular disease (ASCVD), with each 1 mmol/L
  (38.7 mg/dL) reduction associated with a 22% relative risk reduction in major cardiovascular
  events.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/ldl-cholesterol/
slug: ldl-cholesterol
tags:
- biomarker
templateEngineOverride: njk
title: LDL Cholesterol
type: biomarker
updated: '2026-04-19T18:22:19.116687Z'
---

{% raw %}
<h1>LDL Cholesterol</h1>
<h2>Overview</h2>
<p>Low-density lipoprotein cholesterol (LDL-C) is the primary carrier of cholesterol in the blood and the principal atherogenic lipoprotein. LDL particles transport cholesterol from the liver to peripheral tissues. When LDL-C levels are elevated, LDL particles infiltrate the arterial wall, undergo oxidation, and are taken up by macrophages to form foam cells — the hallmark of early atherosclerosis.</p>
<p>LDL-C is the primary target of lipid-lowering therapy and the cornerstone of cardiovascular risk assessment. The relationship between LDL-C and cardiovascular risk is log-linear: there is no lower threshold below which risk reduction ceases. This was confirmed by Mendelian randomization studies and clinical trials of PCSK9 inhibitors.</p>
<p>Modern guidelines (ACC/AHA 2018, ESC/EAS 2019) use LDL-C as the basis for risk-enhancing factor assessment and treatment decisions. While the Friedewald formula has traditionally estimated LDL-C, newer methods like the Martin/Hopkins algorithm and direct assays provide more accurate results, especially at LDL-C &lt;70 mg/dL.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Category</th>
<th>Range</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr>
<td>Optimal</td>
<td>&lt;100</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Near/above optimal</td>
<td>100–129</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Borderline high</td>
<td>130–159</td>
<td>mg/dL</td>
</tr>
<tr>
<td>High</td>
<td>160–189</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Very high</td>
<td>≥190</td>
<td>mg/dL</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>ASCVD risk targets:</strong> Very high risk &lt;55 mg/dL, High risk &lt;70 mg/dL, Moderate risk &lt;100 mg/dL, Low risk &lt;116 mg/dL (ESC/EAS 2019).</li>
<li>Lipoprotein(a) and ApoB provide additional risk information beyond LDL-C alone.</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated LDL-C:</strong></p>
<ul>
<li>Familial hypercholesterolemia (FH): LDL-C ≥190 mg/dL suggests possible FH</li>
<li>Atherosclerotic cardiovascular disease (causal relationship)</li>
<li>Hypothyroidism, nephrotic syndrome, cholestasis</li>
<li>Dietary: high saturated fat, trans fat intake</li>
</ul>
<p><strong>Reduced LDL-C:</strong></p>
<ul>
<li>Statin therapy, PCSK9 inhibitors, ezetimibe</li>
<li>Malnutrition, liver disease (reduced production)</li>
<li>Hyperthyroidism</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a></p>
<h3>Increases Risk For</h3>
<p>INCREASES_RISK_FOR::<a href="/entities/condition/cardiovascular-disease/" class="internal-link">Cardiovascular Disease</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a class="internal-link is-unresolved" href="/404">Atherosclerosis</a> (when elevated, Evidence Level 1a)<br />
INCREASES_RISK_FOR::<a href="/entities/condition/stroke/" class="internal-link">Stroke</a> (when elevated, Evidence Level 1a)</p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/berberine/" class="internal-link">Berberine</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[LDL Cholesterol]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}