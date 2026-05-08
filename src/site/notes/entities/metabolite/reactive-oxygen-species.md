---
created: '2026-05-08T08:21:33.536707Z'
description: Reactive oxygen species (ROS) are a group of highly reactive oxygen-containing
  molecules produced as natural byproducts of mitochondrial electron transport chain
  activity (~1-2% of total electron flow leaks to form superoxide). The major ROS
  include superoxide anion (O2.-), hydrogen peroxide (H2O2), and hydroxyl radical
  (OH.). At low physiological levels, ROS function as essential signaling molecules
  regulating cell growth, immune defense, and adaptive stress responses (mitohormesis).
  At excessive levels, they cause oxidative damage to DNA, proteins, and lipids, contributing
  to aging, neurodegeneration, cancer, and cardiovascular disease.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/reactive-oxygen-species/
slug: reactive-oxygen-species
tags:
- metabolite
- oxidative_stress
- mitochondrial
- redox_signaling
- antioxidant
- free_radical
- mitohormesis
templateEngineOverride: njk
title: Reactive Oxygen Species
type: metabolite
updated: '2026-05-08T08:21:33.536707Z'
---

{% raw %}
<h1>Reactive Oxygen Species</h1>
<h2>Overview</h2>
<p>Reactive oxygen species (ROS) are a family of highly reactive oxygen-containing molecules that exist on a spectrum from relatively mild oxidants (hydrogen peroxide) to extremely reactive free radicals (hydroxyl radical). They are produced primarily as byproducts of mitochondrial oxidative phosphorylation, where approximately 1-2% of electrons &quot;leak&quot; from the electron transport chain (ETC) and react with molecular oxygen to form superoxide anion (O2.-). This leak is not purely pathological — it is an inherent feature of aerobic metabolism that has been co-opted by evolution for signaling purposes.</p>
<p>The concept of <strong>mitohormesis</strong> is central to understanding ROS biology: low-to-moderate levels of ROS activate adaptive stress response pathways (Nrf2, AMPK, sirtuins) that enhance cellular resilience, antioxidant defenses, and longevity. This is analogous to how exercise produces transient oxidative stress that ultimately makes the body stronger. However, when ROS production overwhelms antioxidant defenses — due to mitochondrial dysfunction, environmental toxins, chronic inflammation, or nutrient deficiency — the result is <strong>oxidative stress</strong>: damage to DNA (8-OHdG lesions), proteins (carbonylation, nitrosylation), and lipids (lipid peroxidation, malondialdehyde/MDA formation) (Sies et al., 2017, PMID: 28110218).</p>
<p>This dual nature — signaling molecule vs. damaging agent — makes ROS biology fundamentally about balance. The cell maintains this balance through an elaborate antioxidant defense system comprising enzymatic (superoxide dismutase, catalase, glutathione peroxidase) and non-enzymatic (glutathione, vitamins C and E, coenzyme Q10) components.</p>
<p>Evidence Level: 5/5</p>
<h2>Major ROS Species</h2>
<table>
<thead>
<tr>
<th>Species</th>
<th>Formula</th>
<th>Reactivity</th>
<th>Half-life</th>
<th>Source</th>
<th>Primary Target</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Superoxide anion</strong></td>
<td>O2.-</td>
<td>Moderate</td>
<td>~1 us</td>
<td>Mitochondrial ETC Complex I and III; NADPH oxidases (NOX); xanthine oxidase</td>
<td>Manganese SOD (MnSOD) in mitochondria converts to H2O2</td>
</tr>
<tr>
<td><strong>Hydrogen peroxide</strong></td>
<td>H2O2</td>
<td>Low-moderate</td>
<td>~1 ms</td>
<td>Dismutation of O2.- (via SOD); directly from some enzymes</td>
<td>Can cross membranes via aquaporins; converted to H2O by catalase or GPx</td>
</tr>
<tr>
<td><strong>Hydroxyl radical</strong></td>
<td>OH.</td>
<td>Extremely high</td>
<td>~1 ns</td>
<td>Fenton reaction (H2O2 + Fe2+ → OH. + OH-); Haber-Weiss reaction</td>
<td>Damages everything it contacts; no specific enzyme scavenger — must be prevented</td>
</tr>
<tr>
<td><strong>Peroxynitrite</strong></td>
<td>ONOO-</td>
<td>Very high</td>
<td>~1 ms</td>
<td>O2.- + NO. → ONOO- (reaction of superoxide with nitric oxide)</td>
<td>Nitrates tyrosine residues; oxidizes iron-sulfur clusters; damages mitochondria</td>
</tr>
<tr>
<td><strong>Singlet oxygen</strong></td>
<td>1O2</td>
<td>High</td>
<td>~1 us</td>
<td>Photosensitization; immune cell myeloperoxidase</td>
<td>Lipid peroxidation; skin damage from UV</td>
</tr>
<tr>
<td><strong>Hypochlorous acid</strong></td>
<td>HOCl</td>
<td>High</td>
<td>—</td>
<td>Myeloperoxidase in neutrophils (H2O2 + Cl-)</td>
<td>Bactericidal; contributes to tissue damage in inflammation</td>
</tr>
</tbody>
</table>
<h3>Reactivity Hierarchy</h3>
<p>OH. &gt;&gt; ONOO- &gt; 1O2 &gt; HOCl &gt; O2.- &gt; H2O2</p>
<p>Hydrogen peroxide (H2O2) is the most important ROS for <strong>redox signaling</strong> because its moderate reactivity and ability to cross membranes (via aquaporins AQP3, AQP8, AQP9) allow it to act as a diffusible second messenger. It selectively oxidizes cysteine residues on target proteins (particularly those with low pKa), modifying enzyme activity in a reversible manner — analogous to phosphorylation.</p>
<h2>Sources of ROS</h2>
<h3>Mitochondrial Sources (Primary, ~90% of cellular ROS)</h3>
<pre><code>                NADH                  FADH2
                  │                     │
            ┌─────┴──────┐        ┌─────┴──────┐
            │ Complex I  │        │ Complex II │
            │  (NADH     │        │ (succinate) │
            │  dehydrog.) │        │             │
            └─────┬──────┘        └─────┬──────┘
                  │  ↑O2.- leak          │
                  ↓                      ↓
            ┌─────────────────────────────────┐
            │          CoQ (ubiquinone)        │
            │            ↑O2.- leak            │
            └─────────────┬───────────────────┘
                          │
                    ┌─────┴──────┐
                    │ Complex III │
                    │  (cytochrome│
                    │   bc1)      │
                    └─────┬──────┘
                          │  ↑O2.- leak
                          ↓
                    ┌───────────┐
                    │Complex IV │
                    │(cytochrome│
                    │ oxidase)  │
                    └─────┬─────┘
                          │
                        O2 → H2O
