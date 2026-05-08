---
created: '2026-05-08T08:21:33.438076Z'
description: Fructose-1,6-bisphosphate (F1,6BP) is the product of the committed step
  of glycolysis, formed by phosphofructokinase-1 (PFK-1) phosphorylation of fructose-6-phosphate.
  It serves as a feedforward activator of pyruvate kinase, ensuring coordinated glycolytic
  flux, and functions as a signaling molecule that activates AMPK independently of
  cellular energy status.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/fructose-16-bisphosphate/
slug: fructose-16-bisphosphate
tags:
- metabolite
- glycolysis
- energy_metabolism
- carbohydrate_metabolism
- metabolic_intermediate
- gluconeogenesis
templateEngineOverride: njk
title: Fructose-1,6-Bisphosphate
type: metabolite
updated: '2026-05-08T08:21:33.438076Z'
---

{% raw %}
<h1>Fructose-1,6-Bisphosphate</h1>
<h2>Overview</h2>
<p>Fructose-1,6-bisphosphate (F1,6BP) is a six-carbon bisphosphorylated sugar and the product of the committed step of <a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a>, formed when <a href="/entities/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a> (PFK-1) phosphorylates <a href="/entities/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a> using <a href="/entities/metabolite/atp/" class="internal-link">ATP</a>. It marks the point of no return in glycolysis — once formed, the carbon skeleton is committed to completing the glycolytic pathway or being diverted into alternative pathways. F1,6BP is cleaved by aldolase into two triose phosphates, doubling the carbon yield per glucose molecule in lower glycolysis.</p>
<p>Beyond its central metabolic role, F1,6BP functions as an endogenous signaling molecule. A landmark 2017 study demonstrated that F1,6BP — together with the enzyme aldolase — mediates glucose sensing by <a href="/entities/protein/ampk/" class="internal-link">AMPK</a>, providing a mechanism by which cells detect glucose availability independently of the cellular AMP/ATP ratio.</p>
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
<td>C6H14O12P2</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>340.12 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>10267</td>
</tr>
<tr>
<td>HMDB ID</td>
<td>HMDB0001058</td>
</tr>
<tr>
<td>CAS Number</td>
<td>488-69-7</td>
</tr>
</tbody>
</table>
<h2>Mechanism of Action</h2>
<h3>Formation and Cleavage</h3>
<ul>
<li><strong>Formation</strong>: PFK-1 catalyzes the irreversible reaction: F6P + ATP → F1,6BP + ADP. This is the committed step of glycolysis and the primary point of glycolytic regulation.</li>
<li><strong>Cleavage</strong>: Aldolase (fructose-1,6-bisphosphate aldolase) cleaves F1,6BP into two three-carbon molecules: <a href="/entities/g3p/glyceraldehyde-3-phosphate/" class="internal-link">Glyceraldehyde-3-Phosphate</a> (G3P) and dihydroxyacetone phosphate (DHAP). These interconvert rapidly via triose phosphate isomerase.</li>
<li><strong>Net effect</strong>: One molecule of F1,6BP yields two molecules of G3P, each of which proceeds through lower glycolysis to produce one pyruvate, doubling the ATP and NADH yield per glucose in subsequent steps.</li>
</ul>
<h3>Feedforward Activation of Pyruvate Kinase</h3>
<p>F1,6BP functions as a potent feedforward activator of <a href="/entities/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a>, the final enzyme of glycolysis. This regulatory mechanism ensures that when upper glycolytic flux is high (indicated by elevated F1,6BP), pyruvate kinase is activated to process the downstream intermediates efficiently. This prevents the accumulation of glycolytic intermediates and maintains pathway coherence. In the liver, this feedforward activation is part of the substrate cycle that amplifies the glycolytic response to elevated glucose.</p>
<h3>AMPK Activation and Glucose Sensing</h3>
<p>F1,6BP plays a critical role in cellular energy sensing through its interaction with <a href="/entities/protein/ampk/" class="internal-link">AMPK</a>. When glucose is abundant, F1,6BP accumulates and binds to aldolase, which is associated with the v-ATPase-AXIN/LKB1-AMPK complex on the lysosomal membrane. This interaction promotes AMPK activation by LKB1, even in the absence of elevated AMP. Conversely, when glucose is scarce, F1,6BP levels drop, and the AXIN/LKB1 complex dissociates from the lysosome, reducing AMPK activity. This mechanism provides a direct link between glycolytic flux and energy homeostasis, independent of the canonical AMP/ATP sensing pathway.</p>
<h3>Gluconeogenesis</h3>
<p>In <a href="/entities/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a>, F1,6BP is hydrolyzed back to <a href="/entities/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a> by fructose-1,6-bisphosphatase (FBPase-1), an enzyme that is reciprocally regulated with PFK-1. This substrate cycle between PFK-1 and FBPase-1 is a key point of hormonal regulation: glucagon inhibits PFK-2 (reducing F2,6BP, thus reducing PFK-1 activity) while simultaneously promoting FBPase-1 activity, shifting the metabolic flux toward glucose production.</p>
<h2>Clinical Significance</h2>
<h3>Fructose-1,6-Bisphosphatase Deficiency</h3>
<p>Fructose-1,6-bisphosphatase (FBPase) deficiency is an autosomal recessive disorder of gluconeogenesis characterized by episodic lactic acidosis, hypoglycemia, and ketosis, typically triggered by fasting, febrile illness, or fructose/sucrose ingestion. The condition results from mutations in the FBP1 gene, leading to impaired conversion of F1,6BP to fructose-6-phosphate in gluconeogenesis. Diagnosis is confirmed by enzyme assay or genetic testing, and management centers on avoiding prolonged fasting and restricting dietary fructose and sucrose.</p>
<h3>Cancer Metabolism</h3>
<p>F1,6BP levels are elevated in many cancers due to increased glycolytic flux (the Warburg effect). The interplay between F1,6BP and pyruvate kinase M2 (PKM2) is particularly relevant in cancer: PKM2 exists in a less active dimeric form in tumor cells, and F1,6BP promotes its assembly into the more active tetrameric form. Pharmacological activation of PKM2 by small molecules mimics the effect of F1,6BP and has been shown to suppress tumorigenesis in preclinical models.</p>
<h3>Aldolase Deficiency</h3>
<p>Aldolase B deficiency causes hereditary fructose intolerance (HFI), in which ingestion of fructose leads to accumulation of fructose-1-phosphate (not F1,6BP) and depletion of intracellular phosphate and ATP. While HFI primarily involves fructose-1-phosphate metabolism rather than F1,6BP directly, aldolase B also processes F1,6BP, and the enzyme deficiency can affect glycolytic flux through the aldolase step.</p>
<h2>Relationships</h2>
<h3>Produced By</h3>
<p>PRODUCED_BY::<a href="/entities/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a><br />
PRODUCED_BY::<a href="/entities/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a></p>
<h3>Regulates</h3>
<p>REGULATES::<a href="/entities/protein/pyruvate-kinase/" class="internal-link">Pyruvate Kinase</a><br />
REGULATES::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/entities/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a class="internal-link is-unresolved" href="/404">Glyceraldehyde-3-Phosphate</a></p>
<h2>References</h2>
<ul>
<li>Zhang CS, Hawley SA, Zong Y, et al. <em>Nature.</em> 2017;548(7666):112-116 -- Fructose-1,6-bisphosphate and aldolase mediate glucose sensing by AMPK (PMID: 28723898)</li>
<li>Pirovich DB, Da'dara AA, Skelly PJ. <em>Front Mol Biosci.</em> 2021;8:651126 -- Multifunctional Fructose 1,6-Bisphosphate Aldolase as a Therapeutic Target (PMID: 34458323)</li>
<li>Anastasiou D, Yu Y, Israensen WJ, et al. <em>Nat Chem Biol.</em> 2012;8(10):839-847 -- Pyruvate kinase M2 activators promote tetramer formation and suppress tumorigenesis (PMID: 22922757)</li>
<li>Adam MP, Bick S, Mirzaa GM, et al. <em>GeneReviews.</em> 1993 -- Fructose-1,6-Bisphosphatase Deficiency (PMID: 31804789)</li>
<li>Schöneberg T, Kloos M, Brüser A, et al. <em>Biol Chem.</em> 2013;394(8):977-985 -- Structure and allosteric regulation of eukaryotic 6-phosphofructokinases (PMID: 23729568)</li>
</ul>

{% endraw %}