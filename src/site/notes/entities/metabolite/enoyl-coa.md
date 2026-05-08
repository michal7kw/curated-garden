---
created: '2026-05-08T08:21:33.414758Z'
description: Enoyl-CoA (trans-delta2-enoyl-CoA) is the unsaturated thioester intermediate
  formed in the first step of each beta-oxidation cycle when acyl-CoA dehydrogenase
  oxidizes fatty acyl-CoA, introducing a trans double bond between C2 and C3. It is
  subsequently hydrated by enoyl-CoA hydratase to form L-3-hydroxyacyl-CoA. Enoyl-CoA
  represents a critical checkpoint in fatty acid oxidation, as defects in its formation
  or processing underlie several inherited metabolic disorders.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/enoyl-coa/
slug: enoyl-coa
tags:
- metabolite
- beta_oxidation
- energy_metabolism
- fatty_acid
- lipid_metabolism
templateEngineOverride: njk
title: Enoyl-CoA
type: metabolite
updated: '2026-05-08T08:21:33.414758Z'
---

{% raw %}
<h1>Enoyl-CoA</h1>
<h2>Overview</h2>
<p>Enoyl-CoA (trans-delta2-enoyl-CoA) is the unsaturated thioester intermediate formed in the first step of each beta-oxidation cycle. When acyl-CoA dehydrogenase removes two hydrogen atoms from the alpha (C2) and beta (C3) carbons of a fatty acyl-CoA, a trans-configured carbon-carbon double bond is introduced, yielding enoyl-CoA and transferring electrons to enzyme-bound FAD. The trans geometry is essential — only the trans isomer is a substrate for the next enzyme, enoyl-CoA hydratase, which adds water stereospecifically across the double bond to produce L-3-hydroxyacyl-CoA.</p>
<p>The enoyl-CoA intermediate is a transient species in normal metabolism, rapidly processed by the highly efficient enoyl-CoA hydratase (turnover number approximately 100,000/min for crotonase). However, it accumulates when there are defects in the downstream enzymes or when the electron-transferring flavoprotein (ETF) system that shuttles FADH2 electrons to the respiratory chain is impaired. Accumulated enoyl-CoA intermediates are diverted to alternative pathways, including the formation of dicarboxylic acids and the generation of reactive oxygen species.</p>
<p>Enoyl-CoA exists as a family of molecules varying in chain length, each processed by specific enzyme isoforms optimized for different substrate sizes. Short-chain (C4-C6), medium-chain (C6-C12), and long-chain (C12-C20) enoyl-CoAs are handled by the corresponding acyl-CoA dehydrogenase and hydratase isoforms, with the medium-chain acyl-CoA dehydrogenase (MCAD) being the most abundant and clinically significant. The unsaturated bond in enoyl-CoA also makes it a reactive electrophilic species that can form Michael adducts with cellular nucleophiles under conditions of metabolic stress.</p>
<h2>Position in Beta-Oxidation</h2>
<h3>The Four-Step Cycle</h3>
<p>Enoyl-CoA is formed in step 1 and consumed in step 2 of the beta-oxidation spiral:</p>
<table>
<thead>
<tr>
<th>Step</th>
<th>Reaction</th>
<th>Enzyme</th>
<th>Product</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. Oxidation</strong></td>
<td>Fatty acyl-CoA → <strong>trans-delta2-enoyl-CoA</strong></td>
<td>Acyl-CoA dehydrogenase</td>
<td><strong>Enoyl-CoA</strong> + FADH2</td>
</tr>
<tr>
<td><strong>2. Hydration</strong></td>
<td><strong>Enoyl-CoA</strong> + H2O → L-3-hydroxyacyl-CoA</td>
<td>Enoyl-CoA hydratase</td>
<td>L-3-Hydroxyacyl-CoA</td>
</tr>
<tr>
<td>3. Oxidation</td>
<td>L-3-Hydroxyacyl-CoA → 3-ketoacyl-CoA</td>
<td>3-Hydroxyacyl-CoA dehydrogenase</td>
<td>3-Ketoacyl-CoA + NADH</td>
</tr>
<tr>
<td>4. Cleavage</td>
<td>3-Ketoacyl-CoA + CoA-SH → Acetyl-CoA + Acyl-CoA (n-2)</td>
<td>Beta-ketothiolase</td>
<td>Acetyl-CoA + shortened acyl-CoA</td>
</tr>
</tbody>
</table>
<h3>Step 1: Formation by Acyl-CoA Dehydrogenase</h3>
<p>Fatty acyl-CoA + FAD(enzyme) → trans-delta2-Enoyl-CoA + FADH2(enzyme)</p>
<p>This is the initial and rate-determining oxidation in each beta-oxidation cycle. The reaction mechanism involves:</p>
<ol>
<li><strong>Substrate binding:</strong> The fatty acyl-CoA binds in the active site with C2-C3 positioned adjacent to enzyme-bound FAD</li>
<li><strong>Proton abstraction:</strong> A glutamate residue acts as a general base, abstracting the alpha-proton from C2</li>
<li><strong>Hydride transfer:</strong> Electrons are transferred as a hydride from C3 to FAD, forming the trans double bond</li>
<li><strong>Product release:</strong> Enoyl-CoA dissociates; FADH2 remains enzyme-bound</li>
</ol>
<p>The stereospecificity for the trans isomer is absolute — the enzyme active site geometry ensures that only the trans double bond is formed. Cis-unsaturated fatty acids (from dietary fats) require additional enzymatic steps (enoyl-CoA isomerase and 2,4-dienoyl-CoA reductase) to convert their cis double bonds to the trans configuration required for continued beta-oxidation.</p>
<h3>Step 2: Hydration by Enoyl-CoA Hydratase</h3>
<p>trans-delta2-Enoyl-CoA + H2O → L-3-Hydroxyacyl-CoA</p>
<p>Enoyl-CoA hydratase (also called crotonase, named after its model substrate crotonyl-CoA) catalyzes the stereospecific addition of water across the trans double bond:</p>
<ul>
<li>The hydroxyl group is added to C3 in the L-configuration</li>
<li>The reaction is nearly diffusion-limited (kcat approximately 100,000/min)</li>
<li>The enzyme uses an oxyanion hole mechanism to stabilize the enolate intermediate</li>
<li>Only trans-delta2-enoyl-CoA is a substrate; cis isomers are not hydrated</li>
</ul>
<h3>Electron Disposal from FADH2</h3>
<p>The FADH2 produced by acyl-CoA dehydrogenase does not enter the electron transport chain directly. Instead, it follows a dedicated pathway:</p>
<ol>
<li>FADH2 transfers electrons to electron-transferring flavoprotein (ETF)</li>
<li>ETF transfers electrons to ETF-ubiquinone oxidoreductase (ETF-QO)</li>
<li>ETF-QO reduces ubiquinone (CoQ) in the inner mitochondrial membrane</li>
<li>Electrons enter the respiratory chain at Complex III via the Q pool</li>
</ol>
<p>This pathway yields approximately 1.5 ATP per FADH2 from the acyl-CoA dehydrogenase step.</p>
<h2>Enzyme Isoforms and Substrate Specificity</h2>
<h3>Acyl-CoA Dehydrogenase Isoforms</h3>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Gene</th>
<th>Chain Length</th>
<th>Location</th>
<th>Clinical Significance</th>
</tr>
</thead>
<tbody>
<tr>
<td>SCAD</td>
<td>ACADS</td>
<td>C4-C6</td>
<td>Mitochondrial matrix</td>
<td>SCAD deficiency (rare, mild)</td>
</tr>
<tr>
<td>MCAD</td>
<td>ACADM</td>
<td>C6-C12</td>
<td>Mitochondrial matrix</td>
<td>MCAD deficiency (most common FAOD)</td>
</tr>
<tr>
<td>LCAD</td>
<td>ACADL</td>
<td>C12-C18</td>
<td>Mitochondrial matrix</td>
<td>Rare in humans (role taken by MCAD)</td>
</tr>
<tr>
<td>VLCAD</td>
<td>ACADVL</td>
<td>C14-C24</td>
<td>Inner mitochondrial membrane</td>
<td>VLCAD deficiency (severe)</td>
</tr>
<tr>
<td>ACAD9</td>
<td>ACAD9</td>
<td>C14-C20</td>
<td>Inner mitochondrial membrane</td>
<td>Combined with Complex I deficiency</td>
</tr>
</tbody>
</table>
<h3>Enoyl-CoA Hydratase Isoforms</h3>
<table>
<thead>
<tr>
<th>Isoform</th>
<th>Location</th>
<th>Substrate Preference</th>
</tr>
</thead>
<tbody>
<tr>
<td>ECHS1 (short-chain)</td>
<td>Mitochondrial matrix</td>
<td>C4-C6 enoyl-CoAs</td>
</tr>
<tr>
<td>ECHDC1</td>
<td>Cytosol</td>
<td>Branched-chain enoyl-CoAs</td>
</tr>
<tr>
<td>MFE-1/MFE-2 (peroxisomal)</td>
<td>Peroxisomes</td>
<td>Very long-chain enoyl-CoAs</td>
</tr>
</tbody>
</table>
<h2>Clinical Significance</h2>
<h3>MCAD Deficiency</h3>
<p>The most common fatty acid oxidation disorder (1:15,000 in Caucasians, higher in Northern European populations):</p>
<ul>
<li>Caused by mutations in the ACADM gene, most commonly the K304E missense mutation</li>
<li>Impaired oxidation of medium-chain enoyl-CoA intermediates (C6-C12)</li>
<li>Accumulation of medium-chain acylcarnitines (C8, C10, C10:1) detectable by newborn screening</li>
<li>Clinical presentation: fasting hypoketotic hypoglycemia, vomiting, lethargy, seizures</li>
<li>Can present as sudden unexpected death in infancy (SUDI) if undiagnosed</li>
<li>Management: avoid fasting, provide frequent meals, emergency glucose during illness</li>
<li>Newborn screening has reduced mortality from approximately 25% to less than 2%</li>
</ul>
<h3>VLCAD Deficiency</h3>
<p>Less common but more severe than MCAD deficiency:</p>
<ul>
<li>Impaired processing of long-chain enoyl-CoAs (C14-C24)</li>
<li>Three clinical phenotypes: severe early-onset (cardiomyopathy, arrhythmia, death), hepatic (hypoketotic hypoglycemia), and myopathic (exercise-induced rhabdomyolysis)</li>
<li>Long-chain acylcarnitine accumulation (C14:1 is the diagnostic marker)</li>
<li>Treatment: avoid fasting, medium-chain triglyceride (MCT) supplementation to bypass the enzyme defect</li>
</ul>
<h3>Glutaric Acidemia Type II (Multiple Acyl-CoA Dehydrogenase Deficiency)</h3>
<p>Caused by defects in ETF or ETF-QO, which affect all acyl-CoA dehydrogenases:</p>
<ul>
<li>Impaired electron disposal from all enoyl-CoA-forming reactions</li>
<li>Accumulation of multiple acylcarnitine species</li>
<li>Severe neonatal form: metabolic acidosis, hypoglycemia, congenital anomalies</li>
<li>Riboflavin-responsive form: milder, treatable with high-dose riboflavin (B2, cofactor for ETF/ETF-QO)</li>
</ul>
<h3>Riboflavin (Vitamin B2) Dependency</h3>
<p>Both acyl-CoA dehydrogenases and ETF/ETF-QO are FAD-dependent flavoproteins that require riboflavin-derived cofactors. Riboflavin deficiency impairs enoyl-CoA formation and electron disposal, causing secondary FAO dysfunction. High-dose riboflavin supplementation (100-400 mg/day) is used to treat riboflavin-responsive forms of glutaric acidemia type II and some mild ACAD variants.</p>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/3-hydroxyacyl-coa/" class="internal-link">3-Hydroxyacyl-CoA</a></p>
<h3>Catalyzed By</h3>
<p>RELATED::<a href="/entities/protein/acyl-coa-dehydrogenase/" class="internal-link">Acyl-CoA Dehydrogenase</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a><br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Ikeda Y, Tanaka K. Purification and characterization of five acyl-CoA dehydrogenases from rat liver mitochondria. <em>J Biol Chem.</em> 1983;258(2):9477-9485 (PMID: 6875675)</li>
<li>Engel PC. Acyl-CoA dehydrogenases. In: <em>Biochemistry of Lipids, Lipoproteins and Membranes.</em> 5th ed. Elsevier; 2008:147-165</li>
<li>Stanley CA, Bennett MJ. Defects in mitochondrial fatty acid oxidation. In: <em>Rosenberg's Molecular and Genetic Basis of Neurological and Psychiatric Disease.</em> 5th ed. Academic Press; 2015 (PMID: 31644733)</li>
<li>Rinaldo P, Matern D, Bennett MJ. Fatty acid oxidation disorders. <em>Annu Rev Physiol.</em> 2002;64:477-502 (PMID: 11826277)</li>
<li>Hiltunen JK, Filppula SA, Koivuranta KT, et al. Peroxisomal beta-oxidation of polyunsaturated fatty acids. <em>Ann N Y Acad Sci.</em> 1996;804:116-128 (PMID: 8958987)</li>
<li>Frerman FE, Goodman SI. Defects of electron transfer flavoprotein and electron transfer flavoprotein-ubiquinone oxidoreductase: glutaric acidemia type II. In: <em>The Metabolic and Molecular Bases of Inherited Disease.</em> 8th ed. McGraw-Hill; 2001</li>
</ul>

{% endraw %}