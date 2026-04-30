---
created: '2026-04-30T06:31:02.793590Z'
description: L-Malate is a four-carbon dicarboxylic acid intermediate of the citric
  acid cycle, formed by hydration of fumarate and oxidized to oxaloacetate by malate
  dehydrogenase (generating NADH). Malate also serves as the central carrier of the
  malate-aspartate shuttle, transferring reducing equivalents from cytosolic NADH
  into mitochondria, and as a key intermediate in gluconeogenesis and anaplerotic
  metabolism.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/malate/
slug: malate
tags:
- metabolite
- tca_cycle
- shuttle
- gluconeogenesis
- central_metabolism
- anaplerotic
templateEngineOverride: njk
title: Malate
type: metabolite
updated: '2026-04-30T06:31:02.793590Z'
---

{% raw %}
<h1>Malate</h1>
<h2>Overview</h2>
<p>L-Malate (malic acid) is a four-carbon dicarboxylic acid that serves as the penultimate intermediate in the citric acid (TCA) cycle. It is produced when fumarase catalyzes the stereospecific hydration of fumarate, and is subsequently oxidized by malate dehydrogenase (MDH) to regenerate oxaloacetate, completing the cycle. The MDH reaction generates one molecule of NADH per turn of the TCA cycle, making malate oxidation a direct contributor to the electron transport chain and mitochondrial ATP production.</p>
<p>Beyond its TCA cycle role, malate is the central carrier molecule in the malate-aspartate shuttle, the primary system for transferring reducing equivalents from cytosolic NADH into the mitochondrial matrix. This shuttle is essential because the inner mitochondrial membrane is impermeable to NADH, and most cells (particularly heart, liver, and kidney) rely on it to extract the full energy value of glycolytically produced NADH.</p>
<p>Malate also plays a critical anaplerotic role in gluconeogenesis: oxaloacetate produced in mitochondria cannot cross the inner membrane, so it is reduced to malate by mitochondrial MDH, exported to the cytosol, and re-oxidized to oxaloacetate by cytosolic MDH, where phosphoenolpyruvate carboxykinase (PEPCK) converts it to phosphoenolpyruvate for glucose synthesis.</p>
<h2>Metabolic Roles</h2>
<h3>TCA Cycle (Final Steps)</h3>
<p>Malate occupies the last two reactions of the TCA cycle:</p>
<ul>
<li><strong>Formation (fumarase):</strong> Fumarate + H2O → L-Malate (stereospecific hydration of the trans double bond)</li>
<li><strong>Oxidation (malate dehydrogenase):</strong> L-Malate + NAD+ → Oxaloacetate + NADH + H+</li>
</ul>
<p>The MDH reaction is highly endergonic under standard conditions (deltaG°' = +29.7 kJ/mol), but proceeds forward in vivo because oxaloacetate is rapidly consumed by citrate synthase (condensing with acetyl-CoA), keeping oxaloacetate concentrations extremely low and pulling the equilibrium toward malate oxidation.</p>
<h3>Malate-Aspartate Shuttle</h3>
<p>The malate-aspartate shuttle is the major route for transferring reducing equivalents from cytosolic NADH into the mitochondrial matrix:</p>
<ol>
<li><strong>Cytosol:</strong> Oxaloacetate + NADH + H+ → Malate + NAD+ (cytosolic MDH)</li>
<li><strong>Transport:</strong> Malate crosses the inner membrane via malate-alpha-ketoglutarate antiporter (exchanged for alpha-ketoglutarate)</li>
<li><strong>Matrix:</strong> Malate + NAD+ → Oxaloacetate + NADH + H+ (mitochondrial MDH)</li>
<li><strong>Transamination:</strong> Oxaloacetate + Glutamate ⇌ Aspartate + Alpha-ketoglutarate (mitochondrial AST)</li>
<li><strong>Transport:</strong> Aspartate exits, glutamate enters (via aspartate-glutamate antiporter)</li>
<li><strong>Cytosol:</strong> Aspartate + Alpha-ketoglutarate → Oxaloacetate + Glutamate (cytosolic AST), regenerating the cycle</li>
</ol>
<p>This shuttle is critical in heart, liver, and kidney, where it recovers approximately 2.5 ATP per cytosolic NADH (vs. only 1.5 ATP via the glycerol phosphate shuttle in muscle and brain).</p>
<h3>Gluconeogenesis</h3>
<p>During gluconeogenesis, mitochondrial oxaloacetate must reach the cytosol for PEPCK to convert it to phosphoenolpyruvate. Since oxaloacetate cannot cross the inner mitochondrial membrane:</p>
<ol>
<li><strong>Mitochondria:</strong> Oxaloacetate + NADH → Malate + NAD+ (mitochondrial MDH)</li>
<li><strong>Transport:</strong> Malate exits to cytosol</li>
<li><strong>Cytosol:</strong> Malate + NAD+ → Oxaloacetate + NADH + H+ (cytosolic MDH)</li>
<li><strong>Cytosol:</strong> Oxaloacetate + GTP → Phosphoenolpyruvate + GDP + CO2 (PEPCK)</li>
</ol>
<p>This malate shuttle simultaneously transports both the carbon skeleton and reducing equivalents to the cytosol, where the NADH generated is needed for the later glyceraldehyde-3-phosphate dehydrogenase step of gluconeogenesis.</p>
<h3>Anaplerotic Metabolism</h3>
<p>Malate serves as a key anaplerotic entry point into the TCA cycle. Malic enzyme (ME) catalyzes the decarboxylation of malate to pyruvate, generating NADPH:</p>
<ul>
<li><strong>NADP+-dependent malic enzyme (ME1, cytosolic):</strong> Malate + NADP+ → Pyruvate + CO2 + NADPH (provides NADPH for fatty acid synthesis)</li>
<li><strong>NAD+-dependent malic enzyme (ME2, mitochondrial):</strong> Malate + NAD+ → Pyruvate + CO2 + NADH (links TCA cycle intermediates to pyruvate)</li>
<li><strong>ME3 (mitochondrial, NADP+):</strong> Provides NADPH for mitochondrial antioxidant defense</li>
</ul>
<h2>Clinical Significance</h2>
<h3>Malate Dehydrogenase Deficiency</h3>
<p>MDH2 deficiency (mitochondrial MDH) is a rare autosomal recessive disorder causing:</p>
<ul>
<li>Developmental delay, intellectual disability</li>
<li>Hypotonia, seizures</li>
<li>Elevated lactate and malate levels</li>
<li>Impaired energy metabolism in high-demand tissues</li>
</ul>
<h3>Malate-Aspartate Shuttle Disorders</h3>
<p>Inborn errors of the malate-aspartate shuttle components cause:</p>
<ul>
<li>Citrullinemia type I (deficiency of ASS1, disrupts urea cycle via shuttle impairment)</li>
<li>Aralar deficiency (SLC25A12, mitochondrial aspartate-glutamate carrier): causes cerebral developmental delay, seizures, and hypotonia</li>
<li>These disorders highlight the essential role of malate transport in brain metabolism</li>
</ul>
<h3>Fibromyalgia</h3>
<p>Malic acid (malate) supplementation, particularly in combination with magnesium, has been studied for fibromyalgia:</p>
<ul>
<li>A pilot RCT showed modest improvement in pain and tenderness with magnesium malate supplementation</li>
<li>Proposed mechanism involves malate's role in ATP production via the TCA cycle and potential improvement in mitochondrial energy metabolism</li>
<li>Evidence remains limited and further trials are needed</li>
</ul>
<h3>Exercise and Energy Metabolism</h3>
<p>Malate supplementation has been explored for:</p>
<ul>
<li>Enhancing exercise endurance by supporting TCA cycle flux</li>
<li>Reducing muscle fatigue through improved mitochondrial NADH generation</li>
<li>Limited clinical evidence; most data from animal studies</li>
</ul>
<h2>Relationships</h2>
<h3>Produced From</h3>
<p>PRODUCED_BY::<a href="/entities/metabolite/fumarate/" class="internal-link">Fumarate</a></p>
<h3>Converts To</h3>
<p>CONVERTED_TO::<a href="/entities/metabolite/oxaloacetate/" class="internal-link">Oxaloacetate</a></p>
<h3>Participates In Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></p>
<h3>Related Metabolites</h3>
<p>RELATED::<a href="/entities/metabolite/citrate/" class="internal-link">Citrate</a><br />
RELATED::<a class="internal-link is-unresolved" href="/404">Isocitrate</a><br />
RELATED::<a href="/entities/metabolite/alpha-ketoglutarate/" class="internal-link">Alpha-Ketoglutarate</a><br />
RELATED::<a href="/entities/metabolite/succinate/" class="internal-link">Succinate</a><br />
RELATED::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
RELATED::<a href="/entities/metabolite/pyruvate/" class="internal-link">Pyruvate</a><br />
RELATED::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED::<a href="/entities/metabolite/coenzyme-a/" class="internal-link">Coenzyme A</a><br />
RELATED::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a></p>
<h3>Related Neurotransmitters</h3>
<p>RELATED::<a href="/entities/neurotransmitter/glutamate/" class="internal-link">Glutamate</a></p>
<h3>Related Supplements</h3>
<p>RELATED::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a></p>
<h3>Related Proteins</h3>
<p>RELATED::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a></p>
<h3>Organelles</h3>
<p>LOCATED_IN::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h2>References</h2>
<ul>
<li>Peterson CN, Cornely K, Parente AD, et al. Uncovering malate dehydrogenase: structure, function and role in disease. <em>Essays Biochem.</em> 2024;68(2):53-55 (PMID: 39361129)</li>
<li>Goward CR, Nicholls DJ. Malate dehydrogenase: a model for structure, evolution, and catalysis. <em>Protein Sci.</em> 1994;3(10):1883-1888 (PMID: 7849603)</li>
<li>Broeks MH, van Karnebeek CDM, Wanders RJA, et al. Inborn disorders of the malate aspartate shuttle. <em>J Inherit Metab Dis.</em> 2021;44(4):792-808 (PMID: 33990986)</li>
<li>Holecek M. Roles of malate and aspartate in gluconeogenesis in various physiological and pathological states. <em>Metabolism.</em> 2023;145:155614 (PMID: 37286128)</li>
<li>Russell IJ, Michalek JE, Flechas JD, Abraham GE. Treatment of fibromyalgia syndrome with Super Malic: a randomized, double blind, placebo controlled, crossover pilot study. <em>J Rheumatol.</em> 1995;22(5):953-958 (PMID: 8587088)</li>
</ul>

{% endraw %}