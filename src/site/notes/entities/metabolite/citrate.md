---
created: '2026-05-08T08:21:33.400481Z'
description: Citrate is a six-carbon tricarboxylic acid and the first intermediate
  of the citric acid cycle, formed by the irreversible condensation of acetyl-CoA
  with oxaloacetate via citrate synthase. Beyond its central role in mitochondrial
  energy metabolism, citrate serves as a key allosteric regulator of glycolysis (inhibiting
  phosphofructokinase-1), the precursor for cytosolic acetyl-CoA via ATP-citrate lyase
  (fueling fatty acid and cholesterol synthesis), and a signaling molecule that links
  mitochondrial metabolism to nuclear gene expression.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/citrate/
slug: citrate
tags:
- metabolite
- tca_cycle
- regulatory
- fatty_acid_synthesis
- central_metabolism
- energy_metabolism
- lipogenesis
templateEngineOverride: njk
title: Citrate
type: metabolite
updated: '2026-05-08T08:21:33.400481Z'
---

{% raw %}
<h1>Citrate</h1>
<h2>Overview</h2>
<p>Citrate (C6H8O7, MW 192.12) is a six-carbon tricarboxylic acid that occupies a pivotal position at the intersection of carbohydrate, fat, and energy metabolism. It is the product of the first reaction of the citric acid cycle — the irreversible condensation of acetyl-CoA (two carbons) with oxaloacetate (four carbons) catalyzed by citrate synthase — and the substrate for the second reaction, the aconitase-catalyzed isomerization to isocitrate. This positions citrate as the gateway through which all oxidizable carbon fuel enters the TCA cycle.</p>
<p>Beyond its role as a TCA cycle intermediate, citrate serves three additional critical functions that make it one of the most metabolically versatile molecules in the cell. First, it is the primary allosteric inhibitor of phosphofructokinase-1 (PFK-1), the rate-limiting enzyme of glycolysis, creating a feedback loop that slows glucose breakdown when mitochondrial energy production is adequate. Second, cytosolic citrate is the direct precursor of acetyl-CoA for fatty acid and cholesterol synthesis: the mitochondrial citrate transport system exports citrate to the cytosol, where ATP-citrate lyase (ACLY) cleaves it back to acetyl-CoA and oxaloacetate. Third, citrate modulates histone acetylation by influencing the nuclear acetyl-CoA pool, directly linking cellular metabolic state to epigenetic gene regulation.</p>
<p>In healthy human plasma, citrate concentrations are approximately 0.05-0.15 mmol/L, with total body citrate turnover of approximately 1.5-2.5 g/day. Citrate is a major constituent of bone (comprising approximately 1% of bone matrix by weight), where it stabilizes hydroxyapatite nanocrystals and regulates bone mineralization. Reduced bone citrate is observed in osteoporosis.</p>
<h2>Role in the Citric Acid Cycle</h2>
<h3>Step 1: Formation (Citrate Synthase)</h3>
<p>Acetyl-CoA + Oxaloacetate + H2O → Citrate + CoA-SH + H+</p>
<p>This reaction is essentially irreversible (deltaG approximately -31.4 kJ/mol) and represents one of the committed steps of the TCA cycle. Citrate synthase is highly regulated:</p>
<ul>
<li><strong>Substrate availability:</strong> Oxaloacetate concentration is far below the Km of citrate synthase, making OAA the primary rate-controlling substrate</li>
<li><strong>Product inhibition:</strong> Citroyl-CoA is a transient intermediate; high citrate can inhibit the enzyme</li>
<li><strong>ATP inhibition:</strong> In some organisms, ATP allosterically inhibits citrate synthase (less prominent in mammals)</li>
</ul>
<h3>Step 2: Isomerization (Aconitase)</h3>
<p>Citrate → cis-Aconitate (intermediate) → Isocitrate</p>
<p>Aconitase (aconitate hydratase) catalyzes the stereospecific dehydration of citrate to cis-aconitate, followed by rehydration to isocitrate. This two-step isomerization is necessary because citrate is a prochiral molecule — aconitase must abstract the pro-R hydrogen from the pro-S arm of citrate to generate the correct isocitrate stereoisomer for the next TCA cycle enzyme.</p>
<p>Aconitase is sensitive to oxidative stress. Its iron-sulfur cluster [4Fe-4S] is disrupted by reactive oxygen species (particularly superoxide and hydrogen peroxide), inactivating the enzyme. This is exploited by the cell as a redox sensor: when aconitase is inactivated by ROS, citrate accumulates and is diverted to the cytosol for lipid synthesis and signaling.</p>
<h2>The Citrate Shuttle and Lipogenesis</h2>
<h3>Mitochondrial Export</h3>
<p>When mitochondrial citrate concentrations exceed the needs of the TCA cycle (high energy state, high acetyl-CoA), citrate is exported to the cytosol via the mitochondrial citrate transport system:</p>
<ol>
<li><strong>Citrate transport:</strong> The citrate carrier (SLC25A1, also called CIC) exchanges mitochondrial citrate for cytosolic malate across the inner mitochondrial membrane</li>
<li><strong>ATP-citrate lyase (ACLY):</strong> Cytosolic citrate + ATP + CoA-SH → Acetyl-CoA + Oxaloacetate + ADP + Pi</li>
<li><strong>Acetyl-CoA carboxylase (ACC):</strong> The resulting acetyl-CoA is carboxylated to malonyl-CoA, the first committed step of fatty acid synthesis</li>
<li><strong>Oxaloacetate recycling:</strong> Cytosolic oxaloacetate is reduced to malate by malate dehydrogenase (generating NAD+), and malate is either transported back into mitochondria or decarboxylated to pyruvate by malic enzyme (generating NADPH for lipogenesis)</li>
</ol>
<h3>Allosteric Regulation of Lipogenesis</h3>
<p>Citrate activates acetyl-CoA carboxylase (ACC), the rate-limiting enzyme of fatty acid synthesis:</p>
<ul>
<li>Citrate promotes ACC polymerization from inactive dimers to active filaments</li>
<li>This creates a feed-forward mechanism: when citrate is abundant, fatty acid synthesis is activated to store excess energy as triglycerides</li>
</ul>
<h2>Regulatory Functions</h2>
<h3>Inhibition of Glycolysis (PFK-1)</h3>
<p>Citrate is a potent allosteric inhibitor of phosphofructokinase-1 (PFK-1), the rate-limiting enzyme of glycolysis:</p>
<ul>
<li>Citrate decreases the affinity of PFK-1 for its substrate fructose-6-phosphate</li>
<li>Citrate potentiates ATP inhibition of PFK-1</li>
<li>When mitochondrial citrate is high (energy-replete state), glycolysis is throttled</li>
<li>AMP and ADP relieve citrate inhibition of PFK-1 (energy-depleted state → glycolysis resumes)</li>
</ul>
<p>This is one of the most important metabolic feedback loops: high citrate signals that the TCA cycle is well-supplied with acetyl-CoA and that glycolytic flux should be reduced.</p>
<h3>Histone Acetylation and Epigenetics</h3>
<p>Nuclear citrate, cleaved by nuclear ACLY, provides acetyl-CoA for histone acetyltransferases (HATs):</p>
<ul>
<li>High citrate → high nuclear acetyl-CoA → increased histone acetylation → active gene transcription</li>
<li>This links nutrient availability and mitochondrial metabolism to epigenetic regulation</li>
<li>ACLY inhibition is being explored as an anti-cancer strategy (reducing lipogenesis and proliferative gene expression)</li>
</ul>
<h3>Chelation and Mineral Metabolism</h3>
<p>Citrate is a powerful chelator of divalent cations (Ca2+, Mg2+, Fe2+, Zn2+):</p>
<ul>
<li><strong>Bone mineralization:</strong> Citrate stabilizes calcium hydroxyapatite crystals in bone matrix</li>
<li><strong>Blood coagulation:</strong> Citrate chelates calcium in stored blood products to prevent coagulation (citrate-phosphate-dextrose anticoagulant)</li>
<li><strong>Kidney stone prevention:</strong> Urinary citrate inhibits calcium oxalate crystallization; hypocitraturia is a risk factor for kidney stones</li>
<li><strong>Iron absorption:</strong> Citrate enhances non-heme iron absorption in the intestine</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Renal Calculi (Kidney Stones)</h3>
<p>Hypocitraturia (low urinary citrate) is found in 20-60% of kidney stone formers and is a major risk factor for calcium stone formation. Potassium citrate supplementation (30-60 mEq/day) is a first-line treatment that alkalinizes urine, increases urinary citrate, and reduces stone recurrence by approximately 50%.</p>
<h3>Bone Metabolism</h3>
<p>Citrate comprises approximately 1% of bone organic matrix and is essential for hydroxyapatite crystal morphology and bone mechanical strength. Reduced bone citrate content is observed in osteoporosis and may contribute to bone fragility. Zinc supplementation has been shown to increase bone citrate levels in animal models.</p>
<h3>Cancer Metabolism</h3>
<p>Many cancers upregulate ATP-citrate lyase (ACLY) to channel citrate-derived acetyl-CoA into fatty acid synthesis for membrane biogenesis:</p>
<ul>
<li>ACLY is amplified or overexpressed in multiple cancer types</li>
<li>Nuclear ACLY generates acetyl-CoA for histone acetylation driving proliferation genes</li>
<li>ACLY inhibitors (e.g., bempedoic acid, which acts upstream via ACL) are being investigated as anti-cancer agents</li>
<li>The citrate shuttle is a bottleneck for de novo lipogenesis in hepatocellular carcinoma</li>
</ul>
<h3>Metabolic Syndrome</h3>
<p>Elevated cytosolic citrate drives de novo lipogenesis in the liver, contributing to hepatic steatosis (fatty liver), hypertriglyceridemia, and insulin resistance:</p>
<ul>
<li>Excess carbohydrate (fructose in particular) generates abundant citrate through glycolysis and pyruvate dehydrogenase</li>
<li>The citrate shuttle converts this excess to fatty acids and triglycerides</li>
<li>AMPK activation (e.g., by metformin) phosphorylates and inhibits ACC, reducing malonyl-CoA and lipogenesis</li>
</ul>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
PRODUCED_BY::<a href="/entities/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a></p>
<h3>Converted To</h3>
<p>CONVERTED_TO::<a class="internal-link is-unresolved" href="/404">Isocitrate</a><br />
CONVERTED_TO::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
CONVERTED_TO::<a href="/entities/metabolite/fatty-acyl-coa/" class="internal-link">Fatty Acyl-CoA</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></p>
<h3>Regulates</h3>
<p>REGULATES::<a href="/entities/protein/phosphofructokinase/" class="internal-link">Phosphofructokinase</a></p>
<h3>Related TCA Cycle Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
RELATED::<a href="/entities/metabolite/succinate/" class="internal-link">Succinate</a><br />
RELATED::<a href="/entities/metabolite/fumarate/" class="internal-link">Fumarate</a><br />
RELATED::<a href="/entities/metabolite/malate/" class="internal-link">Malate</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Succinyl-CoA</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED::<a href="/entities/metabolite/fadh2/" class="internal-link">FADH2</a><br />
RELATED::<a href="/entities/metabolite/pyruvate/" class="internal-link">Pyruvate</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/glucose/" class="internal-link">Glucose</a></p>
<h3>Related Proteins</h3>
<p>RELATED::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Srere PA. The citrate condensedensing enzyme system. In: <em>The Enzymes.</em> 3rd ed. Academic Press; 1972:53-63</li>
<li>Williamson DH, Lund P, Krebs HA. The redox state of free nicotinamide-adenine dinucleotide in the cytoplasm and mitochondria of rat liver. <em>Biochem J.</em> 1967;103(2):514-527 (PMID: 4291787)</li>
<li>Zaidi N, Swinnen JV, Smans K. ATP-citrate lyase: a key player in cancer metabolism. <em>Cancer Res.</em> 2012;72(15):3709-3714 (PMID: 22713543)</li>
<li>Costello LC, Franklin RB. A comprehensive review of the role of zinc in normal prostate function and metabolism; and its implications in prostate cancer. <em>Arch Biochem Biophys.</em> 2016;611:100-112 (PMID: 27184333)</li>
<li>Pak CY. Citrate and renal calculi: an update. <em>Miner Electrolyte Metab.</em> 1994;20(6):371-377 (PMID: 7555547)</li>
<li>Wellen KE, Hatzivassiliou G, Sachdeva UM, et al. ATP-citrate lyase links cellular metabolism to histone acetylation. <em>Science.</em> 2009;324(5930):1076-1080 (PMID: 19461003)</li>
<li>Icard P, Wu Z, Fournel L, et al. ATP citrate lyase: A central metabolic enzyme in cancer metabolism and a target for natural and synthetic inhibitors. <em>Curr Med Chem.</em> 2020;27(23):3812-3827 (PMID: 31199237)</li>
</ul>

{% endraw %}