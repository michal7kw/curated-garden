---
created: '2026-05-08T08:21:33.461994Z'
description: Glucose-6-phosphate (G6P) is the phosphorylated ester of glucose formed
  by hexokinase/glucokinase in the first committed step of glycolysis. It is a central
  metabolic branch point that directs carbon flux toward glycolysis for energy production,
  the pentose phosphate pathway for NADPH generation and nucleotide synthesis, glycogen
  synthesis for storage, or gluconeogenesis in reverse flux. G6P cannot cross the
  cell membrane, effectively trapping glucose inside the cell for metabolism.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/glucose-6-phosphate/
slug: glucose-6-phosphate
tags:
- metabolite
- glycolysis
- pentose_phosphate_pathway
- gluconeogenesis
- glycogen_metabolism
- central_metabolism
- energy_metabolism
templateEngineOverride: njk
title: Glucose-6-Phosphate
type: metabolite
updated: '2026-05-08T08:21:33.461994Z'
---

{% raw %}
<h1>Glucose-6-Phosphate</h1>
<h2>Overview</h2>
<p>Glucose-6-phosphate (G6P) is the phosphorylated derivative of glucose and occupies a position of singular importance in cellular metabolism as the key branch point connecting glucose uptake to all major pathways of carbohydrate metabolism. Formed by the ATP-dependent phosphorylation of glucose via hexokinase (ubiquitous, low Km) or glucokinase (liver and pancreatic beta cells, high Km), G6P represents the committed step of glucose utilization. The phosphorylation serves a dual purpose: it activates glucose for subsequent metabolic reactions and traps it inside the cell, since the plasma membrane lacks a G6P transporter.</p>
<p>The intracellular concentration of G6P varies dramatically by tissue and metabolic state. In resting muscle, G6P is approximately 0.1-0.4 mmol/kg wet weight, but it can increase 10-20 fold during intense exercise when glycolytic flux is high and phosphofructokinase becomes rate-limiting. In liver, G6P concentrations are tightly regulated by the opposing actions of glucokinase (synthesis) and glucose-6-phosphatase (degradation), reflecting the liver's role as a glucose buffer for the entire organism.</p>
<p>G6P is the substrate for four competing enzymatic reactions, each representing a distinct metabolic fate: (1) phosphoglucose isomerase converts G6P to fructose-6-phosphate, committing it to glycolysis for energy production; (2) glucose-6-phosphate dehydrogenase (G6PD) oxidizes G6P to 6-phosphoglucono-delta-lactone, the entry point to the pentose phosphate pathway for NADPH production and ribose-5-phosphate synthesis; (3) phosphoglucomutase isomerizes G6P to glucose-1-phosphate for glycogen synthesis; and (4) glucose-6-phosphatase hydrolyzes G6P back to free glucose for export from liver and kidney during gluconeogenesis and glycogenolysis.</p>
<h2>Metabolic Fates</h2>
<h3>Glycolysis (Energy Production)</h3>
<p>The primary fate of G6P in most tissues is glycolysis:</p>
<ol>
<li><strong>G6P → Fructose-6-phosphate (F6P):</strong> Phosphoglucose isomerase catalyzes this reversible aldose-ketose isomerization. F6P is then phosphorylated by phosphofructokinase-1 (PFK-1) to fructose-1,6-bisphosphate — the committed and rate-limiting step of glycolysis.</li>
<li><strong>Net yield:</strong> Each G6P molecule metabolized through glycolysis yields 2 pyruvate, 2 ATP (net), and 2 NADH.</li>
</ol>
<p>G6P allosterically activates PFK-2 (producing fructose-2,6-bisphosphate, the most potent activator of PFK-1), creating a feed-forward mechanism that stimulates glycolysis when glucose is abundant.</p>
<h3>Pentose Phosphate Pathway (NADPH and Nucleotides)</h3>
<p>G6PD catalyzes the rate-limiting entry step:</p>
<p>G6P + NADP+ → 6-Phosphogluconolactone + NADPH</p>
<p>This pathway serves two critical functions:</p>
<ul>
<li><strong>NADPH production:</strong> Essential for reductive biosynthesis (fatty acids, cholesterol), antioxidant defense (glutathione regeneration), and cytochrome P450 reactions. Cells with high lipogenic activity (liver, adipose, lactating mammary gland) direct significant G6P flux through this pathway.</li>
<li><strong>Ribose-5-phosphate production:</strong> Required for nucleotide synthesis (DNA, RNA, ATP, NAD+, CoA). Rapidly dividing cells (immune cells, bone marrow, tumors) depend on this pathway.</li>
</ul>
<p>G6PD deficiency — the most common human enzyme defect worldwide (affecting ~400 million people, primarily in malaria-endemic regions) — impairs NADPH production and causes hemolytic anemia upon exposure to oxidative stressors (fava beans, certain drugs, infections).</p>
<h3>Glycogen Synthesis (Storage)</h3>
<p>G6P → Glucose-1-phosphate (phosphoglucomutase) → UDP-glucose → Glycogen (glycogen synthase)</p>
<p>Glycogen synthesis is promoted by insulin (activates glycogen synthase via dephosphorylation) and inhibited by glucagon and epinephrine (inactivate glycogen synthase via phosphorylation). G6P itself allosterically activates glycogen synthase, providing direct metabolic coupling between glucose availability and storage.</p>
<h3>Glucose Production (Gluconeogenesis/Glycogenolysis)</h3>
<p>In liver and kidney cortex, glucose-6-phosphatase hydrolyzes G6P to free glucose and inorganic phosphate, releasing glucose into the bloodstream. This enzyme is absent in muscle and brain, which retain G6P for local metabolism. Glucose-6-phosphatase deficiency causes Glycogen Storage Disease Type Ia (von Gierke disease), characterized by severe fasting hypoglycemia, hepatomegaly, and lactic acidosis.</p>
<h2>Regulation</h2>
<h3>Hexokinase vs. Glucokinase</h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Hexokinase (HK I-III)</th>
<th>Glucokinase (HK IV)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tissue</td>
<td>All tissues</td>
<td>Liver, pancreas</td>
</tr>
<tr>
<td>Km for glucose</td>
<td>~0.05 mM (high affinity)</td>
<td>~10 mM (low affinity)</td>
</tr>
<tr>
<td>Inhibition by G6P</td>
<td>Yes (feedback)</td>
<td>No</td>
</tr>
<tr>
<td>Induced by insulin</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Physiological role</td>
<td>Basal glucose utilization</td>
<td>Postprandial glucose clearance</td>
</tr>
</tbody>
</table>
<h3>Allosteric Regulation</h3>
<ul>
<li><strong>G6P inhibits hexokinase I-III</strong> — feedback inhibition preventing excessive glucose trapping</li>
<li><strong>G6P activates glycogen synthase</strong> — direct coupling of glucose availability to storage</li>
<li><strong>G6P activates PFK-2</strong> — feed-forward activation of glycolysis via fructose-2,6-bisphosphate</li>
<li><strong>G6P does NOT inhibit glucokinase</strong> — allowing liver to continue clearing glucose even at high G6P concentrations</li>
</ul>
<h3>Hormonal Control</h3>
<ul>
<li><strong>Insulin:</strong> Induces glucokinase transcription, activates glycogen synthase, promotes glycolysis and glycogen synthesis. Overall effect: increases G6P formation and channels it toward storage and oxidation.</li>
<li><strong>Glucagon/Epinephrine:</strong> Promote gluconeogenesis and glycogenolysis, increasing G6P availability for glucose-6-phosphatase to release free glucose.</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Glycogen Storage Disease Type I (von Gierke Disease)</h3>
<p>Glucose-6-phosphatase deficiency (GSD Ia) or glucose-6-phosphate transporter deficiency (GSD Ib) causes accumulation of G6P in liver, leading to:</p>
<ul>
<li>Severe fasting hypoglycemia (glucose cannot be released from glycogen or gluconeogenesis)</li>
<li>Hepatomegaly (glycogen accumulation)</li>
<li>Lactic acidosis (G6P shunted to glycolysis → pyruvate → lactate)</li>
<li>Hyperuricemia (increased pentose phosphate pathway flux)</li>
<li>Hyperlipidemia (increased NADPH-driven lipogenesis)</li>
</ul>
<p>Treatment includes continuous glucose supply (cornstarch, nighttime gastric feeds) and liver transplantation in severe cases.</p>
<h3>G6PD Deficiency</h3>
<p>The most common enzymopathy worldwide (X-linked), affecting approximately 400 million people. Impairs the pentose phosphate pathway, reducing NADPH production and antioxidant capacity. Clinical manifestations include acute hemolytic anemia triggered by oxidative stress (fava beans, sulfa drugs, antimalarials, infections). The geographic distribution overlaps with malaria endemicity, as G6PD-deficient red blood cells resist Plasmodium falciparum infection.</p>
<h3>Diabetes Mellitus</h3>
<ul>
<li>Elevated hepatic G6P (due to hyperglycemia and increased glucokinase activity) drives increased glycolysis and de novo lipogenesis, contributing to hepatic steatosis and hypertriglyceridemia in type 2 diabetes.</li>
<li>Increased gluconeogenic flux through G6P contributes to fasting hyperglycemia. Metformin partially suppresses hepatic glucose production by inhibiting mitochondrial complex I, reducing the ATP and energy available for gluconeogenesis.</li>
</ul>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/fructose-6-phosphate/" class="internal-link">Fructose-6-Phosphate</a><br />
CONVERTED_TO::<a class="internal-link is-unresolved" href="/404">Glyceraldehyde-3-Phosphate</a><br />
CONVERTED_TO::<a href="/entities/metabolite/pyruvate/" class="internal-link">Pyruvate</a></p>
<h3>Catalyzed By</h3>
<p>RELATED::<a href="/entities/protein/hexokinase/" class="internal-link">Hexokinase</a><br />
RELATED::<a href="/entities/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/pentose-phosphate-pathway/" class="internal-link">Pentose Phosphate Pathway</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Related Hormones</h3>
<p>RELATED::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a></p>
<h3>Regulates</h3>
<p>REGULATES::<a href="/entities/protein/hexokinase/" class="internal-link">Hexokinase</a></p>
<h2>References</h2>
<ul>
<li>Cárdenas ML, Cornish-Bowden A, Ureta T. Evolution and regulatory role of the hexokinases. <em>Biochim Biophys Acta.</em> 1998;1401(3):242-264 (PMID: 9573376)</li>
<li>Beutler E. G6PD deficiency. <em>Blood.</em> 1994;84(11):3613-3636 (PMID: 7949118)</li>
<li>Chou JY, Mansfield BC. Glycogen storage disease type I. In: Adam MP, et al., eds. <em>GeneReviews.</em> 2021 (PMID: 20301551)</li>
<li>Berg JM, Tymoczko JL, Gatto GJ, Stryer L. <em>Biochemistry.</em> 9th ed. W.H. Freeman; 2019. Chapter 14: Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway.</li>
<li>Matschinsky B, Wilson DF. The hexokinases of pancreatic islets and their role in glucose-stimulated insulin secretion. <em>Diabetologia.</em> 1973;9(2):127-132 (PMID: 4355128)</li>
<li>Froesch ER, et al. The hexokinases of the liver. <em>Handb Physiol.</em> 1976;1:461-478</li>
</ul>

{% endraw %}