---
created: '2026-05-08T08:21:33.423319Z'
description: FADH2 (1,5-dihydroflavin adenine dinucleotide) is the reduced form of
  FAD and a critical electron carrier in cellular respiration. It delivers electrons
  to Complex II (succinate dehydrogenase) of the electron transport chain, bypassing
  Complex I and yielding approximately 1.5 ATP per molecule. FADH2 is produced primarily
  by succinate dehydrogenase in the citric acid cycle, acyl-CoA dehydrogenases in
  beta-oxidation, and the E3 subunit of pyruvate dehydrogenase.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/fadh2/
slug: fadh2
tags:
- metabolite
- coenzyme
- electron_carrier
- redox
- mitochondrial
- energy_metabolism
templateEngineOverride: njk
title: FADH2
type: metabolite
updated: '2026-05-08T08:21:33.423319Z'
---

{% raw %}
<h1>FADH2</h1>
<h2>Overview</h2>
<p>FADH2 (1,5-dihydroflavin adenine dinucleotide) is the reduced form of the redox cofactor FAD (flavin adenine dinucleotide). It functions as a critical electron carrier in cellular respiration, transferring electrons from metabolic oxidation reactions to the <a href="/entities/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a>. Unlike <a href="/entities/metabolite/nadh/" class="internal-link">NADH</a>, which feeds electrons into Complex I, FADH2 delivers electrons directly to Complex II (succinate dehydrogenase), bypassing the first proton-pumping complex and resulting in a lower ATP yield per electron pair.</p>
<p>FADH2 is produced at multiple points in cellular metabolism: by succinate dehydrogenase in the <a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a>, by acyl-CoA dehydrogenases during <a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a> of fatty acids, and by the E3 (dihydrolipoamide dehydrogenase) subunit of the <a href="/entities/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a> complex. In all cases, FAD acts as a prosthetic group that is tightly bound to its enzyme, distinguishing it from the freely diffusible NADH.</p>
<h2>Chemical Properties</h2>
<table>
<thead>
<tr>
<th>Property</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Molecular Formula</td>
<td>C27H35N9O15P2</td>
</tr>
<tr>
<td>Molecular Weight</td>
<td>787.57 g/mol</td>
</tr>
<tr>
<td>PubChem CID</td>
<td>643975 (FAD parent compound)</td>
</tr>
<tr>
<td>HMDB ID</td>
<td>HMDB0001206</td>
</tr>
<tr>
<td>Redox Pair</td>
<td>FAD/FADH2</td>
</tr>
</tbody>
</table>
<p>FADH2 is the two-electron reduced form of FAD. The reduction occurs at the isoalloxazine ring system of the flavin moiety, where two protons and two electrons are added at positions N1 and N10. This distinguishes it from the semiquinone radical (FADH*), the one-electron reduced intermediate.</p>
<h2>Mechanism of Action</h2>
<h3>Electron Transfer to the Respiratory Chain</h3>
<p>FADH2 transfers its electrons directly to ubiquinone (coenzyme Q) via Complex II (succinate dehydrogenase, SDH), which is embedded in the inner mitochondrial membrane. Because Complex II does not pump protons across the membrane, FADH2-derived electrons bypass the proton-pumping step at Complex I. The electron flow continues through Complex III and Complex IV, which together pump approximately 6 protons (versus 10 for NADH-derived electrons). At <a href="/entities/protein/atp-synthase/" class="internal-link">ATP Synthase</a> (Complex V), this translates to approximately 1.5 ATP per FADH2, compared to approximately 2.5 ATP per NADH.</p>
<h3>Sources of FADH2</h3>
<table>
<thead>
<tr>
<th>Source</th>
<th>Enzyme</th>
<th>Pathway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Succinate → Fumarate</td>
<td>Succinate dehydrogenase (Complex II)</td>
<td><a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a></td>
</tr>
<tr>
<td>Acyl-CoA → Enoyl-CoA</td>
<td>Acyl-CoA dehydrogenase</td>
<td><a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a></td>
</tr>
<tr>
<td>Glycerol-3-phosphate → DHAP</td>
<td>Glycerol-3-phosphate dehydrogenase</td>
<td>Glycerol phosphate shuttle</td>
</tr>
<tr>
<td>Dihydrolipoamide → Lipoamide</td>
<td>Dihydrolipoamide dehydrogenase (E3)</td>
<td>PDH / alpha-KGDH / BCKDH</td>
</tr>
<tr>
<td>Sarcosine → Glycine</td>
<td>Sarcosine dehydrogenase</td>
<td>One-carbon metabolism</td>
</tr>
</tbody>
</table>
<h3>FAD as a Prosthetic Group</h3>
<p>A critical distinction between FADH2 and NADH is that FAD typically functions as a tightly bound prosthetic group within its enzyme, rather than as a freely diffusible cofactor. This means the enzyme must be positioned correctly within the metabolic pathway for efficient electron transfer. Succinate dehydrogenase, for example, is uniquely embedded in the inner mitochondrial membrane as both a TCA cycle enzyme and Complex II of the electron transport chain, directly coupling citric acid cycle flux to electron transport.</p>
<h2>Clinical Significance</h2>
<h3>Mitochondrial Dysfunction</h3>
<p>Impaired FADH2 production or utilization contributes to <a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a>. Since FADH2-dependent reactions are central to both the citric acid cycle and fatty acid oxidation, deficiencies in flavoprotein enzymes can cause metabolic myopathies, encephalopathies, and exercise intolerance. Riboflavin (vitamin B2) deficiency reduces FAD availability and thus FADH2 production, as FAD is synthesized from riboflavin.</p>
<h3>Complex II (SDH) Mutations</h3>
<p>Mutations in succinate dehydrogenase subunits (SDHA, SDHB, SDHC, SDHD) are associated with paragangliomas, pheochromocytomas, and gastrointestinal stromal tumors. These mutations impair the conversion of succinate to fumarate and the transfer of electrons from FADH2 to ubiquinone, leading to succinate accumulation and pseudohypoxic signaling that promotes tumorigenesis.</p>
<h3>Fatty Acid Oxidation Disorders</h3>
<p>Defects in acyl-CoA dehydrogenases (e.g., medium-chain acyl-CoA dehydrogenase deficiency, MCADD) impair the first step of beta-oxidation, where FAD is reduced to FADH2. These disorders cause hypoketotic hypoglycemia and can be life-threatening, particularly during fasting or illness.</p>
<h3>ATP Yield Differences in Pathology</h3>
<p>The lower ATP yield of FADH2 compared to NADH (1.5 vs 2.5 ATP) has implications in metabolic pathology. Conditions that shift substrate utilization toward fatty acid oxidation (which produces relatively more FADH2 per carbon) versus glucose oxidation (which produces more NADH) can affect overall cellular energy efficiency.</p>
<h2>Relationships</h2>
<h3>Participates In</h3>
<p>PARTICIPATES_IN::<a href="/entities/pathway/electron-transport-chain/" class="internal-link">Electron Transport Chain</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/citric-acid-cycle/" class="internal-link">Citric Acid Cycle</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/beta-oxidation/" class="internal-link">Beta-Oxidation</a><br />
PARTICIPATES_IN::<a href="/entities/pathway/oxidative-phosphorylation/" class="internal-link">Oxidative Phosphorylation</a></p>
<h3>Related To</h3>
<p>RELATED_TO::<a href="/entities/metabolite/nadh/" class="internal-link">NADH</a><br />
RELATED_TO::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a><br />
RELATED_TO::<a href="/entities/metabolite/succinate/" class="internal-link">Succinate</a><br />
RELATED_TO::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a><br />
RELATED_TO::<a href="/entities/protein/pyruvate-dehydrogenase/" class="internal-link">Pyruvate Dehydrogenase</a><br />
RELATED_TO::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a></p>
<h2>References</h2>
<ul>
<li>Gnaiger E. <em>J Biol Chem.</em> 2024;300(1):105560 -- Complex II ambiguities: FADH2 in the electron transfer system (PMID: 38118236)</li>
<li>Cogliati S, Cabrera-Alarcón JL, Enriquez JA. <em>Biochem Soc Trans.</em> 2021;49(6):2677-2689 -- Regulation and functional role of the electron transport chain supercomplexes (PMID: 34747989)</li>
<li>Adeva-Andany MM, Carneiro-Freire N, Seco-Filgueira M. <em>Mitochondrion.</em> 2019;46:73-90 -- Mitochondrial beta-oxidation of saturated fatty acids in humans (PMID: 29551309)</li>
<li>Trushina E, Trushin S, Hasan MF. <em>Acta Pharm Sin B.</em> 2022;12(2):499-512 -- Mitochondrial complex I as a therapeutic target for Alzheimer's disease (PMID: 35256930)</li>
</ul>

{% endraw %}