---
created: '2026-03-12T06:00:34.124656Z'
description: Key regulatory enzyme of the TCA cycle that catalyzes the oxidative decarboxylation
  of isocitrate to alpha-ketoglutarate, producing NADH (IDH3) or NADPH (IDH1, IDH2)
  and CO2. Gain-of-function mutations in IDH1/IDH2 produce the oncometabolite 2-hydroxyglutarate
  in gliomas and AML.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/protein/isocitrate-dehydrogenase/
slug: isocitrate-dehydrogenase
tags:
- protein
- enzyme
- tca_cycle
- mitochondrial
templateEngineOverride: njk
title: Isocitrate Dehydrogenase
type: protein
updated: '2026-03-12T06:00:34.124656Z'
---

{% raw %}
<h1>Isocitrate Dehydrogenase</h1>
<h2>Overview</h2>
<p>Isocitrate dehydrogenase (IDH) catalyzes step 3 of the <a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>, the oxidative decarboxylation of isocitrate to <a class="internal-link is-unresolved" href="/404">Alpha-Ketoglutarate</a>. This is the first irreversible oxidative step of the TCA cycle and a major regulatory point controlling cycle flux.</p>
<p>Three isoforms exist in mammals:</p>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Cofactor</th>
<th>Location</th>
<th>TCA role</th>
<th>Reversible</th>
</tr>
</thead>
<tbody>
<tr>
<td>IDH1</td>
<td>NADP+</td>
<td>Cytoplasm, peroxisomes</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>IDH2</td>
<td>NADP+</td>
<td>Mitochondrial matrix</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>IDH3</td>
<td>NAD+</td>
<td>Mitochondrial matrix</td>
<td>Yes (step 3)</td>
<td>No</td>
</tr>
</tbody>
</table>
<p>IDH3 is the true TCA cycle enzyme, while IDH1 and IDH2 produce NADPH for antioxidant defense and biosynthesis.</p>
<h2>Mechanism</h2>
<h3>IDH3 (TCA Cycle)</h3>
<ol>
<li>Isocitrate is oxidized to oxalosuccinate (NAD+ reduced to <a class="internal-link is-unresolved" href="/404">NADH</a>)</li>
<li>Oxalosuccinate is decarboxylated to <a class="internal-link is-unresolved" href="/404">Alpha-Ketoglutarate</a> + CO2</li>
<li>Reaction is irreversible and highly regulated</li>
<li>Requires Mn2+ or Mg2+ as cofactor</li>
</ol>
<h3>IDH1/IDH2 (NADPH Production)</h3>
<ul>
<li>Same chemistry but use NADP+ instead of NAD+</li>
<li>Reversible under physiological conditions</li>
<li>Important for maintaining <a href="/garden/michal.k7w@gmail.com/labtest/glutathione/" class="internal-link">Glutathione</a> in reduced form (via NADPH)</li>
<li>IDH2 in mitochondria protects against oxidative stress</li>
</ul>
<h3>Regulation of IDH3</h3>
<table>
<thead>
<tr>
<th>Activator</th>
<th>Signal</th>
</tr>
</thead>
<tbody>
<tr>
<td>ADP</td>
<td>Low energy charge</td>
</tr>
<tr>
<td>Ca2+</td>
<td>Muscle contraction, signaling</td>
</tr>
<tr>
<td>Isocitrate</td>
<td>Substrate availability</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Inhibitor</th>
<th>Signal</th>
</tr>
</thead>
<tbody>
<tr>
<td>ATP</td>
<td>High energy charge</td>
</tr>
<tr>
<td>NADH</td>
<td>Reduced cofactor pool saturated</td>
</tr>
<tr>
<td>Alpha-ketoglutarate</td>
<td>Product inhibition</td>
</tr>
</tbody>
</table>
<h2>IDH Mutations and Cancer</h2>
<h3>Oncometabolite 2-Hydroxyglutarate (2-HG)</h3>
<ul>
<li>Mutant IDH1 (R132H) and IDH2 (R140Q, R172K) gain neomorphic activity</li>
<li>Convert alpha-ketoglutarate to 2-HG instead of the normal reaction</li>
<li>2-HG inhibits alpha-KG-dependent dioxygenases (TET2, JmjC demethylases)</li>
<li>Causes DNA and histone hypermethylation, blocking differentiation</li>
</ul>
<h3>Cancer Types with IDH Mutations</h3>
<ul>
<li><strong>Gliomas</strong>: ~80% of grade II/III gliomas; better prognosis than IDH-wildtype</li>
<li><strong>Acute myeloid leukemia (AML)</strong>: ~15-20% carry IDH1/2 mutations</li>
<li><strong>Cholangiocarcinoma</strong>: ~15% IDH1/2 mutant</li>
<li><strong>Chondrosarcoma</strong>: ~50% IDH1/2 mutant</li>
</ul>
<h3>Targeted Therapies</h3>
<ul>
<li><strong>Ivosidenib</strong>: IDH1 inhibitor (FDA-approved for AML, cholangiocarcinoma)</li>
<li><strong>Enasidenib</strong>: IDH2 inhibitor (FDA-approved for AML)</li>
<li><strong>Vorasidenib</strong>: Brain-penetrant dual IDH1/2 inhibitor (approved for glioma)</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>IDH mutations in cancer</strong>: Diagnostic and prognostic biomarker</li>
<li><strong>D-2-hydroxyglutaric aciduria</strong>: Germline IDH2 mutations cause rare metabolic disorder</li>
<li><strong>Mitochondrial disease</strong>: IDH3 deficiency causes retinitis pigmentosa</li>
<li><strong>Aging</strong>: IDH2/NADPH decline may contribute to age-related oxidative stress</li>
</ul>
<h2>Key Connections</h2>
<h3>Substrates</h3>
<ul>
<li><strong>Isocitrate</strong>: From aconitase (step 2 of TCA)</li>
<li><strong>NAD+</strong> (IDH3) / <strong>NADP+</strong> (IDH1, IDH2): Electron acceptors</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Alpha-Ketoglutarate</a></strong>: TCA intermediate, also important for amino acid metabolism</li>
<li><strong><a class="internal-link is-unresolved" href="/404">NADH</a></strong> (IDH3) / <strong>NADPH</strong> (IDH1, IDH2): Reducing equivalents</li>
<li><strong>CO2</strong>: First decarboxylation of TCA cycle</li>
</ul>
<h3>Pathway Context</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></strong>: Step 3, first irreversible oxidative step</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/citrate-synthase/" class="internal-link">Citrate Synthase</a></strong>: Upstream (step 1)</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></strong>: NADH produced feeds into <a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a></li>
<li><strong><a href="/garden/michal.k7w@gmail.com/labtest/glutathione/" class="internal-link">Glutathione</a></strong>: IDH1/IDH2 supply NADPH for glutathione recycling</li>
</ul>
<h2>Relationships</h2>
<h3>Pathway Context</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/michal.k7w@gmail.com/protein/citrate-synthase/" class="internal-link">Citrate_Synthase</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex_I</a></p>
<h2>Relationships</h2>
<h3>Pathway Context</h3>

{% endraw %}