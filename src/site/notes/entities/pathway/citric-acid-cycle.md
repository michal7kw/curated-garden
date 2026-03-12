---
created: '2026-03-12T06:00:33.730328Z'
description: The central metabolic hub that oxidizes acetyl-CoA to CO2, generating
  NADH, FADH2, and GTP for ATP production. Also known as the TCA cycle or Krebs cycle,
  it connects carbohydrate, fat, and protein metabolism and provides biosynthetic
  precursors.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/
slug: citric-acid-cycle
tags:
- pathway
- metabolic
- energy_metabolism
- central_metabolism
- mitochondrial
- catabolic
templateEngineOverride: njk
title: Citric Acid Cycle
type: pathway
updated: '2026-03-12T06:00:33.730328Z'
---

{% raw %}
<h1>Citric Acid Cycle</h1>
<h2>Overview</h2>
<p>The citric acid cycle (also called the TCA cycle or Krebs cycle) is the central metabolic pathway for aerobic energy production in all organisms. It oxidizes acetyl-CoA derived from carbohydrates, fats, and proteins to CO₂, capturing the released energy as NADH, FADH2, and GTP.</p>
<p>The cycle operates in the mitochondrial matrix and consists of eight enzyme-catalyzed reactions that:</p>
<ol>
<li>Accept two carbons (as acetyl-CoA)</li>
<li>Release two carbons (as CO₂)</li>
<li>Regenerate the starting molecule (oxaloacetate)</li>
<li>Produce reducing equivalents for ATP synthesis</li>
</ol>
<h2>The Eight Reactions</h2>
<h3>1. Citrate Synthase</h3>
<p><strong>Acetyl-CoA + Oxaloacetate + H₂O → Citrate + CoA-SH</strong></p>
<ul>
<li>First committed step</li>
<li>Highly exergonic (ΔG°' = -32.2 kJ/mol)</li>
<li>Regulated by substrate availability</li>
</ul>
<h3>2. Aconitase</h3>
<p><strong>Citrate ⇌ Isocitrate</strong> (via cis-Aconitate)</p>
<ul>
<li>Iron-sulfur cluster enzyme</li>
<li>Near-equilibrium reaction</li>
<li>Sensitive to oxidative damage</li>
</ul>
<h3>3. Isocitrate Dehydrogenase</h3>
<p><strong>Isocitrate + NAD⁺ → α-Ketoglutarate + CO₂ + NADH</strong></p>
<ul>
<li>First NADH produced</li>
<li>First CO₂ released</li>
<li>Major regulatory point (activated by ADP, Ca²⁺)</li>
</ul>
<h3>4. α-Ketoglutarate Dehydrogenase Complex</h3>
<p><strong>α-Ketoglutarate + NAD⁺ + CoA-SH → Succinyl-CoA + CO₂ + NADH</strong></p>
<ul>
<li>Second NADH produced</li>
<li>Second CO₂ released</li>
<li>Similar to pyruvate dehydrogenase complex</li>
<li>Requires TPP, lipoate, FAD, NAD⁺, CoA</li>
</ul>
<h3>5. Succinyl-CoA Synthetase</h3>
<p><strong>Succinyl-CoA + GDP + Pi ⇌ Succinate + GTP + CoA-SH</strong></p>
<ul>
<li>Substrate-level phosphorylation</li>
<li>GTP → ATP via nucleoside diphosphate kinase</li>
<li>Only direct high-energy phosphate</li>
</ul>
<h3>6. Succinate Dehydrogenase (Complex II)</h3>
<p><strong>Succinate + FAD → Fumarate + FADH₂</strong></p>
<ul>
<li>Only membrane-bound TCA enzyme</li>
<li>Directly linked to ETC</li>
<li>Produces FADH₂ (not NADH)</li>
</ul>
<h3>7. Fumarase</h3>
<p><strong>Fumarate + H₂O → L-Malate</strong></p>
<ul>
<li>Stereospecific hydration</li>
<li>Near-equilibrium reaction</li>
</ul>
<h3>8. Malate Dehydrogenase</h3>
<p><strong>L-Malate + NAD⁺ → Oxaloacetate + NADH</strong></p>
<ul>
<li>Third NADH produced</li>
<li>Completes the cycle</li>
<li>Thermodynamically unfavorable, pulled by citrate synthase</li>
</ul>
<h2>Energy Yield</h2>
<p>Per acetyl-CoA oxidized:</p>
<table>
<thead>
<tr>
<th>Product</th>
<th>Number</th>
<th>ATP Equivalent</th>
</tr>
</thead>
<tbody>
<tr>
<td>NADH</td>
<td>3</td>
<td>~7.5 ATP</td>
</tr>
<tr>
<td>FADH₂</td>
<td>1</td>
<td>~1.5 ATP</td>
</tr>
<tr>
<td>GTP</td>
<td>1</td>
<td>1 ATP</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td></td>
<td><strong>~10 ATP</strong></td>
</tr>
</tbody>
</table>
<h2>Regulation</h2>
<h3>Key Control Points</h3>
<ol>
<li><strong>Citrate synthase</strong>: Substrate availability, product inhibition</li>
<li><strong>Isocitrate dehydrogenase</strong>: ADP activates, ATP/NADH inhibit</li>
<li><strong>α-Ketoglutarate dehydrogenase</strong>: Similar to PDH</li>
</ol>
<h3>Calcium Activation</h3>
<ul>
<li>Ca²⁺ activates isocitrate DH and α-KG DH</li>
<li>Links muscle contraction to energy production</li>
<li>Important in cardiac muscle</li>
</ul>
<h2>Anaplerotic Reactions</h2>
<p>TCA intermediates are depleted for biosynthesis and must be replenished:</p>
<table>
<thead>
<tr>
<th>Reaction</th>
<th>Enzyme</th>
<th>Significance</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pyruvate → OAA</td>
<td>Pyruvate carboxylase</td>
<td>Major anaplerosis</td>
</tr>
<tr>
<td>Glutamate → α-KG</td>
<td>Glutamate dehydrogenase</td>
<td>Amino acid entry</td>
</tr>
<tr>
<td>Aspartate → OAA</td>
<td>Aspartate aminotransferase</td>
<td>Amino acid entry</td>
</tr>
</tbody>
</table>
<h2>Biosynthetic Functions</h2>
<p>The TCA cycle provides precursors for:</p>
<ul>
<li><strong>Citrate</strong>: Fatty acid synthesis, cholesterol synthesis</li>
<li><strong>α-Ketoglutarate</strong>: Amino acid synthesis (glutamate family)</li>
<li><strong>Succinyl-CoA</strong>: Heme synthesis, odd-chain fatty acid metabolism</li>
<li><strong>Oxaloacetate</strong>: Gluconeogenesis, amino acid synthesis (aspartate)</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Enzyme Deficiencies</h3>
<ul>
<li><strong>Fumarase deficiency</strong>: Severe encephalopathy, cancer predisposition</li>
<li><strong>Succinate dehydrogenase deficiency</strong>: Paragangliomas, pheochromocytomas</li>
<li><strong>α-Ketoglutarate dehydrogenase deficiency</strong>: Neurological dysfunction</li>
</ul>
<h3>Cancer Metabolism</h3>
<ul>
<li>SDH, FH, IDH mutations in specific cancers</li>
<li>Oncometabolite accumulation</li>
<li>Altered TCA cycle flux</li>
</ul>
<h2>Supplement Connections</h2>
<table>
<thead>
<tr>
<th>Supplement</th>
<th>Effect on TCA Cycle</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><a href="/garden/michal.k7w@gmail.com/supplement/alpha-lipoic-acid/" class="internal-link">Alpha Lipoic Acid</a></strong></td>
<td>Cofactor for α-KG dehydrogenase and PDH</td>
</tr>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">CoQ10</a></strong></td>
<td>Supports Complex II function</td>
</tr>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">Carnitine</a></strong></td>
<td>Delivers fatty acid-derived acetyl-CoA</td>
</tr>
<tr>
<td><strong><a class="internal-link is-unresolved" href="/404">B Vitamins</a></strong></td>
<td>Multiple coenzyme functions</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<h3>Related</h3>
<p>RELATED::<a class="internal-link is-unresolved" href="/404">Carnitine</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">ATP</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">B_Vitamins</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">CoQ10</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/supplement/alpha-lipoic-acid/" class="internal-link">Alpha_Lipoic_Acid</a></p>
<h2>References</h2>
<ul>
<li>Krebs HA, Johnson WA. The role of citric acid in intermediate metabolism in animal tissues. Enzymologia. 1937;4:148-156.</li>
<li>Berg JM, et al. Biochemistry (8th ed). W.H. Freeman; 2015. Chapter 17.</li>
<li>Martínez-Reyes I, Chandel NS. Mitochondrial TCA cycle metabolites control physiology and disease. Nat Commun. 2020;11(1):102. PMID: 31900386</li>
</ul>

{% endraw %}