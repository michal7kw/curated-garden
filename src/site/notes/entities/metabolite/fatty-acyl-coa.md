---
created: '2026-05-08T08:21:33.429353Z'
description: Fatty acyl-CoA is the activated thioester form of a fatty acid, produced
  by acyl-CoA synthetase in the cytosol through an ATP-dependent reaction linking
  free fatty acids to coenzyme A. It is the obligatory substrate for beta-oxidation
  in mitochondria and requires the carnitine shuttle (CPT-I, translocase, CPT-II)
  for transport across the inner mitochondrial membrane. Fatty acyl-CoA also serves
  as a substrate for lipid synthesis, protein acylation, and cell signaling pathways.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/fatty-acyl-coa/
slug: fatty-acyl-coa
tags:
- metabolite
- beta_oxidation
- energy_metabolism
- fatty_acid
- lipid_metabolism
- carnitine_shuttle
templateEngineOverride: njk
title: Fatty Acyl-CoA
type: metabolite
updated: '2026-05-08T08:21:33.429353Z'
---

{% raw %}
<h1>Fatty Acyl-CoA</h1>
<h2>Overview</h2>
<p>Fatty acyl-CoA is the activated, metabolically &quot;primed&quot; form of a fatty acid, created when acyl-CoA synthetase (also called thiokinase or fatty acid:CoA ligase) catalyzes the ATP-dependent formation of a high-energy thioester bond between the carboxyl group of a free fatty acid and the sulfhydryl group of coenzyme A. This activation reaction consumes the equivalent of 2 ATP molecules (ATP is cleaved to AMP + inorganic pyrophosphate, which is rapidly hydrolyzed), making the process energetically irreversible and committing the fatty acid to intracellular metabolism.</p>
<p>Fatty acyl-CoA occupies a central position in lipid metabolism as the branch point between fatty acid degradation (beta-oxidation in mitochondria) and fatty acid utilization for complex lipid synthesis (phospholipids, triglycerides, ceramides). In the fasted state, fatty acyl-CoAs are directed toward mitochondrial beta-oxidation for energy production; in the fed state, they are channeled toward triglyceride and phospholipid synthesis for storage and membrane biogenesis. This metabolic switching is primarily regulated by malonyl-CoA, an intermediate of fatty acid synthesis that allosterically inhibits CPT-I, preventing simultaneous fatty acid synthesis and oxidation.</p>
<p>The term &quot;fatty acyl-CoA&quot; encompasses a family of molecules that differ in chain length and degree of saturation. Short-chain (C2-C4), medium-chain (C6-C12), and long-chain (C14-C20) acyl-CoAs are handled by different acyl-CoA synthetase isoforms with distinct subcellular localizations and substrate preferences. Very long-chain acyl-CoAs (C22+) are activated in peroxisomes rather than mitochondria. Each molecule of palmitoyl-CoA (C16:0), the most common long-chain acyl-CoA, yields 7 cycles of beta-oxidation producing 8 acetyl-CoA, 7 NADH, and 7 FADH2, for a net yield of approximately 106 ATP.</p>
<h2>Activation of Fatty Acids</h2>
<h3>The Acyl-CoA Synthetase Reaction</h3>
<p>Fatty acid + CoA-SH + ATP → Fatty acyl-CoA + AMP + PPi</p>
<p>The reaction proceeds in two steps:</p>
<ol>
<li><strong>Adenylation:</strong> ATP reacts with the fatty acid carboxyl group to form a fatty acyl-AMP intermediate (enzyme-bound)</li>
<li><strong>Thioesterification:</strong> The fatty acyl group is transferred from AMP to the thiol of coenzyme A, forming the high-energy thioester bond</li>
</ol>
<p>The thioester bond has a high free energy of hydrolysis (deltaG approximately -31.5 kJ/mol), comparable to the phosphoanhydride bond of ATP, which makes the activated fatty acid thermodynamically competent for subsequent reactions.</p>
<h3>Acyl-CoA Synthetase Isoforms</h3>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Chain Length</th>
<th>Location</th>
<th>Primary Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>ACSS1/2</td>
<td>C2-C4 (short)</td>
<td>Mitochondria/cytosol</td>
<td>Acetate activation</td>
</tr>
<tr>
<td>ACSM1-5</td>
<td>C4-C12 (medium)</td>
<td>Mitochondria</td>
<td>Medium-chain FA oxidation</td>
</tr>
<tr>
<td>ACSL1, 3, 4, 5, 6</td>
<td>C12-C20 (long)</td>
<td>Various organelles</td>
<td>Major FA activation</td>
</tr>
<tr>
<td>SLC27A1-6 (FATP)</td>
<td>C14-C24</td>
<td>Plasma membrane</td>
<td>FA uptake + activation</td>
</tr>
<tr>
<td>ACSVL1-5</td>
<td>C22+ (very long)</td>
<td>Peroxisomes</td>
<td>VLCFA oxidation</td>
</tr>
</tbody>
</table>
<h2>The Carnitine Shuttle</h2>
<p>Long-chain fatty acyl-CoAs (C12+) cannot diffuse across the inner mitochondrial membrane. The carnitine shuttle system transports the acyl group into the matrix:</p>
<h3>Step 1: CPT-I (Outer Mitochondrial Membrane)</h3>
<p>Fatty acyl-CoA + Carnitine → Acylcarnitine + CoA-SH</p>
<p>CPT-I (carnitine palmitoyltransferase I) is the rate-limiting step and major regulatory point of fatty acid oxidation. It is allosterically inhibited by malonyl-CoA (the first committed intermediate of fatty acid synthesis), ensuring that fatty acid synthesis and oxidation do not occur simultaneously.</p>
<h3>Step 2: Translocase (Inner Mitochondrial Membrane)</h3>
<p>Carnitine-acylcarnitine translocase exchanges acylcarnitine (in) for free carnitine (out) in a 1:1 antiport mechanism.</p>
<h3>Step 3: CPT-II (Inner Mitochondrial Membrane, Matrix Side)</h3>
<p>Acylcarnitine + CoA-SH → Fatty acyl-CoA + Carnitine</p>
<p>CPT-II regenerates fatty acyl-CoA in the matrix, releasing free carnitine for another transport cycle.</p>
<h3>Medium-Chain Fatty Acids</h3>
<p>Medium-chain fatty acids (C6-C12, e.g., from MCT oil) bypass the carnitine shuttle entirely — they diffuse across the inner mitochondrial membrane and are activated by medium-chain acyl-CoA synthetase directly in the matrix. This explains the rapid oxidation and ketogenesis observed with MCT supplementation.</p>
<h2>Beta-Oxidation</h2>
<p>Once in the mitochondrial matrix, fatty acyl-CoA undergoes iterative cycles of beta-oxidation, each removing two carbon atoms as acetyl-CoA:</p>
<p><strong>Each cycle involves four reactions:</strong></p>
<ol>
<li><strong>Oxidation (acyl-CoA dehydrogenase):</strong> Fatty acyl-CoA → trans-delta2-enoyl-CoA + FADH2</li>
<li><strong>Hydration (enoyl-CoA hydratase):</strong> trans-delta2-enoyl-CoA + H2O → L-3-hydroxyacyl-CoA</li>
<li><strong>Oxidation (3-hydroxyacyl-CoA dehydrogenase):</strong> L-3-hydroxyacyl-CoA → 3-ketoacyl-CoA + NADH</li>
<li><strong>Cleavage (beta-ketothiolase):</strong> 3-ketoacyl-CoA + CoA-SH → Fatty acyl-CoA (n-2) + Acetyl-CoA</li>
</ol>
<p><strong>Energy yield for palmitoyl-CoA (C16:0):</strong></p>
<ul>
<li>7 NADH × 2.5 ATP = 17.5 ATP</li>
<li>7 FADH2 × 1.5 ATP = 10.5 ATP</li>
<li>8 Acetyl-CoA × 10 ATP = 80 ATP</li>
<li>Total: 108 ATP - 2 ATP (activation) = <strong>106 ATP net</strong></li>
</ul>
<h2>Regulation</h2>
<h3>Malonyl-CoA / CPT-I Axis</h3>
<p>Malonyl-CoA, produced by acetyl-CoA carboxylase (ACC) during fatty acid synthesis, is the primary physiological inhibitor of CPT-I:</p>
<ul>
<li><strong>Fed state:</strong> Insulin activates ACC → malonyl-CoA rises → CPT-I inhibited → FA oxidation suppressed, FA synthesis promoted</li>
<li><strong>Fasted state:</strong> Glucagon/AMPK phosphorylate and inhibit ACC → malonyl-CoA falls → CPT-I disinhibited → FA oxidation activated</li>
</ul>
<h3>AMPK Signaling</h3>
<p>AMPK activation during energy depletion:</p>
<ul>
<li>Phosphorylates and inhibits ACC (reducing malonyl-CoA)</li>
<li>Phosphorylates and inactivates acyl-CoA synthetase</li>
<li>Net effect: Increases FA oxidation when ATP is low</li>
</ul>
<h3>Hormonal Control</h3>
<ul>
<li><strong>Insulin:</strong> Promotes acyl-CoA channeling toward triglyceride synthesis (via activation of glycerol-3-phosphate acyltransferase); inhibits FA oxidation via malonyl-CoA</li>
<li><strong>Glucagon/Epinephrine:</strong> Promote lipolysis in adipose tissue (hormone-sensitive lipase activation), increasing FA delivery to liver and muscle for acyl-CoA formation and oxidation</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Carnitine Deficiency</h3>
<p>Primary carnitine deficiency (SLC22A5 mutation) or secondary deficiency (organic acidemias, valproate therapy) impairs long-chain acyl-CoA transport into mitochondria:</p>
<ul>
<li>Hypoketotic hypoglycemia (cannot oxidize FAs for energy or ketone production)</li>
<li>Cardiomyopathy (heart depends on FA oxidation for 60-80% of ATP)</li>
<li>Myopathy and exercise intolerance</li>
<li>Treatment: L-carnitine supplementation (100-400 mg/kg/day)</li>
</ul>
<h3>CPT-I and CPT-II Deficiency</h3>
<ul>
<li><strong>CPT-I deficiency:</strong> Rare, causes fasting hypoketotic hypoglycemia and hepatic encephalopathy</li>
<li><strong>CPT-II deficiency:</strong> Most common lipid myopathy; adult form causes recurrent rhabdomyolysis triggered by exercise, fasting, or illness; neonatal form is lethal</li>
</ul>
<h3>Fatty Acid Oxidation Disorders (FAODs)</h3>
<p>Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency is the most common FAOD (1:15,000 in Caucasians):</p>
<ul>
<li>Impaired oxidation of medium-chain acyl-CoAs</li>
<li>Fasting hypoketotic hypoglycemia, vomiting, lethargy</li>
<li>Sudden death in undiagnosed infants</li>
<li>Newborn screening (acylcarnitine profile) has dramatically reduced mortality</li>
</ul>
<h3>Non-Alcoholic Fatty Liver Disease (NAFLD)</h3>
<p>Accumulation of fatty acyl-CoAs in hepatocytes contributes to lipotoxicity:</p>
<ul>
<li>Diacylglycerol and ceramide synthesis from excess acyl-CoA activate PKC and JNK inflammatory pathways</li>
<li>Acyl-CoA-mediated mitochondrial uncoupling and reactive oxygen species production</li>
<li>Triglyceride synthesis is actually protective (sequesters toxic acyl-CoAs as inert triglycerides)</li>
</ul>
<h2>Relationships</h2>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/acylcarnitine/" class="internal-link">Acylcarnitine</a><br />
CONVERTED_TO::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
CONVERTED_TO::<a href="/entities/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a></p>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a></p>
<h3>Transport</h3>
<p>RELATED::<a href="/entities/protein/cpt-i/" class="internal-link">CPT-I</a><br />
RELATED::<a href="/entities/protein/cpt-ii/" class="internal-link">CPT-II</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Related Proteins</h3>
<p>RELATED::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a></p>
<h3>Related Hormones</h3>
<p>RELATED::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a></p>
<h3>Related Supplements</h3>
<p>RELATED::<a href="/entities/supplement/l-carnitine/" class="internal-link">L-Carnitine</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Eaton S, Bartlett K, Pourfarzam M. Mammalian mitochondrial beta-oxidation. <em>Biochem J.</em> 1996;320(Pt 2):345-357 (PMID: 8973559)</li>
<li>McGarry JD, Brown NF. The mitochondrial carnitine palmitoyltransferase system. From concept to molecular analysis. <em>Eur J Biochem.</em> 1997;244(1):1-14 (PMID: 9063439)</li>
<li>Kerner J, Hoppel C. Fatty acid import into mitochondria. <em>Biochim Biophys Acta.</em> 2000;1486(1):1-17 (PMID: 10856707)</li>
<li>Li LO, Klett EL, Coleman RA. Acyl-CoA synthesis, lipid metabolism and lipotoxicity. <em>Biochim Biophys Acta.</em> 2010;1801(3):246-251 (PMID: 19781577)</li>
<li>Bonnefont JP, Djouadi F, Prip-Buus C, et al. Carnitine palmitoyltransferases 1 and 2: biochemical, molecular and medical aspects. <em>Mol Aspects Med.</em> 2004;25(5-6):495-520 (PMID: 15363638)</li>
<li>Rinaldo P, Matern D, Bennett MJ. Fatty acid oxidation disorders. <em>Annu Rev Physiol.</em> 2002;64:477-502 (PMID: 11826277)</li>
<li>Nezu J, Tamai I, Oku A, et al. Primary systemic carnitine deficiency is caused by mutations in a gene encoding sodium ion-dependent carnitine transporter. <em>Nat Genet.</em> 1999;21(1):91-94 (PMID: 9916797)</li>
</ul>

{% endraw %}