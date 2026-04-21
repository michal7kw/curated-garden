---
aliases:
- Mch
created: '2026-04-21T16:52:58.136441Z'
description: Mean Corpuscular Hemoglobin (MCH) is a hematological index that quantifies
  the absolute mass or weight of hemoglobin housed inside an average red blood cell.
  It is evaluated in parallel with MCV to characterize anemias.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/mch/
slug: mch
tags:
- biomarker
- hematology
- rbc_index
- anemia_diagnostic
templateEngineOverride: njk
title: MCH
type: biomarker
updated: '2026-04-21T16:52:58.136441Z'
---

{% raw %}
<h1>Mean Corpuscular Hemoglobin (MCH)</h1>
<h2>Overview</h2>
<p>Mean Corpuscular Hemoglobin (MCH) is an active diagnostic calculation used to determine the exact absolute mass, or weight, of the hemoglobin protein inside a singular red blood cell. It mathematically equals the total hemoglobin count divided by the total bulk RBC count.</p>
<p>MCH almost universally scales in parallel with Mean Corpuscular Volume (<a href="/entities/biomarker/mcv/" class="internal-link">MCV</a>). A physically larger cell (macrocytic, high MCV) inherently physically holds a greater total mass of hemoglobin, yielding a high MCH. Conversely, a physically small, shriveled cell (microcytic, low MCV) dictated by iron restriction will invariably contain a far lower absolute mass of hemoglobin, dragging the MCH down. Because it tracks size so closely, MCH alone offers relatively little independent diagnostic value outside of what MCV already predicts, but it remains a critical confirmatory sanity check within the complete blood count suite.</p>
<h2>Reference Ranges</h2>
<table>
<thead>
<tr>
<th>Range</th>
<th>Value</th>
<th>Interpretation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Low (Hypochromic proxy)</td>
<td>&lt; 27 pg</td>
<td>Suppressed total hemoglobin mass. Typically associated with extreme iron starvation or thalassemia.</td>
</tr>
<tr>
<td>Optimal / Normal</td>
<td>27 - 33 pg</td>
<td>Normal absolute mass of hemoglobin spanning standard RBCs.</td>
</tr>
<tr>
<td>High</td>
<td>&gt; 33 pg</td>
<td>Exorbitantly high mass strictly because the cell itself is physically immense (macrocytosis due to B12/folate defect).</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Measurement Unit</strong></td>
<td>pg (Picograms, $10^{-12}$ Grams)</td>
</tr>
<tr>
<td><strong>Sample Type</strong></td>
<td>Whole Blood (EDTA)</td>
</tr>
<tr>
<td><strong>Fasting Required</strong></td>
<td>No</td>
</tr>
<tr>
<td><strong>Test Frequency</strong></td>
<td>Systematically derived on every standard CBC</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<h3>Factors that Increase MCH</h3>
<ul>
<li><strong>B12 and Folate Degradation:</strong> Megaloblastic states prevent the marrow from splitting cells resulting in abnormally colossal RBCs that incidentally house a larger numerical mass of hemoglobin relative to standard cells.</li>
</ul>
<h3>Factors that Decrease MCH</h3>
<ul>
<li><strong><a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a>:</strong> The direct lack of bioavailable substrate halts hemoglobin formation at the molecular level, forcing the release of tiny red blood cells carrying abnormally low microscopic weight.</li>
</ul>
<h2>Clinical Significance</h2>
<p>Elevated levels (&gt; 33 pg) mirror MCV anomalies and confirm:</p>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Macrocytic Anemia</a></strong></li>
</ul>
<p>Reduced levels (&lt; 27 pg) are aggressively tied to:</p>
<ul>
<li><strong><a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a></strong></li>
</ul>
<h2>Strategies to Manage</h2>
<p>Like all hematological indices, managing MCH depends utterly on identifying the restriction factor causing the malformation:</p>
<ol>
<li>Re-establishing systemic iron pools with <a href="/entities/supplement/iron/" class="internal-link">Iron</a> safely boosts both MCV and MCH back to physiological norms over multiple weeks.</li>
<li>Neutralizing pernicious anemia or folate traps with <a href="/entities/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a> and <a href="/entities/supplement/folate/" class="internal-link">Folate</a> will shrink artificially heavy RBCs down to 27-32 pg.</li>
</ol>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/blood/" class="internal-link">Blood</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Macrocytic Anemia</a></p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/entities/biomarker/mcv/" class="internal-link">MCV</a><br />
CORRELATED_WITH::<a href="/entities/labtest/hemoglobin/" class="internal-link">Hemoglobin</a><br />
CORRELATED_WITH::<a href="/entities/supplement/iron/" class="internal-link">Iron</a><br />
CORRELATED_WITH::<a href="/entities/labtest/ferritin/" class="internal-link">Ferritin</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/iron/" class="internal-link">Iron</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/folate/" class="internal-link">Folate</a><br />
AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/vitamin-b12/" class="internal-link">Vitamin B12</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::<a href="/entities/labtest/complete-blood-count/" class="internal-link">Complete Blood Count</a></p>
<h2>References</h2>
<ul>
<li><em>Tenny S, Hoffman MR. StatPearls [Internet]. 2023</em> -- Mean Corpuscular Hemoglobin. (PMID: 31869151)</li>
<li><em>Tefferi A. Mayo Clin Proc. 2005</em> -- How to interpret and pursue an abnormal complete blood cell count in adults. (PMID: 16007898)</li>
</ul>

{% endraw %}