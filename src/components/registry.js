import { lazy } from 'react'

const registry = {
  hero:           lazy(() => import('./blocks/HeroBlock.jsx')),
  feature_card:   lazy(() => import('./blocks/FeatureCardBlock.jsx')),
  cta_banner:     lazy(() => import('./blocks/CTABannerBlock.jsx')),
  stats_row:      lazy(() => import('./blocks/StatsRowBlock.jsx')),
  testimonial:    lazy(() => import('./blocks/TestimonialBlock.jsx')),
  faq_accordion:  lazy(() => import('./blocks/FaqAccordionBlock.jsx')),
  rich_data_grid: lazy(() => import('./blocks/RichDataGridBlock.jsx')),
}

export default registry
