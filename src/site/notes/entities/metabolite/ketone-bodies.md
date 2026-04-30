---
created: '2026-04-30T06:31:02.761409Z'
description: Ketone bodies are a group of three water-soluble metabolites — beta-hydroxybutyrate
  (BHB), acetoacetate (AcAc), and acetone — produced from fatty acid beta-oxidation
  in liver mitochondria during fasting, carbohydrate restriction, prolonged exercise,
  or untreated diabetes. They serve as the brain's primary alternative fuel when glucose
  availability is limited, supplying up to 60-70% of cerebral energy needs during
  extended fasting. Beyond energy metabolism, BHB functions as a signaling molecule
  with anti-inflammatory, epigenetic (HDAC inhibition), and neuroprotective properties.
dg-home: false
dg-publish: true
permalink: /entities/metabolite/ketone-bodies/
slug: ketone-bodies
tags:
- metabolite
- ketone
- fasting
- energy_metabolism
- brain_fuel
- neuroprotection
- lipid_metabolism
templateEngineOverride: njk
title: Ketone Bodies
type: metabolite
updated: '2026-04-30T06:31:02.761409Z'
---

{% raw %}
<h1>Ketone Bodies</h1>
<h2>Overview</h2>
<p>Ketone bodies are a group of three water-soluble molecules produced in liver mitochondria as byproducts of fatty acid beta-oxidation when carbohydrate availability is limited. The three ketone bodies are:</p>
<ol>
<li><strong>Beta-hydroxybutyrate (BHB)</strong> — the most abundant (~70-80% of total circulating ketones during fasting), most stable, and most bioactive ketone body; technically a hydroxy acid rather than a true ketone, but grouped with ketone bodies by convention</li>
<li><strong>Acetoacetate (AcAc)</strong> — the first ketone body synthesized; the metabolic precursor from which BHB and acetone are derived</li>
<li><strong>Acetone</strong> — a spontaneous decarboxylation product of AcAc; volatile and excreted via breath and urine; responsible for the &quot;fruity breath&quot; in diabetic ketoacidosis; generally not used as fuel</li>
</ol>
<p>During prolonged fasting (typically &gt;12-16 hours), hepatic glycogen is depleted and the liver shifts to oxidizing fatty acids, producing AcAc and BHB that are released into the bloodstream. The brain, which cannot directly use fatty acids for energy (fatty acids do not cross the blood-brain barrier efficiently), readily takes up ketone bodies via monocarboxylate transporters (MCT1, MCT2). During extended fasting (7+ days), ketone bodies supply up to 60-70% of the brain's energy needs, with the remainder from glucose (produced via gluconeogenesis).</p>
<p>Beyond their role as metabolic fuel, BHB has emerged as a potent <strong>signaling molecule</strong>: it inhibits class I histone deacetylases (HDACs), activating expression of antioxidant and neuroprotective genes (via FOXO3a and Nrf2 pathways); it activates the G protein-coupled receptor HCAR2 (GPR109A), producing anti-inflammatory effects; and it directly inhibits the NLRP3 inflammasome, a key mediator of inflammatory responses (Newman &amp; Verdin, 2014, PMID: 24440068).</p>
<p>Evidence Level: 5/5</p>
<h2>Ketogenesis Pathway</h2>
<pre><code>Fatty Acids → Beta-oxidation → Acetyl-CoA (in liver mitochondria)
                                    │
                          ┌─────────┴─────────┐
                          │                   │
                    TCA cycle             Ketogenesis
                  (energy production)    (when oxaloacetate
                          │               is depleted)
                          │                   │
                          │           Acetoacetyl-CoA
                          │               [thiolase]
                          │                   │
                          │           HMG-CoA
                          │          [HMGCS2]⭐
                          │               [HMGCL]
                          │               Acetoacetate (AcAc)
                          │              ┌─────┴─────┐
                          │         [BDH1]      spontaneous
                          │              │           │
                          │       BHB (70-80%)  Acetone (trivial)
                          │                          (exhaled)
                          ↓
                    CO2 + H2O + ATP
