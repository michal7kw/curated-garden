/**
 * Garden-specific configuration for the Curated Medical Garden.
 *
 * This is the single source of truth for entity types, colors, icons, and
 * feature flags. Templates loop over this config instead of hardcoding types.
 */
module.exports = {
  // Garden identity
  name: 'Medical Knowledge Garden',
  subtitle: 'Explore biomarkers, drugs, supplements, and health insights.',

  // Entity type definitions — order determines display order on homepage
  entityTypes: {
    biomarker:          { icon: '\u{1F9EA}', color: '#22C55E', label: 'Biomarkers',           description: 'Lab values and health indicators' },
    drug:               { icon: '\u{1F48A}', color: '#3B82F6', label: 'Drugs',                 description: 'Pharmaceutical medications' },
    supplement:         { icon: '\u{1F33F}', color: '#A855F7', label: 'Supplements',           description: 'Vitamins, herbs, nutraceuticals' },
    condition:          { icon: '\u{1F3E5}', color: '#F97316', label: 'Conditions',            description: 'Diseases and health conditions' },
    intervention:       { icon: '\u2695\uFE0F', color: '#06B6D4', label: 'Interventions',      description: 'Treatments and lifestyle changes' },
    hormone:            { icon: '\u{1F9EC}', color: '#EC4899', label: 'Hormones',              description: 'Endocrine signaling molecules' },
    protein:            { icon: '\u{1F52C}', color: '#6366F1', label: 'Proteins',              description: 'Enzymes, receptors, signaling' },
    gene:               { icon: '\u{1F9EC}', color: '#84CC16', label: 'Genes',                 description: 'Genetic elements' },
    organ:              { icon: '\u{1FAC0}', color: '#78350F', label: 'Organs',                description: 'Body organs and systems' },
    metabolite:         { icon: '\u2699\uFE0F', color: '#64748B', label: 'Metabolites',        description: 'Metabolic compounds' },
    neurotransmitter:   { icon: '\u26A1', color: '#F43F5E', label: 'Neurotransmitters',        description: 'Neural signaling molecules' },
    cellularcomponent:  { icon: '\u{1F52C}', color: '#14B8A6', label: 'Cellular Components',   description: 'Cell structures' },
    labtest:            { icon: '\u{1F52C}', color: '#0EA5E9', label: 'Lab Tests',             description: 'Laboratory test definitions' },
    labtestpanel:       { icon: '\u{1F4CB}', color: '#4F46E5', label: 'Lab Test Panels',       description: 'Grouped laboratory tests' },
    pathway:            { icon: '\u{1F500}', color: '#10B981', label: 'Pathways',              description: 'Biochemical pathways' },
    phenotype:          { icon: '\u{1F464}', color: '#D946EF', label: 'Phenotypes',            description: 'Observable traits and symptoms' },
    clinicalpattern:    { icon: '\u{1F4CA}', color: '#FB7185', label: 'Clinical Patterns',     description: 'Clinical observation patterns' },
    cognitivefunction:  { icon: '\u{1F9E0}', color: '#8B5CF6', label: 'Cognitive Functions',   description: 'Mental processes and functions' },
    examination:        { icon: '\u{1FA7A}', color: '#0D9488', label: 'Examinations',          description: 'Medical examination procedures' },
    research:           { icon: '\u{1F4DA}', color: '#475569', label: 'Research',              description: 'Research topics and areas' },
    diagram:            { icon: '\u{1F5FA}\uFE0F', color: '#6B7280', label: 'Diagrams',        description: 'Visual maps and schematics' },
  },

  // Default color for unknown entity types
  defaultColor: '#888888',

  // Feature flags
  features: {
    learningPath: false,
  },
};