</code></pre>
<ul>
<li><strong>Complex I (NADH dehydrogenase)</strong> — the largest source of mitochondrial superoxide; electron leak from the flavin mononucleotide (FMN) site during forward electron transport, and from the CoQ binding site during reverse electron transport (RET)</li>
<li><strong>Complex III (cytochrome bc1)</strong> — electron leak from the Qo site; generates superoxide toward both the matrix and intermembrane space</li>
<li><strong>Complex II (succinate dehydrogenase)</strong> — minor source; can produce superoxide when operating in reverse or under high succinate conditions</li>
</ul>
<h3>Non-Mitochondrial Sources</h3>
<table>
<thead>
<tr>
<th>Source</th>
<th>Location</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>NADPH oxidases (NOX1-5, DUOX1-2)</strong></td>
<td>Plasma membrane, endosomes</td>
<td>Deliberate ROS production for immune defense (NOX2/phox in phagocytes), signaling (NOX4 in kidney, vasculature), thyroid hormone synthesis (DUOX2)</td>
</tr>
<tr>
<td><strong>Xanthine oxidase (XO)</strong></td>
<td>Cytosol, endothelium</td>
<td>Purine catabolism; produces O2.- and H2O2; major source during ischemia-reperfusion injury</td>
</tr>
<tr>
<td><strong>Myeloperoxidase (MPO)</strong></td>
<td>Neutrophil azurophilic granules</td>
<td>Produces HOCl from H2O2 and Cl-; most potent bactericidal oxidant; contributes to tissue damage in inflammatory diseases</td>
</tr>
<tr>
<td><strong>Endoplasmic reticulum (Ero1)</strong></td>
<td>ER lumen</td>
<td>Protein disulfide bond formation; H2O2 as byproduct of oxidative protein folding</td>
</tr>
<tr>
<td><strong>Monoamine oxidase (MAO-A/B)</strong></td>
<td>Outer mitochondrial membrane</td>
<td>Neurotransmitter degradation (dopamine, serotonin, norepinephrine); produces H2O2 as byproduct; significant ROS source in brain</td>
</tr>
</tbody>
</table>
<h2>Antioxidant Defense Systems</h2>
<p>The cell maintains redox balance through a multi-layered defense system:</p>
<h3>Enzymatic Antioxidants</h3>
<table>
<thead>
<tr>
<th>Enzyme</th>
<th>Location</th>
<th>Reaction</th>
<th>Cofactor</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Superoxide dismutase 2 (SOD2/MnSOD)</strong></td>
<td>Mitochondrial matrix</td>
<td>2 O2.- + 2H+ → H2O2 + O2</td>
<td>Manganese</td>
</tr>
<tr>
<td><strong>SOD1 (Cu/ZnSOD)</strong></td>
<td>Cytosol, intermembrane space</td>
<td>2 O2.- + 2H+ → H2O2 + O2</td>
<td>Copper, Zinc</td>
</tr>
<tr>
<td><strong>SOD3 (EcSOD)</strong></td>
<td>Extracellular</td>
<td>2 O2.- + 2H+ → H2O2 + O2</td>
<td>Copper, Zinc</td>
</tr>
<tr>
<td><strong>Catalase</strong></td>
<td>Peroxisomes</td>
<td>2 H2O2 → 2 H2O + O2</td>
<td>Heme (iron)</td>
</tr>
<tr>
<td><strong>Glutathione peroxidase (GPx1-4)</strong></td>
<td>Cytosol, mitochondria</td>
<td>H2O2 + 2 GSH → 2 H2O + GSSG</td>
<td>Selenium</td>
</tr>
<tr>
<td><strong>Peroxiredoxins (Prx1-6)</strong></td>
<td>Cytosol, mitochondria</td>
<td>H2O2 → H2O (using thioredoxin)</td>
<td>—</td>
</tr>
<tr>
<td><strong>Thioredoxin reductase (TrxR)</strong></td>
<td>Cytosol, mitochondria</td>
<td>Regenerates reduced thioredoxin</td>
<td>Selenium</td>
</tr>
</tbody>
</table>
<h3>Non-Enzymatic Antioxidants</h3>
<table>
<thead>
<tr>
<th>Antioxidant</th>
<th>Location</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Glutathione (GSH)</strong></td>
<td>Cytosol, mitochondria (~5-10 mM)</td>
<td>Primary intracellular redox buffer; GPx cofactor; direct ROS scavenger</td>
</tr>
<tr>
<td><strong>Coenzyme Q10 (ubiquinol)</strong></td>
<td>Mitochondrial membranes, plasma membranes</td>
<td>Lipid-soluble antioxidant; regenerates vitamin E; ETC electron carrier</td>
</tr>
<tr>
<td><strong>Vitamin C (ascorbate)</strong></td>
<td>Cytosol, extracellular fluid</td>
<td>Water-soluble antioxidant; regenerates vitamin E; cofactor for hydroxylases</td>
</tr>
<tr>
<td><strong>Vitamin E (alpha-tocopherol)</strong></td>
<td>Cell membranes, lipoproteins</td>
<td>Chain-breaking lipid peroxidation inhibitor; protects membranes</td>
</tr>
<tr>
<td><strong>Melatonin</strong></td>
<td>Mitochondria, nucleus, cytosol</td>
<td>Scavenges OH., H2O2, O2.-; upregulates antioxidant enzymes (SOD, GPx, CAT); crosses BBB</td>
</tr>
<tr>
<td><strong>Uric acid</strong></td>
<td>Plasma</td>
<td>Major plasma antioxidant (~60% of plasma antioxidant capacity)</td>
</tr>
</tbody>
</table>
<h2>ROS as Signaling Molecules (Redox Signaling)</h2>
<h3>Nrf2-Keap1 Pathway</h3>
<p>The master regulator of antioxidant defense:</p>
<ol>
<li>Under basal conditions, Nrf2 is bound by Keap1 in the cytosol and targeted for ubiquitin-mediated degradation</li>
<li>Oxidation of specific cysteine residues on Keap1 by H2O2 releases Nrf2</li>
<li>Nrf2 translocates to the nucleus and activates antioxidant response element (ARE)-driven genes: SOD2, GPx, catalase, glutathione synthesis enzymes (GCLC, GCLM, GS), NAD(P)H-quinone oxidoreductase 1 (NQO1), heme oxygenase-1 (HO-1)</li>
<li>This creates a positive feedback loop: mild ROS → Nrf2 activation → enhanced antioxidant defense → reduced ROS</li>
</ol>
<h3>AMPK Activation</h3>
<ul>
<li>H2O2 activates AMPK indirectly by increasing the AMP/ATP ratio (ROS inhibit ATP production) and directly by oxidizing cysteine residues on AMPK</li>
<li>AMPK activation promotes mitochondrial biogenesis (via PGC-1alpha), autophagy (removal of damaged mitochondria), and antioxidant gene expression</li>
</ul>
<h3>Sirtuin Activation</h3>
<ul>
<li>SIRT3 (mitochondrial deacetylase) is activated by NAD+ (which increases when ROS reduce the NADH/NAD+ ratio)</li>
<li>SIRT3 deacetylates and activates MnSOD (SOD2), increasing mitochondrial antioxidant capacity</li>
<li>SIRT3 also activates isocitrate dehydrogenase and IDH2, increasing NADPH for glutathione regeneration</li>
</ul>
<h3>Hypoxia Signaling</h3>
<ul>
<li>H2O2 oxidizes cysteine residues on prolyl hydroxylases (PHDs), inhibiting their activity</li>
<li>This stabilizes HIF-1alpha, activating hypoxia-responsive genes (VEGF, EPO, glycolytic enzymes)</li>
<li>This is how cells sense low oxygen — partly through ROS-mediated inhibition of oxygen sensors</li>
</ul>
<h2>Mitohormesis</h2>
<p><strong>Mitohormesis</strong> describes the biphasic response to mitochondrial ROS: low-level ROS exposure activates adaptive stress responses that improve cellular resilience, while high-level ROS causes damage.</p>
<pre><code>        Cellular Benefit
              ↑
              │         /
              │        / ← Adaptive Zone (mitohormesis)
              │       /
              │      /
              │     • ← Optimal ROS level
              │    /
              │   /
              │  /
              │ /
              │/________________
              0        ROS Level →
              
        Low ROS:          High ROS:
        - Signaling        - Oxidative damage
        - Adaptation       - Cell death
        - Resilience       - Disease
