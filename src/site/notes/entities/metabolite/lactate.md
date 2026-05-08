---
created: '2026-05-08T08:21:33.483236Z'
description: L-Lactate is the conjugate base of lactic acid (C3H6O3) and a central
  metabolite that serves simultaneously as the end product of anaerobic glycolysis,
  a major oxidative fuel for heart and brain, and a signaling molecule with far-reaching
  physiological effects. Far from being a metabolic waste product, lactate functions
  as a mobile energy substrate via the lactate shuttle, an epigenetic regulator via
  histone lactylation, and an endogenous agonist of the HCAR1 (GPR81) receptor involved
  in lipolysis inhibition, neuroplasticity, and immune modulation.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/lactate/
slug: lactate
tags:
- metabolite
- glycolysis
- exercise
- signaling
- energy
- lactate_shuttle
- brain_fuel
- cori_cycle
templateEngineOverride: njk
title: Lactate
type: metabolite
updated: '2026-05-08T08:21:33.483236Z'
---

{% raw %}
<h1>Lactate</h1>
<h2>Overview</h2>
<p>Lactate (L-lactate in human metabolism) is a three-carbon hydroxycarboxylic acid anion that has undergone a fundamental reappraisal in modern physiology. Long dismissed as a fatigue-causing waste product of anaerobic metabolism, lactate is now understood as a key metabolic intermediate, signaling molecule, and mobile energy carrier. It is produced continuously at rest and during all exercise intensities by the reduction of pyruvate via lactate dehydrogenase (LDH), with blood levels typically 1-2 mM at rest and rising above 20 mM during maximal exertion.</p>
<p>The <strong>lactate shuttle</strong> concept, developed by George Brooks, describes lactate as a primary vehicle for transferring metabolic energy between cells and tissues. Glycolytic (fast-twitch) muscle fibers produce lactate, which is then transported via monocarboxylate transporters (MCTs) to adjacent oxidative (slow-twitch) fibers, the heart, and the brain, where it is oxidized back to pyruvate and enters the TCA cycle. Up to 60% of cardiac energy turnover during exercise derives from lactate oxidation. In the brain, the astrocyte-neuron lactate shuttle (ANLS) provides lactate as the preferential fuel for active neurons.</p>
<p>Beyond energy metabolism, lactate acts as a signaling molecule through multiple mechanisms: it is the endogenous agonist of the HCAR1 (GPR81) G-protein-coupled receptor, it drives histone lactylation (a recently discovered epigenetic modification regulating gene expression in immune cells), and it modulates lipolysis, angiogenesis, and wound healing.</p>
<h2>Metabolism</h2>
<h3>Production</h3>
<p>Lactate is formed when pyruvate accepts electrons from NADH via lactate dehydrogenase (LDH):</p>
<ul>
<li><strong>Pyruvate + NADH + H+ → Lactate + NAD+</strong></li>
<li>This reaction is critical for regenerating NAD+ to sustain glycolysis when mitochondrial oxidative capacity is exceeded (during intense exercise, ischemia, or in cells lacking mitochondria like erythrocytes).</li>
<li>The reaction is reversible: in oxidative tissues, LDH converts lactate back to pyruvate for TCA cycle entry.</li>
</ul>
<h3>Clearance</h3>
<p>Lactate is removed from blood by three primary mechanisms:</p>
<ol>
<li><strong>Oxidation</strong> — Heart, slow-twitch muscle fibers, and brain directly oxidize lactate to pyruvate for energy production.</li>
<li><strong>Gluconeogenesis (Cori cycle)</strong> — The liver (and to a lesser extent kidneys) converts lactate back to glucose via gluconeogenesis, consuming 6 ATP per glucose molecule. This cycle transfers metabolic burden from muscle to liver.</li>
<li><strong>Excretion</strong> — Small amounts are excreted by the kidneys at very high concentrations.</li>
</ol>
<h3>Blood Lactate Threshold</h3>
<p>The <strong>lactate threshold</strong> (approximately 4 mM or ~60-80% VO2max) marks the exercise intensity at which lactate production exceeds clearance capacity. This threshold is one of the strongest predictors of endurance performance and is used clinically and in sports science to assess aerobic fitness.</p>
<h2>Signaling Functions</h2>
<h3>HCAR1 (GPR81) Receptor</h3>
<p>L-Lactate is the primary endogenous agonist of HCAR1 (hydroxycarboxylic acid receptor 1), a Gi/o-coupled GPCR expressed in adipose tissue, brain, skeletal muscle, and immune cells. Activation suppresses lipolysis in adipocytes, promotes neuroplasticity and BDNF expression in the brain, and modulates immune cell function.</p>
<h3>Histone Lactylation</h3>
<p>Lactate serves as a substrate for histone lysine lactylation (Kla), a post-translational modification discovered in 2019 that directly links cellular metabolic state to gene expression. Lactylation is enriched at promoters of genes involved in wound healing, macrophage activation, and cancer cell immune evasion.</p>
<h3>Angiogenesis and Wound Healing</h3>
<p>Lactate accumulates in hypoxic tissues and wounds, where it stimulates VEGF expression and angiogenesis, promoting tissue repair and vascular remodeling.</p>
<h2>Clinical Significance</h2>
<h3>Exercise Physiology</h3>
<ul>
<li>Lactate threshold testing is a cornerstone of endurance training prescription.</li>
<li>HIIT training shifts the lactate threshold rightward (higher intensity before accumulation), reflecting improved oxidative capacity.</li>
<li>Post-exercise lactate clearance rate is a marker of cardiovascular fitness and recovery capacity.</li>
</ul>
<h3>Lactic Acidosis</h3>
<p>Pathological lactate accumulation (blood lactate &gt;4 mM with metabolic acidosis) occurs in:</p>
<ul>
<li><strong>Type A</strong> — Tissue hypoxia (sepsis, hemorrhagic shock, mesenteric ischemia, carbon monoxide poisoning).</li>
<li><strong>Type B</strong> — Without overt hypoxia (liver failure, diabetes mellitus, thiamine deficiency, certain drugs/toxins, mitochondrial disease).</li>
<li>Blood lactate is a critical prognostic marker in emergency medicine; serial lactate measurements guide sepsis resuscitation.</li>
</ul>
<h3>Cancer Metabolism</h3>
<p>Many tumors exhibit the Warburg effect (aerobic glycolysis with lactate production), creating an acidic tumor microenvironment that promotes invasion, immune evasion, and resistance to therapy. Tumor-derived lactate drives M2 macrophage polarization via lactylation, suppressing anti-tumor immunity.</p>
<h3>Brain Metabolism</h3>
<p>Neurons preferentially oxidize lactate over glucose during synaptic activity (astrocyte-neuron lactate shuttle). During intense exercise, circulating lactate becomes a significant brain fuel, and lactate-mediated BDNF upregulation may contribute to exercise-induced neuroplasticity and cognitive benefits.</p>
<h2>Relationships</h2>
<h3>Glycolysis and Energy</h3>
<p>CONVERTS_TO::<a href="/entities/metabolite/pyruvate/" class="internal-link">Pyruvate</a> - Interconverted by lactate dehydrogenase; pyruvate is the immediate metabolic precursor and oxidative product of lactate<br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a> - Lactate is the end product of anaerobic glycolysis; its production regenerates NAD+ to sustain glycolytic flux<br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> - Lactate-derived pyruvate feeds the TCA cycle and electron transport chain in oxidative tissues<br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a> - LDH oxidizes NADH to NAD+ when reducing pyruvate to lactate, regenerating the NAD+ pool for glycolysis<br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a> - Lactate production sustains anaerobic ATP generation by maintaining the NAD+/NADH ratio<br />
RELATED::<a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a> - Complete substrate for lactate production; the Cori cycle converts lactate back to glucose in the liver</p>
<h3>Organs and Tissues</h3>
<p>AFFECTS_ORGAN::<a href="/entities/organ/brain/" class="internal-link">Brain</a> - Lactate is the preferred oxidative fuel for active neurons (astrocyte-neuron lactate shuttle); circulating lactate crosses the blood-brain barrier during exercise<br />
AFFECTS_ORGAN::<a href="/entities/organ/heart/" class="internal-link">Heart</a> - Cardiac muscle derives up to 60% of energy from lactate oxidation during exercise; the heart is the most efficient lactate-consuming organ<br />
LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Lactate-derived pyruvate enters mitochondria for oxidation via the TCA cycle</p>
<h3>Signaling and Neuroplasticity</h3>
<p>RELATED::<a href="/entities/biomarker/bdnf/" class="internal-link">BDNF</a> - Lactate activates HCAR1 receptor and promotes BDNF expression in the brain, linking exercise to neuroplasticity</p>
<h3>Exercise and Performance</h3>
<p>RELATED::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a> - Lactate threshold is a key determinant of endurance performance; lactate production and clearance adapt with training<br />
RELATED::<a href="/entities/intervention/hiit-training/" class="internal-link">HIIT Training</a> - High-intensity training shifts the lactate threshold rightward by improving oxidative capacity and lactate clearance</p>
<h3>Metabolic Connections</h3>
<p>RELATED::<a href="/entities/metabolite/ketone-bodies/" class="internal-link">Ketone Bodies</a> - Both serve as alternative brain fuels during metabolic stress (exercise, fasting)<br />
RELATED::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a> - Lactate suppresses lipolysis via HCAR1, interacting with insulin-mediated metabolic regulation<br />
RELATED::<a href="/entities/metabolite/reactive-oxygen-species/" class="internal-link">Reactive Oxygen Species</a> - Lactate accumulation in hypoxic/ischemic tissue is associated with oxidative stress and mitochondrial dysfunction<br />
RELATED::<a href="/entities/supplement/creatine/" class="internal-link">Creatine</a> - Creatine kinase and LDH systems work in tandem during the transition from phosphagen to glycolytic energy production</p>
<h2>References</h2>
<ul>
<li>Brooks GA. The science and translation of lactate shuttle theory. <em>Cell Metab.</em> 2018;27(4):757-785. (PMID: 29617642)</li>
<li>Ferguson BS, Rogatzki MJ, Goodwin ML, Kane DA, Rightmire Z, Gladden LB. Lactate metabolism: historical context, prior misinterpretations, and current understanding. <em>Eur J Appl Physiol.</em> 2018;118(4):691-728. (PMID: 29331950)</li>
<li>Zhang D, Tang Z, Huang H, et al. Metabolic regulation of gene expression by histone lactylation. <em>Nature.</em> 2019;574(7779):575-580. (PMID: 31645732)</li>
<li>Pellerin L, Magistretti PJ. Neuroenergetics: calling upon astrocytes to satisfy hungry neurons. <em>Neuroscientist.</em> 2012;18(2):113-120. (PMID: 21743015)</li>
</ul>

{% endraw %}