</code></pre>
<h3>Rate-Limiting Enzyme: HMGCS2</h3>
<ul>
<li><strong>HMG-CoA synthase 2 (HMGCS2)</strong> — the rate-limiting enzyme of ketogenesis; located in liver mitochondria; transcriptionally upregulated by fasting, glucagon, and PPAR-alpha; downregulated by insulin</li>
<li><strong>HMG-CoA lyase (HMGCL)</strong> — cleaves HMG-CoA to produce acetoacetate</li>
<li><strong>Beta-hydroxybutyrate dehydrogenase (BDH1)</strong> — converts AcAc to BHB (requires NADH); the ratio of BHB/AcAc reflects mitochondrial redox state (high NADH/NAD+ favors BHB)</li>
</ul>
<h3>Regulation of Ketogenesis</h3>
<table>
<thead>
<tr>
<th>State</th>
<th>Insulin</th>
<th>Glucagon</th>
<th>Oxaloacetate</th>
<th>Ketogenesis</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fed (high carb)</td>
<td>High</td>
<td>Low</td>
<td>Abundant</td>
<td>Suppressed</td>
</tr>
<tr>
<td>Fasting (12-16h)</td>
<td>Low</td>
<td>Rising</td>
<td>Declining</td>
<td>Beginning</td>
</tr>
<tr>
<td>Fasting (24-48h)</td>
<td>Very low</td>
<td>High</td>
<td>Depleted in liver</td>
<td>Active</td>
</tr>
<tr>
<td>Extended fast (&gt;72h)</td>
<td>Very low</td>
<td>High</td>
<td>Depleted</td>
<td>Maximal</td>
</tr>
<tr>
<td>Keto diet</td>
<td>Low</td>
<td>Moderate</td>
<td>Reduced</td>
<td>Chronic mild</td>
</tr>
<tr>
<td>Diabetic ketoacidosis</td>
<td>Near zero</td>
<td>Very high</td>
<td>Depleted</td>
<td>Pathological</td>
</tr>
</tbody>
</table>
<h2>Ketone Utilization (Ketolysis)</h2>
<p>Ketone bodies are utilized by extrahepatic tissues (brain, heart, skeletal muscle, kidneys) — the liver produces ketones but cannot use them (lacks the enzyme SCOT):</p>
<pre><code>BHB → Acetoacetate (BDH1, requires NAD+) → Acetoacetyl-CoA (SCOT / OXCT1)
                                                    │
                                              Acetyl-CoA (thiolase)
                                                    │
                                               TCA cycle → ATP
