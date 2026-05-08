---
created: '2026-05-08T08:21:33.519729Z'
description: Four-carbon dicarboxylic keto acid that condenses with acetyl-CoA to
  form citrate, initiating the citric acid cycle. Oxaloacetate is a central metabolic
  hub serving as a key intermediate in gluconeogenesis, the urea cycle, amino acid
  biosynthesis, fatty acid synthesis, and the malate-aspartate shuttle. Its low steady-state
  concentration (micromolar range) makes it rate-limiting for TCA cycle flux.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/oxaloacetate/
slug: oxaloacetate
tags:
- metabolite
- tca_cycle
- gluconeogenesis
- amino_acid_metabolism
- central_metabolism
- energy_metabolism
- regulatory
templateEngineOverride: njk
title: Oxaloacetate
type: metabolite
updated: '2026-05-08T08:21:33.519729Z'
---

{% raw %}
<h1>Oxaloacetate</h1>
<h2>Overview</h2>
<p>Oxaloacetate (OAA) is a four-carbon dicarboxylic keto acid that occupies a central position in cellular metabolism as both the entry point and regenerated product of the citric acid (TCA) cycle. It condenses with acetyl-CoA via citrate synthase to form citrate, and is regenerated at the end of the cycle by malate dehydrogenase, making the TCA cycle a true catalytic cycle. Its intracellular concentration is maintained at very low levels (micromolar range), rendering it the rate-limiting substrate for TCA cycle flux under most physiological conditions.</p>
<p>Beyond the TCA cycle, oxaloacetate serves as a critical metabolic branch point connecting multiple pathways. In gluconeogenesis, it is the starting substrate for glucose synthesis from non-carbohydrate precursors, formed from pyruvate by the ATP-dependent pyruvate carboxylase. In amino acid metabolism, oxaloacetate is the direct precursor of aspartate via transamination and indirectly feeds the biosynthesis of asparagine, methionine, threonine, isoleucine, and lysine. It also participates in the urea cycle, the malate-aspartate shuttle for transferring reducing equivalents across the mitochondrial membrane, and fatty acid synthesis via citrate export from mitochondria.</p>
<h2>Biosynthesis and Regeneration</h2>
<p>Oxaloacetate is generated through several metabolic routes:</p>
<ol>
<li><strong>Malate dehydrogenase (MDH)</strong> — Oxidizes L-malate to oxaloacetate using NAD+ as cofactor, producing NADH. This is the primary regenerative reaction in the TCA cycle and the last step before oxaloacetate re-enters the citrate synthase reaction.</li>
<li><strong>Pyruvate carboxylase</strong> — Catalyzes the ATP-dependent carboxylation of pyruvate to form oxaloacetate. This is the critical anaplerotic reaction that replenishes TCA cycle intermediates and provides the starting substrate for gluconeogenesis. It is activated by acetyl-CoA, linking energy status to OAA production.</li>
<li><strong>Aspartate transamination</strong> — Transaminases can convert aspartate to oxaloacetate by transferring the amino group to alpha-ketoglutarate, forming glutamate. This reaction connects nitrogen metabolism with carbon metabolism.</li>
<li><strong>Phosphoenolpyruvate carboxylase</strong> — In plants and some bacteria, directly carboxylates PEP to form oxaloacetate (not a major pathway in mammals).</li>
</ol>
<h2>Metabolic Functions</h2>
<h3>Citric Acid Cycle</h3>
<p>Oxaloacetate + acetyl-CoA → citrate (via citrate synthase). This condensation reaction is the committed step of the TCA cycle. OAA concentration directly controls the rate of citrate formation and thus the overall oxidative flux through the cycle.</p>
<h3>Gluconeogenesis</h3>
<p>During fasting or prolonged exercise, oxaloacetate is the gateway metabolite for new glucose synthesis. Pyruvate is carboxylated to OAA in the mitochondrial matrix, reduced to malate for transport to the cytosol, then re-oxidized to OAA. Cytosolic OAA is decarboxylated and phosphorylated by PEP carboxykinase (PEPCK) to form phosphoenolpyruvate, which proceeds through gluconeogenesis to produce glucose.</p>
<h3>Malate-Aspartate Shuttle</h3>
<p>Oxaloacetate is a key component of the malate-aspartate shuttle, the primary mechanism for transferring NADH reducing equivalents from the cytosol into mitochondria. In the cytosol, OAA is reduced to malate (consuming NADH), which crosses the mitochondrial membrane. Inside, malate is re-oxidized to OAA (producing mitochondrial NADH), and the reducing equivalents enter the electron transport chain.</p>
<h3>Amino Acid Biosynthesis</h3>
<p>Transamination of oxaloacetate produces aspartate, a precursor for several amino acids including asparagine, methionine, threonine, isoleucine, and lysine. This makes OAA a critical nitrogen assimilation point.</p>
<h3>Fatty Acid Synthesis</h3>
<p>When mitochondrial acetyl-CoA accumulates beyond energy needs, it condenses with OAA to form citrate, which is exported to the cytosol. There, ATP-citrate lyase cleaves citrate back to acetyl-CoA and OAA, providing the acetyl-CoA substrate for fatty acid synthase.</p>
<h2>Clinical Relevance</h2>
<ul>
<li><strong>Pyruvate carboxylase deficiency</strong> — A rare autosomal recessive disorder causing lactic acidosis and impaired gluconeogenesis, demonstrating OAA's essential role in metabolic homeostasis.</li>
<li><strong>Anaplerotic therapy</strong> — Strategies to boost TCA cycle intermediates (particularly OAA and its precursors) are investigated for conditions involving mitochondrial dysfunction, including neurodegenerative diseases and cancer metabolism.</li>
<li><strong>Cancer metabolism</strong> — Many tumors exhibit depleted OAA pools due to the Warburg effect and diverted acetyl-CoA into lipid synthesis. Restoring OAA levels via anaplerotic substrates is an area of active research.</li>
</ul>
<h2>Relationships</h2>
<h3>TCA Cycle Intermediates</h3>
<p>CONVERTS_TO::<a href="/entities/metabolite/citrate/" class="internal-link">Citrate</a> - Condenses with acetyl-CoA via citrate synthase to form citrate, initiating the TCA cycle<br />
DERIVED_FROM::<a href="/entities/metabolite/malate/" class="internal-link">Malate</a> - Oxidized from malate by malate dehydrogenase (final step of TCA cycle regeneration)<br />
RELATED::<a class="internal-link is-unresolved" href="/404">Isocitrate</a> - Citrate isomerizes to isocitrate downstream in the TCA cycle<br />
RELATED::<a href="/entities/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a> - Two steps downstream in TCA cycle; also connected via transamination with aspartate<br />
RELATED::<a href="/entities/metabolite/succinate/" class="internal-link">Succinate</a> - Downstream TCA cycle intermediate; succinate dehydrogenase can also slowly produce enol-oxaloacetate<br />
RELATED::<a href="/entities/metabolite/fumarate/" class="internal-link">Fumarate</a> - Upstream TCA intermediate connected via malate</p>
<h3>Gluconeogenesis and Energy</h3>
<p>SYNTHESIZED_FROM::<a href="/entities/metabolite/pyruvate/" class="internal-link">Pyruvate</a> - Formed by pyruvate carboxylase (ATP-dependent carboxylation), the key anaplerotic reaction<br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/gluconeogenesis/" class="internal-link">Gluconeogenesis</a> - Gateway metabolite for glucose synthesis from non-carbohydrate precursors<br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/glycolysis/" class="internal-link">Glycolysis</a> - Interconnected via pyruvate and gluconeogenic reversal<br />
RELATED::<a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a> - End product of gluconeogenesis initiated from oxaloacetate<br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a> - Pyruvate carboxylase consumes ATP to form OAA from pyruvate<br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a> - Malate dehydrogenase produces NADH when converting malate to OAA</p>
<h3>Pathways and Compartments</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a> - Entry point (condenses with acetyl-CoA) and regenerated product of the cycle<br />
PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a> - NADH from malate dehydrogenase feeds electron transport chain<br />
LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a> - Primary site of TCA cycle OAA metabolism and pyruvate carboxylase activity<br />
RELATED::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a> - Condenses with OAA to form citrate; also activates pyruvate carboxylase</p>
<h3>Connected Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/lactate/" class="internal-link">Lactate</a> - Lactate can be converted to pyruvate then to OAA via pyruvate carboxylase (Cori cycle connection)<br />
RELATED::<a href="/entities/metabolite/urea/" class="internal-link">Urea</a> - OAA participates in the urea cycle via aspartate production</p>
<h2>References</h2>
<ul>
<li>Nelson DL, Cox MM. <em>Lehninger Principles of Biochemistry.</em> 4th ed. New York: W.H. Freeman; 2005. ISBN: 0-7167-4339-6.</li>
<li>Panchenko MV, Vinogradov AD. Direct demonstration of enol-oxaloacetate as an immediate product of malate oxidation by the mammalian succinate dehydrogenase. <em>FEBS Lett.</em> 1991;286(1-2):76-78. (PMID: 1864383)</li>
<li>van Vugt-Lussenburg BMA, van der Weel L, Hagen WR, Hagedoorn PL. Biochemical similarities and differences between the catalytic [4Fe-4S] cluster containing fumarases FumA and FumB from Escherichia coli. <em>PLoS ONE.</em> 2013;8(2):e55549. (PMID: 23405168)</li>
<li>Jitrapakdee S, St Maurice M, Rayment I, Cleland WW, Wallace JC, Attwood PV. Structure, mechanism and regulation of pyruvate carboxylase. <em>Biochem J.</em> 2008;413(3):369-387. (PMID: 18613815)</li>
</ul>

{% endraw %}