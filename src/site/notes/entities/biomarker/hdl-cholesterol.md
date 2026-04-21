---
created: '2026-04-21T16:52:58.102183Z'
description: High-density lipoprotein cholesterol (HDL-C) is the cardioprotective
  lipoprotein fraction responsible for reverse cholesterol transport — moving cholesterol
  from peripheral tissues and arterial walls back to the liver for excretion. Low
  HDL-C is a component of metabolic syndrome and an independent cardiovascular risk
  factor.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/hdl-cholesterol/
slug: hdl-cholesterol
tags:
- biomarker
templateEngineOverride: njk
title: HDL Cholesterol
type: biomarker
updated: '2026-04-21T16:52:58.102183Z'
---

{% raw %}
<h1>HDL Cholesterol</h1>
<h2>Overview</h2>
<p>High-density lipoprotein cholesterol (HDL-C) is the fraction of cholesterol carried by HDL particles, which perform reverse cholesterol transport (RCT) — the process of removing excess cholesterol from arterial walls and peripheral tissues and returning it to the liver for biliary excretion. HDL particles also have anti-inflammatory, antioxidant, and endothelial-protective properties.</p>
<p>Epidemiologically, low HDL-C is inversely associated with cardiovascular risk: each 1 mg/dL increase in HDL-C is associated with a 2-3% reduction in cardiovascular risk. Low HDL-C is one of the five diagnostic criteria for metabolic syndrome. However, Mendelian randomization studies and clinical trials of CETP inhibitors (which raise HDL-C) suggest that pharmacologically raising HDL-C alone may not reduce cardiovascular risk — the protective effect may be more about HDL function than concentration.</p>
<p>HDL-C is measured as part of the standard lipid panel. Secondary causes of low HDL-C include smoking, sedentary lifestyle, obesity, insulin resistance, and certain medications (beta-blockers, anabolic steroids).</p>
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
<td>Optimal (men &amp; women)</td>
<td>&gt;60</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Acceptable (men)</td>
<td>40–59</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Acceptable (women)</td>
<td>50–59</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Low (men)</td>
<td>&lt;40</td>
<td>mg/dL</td>
</tr>
<tr>
<td>Low (women)</td>
<td>&lt;50</td>
<td>mg/dL</td>
</tr>
</tbody>
</table>
<ul>
<li>HDL-C &gt;60 mg/dL is considered cardioprotective and counts as a negative risk factor in ASCVD risk calculation.</li>
<li>Very high HDL-C (&gt;100 mg/dL) may indicate genetic variants (e.g., CETP deficiency) and is not always protective.</li>
</ul>
<h2>Clinical Significance</h2>
<p><strong>Elevated HDL-C (favorable):</strong></p>
<ul>
<li>Regular aerobic exercise</li>
<li>Moderate alcohol consumption</li>
<li>Omega-3 fatty acid supplementation</li>
<li>Niacin therapy</li>
<li>Genetic factors (CETP deficiency, APOA1 variants)</li>
</ul>
<p><strong>Reduced HDL-C (unfavorable):</strong></p>
<ul>
<li>Metabolic syndrome / insulin resistance</li>
<li>Sedentary lifestyle</li>
<li>Smoking</li>
<li>Obesity (especially visceral adiposity)</li>
<li>Type 2 diabetes</li>
<li>Genetic conditions (Tangier disease, LCAT deficiency)</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/heart/" class="internal-link">Heart</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/omega-3-fatty-acids/" class="internal-link">Omega-3_Fatty_Acids</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/niacin/" class="internal-link">Niacin</a></p>
<h2>ReferencesNo references available.</h2>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[HDL Cholesterol]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}