---
created: '2026-03-12T06:00:34.098110Z'
description: Cytochrome bc1 complex, the third complex of the electron transport chain.
  Transfers electrons from ubiquinol to cytochrome c via the Q-cycle mechanism, pumping
  4 protons per pair of electrons across the inner mitochondrial membrane.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/protein/complex-iii/
slug: complex-iii
tags:
- protein
- enzyme
- etc
- mitochondrial
templateEngineOverride: njk
title: Complex III
type: protein
updated: '2026-03-12T06:00:34.098110Z'
---

{% raw %}
<h1>Complex III</h1>
<h2>Overview</h2>
<p>Complex III (cytochrome bc1 complex) is the third proton-pumping complex of the mitochondrial <a href="/garden/michal.k7w@gmail.com/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>. It functions as a homodimer, with each monomer containing 11 subunits. The catalytic core consists of three essential subunits: cytochrome b (with bL and bH hemes), the Rieske iron-sulfur protein, and cytochrome c1.</p>
<p>Complex III receives electrons from ubiquinol (QH2, produced by <a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a> and <a href="/garden/michal.k7w@gmail.com/protein/complex-ii/" class="internal-link">Complex II</a>) and transfers them to <a href="/garden/michal.k7w@gmail.com/protein/cytochrome-c/" class="internal-link">Cytochrome C</a>, a small soluble electron carrier in the intermembrane space.</p>
<h2>Mechanism</h2>
<h3>The Q-Cycle (Peter Mitchell)</h3>
<p><strong>First half-cycle:</strong></p>
<ol>
<li>QH2 binds at Qo (outer) site</li>
<li>One electron goes to Rieske Fe-S protein -&gt; cytochrome c1 -&gt; <a href="/garden/michal.k7w@gmail.com/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></li>
<li>Second electron goes to cytochrome bL -&gt; bH -&gt; reduces Q at Qi (inner) site to semiquinone</li>
<li>2 H+ released to intermembrane space from QH2 oxidation</li>
</ol>
<p><strong>Second half-cycle:</strong></p>
<ol>
<li>Second QH2 binds at Qo site</li>
<li>One electron reduces another <a href="/garden/michal.k7w@gmail.com/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></li>
<li>Second electron completes reduction of semiquinone at Qi to QH2</li>
<li>2 H+ released to intermembrane space; 2 H+ taken from matrix at Qi</li>
</ol>
<h3>Net Result (per Q-cycle)</h3>
<ul>
<li>2 QH2 oxidized, 1 Q reduced back to QH2 (net: 1 QH2 oxidized)</li>
<li>2 cytochrome c reduced</li>
<li>4 H+ translocated to intermembrane space</li>
</ul>
<h3>ROS Generation</h3>
<ul>
<li>Semiquinone intermediate at Qo site can donate electron to O2</li>
<li>Produces <a href="/garden/michal.k7w@gmail.com/superoxide/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a> (superoxide) on both sides of membrane</li>
<li>Second major site of mitochondrial ROS after <a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a></li>
</ul>
<h2>Clinical Significance</h2>
<ul>
<li><strong>Exercise intolerance myopathy</strong>: Cytochrome b mutations</li>
<li><strong>Antimalarial drugs</strong>: Atovaquone inhibits parasite Complex III (Qi site)</li>
<li><strong>Antifungals</strong>: Strobilurins target fungal Complex III (Qo site)</li>
<li><strong>Aging</strong>: Complex III dysfunction contributes to increased ROS with age</li>
<li><strong>Myxothiazol/Stigmatellin</strong>: Research inhibitors of Qo site</li>
<li><strong>Antimycin A</strong>: Research inhibitor of Qi site, causes superoxide production</li>
</ul>
<h2>Key Connections</h2>
<h3>Substrates</h3>
<ul>
<li><strong>Ubiquinol (QH2)</strong>: From <a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a> and <a href="/garden/michal.k7w@gmail.com/protein/complex-ii/" class="internal-link">Complex II</a></li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/cytochrome-c/" class="internal-link">Cytochrome C</a></strong> (oxidized): Electron acceptor</li>
</ul>
<h3>Products</h3>
<ul>
<li><strong><a class="internal-link is-unresolved" href="/404">Reactive Oxygen Species</a></strong>: Superoxide from semiquinone leak</li>
<li><strong>Proton gradient</strong>: 4 H+ per 2 electrons for <a href="/garden/michal.k7w@gmail.com/protein/atp-synthase/" class="internal-link">ATP Synthase</a></li>
</ul>
<h3>Pathway Context</h3>
<ul>
<li><strong><a href="/garden/michal.k7w@gmail.com/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></strong>: Third complex in the chain</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex I</a></strong> / <strong><a href="/garden/michal.k7w@gmail.com/protein/complex-ii/" class="internal-link">Complex II</a></strong>: Upstream electron donors (via QH2)</li>
<li><strong><a href="/garden/michal.k7w@gmail.com/protein/complex-iv/" class="internal-link">Complex IV</a></strong>: Downstream, receives electrons via cytochrome c</li>
</ul>
<h2>Relationships</h2>
<h3>Pathway Context</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/garden/michal.k7w@gmail.com/protein/complex-ii/" class="internal-link">Complex_II</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex_I</a></p>
<h3>Substrates</h3>
<p>RELATED::<a href="/garden/michal.k7w@gmail.com/protein/complex-ii/" class="internal-link">Complex_II</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/protein/cytochrome-c/" class="internal-link">Cytochrome_C</a><br />
RELATED::<a href="/garden/michal.k7w@gmail.com/protein/complex-i/" class="internal-link">Complex_I</a></p>
<h3>Ros Generation</h3>
<h3>The Qcycle Peter Mitchell</h3>
<h2>Relationships</h2>
<h3>Substrates</h3>
<h3>Pathway Context</h3>
<h3>The Qcycle Peter Mitchell</h3>
<h3>Ros Generation</h3>

{% endraw %}