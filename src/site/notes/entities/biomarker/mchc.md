---
aliases:
- Mchc
created: '2026-04-21T16:52:58.138470Z'
description: Mean Corpuscular Hemoglobin Concentration (MCHC) measures the average
  concentration or tightly packed density of hemoglobin per unit volume in a red blood
  cell. It distinctly categorizes red blood cells as hypochromic (pale) or normochromic,
  making it a critical differentiator between basic anemia and spherocytosis.
dg-home: false
dg-publish: true
permalink: /entities/biomarker/mchc/
slug: mchc
tags:
- biomarker
- hematology
- rbc_index
- anemia_diagnostic
templateEngineOverride: njk
title: MCHC
type: biomarker
updated: '2026-04-21T16:52:58.138470Z'
---

{% raw %}
<h1>Mean Corpuscular Hemoglobin Concentration (MCHC)</h1>
<h2>Overview</h2>
<p>Unlike MCH (which measures absolute weight) and MCV (which measures absolute size), Mean Corpuscular Hemoglobin Concentration (MCHC) isolates the strict geometric density of the hemoglobin packed inside the internal volume of the red blood cell. It is classically expressed in grams per deciliter (g/dL).</p>
<p>Biologically under the microscope, MCHC represents the &quot;color map&quot; of the blood slide. A standard healthy cell operates within 32-36 g/dL. If the cell physically lacks iron resulting in insufficient synthesis to pack the volume (dropping below 32 g/dL), it physically appears intensely pale under microscopy. This physiological condition is known formally as <em>hypochromasia</em>.</p>
<p>While MCH and MCV usually trend identically, MCHC is unique: an RBC cannot physiologically be &quot;hyperchromic&quot; due to chemical solubility limits. Hemoglobin crashes out of solution above 37 g/dL. Therefore, a truly elevated MCHC (&gt; 36 g/dL) is rare and intensely specific diagnostic indicator—it means the cell has structurally dehydrated or lost surface area membrane without losing its internal hemoglobin mass, forcefully crowding the remaining proteins. This makes MCHC the premier diagnostic flag for severe Hereditary Spherocytosis and auto-immune hemolytic events.</p>
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
<td>Hypochromic (Low Concentration)</td>
<td>&lt; 32 g/dL</td>
<td>Inadequate hemoglobin density. Pronounced paleness across smear; definitive signal for iron deficiency or thalassemia trait.</td>
</tr>
<tr>
<td>Normochromic</td>
<td>32 - 36 g/dL</td>
<td>The biological ideal hemoglobin-to-volume ratio ensuring maximal oxygen affinity.</td>
</tr>
<tr>
<td>&quot;Hyperchromic&quot; (High MCHC)</td>
<td>&gt; 36 g/dL</td>
<td>Dense crowding. Hallmark of membrane loss (spherocytosis) or profound cellular dehydration.</td>
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
<td>g/dL (Grams per Deciliter)</td>
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
<td>Included standard on every automated Complete Blood Count (CBC)</td>
</tr>
</tbody>
</table>
<h2>Factors Affecting Levels</h2>
<h3>Factors that Increase MCHC (Dense/Spherocytic)</h3>
<ul>
<li><strong>Hereditary Spherocytosis:</strong> A classic autosomal dominant defect in the RBC cytoskeleton (spectrin/ankyrin) causing the cell to progressively shred off bits of its outer lipid membrane as it squeezes through splenic sinuses. The resulting sphere loses volume while retaining its hemoglobin mass, causing the internal hemoglobin concentration to drastically spike.</li>
<li><strong>Cold Agglutinin Disease:</strong> A lab artifact where auto-antibodies forcibly clump RBCs together during automated analysis in the machine, causing false immense spikes in MCHC readouts.</li>
</ul>
<h3>Factors that Decrease MCHC (Hypochromic)</h3>
<ul>
<li><strong><a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a>:</strong> Without systemic iron to power synthesis, the bone marrow generates pale, under-filled &quot;hollow&quot; red blood cells. Characterized clinically as microcytic, hypochromic anemia.</li>
<li><strong>Thalassemia / Sideroblastic Blocks:</strong> Similar structural or genetic blocks to heme/globin union that leave the internal stroma empty.</li>
</ul>
<h2>Clinical Significance</h2>
<p>Elevated levels (&gt; 36 g/dL) strongly predict:</p>
<ul>
<li><strong>Hereditary Spherocytosis</strong></li>
<li><strong>Autoimmune Hemolytic Anemia</strong></li>
</ul>
<p>Reduced levels (&lt; 32 g/dL) strongly predict:</p>
<ul>
<li><strong><a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a></strong></li>
</ul>
<h2>Strategies to Manage</h2>
<ol>
<li><strong>Repleting Ferritin Storage:</strong> Resolving baseline depletion using therapeutic <a href="/entities/supplement/iron/" class="internal-link">Iron</a> normalizes the mass-to-volume density of newly manufactured marrow cells, shifting blood morphology from hypochromic back to rich normochromic over 120 days.</li>
<li><strong>Monitoring Splenic Destruction:</strong> High MCHC spherocytosis frequently mandates surgical splenectomy to stop destructive RBC recycling cascades if symptoms are highly deleterious.</li>
</ol>
<h2>Relationships</h2>
<h3>Indicates Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/blood/" class="internal-link">Blood</a><br />
INDICATES_ORGAN_HEALTH::<a href="/entities/organ/spleen/" class="internal-link">Spleen</a></p>
<h3>Associated With Condition</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Anemia</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/iron-deficiency/" class="internal-link">Iron Deficiency</a></p>
<h3>Correlated With</h3>
<p>CORRELATED_WITH::<a href="/entities/biomarker/mcv/" class="internal-link">MCV</a><br />
CORRELATED_WITH::<a href="/entities/biomarker/mch/" class="internal-link">MCH</a><br />
CORRELATED_WITH::<a href="/entities/labtest/hemoglobin/" class="internal-link">Hemoglobin</a><br />
CORRELATED_WITH::<a href="/entities/supplement/iron/" class="internal-link">Iron</a></p>
<h3>Affected By Supplement</h3>
<p>AFFECTED_BY_SUPPLEMENT::<a href="/entities/supplement/iron/" class="internal-link">Iron</a></p>
<h3>Included In</h3>
<p>INCLUDED_IN::<a href="/entities/labtest/complete-blood-count/" class="internal-link">Complete Blood Count</a></p>
<h2>References</h2>
<ul>
<li><em>Michaels LA, et al. Blood. 1997</em> -- Screening for hereditary spherocytosis by use of automated erythrocyte indexes (PMID: 9116279)</li>
<li><em>Tefferi A. Mayo Clin Proc. 2005</em> -- How to interpret and pursue an abnormal complete blood cell count in adults. (PMID: 16007898)</li>
</ul>

{% endraw %}