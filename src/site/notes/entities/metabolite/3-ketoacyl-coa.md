---
created: '2026-05-08T08:21:33.357062Z'
description: 3-Ketoacyl-CoA is the final intermediate of the mitochondrial beta-oxidation
  cycle before thiolytic cleavage by beta-ketothiolase. This reaction releases acetyl-CoA
  and a fatty acyl-CoA shortened by two carbons, which re-enters the beta-oxidation
  spiral, making 3-ketoacyl-CoA a critical turning point in fatty acid energy metabolism.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/3-ketoacyl-coa/
slug: 3-ketoacyl-coa
tags:
- metabolite
- beta_oxidation
- energy_metabolism
- fatty_acid_metabolism
- mitochondrial
templateEngineOverride: njk
title: 3-Ketoacyl-CoA
type: metabolite
updated: '2026-05-08T08:21:33.357062Z'
---

{% raw %}
<h1>3-Ketoacyl-CoA</h1>
<h2>Overview</h2>
<p>3-Ketoacyl-CoA (also called beta-ketoacyl-CoA) is the final intermediate generated in each round of the mitochondrial beta-oxidation spiral. It is produced when 3-hydroxyacyl-CoA dehydrogenase oxidizes L-3-hydroxyacyl-CoA, transferring electrons to NAD+ to form NADH. In the subsequent and rate-determining step, beta-ketothiolase (also known as acetyl-CoA acyltransferase) cleaves the carbon-carbon bond between the alpha and beta carbons using a second molecule of free coenzyme A, releasing one molecule of acetyl-CoA and a fatty acyl-CoA shortened by two carbon atoms.</p>
<p>This thiolytic cleavage is the productive step of beta-oxidation — it is the reaction that actually harvests the two-carbon acetyl units from a fatty acid chain. The shortened acyl-CoA re-enters the cycle for another round of oxidation, continuing until the fatty acid is completely degraded. For a 16-carbon palmitate, seven complete cycles yield eight acetyl-CoA molecules.</p>
<p>3-Ketoacyl-CoA intermediates vary in chain length depending on the substrate being oxidized (e.g., 3-ketostearyl-CoA for C18, 3-ketopalmitoyl-CoA for C16). This chain-length variability means 3-ketoacyl-CoA is best understood as a metabolite class rather than a single defined compound.</p>
<h2>Formation and Enzymatic Steps</h2>
<h3>Step 3 of Beta-Oxidation: Formation</h3>
<p>L-3-Hydroxyacyl-CoA dehydrogenase catalyzes the oxidation of L-3-hydroxyacyl-CoA to 3-ketoacyl-CoA, with concomitant reduction of NAD+ to NADH. This is the third of four enzymatic steps in each beta-oxidation cycle.</p>
<ul>
<li><strong>Substrate:</strong> L-3-Hydroxyacyl-CoA (produced by enoyl-CoA hydratase in step 2)</li>
<li><strong>Product:</strong> 3-Ketoacyl-CoA + NADH + H+</li>
<li><strong>Enzyme:</strong> L-3-Hydroxyacyl-CoA dehydrogenase (EC 1.1.1.211)</li>
<li><strong>Mitochondrial location:</strong> Matrix</li>
</ul>
<h3>Step 4 of Beta-Oxidation: Thiolytic Cleavage</h3>
<p>Beta-ketothiolase (acetyl-CoA C-acyltransferase, EC 2.3.1.16) catalyzes the nucleophilic attack of the thiol group of free CoA on the C3 carbonyl carbon, cleaving the molecule into acetyl-CoA and a shortened acyl-CoA.</p>
<ul>
<li><strong>Substrate:</strong> 3-Ketoacyl-CoA + CoA-SH</li>
<li><strong>Products:</strong> Acetyl-CoA + Acyl-CoA (n-2)</li>
<li><strong>Enzyme:</strong> Beta-ketothiolase</li>
<li><strong>Energetic yield per cycle:</strong> 1 NADH (from step 3) + 1 FADH2 (from step 1) + 1 acetyl-CoA</li>
</ul>
<h3>Chain-Length Specificity</h3>
<p>Different thiolase isoforms handle different chain lengths:</p>
<ul>
<li><strong>ACAA2</strong> (mitochondrial): Medium- and long-chain 3-ketoacyl-CoA (C4-C20)</li>
<li><strong>CT</strong> (cytosolic): Acetoacetyl-CoA thiolase for cholesterol and ketone synthesis</li>
<li><strong>T2/ACAT1</strong> (mitochondrial): Short-chain (acetoacetyl-CoA specific, C4)</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Beta-Ketothiolase Deficiency (T2 Deficiency)</h3>
<p>Mitochondrial acetoacetyl-CoA thiolase (T2, encoded by ACAT1) deficiency is an autosomal recessive inborn error of metabolism affecting isoleucine catabolism and ketone body utilization. Clinical features include:</p>
<ul>
<li>Episodic ketoacidosis, typically triggered by infections or prolonged fasting</li>
<li>Elevated urinary 2-methyl-3-hydroxybutyrate and tiglylglycine</li>
<li>Onset usually in infancy or early childhood (6-18 months)</li>
<li>Most patients have normal neurodevelopment between episodes, though some develop intellectual disability</li>
</ul>
<h3>Fatty Acid Oxidation Disorders</h3>
<p>Accumulation of 3-ketoacyl-CoA intermediates can occur in various fatty acid oxidation disorders (FAODs), including:</p>
<ul>
<li><strong>Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency</strong> — the most common FAOD</li>
<li><strong>Very long-chain acyl-CoA dehydrogenase (VLCAD) deficiency</strong></li>
<li><strong>Long-chain 3-hydroxyacyl-CoA dehydrogenase (LCHAD) deficiency</strong></li>
</ul>
<p>These disorders impair the complete beta-oxidation cycle, leading to hypoketotic hypoglycemia, liver dysfunction, and cardiomyopathy during metabolic stress.</p>
<h3>Biomarker Relevance</h3>
<p>Elevated acylcarnitine profiles (particularly C4 and C5 species) on newborn screening can indicate defects in the thiolase step or upstream beta-oxidation enzymes, prompting further diagnostic evaluation.</p>
<h2>Relationships</h2>
<h3>Produced By</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/3-hydroxyacyl-coa/" class="internal-link">3-Hydroxyacyl-CoA</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Enzymes</h3>
<p>ACTIVATES::<a href="/entities/protein/thiolase/" class="internal-link">Thiolase</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/enoyl-coa/" class="internal-link">Enoyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Adeva-Andany MM, Carneiro-Freire N, Seco-Filgueira M, et al. Mitochondrial beta-oxidation of saturated fatty acids in humans. <em>Mitochondrion.</em> 2019;46:73-90 (PMID: 29551309)</li>
<li>Fukao T, Sasai H, Aoyama Y, et al. Recent advances in understanding beta-ketothiolase (mitochondrial acetoacetyl-CoA thiolase, T2) deficiency. <em>J Hum Genet.</em> 2019;64(2):99-111 (PMID: 30393371)</li>
<li>Houten SM, Violante S, Ventura FV, Wanders RJ. The Biochemistry and Physiology of Mitochondrial Fatty Acid beta-Oxidation and Its Genetic Disorders. <em>Annu Rev Physiol.</em> 2016;78:23-44 (PMID: 26474213)</li>
<li>Hashimoto T. Peroxisomal beta-oxidation enzymes. <em>Neurochem Res.</em> 1999;24(4):551-563 (PMID: 10227687)</li>
<li>Tahri-Joutey M, Andreoletti P, Surapureddi S, et al. Mechanisms Mediating the Regulation of Peroxisomal Fatty Acid Beta-Oxidation by PPARalpha. <em>Int J Mol Sci.</em> 2021;22(16):8969 (PMID: 34445672)</li>
</ul>

{% endraw %}