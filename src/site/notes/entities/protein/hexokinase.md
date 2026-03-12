---
created: '2026-03-12T06:00:34.120900Z'
description: First enzyme of glycolysis, phosphorylates glucose to glucose-6-phosphate
  using ATP. Four isoforms (I-IV) with tissue-specific expression. Hexokinase I and
  II associate with the outer mitochondrial membrane via VDAC, coupling glycolysis
  to mitochondrial ATP production.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/protein/hexokinase/
slug: hexokinase
tags:
- protein
- enzyme
- glycolysis
templateEngineOverride: njk
title: Hexokinase
type: protein
updated: '2026-03-12T06:00:34.120900Z'
---

{% raw %}
<h1>Hexokinase</h1>
<h2>Overview</h2>
<p>Hexokinase (HK) catalyzes the first and essentially irreversible step of <a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a>: the phosphorylation of <a href="/garden/michal.k7w@gmail.com/metabolite/glucose/" class="internal-link">Glucose</a> to <a class="internal-link is-unresolved" href="/404">Glucose-6-Phosphate</a> using <a class="internal-link is-unresolved" href="/404">ATP</a>. This reaction traps glucose inside the cell (phosphorylated sugars cannot cross the plasma membrane) and commits it to metabolism.</p>
<p>Four mammalian isoforms exist with distinct properties:</p>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Km (glucose)</th>
<th>Tissue</th>
<th>G6P Inhibition</th>
<th>MW</th>
</tr>
</thead>
<tbody>
<tr>
<td>HK I</td>
<td>~0.03 mM</td>
<td>Brain, RBCs</td>
<td>Yes</td>
<td>100 kDa</td>
</tr>
<tr>
<td>HK II</td>
<td>~0.3 mM</td>
<td>Muscle, adipose</td>
<td>Yes</td>
<td>100 kDa</td>
</tr>
<tr>
<td>HK III</td>
<td>~0.003 mM</td>
<td>Most tissues</td>
<td>Yes</td>
<td>100 kDa</td>
</tr>
<tr>
<td>HK IV (Glucokinase)</td>
<td>~8 mM</td>
<td>Liver, pancreas</td>
<td>No</td>
<td>50 kDa</td>
</tr>
</tbody>
</table>
<h2>Mechanism</h2>
<h3>Catalytic Reaction</h3>
<ul>
<li><a href="/garden/michal.k7w@gmail.com/metabolite/glucose/" class="internal-link">Glucose</a> + <a class="internal-link is-unresolved" href="/404">ATP</a> -&gt; <a class="internal-link is-unresolved" href="/404">Glucose-6-Phosphate</a> + ADP</li>
<li>Uses Mg2+-ATP as the true substrate</li>
<li>Induced-fit mechanism: glucose binding triggers conformational closure</li>
<li>Prevents futile ATP hydrolysis (water excluded from active site)</li>
</ul>
<h3>Mitochondrial Association</h3>
<ul>
<li>HK I and HK II bind to VDAC (voltage-dependent anion channel) on outer mitochondrial membrane</li>
<li>Provides preferential access to mitochondrially-generated ATP</li>
<li>Anti-apoptotic: blocks Bax/Bak from triggering cytochrome c release</li>
<li>Disruption of HK-VDAC interaction promotes apoptosis</li>
</ul>
<h2>Regulation</h2>
<ul>
<li><strong>Product inhibition</strong>: <a class="internal-link is-unresolved" href="/404">Glucose-6-Phosphate</a> inhibits HK I-III (not glucokinase)</li>
<li><strong>Insulin</strong>: Induces HK II expression in muscle and adipose</li>
<li><strong>Glucokinase regulatory protein (GKRP)</strong>: Sequesters glucokinase in liver nucleus when glucose is low</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/ampk/" class="internal-link">AMPK</a></strong>: Promotes HK II expression during energy stress</li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Warburg effect</strong>: HK II overexpression in cancer cells; mitochondrial binding protects from apoptosis</li>
<li><strong>Diabetes</strong>: Glucokinase mutations cause MODY-2 (maturity-onset diabetes of the young)</li>
<li><strong>Hemolytic anemia</strong>: HK I deficiency (rare)</li>
<li><strong>Cancer therapy target</strong>: Disrupting HK II-VDAC interaction induces tumor cell death</li>
<li><strong>2-Deoxyglucose (2-DG)</strong>: Competitive HK inhibitor used in cancer research and PET imaging (18F-FDG)</li>
</ul>
<h2>Key Connections</h2>
<h3>Substrates</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/metabolite/glucose/" class="internal-link">Glucose</a></strong>: Primary substrate</li>
<li><strong><a class="internal-link is-unresolved" href="/404">ATP</a></strong>: Phosphate donor</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Glucose-6-Phosphate</a></strong>: Committed glycolytic intermediate and branch point</li>
<li><strong>ADP</strong>: Recycled by oxidative phosphorylation</li>
</ul>
<h3>Pathway Context</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a></strong>: First enzyme, step 1</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a></strong>: Downstream rate-limiting step</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></strong>: HK I/II bind outer membrane via VDAC</li>
</ul>
<h2>Relationships</h2>
<h3>Mitochondrial Association</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/protein/ampk/" class="internal-link">AMPK</a></p>
<h2>Relationships</h2>
<h3>Mitochondrial Association</h3>

{% endraw %}