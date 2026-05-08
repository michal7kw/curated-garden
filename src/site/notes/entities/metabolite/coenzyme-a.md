---
created: '2026-05-08T08:21:33.407342Z'
description: Coenzyme A (CoA) is an essential metabolic cofactor derived from pantothenic
  acid (vitamin B5), cysteine, and ATP. Its reactive terminal thiol group carries
  acyl groups as thioesters, enabling fatty acid oxidation, citric acid cycle function,
  and numerous biosynthetic reactions. Acetyl-CoA, the acetylated form of CoA, is
  the central metabolic intermediate connecting glycolysis, fatty acid metabolism,
  cholesterol synthesis, and the TCA cycle.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/coenzyme-a/
slug: coenzyme-a
tags:
- metabolite
- cofactor
- acyl_carrier
- energy_metabolism
- fatty_acid_metabolism
- acetyl_coA
templateEngineOverride: njk
title: Coenzyme A
type: metabolite
updated: '2026-05-08T08:21:33.407342Z'
---

{% raw %}
<h1>Coenzyme A</h1>
<h2>Overview</h2>
<p>Coenzyme A (CoA) is a ubiquitous and essential metabolic cofactor synthesized from pantothenic acid (vitamin B5), cysteine, and ATP. Its defining feature is a reactive terminal thiol (-SH) group that forms high-energy thioester bonds with carboxylic acids, producing acyl-CoA derivatives such as <a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a>, <a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a>, and palmitoyl-CoA. These activated intermediates drive virtually every major metabolic pathway in the cell.</p>
<p>Acetyl-CoA, the most abundant acyl-CoA, occupies a central position in metabolism: it is the end product of glycolysis (via <a href="/entities/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a>), the entry substrate for the <a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>, the building block for fatty acid synthesis and cholesterol biosynthesis, and the precursor for ketone body formation. CoA itself is not consumed in these reactions but cycles between its free (CoA-SH) and acylated forms, serving as a reusable carrier.</p>
<h2>Chemical Properties</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Molecular Formula</td>
<td>C21H36N7O16P3S</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>767.53 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>87642</td>
</tr>
<tr>
<td>HMDB ID</td>
<td>HMDB0001423</td>
</tr>
<tr>
<td>Reactive Group</td>
<td>Terminal thiol (-SH)</td>
</tr>
<tr>
<td>Thioester Bond Energy</td>
<td>~31 kJ/mol</td>
</tr>
</tbody>
</table>
<p>CoA consists of three structural components: (1) a 3'-phospho-ADP moiety, (2) a pantothenic acid (vitamin B5) unit, and (3) a beta-mercaptoethylamine group that provides the reactive thiol. The thiol group has a pKa of approximately 6.7, making it predominantly deprotonated (as a thiolate) at physiological pH, which contributes to its nucleophilic reactivity.</p>
<h2>Mechanism of Action</h2>
<h3>Acyl Group Carrier</h3>
<p>CoA functions as a universal acyl group carrier. The thioester bond between the thiol and an acyl group is a high-energy linkage (~31 kJ/mol), making acyl-CoAs thermodynamically activated substrates. This activation energy drives reactions that would otherwise be unfavorable, including:</p>
<ul>
<li><strong>Condensation</strong>: Oxaloacetate + acetyl-CoA → <a href="/entities/metabolite/citrate/" class="internal-link">Citrate</a> (catalyzed by citrate synthase)</li>
<li><strong>Oxidation</strong>: Acyl-CoA → enoyl-CoA + FADH2 in <a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></li>
<li><strong>Transfer</strong>: Acetyl-CoA + choline → acetylcholine + CoA-SH</li>
</ul>
<h3>CoA Biosynthesis</h3>
<p>CoA is synthesized de novo from pantothenic acid in a five-step pathway:</p>
<ol>
<li><strong>Pantothenate kinase (PANK)</strong> — phosphorylates pantothenate (rate-limiting step, feedback-inhibited by acetyl-CoA)</li>
<li>Phosphopantothenoylcysteine synthetase — adds cysteine</li>
<li>Phosphopantothenoylcysteine decarboxylase — decarboxylates</li>
<li>Phosphopantetheine adenylyltransferase — adds AMP</li>
<li>Dephospho-CoA kinase — adds the final phosphate</li>
</ol>
<p>The rate-limiting enzyme PANK is subject to feedback inhibition by acetyl-CoA and malonyl-CoA, linking CoA biosynthesis to cellular energy status. Dietary pantothenic acid (vitamin B5) is the primary source of pantothenate, though gut microbiota also contribute.</p>
<h3>Key Acyl-CoA Species</h3>
<table>
<thead>
<tr>
<th>Acyl-CoA</th>
<th>Role</th>
<th>Pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a></td>
<td>Central metabolic hub</td>
<td>TCA cycle, fatty acid synthesis, ketogenesis</td>
</tr>
<tr>
<td><a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a></td>
<td>TCA cycle intermediate, heme synthesis</td>
<td>Citric acid cycle</td>
</tr>
<tr>
<td>Malonyl-CoA</td>
<td>Fatty acid synthesis substrate, CPT1 inhibitor</td>
<td>Fatty acid synthesis</td>
</tr>
<tr>
<td>Palmitoyl-CoA</td>
<td>C16 fatty acyl-CoA</td>
<td>Beta-oxidation, lipid synthesis</td>
</tr>
<tr>
<td>HMG-CoA</td>
<td>Cholesterol/ketone body precursor</td>
<td>Mevalonate pathway, ketogenesis</td>
</tr>
<tr>
<td>Propionyl-CoA</td>
<td>Odd-chain fatty acid and amino acid catabolism</td>
<td>Gluconeogenesis</td>
</tr>
</tbody>
</table>
<h3>Allosteric Regulation</h3>
<p>Free CoA-SH and acyl-CoA ratios serve as metabolic sensors. A high acetyl-CoA/CoA ratio signals energy surplus, promoting fatty acid synthesis and inhibiting pyruvate dehydrogenase. Conversely, a high CoA-SH/acetyl-CoA ratio favors beta-oxidation and gluconeogenesis. Malonyl-CoA, produced from acetyl-CoA by acetyl-CoA carboxylase, inhibits carnitine palmitoyltransferase I (CPT1), preventing simultaneous fatty acid synthesis and oxidation.</p>
<h2>Clinical Significance</h2>
<h3>Pantothenate Kinase-Associated Neurodegeneration (PKAN)</h3>
<p>Mutations in PANK2, the gene encoding mitochondrial pantothenate kinase 2, cause pantothenate kinase-associated neurodegeneration (PKAN), a form of neurodegeneration with brain iron accumulation (NBIA). PKAN impairs CoA biosynthesis in mitochondria, leading to dystonia, parkinsonism, and pigmentary retinopathy. The classic form presents in early childhood with progressive motor dysfunction. Therapeutic strategies under investigation include pantothenate (vitamin B5) supplementation, CoA precursors such as pantethine, and gene therapy approaches.</p>
<h3>Pantothenic Acid Deficiency</h3>
<p>Although rare due to the widespread distribution of pantothenic acid in foods, experimental deficiency in humans causes fatigue, headache, nausea, and paresthesia. Severe deficiency impairs adrenal function (CoA is required for steroidogenesis) and wound healing.</p>
<h3>Cancer Metabolism</h3>
<p>Acetyl-CoA, the primary product of CoA-dependent metabolism, serves as the acetyl donor for histone acetylation and thus influences gene expression. In cancer cells, altered CoA metabolism affects both energy production and epigenetic regulation. Many tumors upregulate enzymes that produce acetyl-CoA (ATP citrate lyase, acetyl-CoA synthetase) to support both lipid synthesis and histone acetylation required for rapid proliferation.</p>
<h2>Relationships</h2>
<h3>Produces</h3>
<p>PRODUCES::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
PRODUCES::<a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a></p>
<h3>Related To</h3>
<p>RELATED_TO::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED_TO::<a href="/entities/metabolite/citrate/" class="internal-link">Citrate</a><br />
RELATED_TO::<a href="/entities/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a></p>
<h2>References</h2>
<ul>
<li>Pietrocola F, Galluzzi L, Bravo-San Pedro JM, et al. <em>Cell Metab.</em> 2015;21(6):805-821 -- Acetyl coenzyme A: a central metabolite and second messenger (PMID: 26039447)</li>
<li>Guertin DA, Wellen KE. <em>Nat Rev Cancer.</em> 2023;23(4):254-271 -- Acetyl-CoA metabolism in cancer (PMID: 36658431)</li>
<li>Pereira A, Fischinger Moura de Souza C, Alvarez-Cordoba M, et al. <em>Orphanet J Rare Dis.</em> 2024;19(1):394 -- A therapeutic approach to pantothenate kinase associated neurodegeneration: a pilot study (PMID: 39609877)</li>
<li>He W, Li Q, Li X, et al. <em>Biochim Biophys Acta Rev Cancer.</em> 2023;1878(1):188857 -- Acetyl-CoA regulates lipid metabolism and histone acetylation modification in cancer (PMID: 36403921)</li>
</ul>

{% endraw %}