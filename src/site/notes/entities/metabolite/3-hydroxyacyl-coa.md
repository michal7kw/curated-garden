---
created: '2026-05-08T08:21:33.351389Z'
description: L-3-Hydroxyacyl-CoA is the hydroxylated intermediate of the beta-oxidation
  spiral, formed by stereospecific hydration of trans-2-enoyl-CoA. Its oxidation by
  3-hydroxyacyl-CoA dehydrogenase generates NADH and produces 3-ketoacyl-CoA, making
  this step a key contributor to the energy yield and a critical diagnostic node for
  fatty acid oxidation disorders including LCHAD deficiency.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/3-hydroxyacyl-coa/
slug: 3-hydroxyacyl-coa
tags:
- metabolite
- beta_oxidation
- energy_metabolism
- fatty_acid_metabolism
- mitochondrial
templateEngineOverride: njk
title: 3-Hydroxyacyl-CoA
type: metabolite
updated: '2026-05-08T08:21:33.351389Z'
---

{% raw %}
<h1>3-Hydroxyacyl-CoA</h1>
<h2>Overview</h2>
<p>L-3-Hydroxyacyl-CoA (also called beta-hydroxyacyl-CoA) is the second intermediate formed in each round of the mitochondrial beta-oxidation spiral. It is produced when enoyl-CoA hydratase (also called crotonase) catalyzes the stereospecific addition of water across the trans double bond of trans-2-enoyl-CoA, yielding exclusively the L-stereoisomer. This hydration step converts the relatively stable enoyl intermediate into a hydroxylated species poised for the next oxidation.</p>
<p>In the subsequent step, L-3-hydroxyacyl-CoA dehydrogenase (HAD) oxidizes the beta-hydroxyl group to a keto group, reducing NAD+ to NADH and producing 3-ketoacyl-CoA. This NADH generation is one of two direct reducing-equivalent contributions per beta-oxidation cycle (the other being FADH2 from the acyl-CoA dehydrogenase step), feeding electrons into the mitochondrial electron transport chain for ATP production.</p>
<p>3-Hydroxyacyl-CoA intermediates vary in chain length depending on the fatty acid substrate being oxidized. For long-chain substrates (C12-C18), both the hydratase and dehydrogenase activities reside on the mitochondrial trifunctional protein (MTP), a heterooctameric complex of alpha and beta subunits encoded by HADHA and HADHB. Deficiency of the MTP alpha subunit (which carries the dehydrogenase activity) causes LCHAD deficiency, one of the most clinically significant fatty acid oxidation disorders.</p>
<h2>Enzymatic Steps in Detail</h2>
<h3>Step 2 of Beta-Oxidation: Hydration (Formation)</h3>
<p>Enoyl-CoA hydratase catalyzes the stereospecific addition of water to trans-2-enoyl-CoA, producing exclusively the L-isomer of 3-hydroxyacyl-CoA. The D-isomer is not produced and must be handled by separate stereospecific enzymes if it arises from other metabolic pathways.</p>
<ul>
<li><strong>Substrate:</strong> trans-2-Enoyl-CoA + H2O</li>
<li><strong>Product:</strong> L-3-Hydroxyacyl-CoA</li>
<li><strong>Enzyme:</strong> Enoyl-CoA hydratase (crotonase; EC 4.2.1.17)</li>
<li><strong>Stereospecificity:</strong> Produces only the L-isomer</li>
<li><strong>For short/medium-chain substrates (C4-C12):</strong> Soluble matrix enzyme (ECHS1)</li>
<li><strong>For long-chain substrates (C12-C20):</strong> MTP alpha subunit (HADHA) hydratase domain</li>
</ul>
<h3>Step 3 of Beta-Oxidation: Oxidation</h3>
<p>L-3-Hydroxyacyl-CoA dehydrogenase (HAD) oxidizes the beta-hydroxyl group to a ketone, generating NADH and 3-ketoacyl-CoA. This is the only NAD+-dependent step in the core beta-oxidation cycle.</p>
<ul>
<li><strong>Substrate:</strong> L-3-Hydroxyacyl-CoA + NAD+</li>
<li><strong>Products:</strong> 3-Ketoacyl-CoA + NADH + H+</li>
<li><strong>Enzyme:</strong> L-3-Hydroxyacyl-CoA dehydrogenase (EC 1.1.1.211)</li>
<li><strong>For short/medium-chain substrates (C4-C12):</strong> Soluble matrix enzyme (HAD)</li>
<li><strong>For long-chain substrates (C12-C20):</strong> MTP alpha subunit (HADHA) dehydrogenase domain</li>
<li><strong>Energetic contribution:</strong> Each NADH yields approximately 2.5 ATP via oxidative phosphorylation</li>
</ul>
<h3>The Mitochondrial Trifunctional Protein (MTP)</h3>
<p>For long-chain fatty acids, steps 2-4 of beta-oxidation are catalyzed by the mitochondrial trifunctional protein, a heterooctameric complex (alpha4-beta4):</p>
<table>
<thead>
<tr>
<th>Subunit</th>
<th>Gene</th>
<th>Activities</th>
<th>Domains</th>
</tr>
</thead>
<tbody>
<tr>
<td>Alpha (HADHA)</td>
<td>HADHA</td>
<td>Enoyl-CoA hydratase + 3-hydroxyacyl-CoA dehydrogenase</td>
<td>Two catalytic domains</td>
</tr>
<tr>
<td>Beta (HADHB)</td>
<td>HADHB</td>
<td>3-Ketoacyl-CoA thiolase</td>
<td>Single catalytic domain</td>
</tr>
</tbody>
</table>
<p>MTP physically associates with the very long-chain acyl-CoA dehydrogenase (VLCAD) on the inner mitochondrial membrane, forming a &quot;beta-oxidation metabolon&quot; that channels intermediates between active sites without releasing them into the matrix, improving catalytic efficiency.</p>
<h2>Clinical Significance</h2>
<h3>LCHAD Deficiency</h3>
<p>Long-chain L-3-hydroxyacyl-CoA dehydrogenase (LCHAD) deficiency is caused by mutations in the HADHA gene, most commonly the c.1528G&gt;C (E474Q) missense mutation. This specifically impairs the dehydrogenase activity of MTP while sparing the thiolase activity.</p>
<p><strong>Clinical presentation:</strong></p>
<ul>
<li><strong>Onset:</strong> Usually in infancy or early childhood</li>
<li><strong>Hypoketotic hypoglycemia:</strong> Inability to generate ketone bodies during fasting, with paradoxically low ketones despite metabolic stress</li>
<li><strong>Cardiomyopathy:</strong> Dilated or hypertrophic, often severe</li>
<li><strong>Hepatic dysfunction:</strong> Acute fatty liver, cholestasis, elevated transaminases</li>
<li><strong>Skeletal myopathy:</strong> Exercise intolerance, rhabdomyolysis</li>
<li><strong>Retinopathy:</strong> Progressive pigmentary retinopathy is a distinctive long-term complication</li>
<li><strong>Peripheral neuropathy:</strong> Progressive sensorimotor neuropathy</li>
</ul>
<p><strong>Maternal complications:</strong> Heterozygous mothers carrying LCHAD-deficient fetuses are at risk for AFLP (acute fatty liver of pregnancy) and HELLP syndrome, making LCHAD deficiency one of the few fetal genetic conditions that directly threatens maternal health.</p>
<h3>MTP Deficiency</h3>
<p>Complete mitochondrial trifunctional protein deficiency (affecting both alpha and beta subunits) is rarer and typically more severe than isolated LCHAD deficiency, with earlier onset and more rapid progression.</p>
<h3>Diagnostic Biomarkers</h3>
<ul>
<li><strong>Plasma acylcarnitine profile:</strong> Elevated C16-OH, C18-OH, C18:1-OH acylcarnitines</li>
<li><strong>Urine organic acids:</strong> Elevated 3-hydroxydicarboxylic acids (C6-C14)</li>
<li><strong>Newborn screening:</strong> Detectable via tandem MS/MS dried blood spot analysis</li>
<li><strong>Fibroblast studies:</strong> Direct measurement of LCHAD activity in cultured skin fibroblasts</li>
<li><strong>Genetic testing:</strong> HADHA and HADHB gene sequencing</li>
</ul>
<h3>Management</h3>
<ul>
<li><strong>Avoid fasting:</strong> Maintain regular feeding schedule; avoid prolonged fasting</li>
<li><strong>Medium-chain triglyceride (MCT) supplementation:</strong> Bypasses the long-chain beta-oxidation block, as medium-chain fatty acids enter mitochondria independently of the carnitine shuttle and are oxidized by separate enzymes</li>
<li><strong>L-Carnitine supplementation:</strong> May be beneficial in secondary carnitine depletion</li>
<li><strong>Emergency protocol:</strong> Prompt treatment of metabolic crises with IV glucose to suppress lipolysis</li>
</ul>
<h2>Relationships</h2>
<h3>Produced By</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/enoyl-coa/" class="internal-link">Enoyl-CoA</a></p>
<h3>Produces</h3>
<p>PRODUCES::<a href="/entities/metabolite/3-ketoacyl-coa/" class="internal-link">3-Ketoacyl-CoA</a><br />
PRODUCES::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a></p>
<h3>Participates In</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a><br />
RELATED::<a href="/entities/metabolite/succinate/" class="internal-link">Succinate</a></p>
<h3>Enzymes</h3>
<p>RELATED::<a href="/entities/protein/acyl-coa-dehydrogenase/" class="internal-link">Acyl-CoA Dehydrogenase</a><br />
RELATED::<a href="/entities/protein/thiolase/" class="internal-link">Thiolase</a></p>
<h3>Related Supplements</h3>
<p>RELATED::<a href="/entities/supplement/l-carnitine/" class="internal-link">L-Carnitine</a><br />
RELATED::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Eaton S, Bursby T, Middleton B, et al. The mitochondrial trifunctional protein: centre of a beta-oxidation metabolon? <em>Biochem Soc Trans.</em> 2000;28(2):177-182 (PMID: 10816122)</li>
<li>Merritt JL 2nd, Norris M, Kanungo S. Fatty acid oxidation disorders. <em>Ann Transl Med.</em> 2018;6(24):473 (PMID: 30740404)</li>
<li>Jones PM, Butt Y, Bennett MJ. Accumulation of 3-hydroxy-fatty acids in long-chain L-3-hydroxyacyl CoA dehydrogenase (LCHAD) and mitochondrial trifunctional protein-deficient skin fibroblasts. <em>Pediatr Res.</em> 2003;53(5):783-787 (PMID: 12621125)</li>
<li>Fraser H, Geppert J, Johnson R, et al. Evaluation of earlier versus later dietary management in long-chain 3-hydroxyacyl-CoA dehydrogenase or mitochondrial trifunctional protein deficiency: a systematic review. <em>Orphanet J Rare Dis.</em> 2019;14(1):258 (PMID: 31730477)</li>
<li>Yang J, Yuan D, Tan X, et al. Analysis of a family with mitochondrial trifunctional protein deficiency caused by HADHA gene mutations. <em>Mol Med Rep.</em> 2022;25(2):47 (PMID: 34878152)</li>
<li>Longo N, Frigeni M, Pasquali M. Carnitine transport and fatty acid oxidation. <em>Biochim Biophys Acta Mol Cell Res.</em> 2016;1863(10):2422-2435 (PMID: 26828774)</li>
</ul>

{% endraw %}