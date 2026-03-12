---
created: '2026-03-12T06:00:34.151730Z'
description: Large multi-enzyme complex that bridges glycolysis and the TCA cycle
  by irreversibly converting pyruvate to acetyl-CoA, CO2, and NADH. A critical metabolic
  gateway controlling the entry of carbohydrate-derived carbon into mitochondrial
  oxidative metabolism.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/protein/pyruvate-dehydrogenase/
slug: pyruvate-dehydrogenase
tags:
- protein
- enzyme
- tca_cycle
- mitochondrial
templateEngineOverride: njk
title: Pyruvate Dehydrogenase
type: protein
updated: '2026-03-12T06:00:34.151730Z'
---

{% raw %}
<h1>Pyruvate Dehydrogenase</h1>
<h2>Overview</h2>
<p>The pyruvate dehydrogenase complex (PDH) is one of the largest enzyme complexes in the cell (~9.5 MDa), composed of multiple copies of three catalytic subunits (E1, E2, E3) plus regulatory kinases and phosphatases. Located in the mitochondrial matrix, it performs the irreversible oxidative decarboxylation of <a class="internal-link is-unresolved" href="/404">Pyruvate</a> to <a class="internal-link is-unresolved" href="/404">Acetyl-CoA</a>, linking <a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a> to the <a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>.</p>
<p>This reaction is a critical metabolic checkpoint: once pyruvate is converted to acetyl-CoA, the carbon cannot be used for gluconeogenesis. This makes PDH a key regulatory point for fuel selection between carbohydrates and fats.</p>
<h2>Mechanism</h2>
<h3>Three-Enzyme Cascade</h3>
<ol>
<li><strong>E1 (Pyruvate dehydrogenase)</strong>: Decarboxylates pyruvate, releasing CO2; transfers hydroxyethyl group to TPP (thiamine pyrophosphate)</li>
<li><strong>E2 (Dihydrolipoyl transacetylase)</strong>: Transfers acetyl group from TPP to CoA via lipoamide arm, producing <a class="internal-link is-unresolved" href="/404">Acetyl-CoA</a></li>
<li><strong>E3 (Dihydrolipoyl dehydrogenase)</strong>: Reoxidizes reduced lipoamide using FAD, then regenerates FAD using NAD+ to produce <a class="internal-link is-unresolved" href="/404">NADH</a></li>
</ol>
<h3>Cofactor Requirements</h3>
<ul>
<li><strong>Thiamine (B1)</strong>: TPP cofactor for E1</li>
<li><strong>Riboflavin (B2)</strong>: FAD cofactor for E3</li>
<li><strong>Niacin (B3)</strong>: NAD+ substrate for E3</li>
<li><strong>Pantothenate (B5)</strong>: Part of CoA</li>
<li><strong>Lipoic acid</strong>: Covalently bound to E2</li>
</ul>
<h3>Net Reaction</h3>
<p>Pyruvate + CoA + NAD+ -&gt; Acetyl-CoA + CO2 + NADH</p>
<h2>Regulation</h2>
<table>
<thead>
<tr>
<th>Regulator</th>
<th>Effect</th>
<th>Condition</th>
</tr>
</thead>
<tbody>
<tr>
<td>PDH kinase (PDK)</td>
<td>Inactivates (phosphorylation)</td>
<td>High ATP, NADH, acetyl-CoA</td>
</tr>
<tr>
<td>PDH phosphatase (PDP)</td>
<td>Activates (dephosphorylation)</td>
<td>High Ca2+, insulin</td>
</tr>
<tr>
<td>Acetyl-CoA</td>
<td>Product inhibition</td>
<td>Fed state / fat oxidation</td>
</tr>
<tr>
<td>NADH/NAD+ ratio</td>
<td>High ratio inhibits</td>
<td>Reduced state</td>
</tr>
<tr>
<td>Dichloroacetate (DCA)</td>
<td>Activates (inhibits PDK)</td>
<td>Therapeutic agent</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<ul>
<li><strong>PDH deficiency</strong>: X-linked (E1alpha), causes lactic acidosis, neurodegeneration</li>
<li><strong>Beriberi (thiamine deficiency)</strong>: Impaired PDH function</li>
<li><strong>Warburg effect</strong>: Cancer cells downregulate PDH via PDK overexpression</li>
<li><strong>Dichloroacetate (DCA)</strong>: PDK inhibitor investigated for cancer and lactic acidosis</li>
<li><strong>Diabetes</strong>: Increased PDK activity shifts fuel use toward fatty acids</li>
<li><strong>Arsenic poisoning</strong>: Inactivates lipoamide on E2, blocking PDH</li>
</ul>
<h2>Key Connections</h2>
<h3>Substrates</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Pyruvate</a></strong>: From <a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a></li>
<li><strong>NAD+</strong>: Electron acceptor</li>
<li><strong><a class="internal-link is-unresolved" href="/404">Coenzyme A</a></strong>: Acetyl group acceptor</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Acetyl-CoA</a></strong>: Enters <a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></li>
<li><strong><a class="internal-link is-unresolved" href="/404">NADH</a></strong>: Feeds into <a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a> of ETC</li>
<li><strong>CO2</strong>: Released as waste</li>
</ul>
<h3>Pathway Context</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a></strong>: Upstream, produces pyruvate</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></strong>: Downstream, receives acetyl-CoA</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></strong>: NADH produced feeds into Complex I</li>
</ul>
<h2>Relationships</h2>
<h3>Products</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex_I</a></p>
<h2>Relationships</h2>
<h3>Products</h3>

{% endraw %}