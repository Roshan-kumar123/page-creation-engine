import { z } from 'zod'

// ── Block schemas ──────────────────────────────────────────────────────────────

const heroBlockSchema = z.object({
  type: z.literal('hero'),
  props: z.object({
    headline:     z.string().min(1, 'headline is required'),
    accentWord:   z.string().optional(),
    subheadline:  z.string().optional(),
    primaryCTA:   z.object({ label: z.string(), href: z.string() }),
    secondaryCTA: z.object({ label: z.string(), href: z.string() }).optional(),
    trustBadges:  z.array(z.string()).optional(),
  }),
})

const featureCardBlockSchema = z.object({
  type: z.literal('feature_card'),
  props: z.object({
    sectionLabel: z.string().optional(),
    heading:      z.string().min(1, 'heading is required'),
    subheading:   z.string().optional(),
    features: z.array(z.object({
      number:      z.number().optional(),
      icon:        z.string().optional(),
      title:       z.string().min(1),
      description: z.string().min(1),
    })).min(1, 'features must have at least one item'),
  }),
})

const ctaBannerBlockSchema = z.object({
  type: z.literal('cta_banner'),
  props: z.object({
    heading:     z.string().min(1, 'heading is required'),
    subtext:     z.string().optional(),
    buttonLabel: z.string().min(1, 'buttonLabel is required'),
    buttonHref:  z.string().min(1, 'buttonHref is required'),
    variant:     z.enum(['dark', 'brand']).optional(),
  }),
})

const statsRowBlockSchema = z.object({
  type: z.literal('stats_row'),
  props: z.object({
    heading: z.string().optional(),
    stats: z.array(z.object({
      value:       z.string().min(1),
      label:       z.string().min(1),
      description: z.string().optional(),
    })).min(1, 'stats must have at least one item'),
  }),
})

const testimonialBlockSchema = z.object({
  type: z.literal('testimonial'),
  props: z.object({
    heading: z.string().optional(),
    testimonials: z.array(z.object({
      quote:   z.string().min(1),
      author:  z.string().min(1),
      title:   z.string().optional(),
      company: z.string().optional(),
    })).min(1, 'testimonials must have at least one item'),
  }),
})

const faqAccordionBlockSchema = z.object({
  type: z.literal('faq_accordion'),
  props: z.object({
    heading: z.string().min(1, 'heading is required'),
    faqs: z.array(z.object({
      question: z.string().min(1),
      answer:   z.string().min(1),
    })).min(1, 'faqs must have at least one item'),
  }),
})

const richDataGridBlockSchema = z.object({
  type: z.literal('rich_data_grid'),
  props: z.object({
    heading: z.string().min(1, 'heading is required'),
    caption: z.string().optional(),
    columns: z.array(z.string()).min(1, 'columns must have at least one entry'),
    rows:    z.array(z.array(z.string())).min(1, 'rows must have at least one entry'),
  }),
})

// ── Discriminated union over all block types ───────────────────────────────────

const blockSchema = z.discriminatedUnion('type', [
  heroBlockSchema,
  featureCardBlockSchema,
  ctaBannerBlockSchema,
  statsRowBlockSchema,
  testimonialBlockSchema,
  faqAccordionBlockSchema,
  richDataGridBlockSchema,
])

// ── Root page schema ───────────────────────────────────────────────────────────

const pageMetadataSchema = z.object({
  title:    z.string().min(1, 'title is required'),
  slug:     z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase alphanumeric with hyphens'),
  pageType: z.enum(['landing', 'blog', 'service', 'resource']),
})

export const pageSchema = z.object({
  page_metadata: pageMetadataSchema,
  blocks:        z.array(blockSchema).min(1, 'at least one block is required'),
})

// ── Public validator ───────────────────────────────────────────────────────────

export function validatePage(data) {
  return pageSchema.safeParse(data)
}