</code></pre>
<ul>
<li><strong>SCOT (succinyl-CoA:3-oxoacid CoA transferase / OXCT1)</strong> — the rate-limiting enzyme of ketolysis; activates AcAc to AcAc-CoA using succinyl-CoA; absent in liver (preventing the liver from consuming the ketones it produces); present in brain, heart, muscle, kidneys</li>
<li><strong>Monocarboxylate transporters (MCTs)</strong> — MCT1 (blood-brain barrier endothelium, astrocytes), MCT2 (neurons) transport ketones across cell membranes; upregulated during chronic ketosis (keto-adaptation)</li>
</ul>
<h2>Metabolic Thresholds</h2>
<table>
<thead>
<tr>
<th>Condition</th>
<th>Blood BHB (mmol/L)</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>Normal fed state</td>
<td>&lt;0.1</td>
<td>Negligible ketone production</td>
</tr>
<tr>
<td>Overnight fast (12h)</td>
<td>0.1-0.3</td>
<td>Mild ketogenesis begins</td>
</tr>
<tr>
<td>Fasting 24h</td>
<td>0.5-2.0</td>
<td>Nutritional ketosis</td>
</tr>
<tr>
<td>Fasting 48-72h</td>
<td>1.0-5.0</td>
<td>Moderate to deep ketosis</td>
</tr>
<tr>
<td>Keto diet (adapted)</td>
<td>0.5-3.0</td>
<td>Sustained nutritional ketosis</td>
</tr>
<tr>
<td>Diabetic ketoacidosis (DKA)</td>
<td>&gt;6.0 (often &gt;10)</td>
<td>Medical emergency; metabolic acidosis, dehydration</td>
</tr>
</tbody>
</table>
<ul>
<li>Blood BHB can be measured with handheld ketone meters (similar to glucose meters)</li>
<li>Urine ketone strips measure AcAc (not BHB) and are less accurate, especially after keto-adaptation (kidneys conserve ketones)</li>
</ul>
<h2>Neuroprotective and Signaling Functions</h2>
<p>BHB is far more than a metabolic fuel — it is a pleiotropic signaling molecule with several distinct mechanisms:</p>
<h3>1. HDAC Inhibition (Epigenetic)</h3>
<ul>
<li>BHB inhibits class I histone deacetylases (HDAC1, HDAC3), increasing histone acetylation</li>
<li>This activates transcription of antioxidant and stress-resistance genes (FOXO3a, Nrf2, Mt2)</li>
<li>The net effect is enhanced cellular stress resistance and longevity pathways — one mechanism linking fasting/caloric restriction to healthspan</li>
</ul>
<h3>2. NLRP3 Inflammasome Inhibition</h3>
<ul>
<li>BHB directly inhibits the NLRP3 inflammasome, a multiprotein complex that activates IL-1beta and IL-18 (pro-inflammatory cytokines)</li>
<li>This anti-inflammatory effect may explain benefits of ketogenic diets in autoimmune and neuroinflammatory conditions</li>
<li>The NLRP3 pathway is implicated in gout, type 2 diabetes, atherosclerosis, and Alzheimer's disease</li>
</ul>
<h3>3. HCAR2/GPR109A Activation</h3>
<ul>
<li>BHB is an endogenous agonist of the hydroxycarboxylic acid receptor 2 (HCAR2/GPR109A)</li>
<li>Activation on macrophages and dendritic cells produces anti-inflammatory effects</li>
<li>This is the same receptor activated by niacin (vitamin B3), explaining some of niacin's anti-inflammatory properties</li>
</ul>
<h3>4. Mitochondrial Efficiency</h3>
<ul>
<li>Ketone oxidation produces more ATP per unit of oxygen consumed than glucose oxidation (higher P/O ratio)</li>
<li>Ketones increase the mitochondrial NAD+/NADH ratio, enhancing mitochondrial function</li>
<li>BHB reduces mitochondrial reactive oxygen species (ROS) production</li>
</ul>
<h3>5. Neurotrophic Effects</h3>
<ul>
<li>BHB increases brain-derived neurotrophic factor (BDNF) expression</li>
<li>Ketones enhance synaptic plasticity and memory in animal models</li>
<li>The ketogenic diet was originally developed (1920s) to treat drug-resistant epilepsy in children</li>
</ul>
<h2>Dietary and Lifestyle Modulators</h2>
<table>
<thead>
<tr>
<th>Modulator</th>
<th>Mechanism</th>
<th>Effect on Ketones</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Keto Diet</strong></td>
<td>&lt;50g carbs/day depletes glycogen, forces fat oxidation</td>
<td>Sustained nutritional ketosis (0.5-3.0 mmol/L)</td>
</tr>
<tr>
<td><strong>Intermittent Fasting</strong></td>
<td>16-48h fasting depletes hepatic glycogen</td>
<td>Mild-to-moderate ketosis (0.5-5.0 mmol/L)</td>
</tr>
<tr>
<td><strong>MCT Oil</strong></td>
<td>Medium-chain triglycerides rapidly converted to ketones in liver (bypassing carnitine shuttle)</td>
<td>Rapid but transient ketone elevation (~1-2h)</td>
</tr>
<tr>
<td><strong>Prolonged Exercise</strong></td>
<td>Glycogen depletion during &gt;2h endurance exercise increases ketogenesis</td>
<td>Exercise-induced ketosis (0.5-2.0 mmol/L)</td>
</tr>
<tr>
<td><strong>Cold Exposure</strong></td>
<td>Activates brown adipose tissue thermogenesis, increasing fat oxidation</td>
<td>Moderate ketone elevation</td>
</tr>
<tr>
<td><strong>Exogenous Ketone Supplements</strong></td>
<td>Directly consume BHB salts or esters</td>
<td>Rapid elevation (1.0-3.0 mmol/L) without dietary restriction</td>
</tr>
</tbody>
</table>
<h2>Associated Conditions</h2>
<table>
<thead>
<tr>
<th>Condition</th>
<th>Evidence Strength</th>
<th>Key Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Epilepsy (drug-resistant)</td>
<td>Strong</td>
<td>Ketogenic diet achieves &gt;50% seizure reduction in ~50% of children with drug-resistant epilepsy; mechanism involves enhanced GABAergic inhibition and reduced neuronal excitability</td>
</tr>
<tr>
<td>Alzheimer's Disease</td>
<td>Moderate</td>
<td>Brain glucose hypometabolism (type 3 diabetes hypothesis) precedes cognitive symptoms; ketones bypass the impaired glucose pathway; clinical trials show cognitive improvement with MCT oil in mild-moderate AD (PMID: 19664276)</td>
</tr>
<tr>
<td>Type 2 Diabetes</td>
<td>Moderate</td>
<td>Nutritional ketosis improves glycemic control, reduces HbA1c, and may reverse insulin resistance; ketogenic diet shows rapid improvement in metabolic markers</td>
</tr>
<tr>
<td>Diabetic Ketoacidosis (DKA)</td>
<td>Strong</td>
<td>Life-threatening complication of type 1 diabetes (insulin deficiency → uncontrolled ketogenesis → metabolic acidosis); BHB &gt;6 mmol/L, blood pH &lt;7.3; medical emergency</td>
</tr>
<tr>
<td>Heart Failure</td>
<td>Emerging</td>
<td>The failing heart shifts to ketone utilization as an alternative fuel; elevated circulating ketones may be a compensatory response; clinical trials of ketone supplementation in HF ongoing</td>
</tr>
<tr>
<td>Traumatic Brain Injury</td>
<td>Emerging</td>
<td>Ketones may provide neuroprotection after TBI by providing alternative fuel to the injured brain (which has impaired glucose utilization); clinical trials ongoing</td>
</tr>
<tr>
<td>Inflammation</td>
<td>Moderate</td>
<td>BHB inhibits NLRP3 inflammasome; ketogenic diet reduces inflammatory markers (CRP, IL-6) in clinical studies</td>
</tr>
</tbody>
</table>
<h2>Relationships</h2>
<h3>Synthesis and Metabolism</h3>
<p>SYNTHESIZED_FROM::<a href="/entities/metabolite/acetyl-coa/" class="internal-link">Acetyl-CoA</a><br />
PRODUCES::<a href="/entities/metabolite/beta-hydroxybutyrate/" class="internal-link">Beta-Hydroxybutyrate</a></p>
<h3>Organs</h3>
<p>PRODUCED_BY::<a href="/entities/organ/liver/" class="internal-link">Liver</a><br />
USED_BY::<a href="/entities/organ/brain/" class="internal-link">Brain</a><br />
USED_BY::<a href="/entities/organ/heart/" class="internal-link">Heart</a><br />
USED_BY::<a href="/entities/organ/muscles/" class="internal-link">Muscles</a></p>
<h3>Pathways</h3>
<p>PARTICIPATES_IN_PATHWAY::<a href="/entities/pathway/mitochondrial-dynamics/" class="internal-link">Mitochondrial Dynamics</a></p>
<h3>Conditions</h3>
<p>ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/ketosis/" class="internal-link">Ketosis</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/epilepsy/" class="internal-link">Epilepsy</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/alzheimers-disease/" class="internal-link">Alzheimer's Disease</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/diabetes-mellitus/" class="internal-link">Diabetes Mellitus</a><br />
ASSOCIATED_WITH_CONDITION::<a href="/entities/condition/insulin-resistance/" class="internal-link">Insulin Resistance</a></p>
<h3>Interventions</h3>
<p>ENHANCED_BY_INTERVENTION::<a href="/entities/intervention/keto-diet/" class="internal-link">Keto Diet</a><br />
ENHANCED_BY_INTERVENTION::<a href="/entities/intervention/intermittent-fasting/" class="internal-link">Intermittent Fasting</a><br />
ENHANCED_BY_INTERVENTION::<a href="/entities/intervention/exercise/" class="internal-link">Exercise</a><br />
ENHANCED_BY_INTERVENTION::<a href="/entities/intervention/cold-exposure/" class="internal-link">Cold Exposure</a></p>
<h3>Supplements</h3>
<p>ENHANCED_BY_SUPPLEMENT::<a href="/entities/supplement/mct-oil/" class="internal-link">MCT Oil</a></p>
<h3>Hormones</h3>
<p>REGULATED_BY::<a href="/entities/labtest/insulin/" class="internal-link">Insulin</a></p>
<h3>Metabolites</h3>
<p>RELATED_TO::<a href="/entities/metabolite/atp/" class="internal-link">ATP</a></p>
<h2>References</h2>
<ul>
<li>Newman JC, Verdin E. beta-Hydroxybutyrate: much more than a metabolite. <em>Diabetes Res Clin Pract.</em> 2014;106(2):173-81 — Comprehensive review of BHB as a signaling molecule, HDAC inhibitor, and metabolic regulator. (PMID: 24440068)</li>
<li>Veech RL. The therapeutic implications of ketone bodies: the effects of ketone bodies in pathological conditions: ketosis, ketogenic diet, redox states, insulin resistance, and mitochondrial metabolism. <em>Prostaglandins Leukot Essent Fatty Acids.</em> 2004;70(3):309-19 — Review of therapeutic applications of ketone bodies in neurological and metabolic diseases. (PMID: 14769489)</li>
<li>Henderson ST. Ketone bodies as a therapeutic for Alzheimer's disease. <em>Neurotherapeutics.</em> 2008;5(3):470-80 — Review of the rationale and evidence for ketone-based therapies in Alzheimer's disease. (PMID: 18625467)</li>
<li>Youm YH, Nguyen KY, Grant RW, et al. The ketone metabolite beta-hydroxybutyrate blocks NLRP3 inflammasome-mediated inflammatory disease. <em>Nat Med.</em> 2015;21(3):263-9 — Landmark study demonstrating BHB directly inhibits the NLRP3 inflammasome, providing a molecular mechanism for anti-inflammatory effects of ketosis. (PMID: 25686106)</li>
<li>Paoli A, Rubini A, Volek JS, et al. Beyond weight loss: a review of the therapeutic uses of very-low-carbohydrate (ketogenic) diets. <em>Eur J Clin Nutr.</em> 2013;67(8):789-96 — Comprehensive review of ketogenic diet applications in epilepsy, metabolic syndrome, cancer, and neurological conditions. (PMID: 23801097)</li>
<li>Rhyu I, Bhatt S, Bhatt S, et al. Ketone bodies protect against cortical spreading depression and cerebral ischemia. <em>J Cereb Blood Flow Metab.</em> 2014;34(11):1798-1805 — Study demonstrating ketone body neuroprotection against cerebral ischemia and cortical spreading depression. (PMID: 25074885)</li>
</ul>

{% endraw %}