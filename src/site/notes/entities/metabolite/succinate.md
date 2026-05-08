---
created: '2026-05-08T08:21:33.557523Z'
description: Succinate (succinic acid) is a four-carbon dicarboxylic acid intermediate
  of the citric acid cycle that uniquely bridges the TCA cycle and the electron transport
  chain through succinate dehydrogenase (Complex II). Beyond its metabolic role, succinate
  is a potent signaling molecule that stabilizes HIF-1alpha under hypoxia, activates
  the SUCNR1 receptor to drive inflammation, and acts as an oncometabolite when SDH
  mutations cause its pathological accumulation.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/succinate/
slug: succinate
tags:
- metabolite
- tca_cycle
- electron_transport_chain
- signaling
- inflammation
- hypoxia
- oncometabolite
templateEngineOverride: njk
title: Succinate
type: metabolite
updated: '2026-05-08T08:21:33.557523Z'
---

{% raw %}
<h1>Succinate</h1>
<h2>Overview</h2>
<p>Succinate (succinic acid) is a four-carbon dicarboxylic acid intermediate of the citric acid cycle that occupies a unique position in mitochondrial metabolism. It is the only TCA cycle intermediate that is also a direct component of the electron transport chain: succinate dehydrogenase (SDH, Complex II) catalyzes the oxidation of succinate to fumarate while simultaneously transferring electrons via FAD to the ubiquinone (CoQ) pool. This dual function makes succinate the direct molecular bridge between the TCA cycle and oxidative phosphorylation.</p>
<p>Beyond its canonical metabolic role, succinate has emerged as a major signaling metabolite. Under conditions of hypoxia, mitochondrial dysfunction, or inflammatory activation, succinate accumulates and acts through multiple mechanisms: it stabilizes HIF-1alpha by competitively inhibiting alpha-ketoglutarate-dependent prolyl hydroxylases (creating a state called pseudohypoxia), activates the G-protein-coupled receptor SUCNR1 (GPR91) to promote inflammatory cytokine production, and drives protein succinylation — a post-translational modification that alters protein function in metabolism and gene regulation.</p>
<p>In cancer biology, succinate is recognized as an oncometabolite. Loss-of-function mutations in succinate dehydrogenase (SDHx) genes cause succinate accumulation in paragangliomas, pheochromocytomas, and gastrointestinal stromal tumors. The accumulated succinate inhibits alpha-ketoglutarate-dependent dioxygenases (TET DNA demethylases, JmjC histone demethylases), causing genome-wide epigenetic dysregulation that drives tumorigenesis.</p>
<h2>Metabolic Roles</h2>
<h3>TCA Cycle Intermediate</h3>
<p>Succinate is formed in the TCA cycle by succinyl-CoA synthetase (succinate thiokinase), which catalyzes the only substrate-level phosphorylation in the cycle:</p>
<ul>
<li><strong>Formation:</strong> Succinyl-CoA + GDP + Pi → Succinate + CoA + GTP (succinyl-CoA synthetase)</li>
<li><strong>Oxidation:</strong> Succinate + FAD → Fumarate + FADH2 (succinate dehydrogenase / Complex II)</li>
<li><strong>Energy yield:</strong> The FADH2 generated feeds directly into the ubiquinone pool, yielding approximately 1.5 ATP per succinate oxidized</li>
</ul>
<h3>Complex II / Electron Transport Chain</h3>
<p>Succinate dehydrogenase is unique among mitochondrial enzymes because it participates in both the TCA cycle and the electron transport chain:</p>
<ul>
<li><strong>Structure:</strong> Four subunits (SDHA catalytic flavoprotein, SDHB iron-sulfur protein, SDHC and SDHD membrane-anchoring subunits with heme b)</li>
<li><strong>Location:</strong> Inner mitochondrial membrane (all other TCA cycle enzymes are soluble matrix enzymes)</li>
<li><strong>Function:</strong> Transfers electrons from succinate through FAD, iron-sulfur clusters, and heme b to ubiquinone (CoQ)</li>
<li><strong>Does NOT pump protons:</strong> Complex II does not contribute to the proton gradient directly (only generates FADH2 for the CoQ pool)</li>
</ul>
<h3>Anaplerotic Roles</h3>
<p>Succinate can be produced outside the TCA cycle through several routes:</p>
<ul>
<li><strong>GABA shunt:</strong> GABA → Succinic semialdehyde → Succinate (alternative entry to TCA cycle in neurons)</li>
<li><strong>Odd-chain fatty acid oxidation:</strong> Propionyl-CoA → Succinyl-CoA → Succinate</li>
<li><strong>Amino acid catabolism:</strong> Methionine, isoleucine, valine → Propionyl-CoA → Succinyl-CoA → Succinate</li>
<li><strong>Gut microbiota:</strong> Bacterial fermentation produces significant amounts of succinate</li>
</ul>
<h2>Signaling Functions</h2>
<h3>HIF-1alpha Stabilization (Pseudohypoxia)</h3>
<p>Succinate is a competitive inhibitor of alpha-ketoglutarate-dependent prolyl hydroxylases (PHD1-3), the enzymes that mark HIF-1alpha for proteasomal degradation under normoxic conditions:</p>
<ul>
<li><strong>Mechanism:</strong> Accumulated succinate competes with alpha-ketoglutarate at the PHD active site</li>
<li><strong>Result:</strong> HIF-1alpha is not hydroxylated, not recognized by VHL ubiquitin ligase, and accumulates in the cell</li>
<li><strong>Consequence:</strong> Activation of hypoxia-responsive genes (VEGF, GLUT1, glycolytic enzymes) even under normal oxygen — pseudohypoxia</li>
<li><strong>Clinical relevance:</strong> This mechanism drives tumor angiogenesis in SDH-mutant cancers and inflammatory responses in activated macrophages</li>
</ul>
<h3>SUCNR1 (GPR91) Receptor Signaling</h3>
<p>Succinate activates the G-protein-coupled receptor SUCNR1 (GPR91), expressed on immune cells, renal cells, and retinal cells:</p>
<ul>
<li><strong>Immune activation:</strong> SUCNR1 on dendritic cells and macrophages enhances antigen presentation and IL-1beta production</li>
<li><strong>Renin-angiotensin system:</strong> Succinate stimulates renin release from renal juxtaglomerular cells via SUCNR1</li>
<li><strong>Retinal angiogenesis:</strong> Succinate-SUCNR1 signaling promotes pathological retinal neovascularization in diabetic retinopathy</li>
<li><strong>Platelet activation:</strong> Succinate potentiates platelet aggregation through SUCNR1</li>
</ul>
<h3>Protein Succinylation</h3>
<p>Succinyl-CoA, the activated form of succinate, serves as a donor for lysine succinylation — a post-translational modification that adds a succinyl group to lysine residues, changing the charge and bulk of the modified protein:</p>
<ul>
<li><strong>Targets:</strong> Metabolic enzymes (especially in the TCA cycle), histones, and mitochondrial proteins</li>
<li><strong>Effect:</strong> Can dramatically alter enzyme activity, often activating catabolic and inhibiting anabolic pathways</li>
<li><strong>Regulation:</strong> SIRT5 is the major desuccinylase, removing succinyl groups in an NAD+-dependent manner</li>
<li><strong>Relevance:</strong> Succinylation is emerging as a key metabolic regulatory mechanism, analogous to acetylation</li>
</ul>
<h2>Clinical Significance</h2>
<h3>SDH-Mutant Tumors (Oncometabolite)</h3>
<p>Loss-of-function mutations in SDH subunits (SDHA, SDHB, SDHC, SDHD, SDHAF2) cause several tumor types:</p>
<table>
<thead>
<tr>
<th>Tumor Type</th>
<th>SDH Subunit</th>
<th>Inheritance</th>
<th>Key Features</th>
</tr>
</thead>
<tbody>
<tr>
<td>Paraganglioma</td>
<td>SDHD (most common)</td>
<td>Autosomal dominant</td>
<td>Head and neck tumors, often multicentric</td>
</tr>
<tr>
<td>Pheochromocytoma</td>
<td>SDHB</td>
<td>Autosomal dominant</td>
<td>Extra-adrenal, high malignant potential</td>
</tr>
<tr>
<td>GIST (wild-type)</td>
<td>SDHA</td>
<td>Sporadic/germline</td>
<td>Wild-type KIT/PDGFRA</td>
</tr>
<tr>
<td>Renal cell carcinoma</td>
<td>SDHB</td>
<td>Autosomal dominant</td>
<td>Aggressive, often metastatic at diagnosis</td>
</tr>
</tbody>
</table>
<p><strong>Mechanism of tumorigenesis:</strong></p>
<ol>
<li>SDH loss → succinate accumulation</li>
<li>Succinate inhibits alpha-KG-dependent dioxygenases (PHDs, TETs, JmjC demethylases)</li>
<li>HIF-1alpha stabilization → pseudohypoxic gene expression → angiogenesis</li>
<li>Epigenetic dysregulation → genome-wide DNA/histone hypermethylation → silencing of tumor suppressors</li>
<li>Succinate also activates SUCNR1 → promotes tumor-promoting inflammation</li>
</ol>
<h3>Inflammation and Immunity</h3>
<p>In activated macrophages (M1 polarization):</p>
<ul>
<li>Glutamine-dependent anaplerosis drives succinate accumulation</li>
<li>Accumulated succinate stabilizes HIF-1alpha → drives IL-1beta transcription</li>
<li>Succinate is released from cells and acts on SUCNR1 in an autocrine/paracrine fashion</li>
<li>This creates a positive feedback loop amplifying inflammatory responses</li>
</ul>
<h3>Ischemia-Reperfusion Injury</h3>
<p>Succinate accumulates dramatically during tissue ischemia (up to 10-20x baseline). Upon reperfusion:</p>
<ul>
<li>The accumulated succinate is rapidly oxidized by SDH, driving massive reverse electron transport through Complex I</li>
<li>This generates a burst of reactive oxygen species (ROS), causing tissue damage</li>
<li>Targeting succinate accumulation or oxidation is being explored as a therapeutic strategy for myocardial infarction, stroke, and organ transplantation</li>
</ul>
<h3>Metabolic Disease</h3>
<p>Elevated plasma succinate is associated with:</p>
<ul>
<li>Obesity and insulin resistance</li>
<li>Type 2 diabetes (potentially mediated by gut microbiota-derived succinate)</li>
<li>Non-alcoholic fatty liver disease (NAFLD)</li>
</ul>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a></p>
<h3>Converts To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/fumarate/" class="internal-link">Fumarate</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></p>
<h3>Enzymes</h3>
<p>RELATED::<a href="/entities/protein/complex-ii/" class="internal-link">Complex II</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
RELATED::<a href="/entities/metabolite/citrate/" class="internal-link">Citrate</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Isocitrate</a><br />
RELATED::<a href="/entities/metabolite/malate/" class="internal-link">Malate</a><br />
RELATED::<a href="/entities/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a><br />
RELATED::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED::<a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a></p>
<h3>Related Supplements</h3>
<p>RELATED::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a></p>
<h3>Related Proteins</h3>
<p>RELATED::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a></p>
<h3>Related Neurotransmitters</h3>
<p>RELATED::<a href="/entities/neurotransmitter/glutamate/" class="internal-link">Glutamate</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Tannahill GM, Curtis AM, Adamik J, et al. Succinate is an inflammatory signal that induces IL-1beta through HIF-1alpha. <em>Nature.</em> 2013;496:238-242 (PMID: 23535595)</li>
<li>Selak MA, Armour SM, MacKenzie ED, et al. Succinate links TCA cycle dysfunction to oncogenesis by inhibiting HIF-alpha prolyl hydroxylase. <em>Cancer Cell.</em> 2005;7:77-85 (PMID: 15652751)</li>
<li>Baysal BE, Ferrell RE, Willett-Brozick JE, et al. Mutations in SDHD, a mitochondrial complex II gene, in hereditary paraganglioma. <em>Science.</em> 2000;287:848-851 (PMID: 10657297)</li>
<li>Xiao M, Yang H, Xu W, et al. Inhibition of alpha-KG-dependent histone and DNA demethylases by fumarate and succinate that are accumulated in mutations of FH and SDH tumor suppressors. <em>Genes Dev.</em> 2012;26:1326-1338 (PMID: 22677546)</li>
<li>Mills E, O'Neill LAJ. Succinate: a metabolic signal in inflammation. <em>Trends Cell Biol.</em> 2014;24:313-320 (PMID: 24361092)</li>
<li>Rutter J, Winge DR, Schiffman JD. Succinate dehydrogenase -- Assembly, regulation and role in human disease. <em>Mitochondrion.</em> 2010;10:393-401 (PMID: 20226277)</li>
</ul>

{% endraw %}