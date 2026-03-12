---
created: '2026-03-12T06:00:34.155320Z'
description: Final enzyme of glycolysis, catalyzing the irreversible transfer of a
  phosphate group from phosphoenolpyruvate (PEP) to ADP, producing pyruvate and ATP
  via substrate-level phosphorylation. The PKM2 isoform plays a key role in cancer
  metabolism.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/protein/pyruvate-kinase/
slug: pyruvate-kinase
tags:
- protein
- enzyme
- glycolysis
templateEngineOverride: njk
title: Pyruvate Kinase
type: protein
updated: '2026-03-12T06:00:34.155320Z'
---

{% raw %}
<h1>Pyruvate Kinase</h1>
<h2>Overview</h2>
<p>Pyruvate kinase (PK) catalyzes the final step (step 10) of <a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a>, converting phosphoenolpyruvate (PEP) to <a class="internal-link is-unresolved" href="/404">Pyruvate</a> with the generation of <a class="internal-link is-unresolved" href="/404">ATP</a> by substrate-level phosphorylation. Since 2 PEP molecules are produced per glucose, this step generates 2 ATP per glucose.</p>
<p>Four mammalian isoforms exist, encoded by two genes:</p>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Gene</th>
<th>Tissue</th>
<th>Regulation</th>
</tr>
</thead>
<tbody>
<tr>
<td>PKL</td>
<td>PKLR</td>
<td>Liver</td>
<td>Hormonal (glucagon/insulin)</td>
</tr>
<tr>
<td>PKR</td>
<td>PKLR</td>
<td>Red blood cells</td>
<td>Constitutive</td>
</tr>
<tr>
<td>PKM1</td>
<td>PKM</td>
<td>Muscle, brain</td>
<td>Constitutively active tetramer</td>
</tr>
<tr>
<td>PKM2</td>
<td>PKM</td>
<td>Embryonic, cancer</td>
<td>Regulatable, can form dimers</td>
</tr>
</tbody>
</table>
<h2>Mechanism</h2>
<h3>Catalytic Reaction</h3>
<ul>
<li>PEP + ADP -&gt; <a class="internal-link is-unresolved" href="/404">Pyruvate</a> + <a class="internal-link is-unresolved" href="/404">ATP</a></li>
<li>Requires Mg2+ and K+ as cofactors</li>
<li>Highly exergonic (delta-G = -31.4 kJ/mol)</li>
<li>Irreversible under physiological conditions</li>
</ul>
<h3>Allosteric Regulation</h3>
<table>
<thead>
<tr>
<th>Activator</th>
<th>Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fructose-1,6-bisphosphate (F1,6BP)</td>
<td>Feed-forward activation from PFK-1 step</td>
</tr>
<tr>
<td>PEP (substrate)</td>
<td>Cooperative binding (sigmoidal kinetics for PKM2)</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Inhibitor</th>
<th>Mechanism</th>
</tr>
</thead>
<tbody>
<tr>
<td>ATP</td>
<td>Product inhibition, signals energy sufficiency</td>
</tr>
<tr>
<td>Alanine</td>
<td>Signals amino acid abundance</td>
</tr>
<tr>
<td>Glucagon (liver)</td>
<td>PKL phosphorylation -&gt; inactivation</td>
</tr>
<tr>
<td>Acetyl-CoA</td>
<td>Signals adequate fuel</td>
</tr>
</tbody>
</table>
<h2>PKM2 and Cancer</h2>
<p>PKM2 is the embryonic splice variant that is re-expressed in nearly all cancers:</p>
<ul>
<li><strong>Dimer form</strong>: Low activity, diverts glycolytic intermediates to biosynthesis</li>
<li><strong>Tetramer form</strong>: High activity, promotes pyruvate production</li>
<li><strong>Nuclear function</strong>: PKM2 dimers translocate to nucleus, act as transcriptional coactivator</li>
<li><strong>Warburg effect</strong>: PKM2 dimers slow glycolysis at the last step, allowing carbon diversion to biosynthetic pathways (serine, nucleotides, lipids)</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Pyruvate kinase deficiency</strong>: Most common enzyme defect causing hereditary hemolytic anemia (PKR mutations)</li>
<li><strong>Cancer metabolism</strong>: PKM2 dimer/tetramer switch is a therapeutic target</li>
<li><strong>PKM2 activators</strong>: TEPP-46, ML-265 force tetramer formation, reduce tumor growth in models</li>
<li><strong>Diabetes</strong>: Liver PKL regulation altered in insulin resistance</li>
<li><strong>Glycolytic oscillations</strong>: PK contributes to metabolic oscillations in beta-cells</li>
</ul>
<h2>Key Connections</h2>
<h3>Substrates</h3>
<ul>
<li><strong>Phosphoenolpyruvate (PEP)</strong>: High-energy glycolytic intermediate</li>
<li><strong>ADP</strong>: Phosphate acceptor</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Pyruvate</a></strong>: Feeds into <a href="/garden/michal.k7w@gmail.com/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a> or <a class="internal-link is-unresolved" href="/404">Lactate</a> production</li>
<li><strong><a class="internal-link is-unresolved" href="/404">ATP</a></strong>: Substrate-level phosphorylation</li>
</ul>
<h3>Pathway Context</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a></strong>: Final step (step 10)</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a></strong>: Upstream rate-limiting step; F1,6BP activates PK</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a></strong>: Downstream, converts pyruvate to <a class="internal-link is-unresolved" href="/404">Acetyl-CoA</a></li>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></strong>: Ultimate destination of pyruvate carbon (aerobic)</li>
</ul>
<h2>Relationships</h2>
<h3>Products</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate_Dehydrogenase</a></p>
<h3>Pathway Context</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/michal.k7w@gmail.com/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate_Dehydrogenase</a></p>
<h2>Relationships</h2>
<h3>Pathway Context</h3>
<h3>Products</h3>

{% endraw %}