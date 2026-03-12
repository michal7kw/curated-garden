---
created: '2026-03-12T06:00:31.754292Z'
description: 8-hydroxy-2'-deoxyguanosine is a modified nucleoside produced by oxidative
  damage to DNA. It is the most widely used biomarker of oxidative DNA damage and
  reflects the balance between oxidative stress and DNA repair capacity.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/biomarker/8-ohdg/
slug: 8-ohdg
tags:
- biomarker
templateEngineOverride: njk
title: 8-OHdG
type: biomarker
updated: '2026-03-12T06:00:31.754292Z'
---

{% raw %}
<h1>8-OHdG</h1>
<h2>Overview</h2>
<p>8-hydroxy-2'-deoxyguanosine (8-OHdG) is an oxidized derivative of deoxyguanosine, one of the four DNA nucleosides. It is formed when reactive oxygen species (ROS) attack the C-8 position of guanine in DNA. When the cell's DNA repair mechanisms (primarily base excision repair via OGG1 glycosylase) excise damaged 8-OHdG from the genome, the modified nucleoside is released into the bloodstream and excreted in urine without further metabolism.</p>
<p>This makes urinary 8-OHdG an ideal non-invasive biomarker of whole-body oxidative DNA damage. The level reflects both the rate of oxidative attack on DNA and the capacity of the repair machinery. It has been validated in hundreds of epidemiological studies as a marker of oxidative stress exposure from environmental toxins, cigarette smoke, radiation, chronic inflammation, and metabolic disorders.</p>
<p>Elevated 8-OHdG is associated with increased cancer risk (particularly lung, breast, and liver cancers), cardiovascular disease, neurodegenerative disorders, diabetes complications, and accelerated aging. It is considered a better measure of oxidative stress than lipid peroxidation markers because DNA damage has more direct mutagenic and carcinogenic consequences.</p>
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
<td><strong>Normal</strong></td>
<td>5-20 ng/mL (urine)</td>
<td>Baseline oxidative DNA damage</td>
</tr>
<tr>
<td><strong>Elevated</strong></td>
<td>20-40 ng/mL</td>
<td>Increased oxidative stress</td>
</tr>
<tr>
<td><strong>High</strong></td>
<td>&gt;40 ng/mL</td>
<td>Significant DNA damage; cancer risk elevated</td>
</tr>
<tr>
<td><strong>Optimal</strong></td>
<td>&lt;10 ng/mL</td>
<td>Low oxidative DNA damage</td>
</tr>
</tbody>
</table>
<h2>Testing Information</h2>
<ul>
<li><strong>Measurement Unit</strong>: ng/mL (urine) or ng/mg creatinine (creatinine-adjusted)</li>
<li><strong>Sample Type</strong>: Urine (spot or 24-hour)</li>
<li><strong>Fasting Required</strong>: False</li>
<li><strong>Recommended Test Frequency</strong>: As clinically indicated</li>
</ul>
<h2>💊 Supplements That Affect This Biomarker</h2>
<ul>
<li><a class="internal-link is-unresolved" href="/404">CoQ10</a> - Decreases by protecting mitochondrial DNA from oxidation (moderate effect, evidence level 2)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/vitamin-c/" class="internal-link">Vitamin C</a> - Reduces oxidative DNA damage (moderate effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/nac/" class="internal-link">NAC</a> - Supports glutathione which protects DNA from oxidative damage (mild effect, evidence level 3)</li>
<li><a href="/garden/michal.k7w@gmail.com/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a> - Regenerates antioxidants that protect DNA (mild effect, evidence level 3)</li>
</ul>
<h2>🧪 Lab Tests That Measure This Biomarker</h2>
<h3>Direct Tests</h3>
<ul>
<li>8-OHdG urine test - ELISA or LC-MS/MS measurement</li>
<li><a href="/garden/michal.k7w@gmail.com/labtest/nutreval-fmv/" class="internal-link">nutreval fmv</a> - May include oxidative stress markers</li>
</ul>
<h2>Relationships</h2>
<h3>Correlations</h3>
<p>CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/biomarker/f2-isoprostanes/" class="internal-link">F2_Isoprostanes</a><br />
CORRELATED_WITH::<a class="internal-link is-unresolved" href="/404">NAD_Plus</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/hs-crp/" class="internal-link">Hs_Crp</a><br />
CORRELATED_WITH::<a href="/garden/michal.k7w@gmail.com/labtest/glutathione/" class="internal-link">Glutathione</a></p>
<h3>Related Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Neurodegeneration</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/cardiovascular-disease/" class="internal-link">Cardiovascular_Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a class="internal-link is-unresolved" href="/404">Accelerated_Aging</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/garden/michal.k7w@gmail.com/condition/cancer/" class="internal-link">Cancer</a></p>
<h2>References</h2>
<ul>
<li>PMID:17614129 - Valavanidis et al. (2009) 8-OHdG: a critical biomarker of oxidative stress and carcinogenesis</li>
<li>PMID:15570048 - Loft et al. (2012) Oxidative DNA damage estimated by 8-OHdG</li>
<li>PMID:16380549 - Wu et al. (2004) Urinary 8-OHdG as a marker of oxidative stress</li>
</ul>
<h2>Dataview Queries</h2>
<pre><code class="language-dataview">LIST
FROM [[8-OHdG]]
WHERE contains(type, &quot;Intervention&quot;)
SORT confidence_score DESC
</code></pre>

{% endraw %}