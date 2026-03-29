---
created: '2026-03-29T06:30:14.702767Z'
description: Three-carbon glycolytic intermediate produced by aldolase cleavage of
  fructose-1,6-bisphosphate. Entry point to the energy-generating (payoff) phase of
  glycolysis, yielding NADH and ATP.
dg-home: false
dg-publish: true
gardenUsername: michal.k7w@gmail.com
permalink: /garden/michal.k7w@gmail.com/metabolite/glyceraldehyde-3-phosphate/
slug: glyceraldehyde-3-phosphate
tags:
- metabolite
- glycolysis
- energy-metabolism
templateEngineOverride: njk
title: Glyceraldehyde-3-Phosphate
type: metabolite
updated: '2026-03-29T06:30:14.702767Z'
---

{% raw %}
<h1>Glyceraldehyde-3-Phosphate</h1>
<h2>Overview</h2>
<p>Glyceraldehyde-3-phosphate (G3P) is a three-carbon sugar phosphate produced when aldolase cleaves <a href="/garden/michal.k7w@gmail.com/metabolite/fructose-16-bisphosphate/" class="internal-link">Fructose-1,6-Bisphosphate</a>. It marks the transition from the investment phase to the payoff phase of <a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a>, where net ATP and <a href="/garden/michal.k7w@gmail.com/metabolite/nadh/" class="internal-link">NADH</a> are generated.</p>
<h2>Mechanism of Action</h2>
<ul>
<li><strong>Formation</strong>: Aldolase cleaves F1,6BP → G3P + dihydroxyacetone phosphate (DHAP). Triose phosphate isomerase converts DHAP to G3P, so both halves enter the payoff phase</li>
<li><strong>Oxidation</strong>: GAPDH oxidizes G3P while reducing <a href="/garden/michal.k7w@gmail.com/biomarker/nad/" class="internal-link">NAD+</a> to <a href="/garden/michal.k7w@gmail.com/metabolite/nadh/" class="internal-link">NADH</a> and adding Pi → 1,3-bisphosphoglycerate</li>
<li><strong>Energy yield</strong>: Each G3P ultimately produces 1 NADH + 2 ATP (via substrate-level phosphorylation) on its way to <a href="/garden/michal.k7w@gmail.com/metabolite/pyruvate/" class="internal-link">Pyruvate</a></li>
<li><strong>Two per glucose</strong>: Since each glucose produces two G3P molecules, the payoff phase generates 2 NADH + 4 ATP total (net 2 ATP after investment phase)</li>
</ul>
<h2>Clinical Significance</h2>
<p>GAPDH (glyceraldehyde-3-phosphate dehydrogenase) has moonlighting functions beyond glycolysis — it participates in apoptosis, DNA repair, and membrane fusion. GAPDH inhibition by oxidative stress can redirect glucose flux to the <a href="/garden/michal.k7w@gmail.com/pathway/pentose-phosphate-pathway/" class="internal-link">Pentose Phosphate Pathway</a> for NADPH generation.</p>
<h2>Relationships</h2>
<h3>Produced By</h3>
<p>PRODUCED_BY::<a href="/garden/michal.k7w@gmail.com/metabolite/fructose-16-bisphosphate/" class="internal-link">Fructose-1,6-Bisphosphate</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/garden/michal.k7w@gmail.com/metabolite/pyruvate/" class="internal-link">Pyruvate</a><br />
PRODUCES::<a href="/garden/michal.k7w@gmail.com/metabolite/nadh/" class="internal-link">NADH</a><br />
PRODUCES::<a href="/garden/michal.k7w@gmail.com/metabolite/atp/" class="internal-link">ATP</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/garden/michal.k7w@gmail.com/pathway/glycolysis/" class="internal-link">Glycolysis</a></p>

{% endraw %}