</code></pre>
<h3>Hormetic Stressors That Increase Beneficial ROS</h3>
<ul>
<li><strong>Exercise</strong>: Acute exercise increases mitochondrial ROS 2-4x; chronic exercise upregulates SOD2, GPx, catalase (adaptation)</li>
<li><strong>Caloric restriction / fasting</strong>: Mild metabolic stress increases mitochondrial efficiency and antioxidant defenses</li>
<li><strong>Cold exposure</strong>: Activates brown adipose tissue thermogenesis, transiently increasing ROS and Nrf2 activation</li>
<li><strong>Phytochemicals</strong> (curcumin, sulforaphane): Mild pro-oxidants that activate Nrf2 via Keap1 oxidation</li>
</ul>
<h2>Oxidative Damage and Disease</h2>
<table>
<thead>
<tr>
<th>Disease</th>
<th>Evidence</th>
<th>Role of ROS</th>
</tr>
</thead>
<tbody>
<tr>
<td>Neurodegeneration (Alzheimer's, Parkinson's)</td>
<td>Strong</td>
<td>Oxidative damage to neurons (lipid peroxidation, protein carbonylation); mitochondrial dysfunction amplifies ROS; brain is especially vulnerable (high O2 consumption, lipid-rich membranes)</td>
</tr>
<tr>
<td>Cardiovascular Disease</td>
<td>Strong</td>
<td>LDL oxidation by ROS initiates atherosclerosis; endothelial dysfunction from reduced NO bioavailability (O2.- reacts with NO); ischemia-reperfusion injury</td>
</tr>
<tr>
<td>Cancer</td>
<td>Strong</td>
<td>ROS cause DNA mutations (8-OHdG → G→T transversions); chronic inflammation produces sustained ROS; paradoxically, cancer cells often have elevated ROS and rely on enhanced antioxidant systems</td>
</tr>
<tr>
<td>Diabetes Mellitus</td>
<td>Strong</td>
<td>Hyperglycemia increases mitochondrial ROS via overload of ETC; ROS activate PKC, AGE formation, hexosamine pathway — all contribute to diabetic complications</td>
</tr>
<tr>
<td>Chronic Inflammation</td>
<td>Strong</td>
<td>ROS activate NF-kB and NLRP3 inflammasome; inflammatory cells (neutrophils, macrophages) release ROS as weapons; creates a vicious cycle</td>
</tr>
<tr>
<td>Aging</td>
<td>Strong</td>
<td>Mitochondrial free radical theory of aging (Harman, 1956); accumulated oxidative damage to mtDNA, proteins, and lipids; controversial but supported by significant evidence</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<h3>Sources</h3>
<p>PRODUCED_BY::<a href="/entities/protein/complex-i/" class="internal-link">Complex I</a><br />
PRODUCED_BY::<a href="/entities/protein/complex-ii/" class="internal-link">Complex II</a><br />
PRODUCED_BY::<a href="/entities/protein/complex-iii/" class="internal-link">Complex III</a><br />
PRODUCED_BY::<a href="/entities/cellularcomponent/mitochondria/" class="internal-link">Mitochondria</a></p>
<h3>Signaling Targets</h3>
<p>REGULATES::<a href="/entities/protein/nrf2/" class="internal-link">NRF2</a><br />
REGULATES::<a href="/entities/protein/ampk/" class="internal-link">AMPK</a><br />
REGULATES::<a href="/entities/protein/sirt3/" class="internal-link">SIRT3</a></p>
<h3>Antioxidant Defense</h3>
<p>NEUTRALIZED_BY::<a href="/entities/supplement/glutathione/" class="internal-link">Glutathione</a><br />
NEUTRALIZED_BY::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a></p>
<h3>Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/inflammation/" class="internal-link">Inflammation</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/mitochondrial-dysfunction/" class="internal-link">Mitochondrial Dysfunction</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/cancer/" class="internal-link">Cancer</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/diabetes-mellitus/" class="internal-link">Diabetes Mellitus</a></p>
<h3>Organ Health</h3>
<p>INDICATES_ORGAN_HEALTH::<a href="/entities/organ/brain/" class="internal-link">Brain</a></p>
<h3>Supplements (Antioxidant/Modulatory)</h3>
<p>INTERACTS_WITH::<a href="/entities/supplement/vitamin-c/" class="internal-link">Vitamin C</a><br />
INTERACTS_WITH::<a href="/entities/supplement/vitamin-e/" class="internal-link">Vitamin E</a><br />
INTERACTS_WITH::<a href="/entities/supplement/glutathione/" class="internal-link">Glutathione</a><br />
INTERACTS_WITH::<a href="/entities/supplement/curcumin/" class="internal-link">Curcumin</a><br />
INTERACTS_WITH::<a href="/entities/supplement/coenzyme-q10/" class="internal-link">Coenzyme Q10</a><br />
INTERACTS_WITH::<a href="/entities/supplement/nac/" class="internal-link">NAC</a><br />
INTERACTS_WITH::<a href="/entities/supplement/melatonin-supplement/" class="internal-link">Melatonin Supplement</a><br />
INTERACTS_WITH::<a href="/entities/supplement/selenium/" class="internal-link">Selenium</a><br />
INTERACTS_WITH::<a href="/entities/supplement/resveratrol/" class="internal-link">Resveratrol</a></p>
<h3>Interventions</h3>
<p>REGULATED_BY_INTERVENTION::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a><br />
REGULATED_BY_INTERVENTION::<a href="/entities/intervention/cold-exposure/" class="internal-link">Cold Exposure</a></p>
<h3>Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/autophagy/" class="internal-link">Autophagy</a></p>
<h2>References</h2>
<ul>
<li>Sies H, Berndt C, Jones DP. Oxidative stress. <em>Annu Rev Biochem.</em> 2017;86:715-48 — Comprehensive review defining oxidative stress, redox signaling, and the hormetic dose-response of ROS. (PMID: 28110218)</li>
<li>Murphy MP. How mitochondria produce reactive oxygen species. <em>Biochem J.</em> 2009;417(1):1-13 — Authoritative review of mitochondrial ROS production sites, Complex I vs. III leak mechanisms. (PMID: 18843868)</li>
<li>Ristow M, Zarse K. How increased oxidative stress can promote longevity and metabolic health: the concept of mitohormesis. <em>Exp Gerontol.</em> 2010;45(6):410-8 — Introduced the mitohormesis concept: low-level ROS activate adaptive responses that enhance longevity. (PMID: 20350594)</li>
<li>Finkel T, Holbrook NJ. Oxidants, oxidative stress and the biology of ageing. <em>Nature.</em> 2000;408(6809):239-47 — Foundational review of ROS in aging, redox signaling, and the free radical theory. (PMID: 11089981)</li>
<li>Schieber M, Chandel Navdeep S. ROS function in redox signaling and oxidative stress. <em>Curr Biol.</em> 2014;24(10):R453-62 — Review distinguishing ROS signaling from oxidative damage, dose-response relationship. (PMID: 24845678)</li>
<li>D'Autreaux B, Toledano MB. ROS as signalling molecules: mechanisms that generate specificity in ROS homeostasis. <em>Nat Rev Mol Cell Biol.</em> 2007;8(10):813-24 — Review of how ROS achieve signaling specificity through compartmentalization, target selectivity, and temporal control. (PMID: 17848967)</li>
</ul>

{% endraw %}