---
created: '2026-03-12T06:00:31.846285Z'
description: Blood Urea Nitrogen (BUN) measures the amount of urea nitrogen in the
  blood, a waste product of protein metabolism formed in the liver and excreted by
  the kidneys. It is a primary marker for assessing kidney function and hydration
  status.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/blood-urea-nitrogen/
slug: blood-urea-nitrogen
tags:
- biomarker
- kidney_health
- metabolic
- protein_metabolism
templateEngineOverride: njk
title: Blood Urea Nitrogen
type: biomarker
updated: '2026-03-12T06:00:31.846285Z'
---

{% raw %}
<h1>Blood Urea Nitrogen</h1>
<h2>Overview</h2>
<p>Blood Urea Nitrogen (BUN) is a metabolic byproduct of protein catabolism. When the body breaks down proteins, the liver converts the resulting ammonia into urea, which is then released into the bloodstream and transported to the kidneys for excretion. BUN reflects the balance between urea production in the liver and urea clearance by the kidneys.</p>
<p>Clinically, BUN is used alongside <a href="/garden/michal.k7w@gmail.com/labtest/creatinine/" class="internal-link">Creatinine</a> to evaluate renal function. However, BUN is more sensitive than creatinine to non-renal factors, such as hydration status, dietary protein intake, and gastrointestinal health. An elevated BUN-to-Creatinine ratio is a hallmark indicator of &quot;pre-renal&quot; azotemia, often caused by dehydration or decreased blood flow to the kidneys (e.g., in congestive heart failure).</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value (mg/dL)</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Optimal</strong></td>
<td>10 - 16</td>
<td>Associated with healthy protein balance and hydration</td>
</tr>
<tr>
<td><strong>Normal (Adults &lt;60)</strong></td>
<td>6 - 20</td>
<td>Standard laboratory reference range</td>
</tr>
<tr>
<td><strong>Normal (Adults &gt;60)</strong></td>
<td>8 - 23</td>
<td>Physiologically higher in older populations</td>
</tr>
<tr>
<td><strong>High (Azotemia)</strong></td>
<td>&gt; 20</td>
<td>Potential dehydration, high protein intake, or kidney stress</td>
</tr>
<tr>
<td><strong>Very High</strong></td>
<td>&gt; 50</td>
<td>Suggestive of significant renal impairment or GI bleeding</td>
</tr>
<tr>
<td><strong>Low</strong></td>
<td>&lt; 6</td>
<td>Potential low protein intake, overhydration, or liver disease</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: milligrams per deciliter (mg/dL) or millimoles per liter (mmol/L)</li>
<li><strong>Sample Type</strong>: Blood (Serum or Plasma)</li>
<li><strong>Fasting Required</strong>: False (though protein intake within 24 hours can affect results)</li>
<li><strong>Recommended Test Frequency</strong>: Annually; more frequent if monitoring kidney disease or managing diuretic therapy.</li>
</ul>
<h2>💊 Factors That Affect This Biomarker</h2>
<h3>Increasing BUN</h3>
<ul>
<li><strong>High-Protein Diet / Supplements:</strong> Excessive intake of <a class="internal-link is-unresolved" href="/404">Whey Protein</a> or amino acids increases urea production (High magnitude, Evidence Level 5).</li>
<li><strong>Dehydration:</strong> Reduced blood volume concentrates BUN levels (High magnitude, Evidence Level 5).</li>
<li><strong>Medications:</strong> Certain antibiotics (tetracyclines), corticosteroids, and <a class="internal-link is-unresolved" href="/404">NSAIDs</a> can elevate BUN levels.</li>
<li><strong>GI Bleeding:</strong> Digestion of blood proteins in the gut significantly increases urea production.</li>
</ul>
<h3>Decreasing BUN</h3>
<ul>
<li><strong>Low-Protein Diet / Malnutrition:</strong> Insufficient protein intake reduces urea production.</li>
<li><strong>Overhydration:</strong> Dilution of blood volume lowers measured BUN concentration.</li>
<li><strong>Liver Disease:</strong> Impaired ability of the liver to synthesize urea from ammonia.</li>
<li><strong>Pregnancy:</strong> Increased blood volume and GFR naturally lower BUN levels in the second and third trimesters.</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li><strong>BUN Blood Test</strong> - Standard enzymatic assay.</li>
</ul>
<h3>Panel Tests</h3>
<ul>
<li><a class="internal-link is-unresolved" href="/404">Comprehensive Metabolic Panel (CMP)</a> - Includes BUN, Creatinine, and the BUN/Creatinine ratio.</li>
<li><a class="internal-link is-unresolved" href="/404">Basic Metabolic Panel (BMP)</a> - standard electrolyte and kidney screen.</li>
<li><a href="/garden/michal.k7w@gmail.com/labtest/kidney-function-panel/" class="internal-link">Kidney Function Panel</a> - Specialized assessment of renal health.</li>
</ul>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a class="internal-link is-unresolved" href="/404">Kidneys</a></p>
<h3>Related</h3>
<p>RELATED::<a class="internal-link is-unresolved" href="/404">Bun</a></p>
<h2>References</h2>
<ul>
<li>PMID:17614129 - Valavanidis et al. (2009) Nitrogen metabolism and renal health.</li>
<li>PMID:30126252 - Gatta et al. (2018) Clinical interpretation of the BUN/Creatinine ratio.</li>
<li>UpToDate - Approach to the patient with an elevated blood urea nitrogen.</li>
<li>Mayo Clinic Laboratories - Urea Nitrogen (BUN), Serum.</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[Blood Urea Nitrogen]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}