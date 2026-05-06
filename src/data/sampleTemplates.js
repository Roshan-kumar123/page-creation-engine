export const sampleTemplates = {
  landing: {
    label: 'Landing Page',
    json: {
      page_metadata: {
        title: 'Whilter.ai — AI-Powered Growth Platform',
        slug: 'landing',
        pageType: 'landing',
      },
      blocks: [
        {
          type: 'hero',
          props: {
            headline: 'Turn JSON into production pages instantly.',
            accentWord: 'instantly',
            subheadline: 'Whilter.ai\'s Page Creation Engine renders validated, themed, fully responsive pages from a single JSON file. No backend. No CMS. No waiting.',
            primaryCTA: { label: 'Try Live Demo', href: '/demo' },
            secondaryCTA: { label: 'Read the Docs', href: '#faq' },
            trustBadges: ['Zero backend required', 'Zod-validated schemas', '3 design systems built in'],
          },
        },
        {
          type: 'stats_row',
          props: {
            heading: 'Why teams choose Whilter.ai',
            stats: [
              { value: '10x', label: 'Faster Pages', description: 'vs. a traditional CMS workflow' },
              { value: '7', label: 'Block Types', description: 'Hero, Cards, FAQ, Table, Testimonials, and more' },
              { value: '0', label: 'API Calls', description: 'Fully static — serve from any CDN' },
              { value: '100%', label: 'Schema Coverage', description: 'Every field validated before render' },
            ],
          },
        },
        {
          type: 'feature_card',
          props: {
            sectionLabel: 'Core Capabilities',
            heading: 'Everything you need. Nothing you don\'t.',
            subheading: 'A minimal, powerful architecture that scales from a single landing page to hundreds of routes.',
            features: [
              { number: 1, icon: '📋', title: 'JSON Schema', description: 'page_metadata + a blocks array. That\'s the entire API surface.' },
              { number: 2, icon: '✅', title: 'Zod Validation', description: 'Discriminated union schemas enforce correct props per block type at runtime.' },
              { number: 3, icon: '⚡', title: 'Lazy Registry', description: 'React.lazy() per block — only download what the page actually uses.' },
              { number: 4, icon: '🎨', title: 'Theme Engine', description: 'CSS custom properties swap the entire design system in milliseconds.' },
            ],
          },
        },
        {
          type: 'cta_banner',
          props: {
            heading: 'Ready to ship your first JSON page?',
            subtext: 'Add a JSON file, navigate to the slug, and your page is live. No configuration required.',
            buttonLabel: 'Open Live Demo',
            buttonHref: '/demo',
            variant: 'brand',
          },
        },
      ],
    },
  },

  service: {
    label: 'Service Page',
    json: {
      page_metadata: {
        title: 'Enterprise Growth Services — Whilter.ai',
        slug: 'services',
        pageType: 'service',
      },
      blocks: [
        {
          type: 'hero',
          props: {
            headline: 'Enterprise growth, delivered at scale.',
            accentWord: 'scale',
            subheadline: 'Whilter.ai combines AI-augmented operations with senior human talent to run your marketing, content, and demand generation — end to end.',
            primaryCTA: { label: 'Book a Strategy Call', href: '#contact' },
            trustBadges: ['No long-term contracts', 'Dedicated account team', 'Weekly reporting'],
          },
        },
        {
          type: 'feature_card',
          props: {
            sectionLabel: 'Our Services',
            heading: 'A full growth stack under one roof.',
            subheading: 'From awareness to pipeline — every service is staffed by specialists and accelerated by AI.',
            features: [
              { number: 1, icon: '✍️', title: 'Content Production', description: 'SEO-optimised blog posts, case studies, landing pages, and social content — delivered weekly.' },
              { number: 2, icon: '📈', title: 'Paid Acquisition', description: 'Google, Meta, and LinkedIn campaigns managed by certified specialists who iterate on data, not gut feel.' },
              { number: 3, icon: '🔍', title: 'Organic SEO', description: 'Technical audits, keyword strategy, link building, and on-page optimisation — everything to own the SERP.' },
              { number: 4, icon: '🤖', title: 'AI Operations Layer', description: 'Research, first drafts, and performance analysis handled by AI — your team only reviews the output that matters.' },
            ],
          },
        },
        {
          type: 'rich_data_grid',
          props: {
            heading: 'Service tiers at a glance',
            caption: 'All tiers include a dedicated account manager and weekly performance reporting.',
            columns: ['Feature', 'Starter', 'Growth', 'Enterprise'],
            rows: [
              ['Blog posts / month',         '4',             '12',             'Unlimited'],
              ['Landing pages / quarter',    '1',             '4',              'Unlimited'],
              ['Paid media management',      '❌',            '✅ up to $10k',  '✅ unlimited'],
              ['SEO audit & strategy',       '✅ Quarterly',  '✅ Monthly',     '✅ Ongoing'],
              ['AI operations layer',        '✅',            '✅',             '✅'],
              ['Dedicated account manager',  '❌',            '✅',             '✅'],
              ['SLA response time',          '48 hours',      '24 hours',       '4 hours'],
            ],
          },
        },
        {
          type: 'testimonial',
          props: {
            heading: 'Trusted by growth leaders',
            testimonials: [
              {
                quote: 'We went from 3 blog posts a month to 20 high-quality, SEO-driven articles. Organic traffic grew 340% in four months.',
                author: 'Rohan Kapoor',
                title: 'VP Marketing',
                company: 'Finstack',
              },
              {
                quote: 'The AI operations layer is brilliant. You get the speed of automation with the judgement of an experienced marketer. Game-changing.',
                author: 'Aisha Nkrumah',
                title: 'Head of Demand Gen',
                company: 'Loop Commerce',
              },
              {
                quote: 'Whilter.ai delivered in two weeks what our previous agency couldn\'t do in three months — at half the cost.',
                author: 'Marcus Chen',
                title: 'Co-founder',
                company: 'Orbit SaaS',
              },
            ],
          },
        },
        {
          type: 'cta_banner',
          props: {
            heading: 'Let\'s build your growth engine.',
            subtext: 'Book a free 30-minute strategy call. We\'ll map out exactly what your growth motion needs.',
            buttonLabel: 'Book a Free Call',
            buttonHref: '#contact',
            variant: 'dark',
          },
        },
      ],
    },
  },

  blog: {
    label: 'Blog Hub',
    json: {
      page_metadata: {
        title: 'The Whilter.ai Growth Blog',
        slug: 'blog',
        pageType: 'blog',
      },
      blocks: [
        {
          type: 'hero',
          props: {
            headline: 'The Growth Blog by Whilter.ai',
            accentWord: 'Growth',
            subheadline: 'Tactical playbooks, AI operations guides, and SEO deep-dives — written by practitioners who run growth for 500+ teams.',
            primaryCTA: { label: 'Browse All Posts', href: '#posts' },
            trustBadges: ['Published weekly', 'No fluff, only tactics', 'Free forever'],
          },
        },
        {
          type: 'feature_card',
          props: {
            sectionLabel: 'Content Pillars',
            heading: 'What we write about.',
            subheading: 'Everything on this blog is drawn from real client campaigns — not theory.',
            features: [
              { number: 1, icon: '🤖', title: 'AI in Marketing', description: 'How to use AI to 10x content output without sacrificing quality or brand voice.' },
              { number: 2, icon: '🔍', title: 'SEO Playbooks', description: 'Step-by-step guides for keyword research, technical SEO, and link acquisition that actually moves rankings.' },
              { number: 3, icon: '📈', title: 'Paid Acquisition', description: 'Campaign structures, bidding strategies, and creative frameworks for Google, Meta, and LinkedIn.' },
              { number: 4, icon: '📊', title: 'Growth Analytics', description: 'Attribution models, north-star metrics, and dashboards that tell you what\'s actually driving revenue.' },
            ],
          },
        },
        {
          type: 'rich_data_grid',
          props: {
            heading: 'Most-read posts this month',
            caption: 'Ranked by unique readers. Updated every Monday.',
            columns: ['Post Title', 'Category', 'Read Time', 'Published'],
            rows: [
              ['How We Scaled to 20 Blog Posts/Month with AI',         'AI in Marketing',    '8 min',  'Apr 2026'],
              ['The SEO Keyword Framework That Drives 340% Traffic',   'SEO Playbooks',      '12 min', 'Mar 2026'],
              ['Google Ads in 2026: What Still Works (and What Died)', 'Paid Acquisition',   '10 min', 'Mar 2026'],
              ['Attribution Without Third-Party Cookies',              'Growth Analytics',   '15 min', 'Feb 2026'],
              ['Building a Content Engine: Month 1 Post-Mortem',       'AI in Marketing',   '7 min',  'Feb 2026'],
            ],
          },
        },
        {
          type: 'faq_accordion',
          props: {
            heading: 'About the blog',
            faqs: [
              {
                question: 'Who writes for the Whilter.ai blog?',
                answer: 'Every post is written or reviewed by a senior practitioner actively running campaigns for Whilter.ai clients. We do not publish guest posts or AI-generated content without human editorial review.',
              },
              {
                question: 'How often do you publish?',
                answer: 'We publish 4-5 long-form posts per month. Shorter tactical updates go out weekly in our newsletter. Subscribe below to get them in your inbox.',
              },
              {
                question: 'Can I republish or cite your content?',
                answer: 'Yes, with attribution. Include a link back to the original post and credit Whilter.ai. Reach out at content@whilter.ai if you need a formal license for commercial republication.',
              },
            ],
          },
        },
        {
          type: 'cta_banner',
          props: {
            heading: 'Get tactics in your inbox every week.',
            subtext: 'Join 8,000+ growth practitioners who read the Whilter.ai newsletter.',
            buttonLabel: 'Subscribe Free',
            buttonHref: '#subscribe',
            variant: 'brand',
          },
        },
      ],
    },
  },

  ecommerce: {
    label: 'E-commerce Product',
    json: {
      page_metadata: {
        title: 'Aria Pro Noise-Cancelling Headphones — Whilter Store',
        slug: 'aria-pro',
        pageType: 'landing',
      },
      blocks: [
        {
          type: 'hero',
          props: {
            headline: 'Silence everything. Hear what matters.',
            accentWord: 'matters',
            subheadline: 'Aria Pro delivers 40-hour battery life, class-leading ANC, and studio-grade audio in a frame that weighs just 248g. Professional-grade listening, redefined.',
            primaryCTA: { label: 'Buy Now — $299', href: '#buy' },
            secondaryCTA: { label: 'Compare Models', href: '#specs' },
            trustBadges: ['Free 2-day shipping', '60-day returns', '2-year warranty'],
          },
        },
        {
          type: 'stats_row',
          props: {
            stats: [
              { value: '40h',   label: 'Battery Life',    description: 'On a single charge, ANC on' },
              { value: '−42dB', label: 'Noise Reduction', description: 'Industry-leading ANC depth' },
              { value: '248g',  label: 'Weight',          description: 'Lighter than a can of soda' },
              { value: '4.9★',  label: 'Customer Rating', description: 'Based on 6,200+ reviews' },
            ],
          },
        },
        {
          type: 'feature_card',
          props: {
            sectionLabel: 'Why Aria Pro',
            heading: 'Engineered for people who take sound seriously.',
            subheading: 'Every design decision was made to disappear — so you only notice the music.',
            features: [
              { number: 1, icon: '🎧', title: 'Adaptive ANC',        description: '8-microphone array continuously samples ambient noise and adjusts cancellation 100× per second.' },
              { number: 2, icon: '🔋', title: '40-Hour Battery',     description: 'Five-minute quick charge gives 3 hours of playback. Full charge in 90 minutes via USB-C.' },
              { number: 3, icon: '📡', title: 'Multipoint Bluetooth', description: 'Pair to two devices simultaneously. Switch between laptop and phone in under a second.' },
              { number: 4, icon: '🎙️', title: 'Call Clarity',        description: 'Beamforming mics isolate your voice and suppress wind and background noise during calls.' },
            ],
          },
        },
        {
          type: 'rich_data_grid',
          props: {
            heading: 'Technical Specifications',
            caption: 'All measurements taken in independent lab conditions. Battery life varies with ANC and volume settings.',
            columns: ['Specification', 'Aria Pro', 'Aria Studio', 'Aria Lite'],
            rows: [
              ['Driver size',           '40mm custom beryllium', '40mm titanium',  '32mm dynamic'],
              ['Frequency response',    '4Hz – 40kHz',           '10Hz – 30kHz',   '20Hz – 20kHz'],
              ['ANC depth',             '−42 dB',                '−36 dB',         '−24 dB'],
              ['Battery (ANC on)',       '40 hours',              '30 hours',       '22 hours'],
              ['Bluetooth version',     '5.3 Multipoint',        '5.2 Multipoint', '5.1 Single'],
              ['Weight',                '248g',                  '265g',           '210g'],
              ['Hi-Res Audio cert.',    '✅ LDAC + aptX HD',     '✅ LDAC',        '❌'],
              ['Price',                 '$299',                  '$219',           '$149'],
            ],
          },
        },
        {
          type: 'faq_accordion',
          props: {
            heading: 'Product Questions',
            faqs: [
              {
                question: 'Does Aria Pro work wired as well as wireless?',
                answer: 'Yes. A 3.5mm analog cable is included for wired listening when Bluetooth is unavailable or you want zero latency for studio work. ANC still functions in wired mode.',
              },
              {
                question: 'Can I use Aria Pro while it is charging?',
                answer: 'Yes — USB-C charging does not interrupt playback. The quick-charge feature also means a 5-minute charge gives you approximately 3 hours of listening.',
              },
              {
                question: 'What is the return and warranty policy?',
                answer: 'We offer a 60-day no-questions-asked return window and a 2-year manufacturer warranty covering all hardware defects. International warranty coverage available in 42 countries.',
              },
            ],
          },
        },
        {
          type: 'testimonial',
          props: {
            heading: 'What audiophiles are saying',
            testimonials: [
              {
                quote: 'I have owned every flagship headphone for the past decade. Aria Pro is the first one where I forgot I was wearing noise cancellation — it just sounds natural.',
                author: 'James Okonkwo',
                title: 'Audio Engineer',
                company: 'Abbey Road Studios',
              },
              {
                quote: 'The battery life claim is real. I tracked 41.5 hours on my first charge with ANC at max. At this price, there is genuinely nothing else I would recommend.',
                author: 'Mei Lin',
                title: 'Tech Reviewer',
                company: 'SoundStage+',
              },
              {
                quote: 'I travel 200 days a year. Aria Pro has replaced three separate products for me: noise cancellation, office headset, and in-flight headphones. One device does it all.',
                author: 'Ravi Shankar',
                title: 'Principal Consultant',
                company: 'McKinsey',
              },
            ],
          },
        },
        {
          type: 'cta_banner',
          props: {
            heading: 'Free shipping. 60-day returns. 2-year warranty.',
            subtext: 'Order today and receive your Aria Pro within 2 business days. Not happy? Return it for a full refund, no questions asked.',
            buttonLabel: 'Buy Aria Pro — $299',
            buttonHref: '#buy',
            variant: 'brand',
          },
        },
      ],
    },
  },

  helpcenter: {
    label: 'Help Center',
    json: {
      page_metadata: {
        title: 'Whilter.ai Help Center',
        slug: 'help',
        pageType: 'resource',
      },
      blocks: [
        {
          type: 'hero',
          props: {
            headline: 'How can we help you today?',
            accentWord: 'help',
            subheadline: 'Browse the categories below, or search for any topic. Most answers are under 2 minutes to read. Our support team is available 24/7 for anything you cannot find here.',
            primaryCTA: { label: 'Contact Support', href: '#contact' },
            secondaryCTA: { label: 'Browse All Articles', href: '#categories' },
            trustBadges: ['2-min average response', '98% satisfaction rate', 'Available 24/7'],
          },
        },
        {
          type: 'feature_card',
          props: {
            sectionLabel: 'Browse by Category',
            heading: 'Find answers fast.',
            subheading: 'Every article is written and maintained by our technical support team — not AI-generated boilerplate.',
            features: [
              { number: 1, icon: '🚀', title: 'Getting Started',    description: 'Account setup, onboarding checklist, and your first page in under 5 minutes.' },
              { number: 2, icon: '📄', title: 'JSON Schema Guide',  description: 'Full reference for page_metadata, every block type, and all available props with examples.' },
              { number: 3, icon: '🎨', title: 'Theme Engine',       description: 'How to create custom themes, override CSS variables, and extend the design system.' },
              { number: 4, icon: '🔌', title: 'Integrations',       description: 'Connect to Zapier, webhooks, your CDN, and CI/CD pipelines for automated deployments.' },
              { number: 5, icon: '🔒', title: 'Security & Privacy', description: 'Data handling policies, GDPR compliance, SSO setup, and API token management.' },
              { number: 6, icon: '💳', title: 'Billing & Plans',    description: 'Invoice history, seat management, plan upgrades, and cancellation policy.' },
            ],
          },
        },
        {
          type: 'faq_accordion',
          props: {
            heading: 'Top Questions',
            faqs: [
              {
                question: 'How do I add a new page to the engine?',
                answer: 'Create a file at src/data/pages/your-slug.json following the Whilter.ai schema. Navigate to /your-slug in your browser — the catch-all router picks it up automatically. No router changes or redeploys needed.',
              },
              {
                question: 'What block types are available out of the box?',
                answer: 'The engine ships with seven blocks: hero, feature_card, stats_row, testimonial, cta_banner, faq_accordion, and rich_data_grid. Adding a new block type takes three steps: create the JSX component, add its Zod schema, and register it in registry.js.',
              },
              {
                question: 'Can I use custom fonts and colours?',
                answer: 'Yes. The Theme Engine uses CSS custom properties on document.documentElement. Add a new entry to themes.js with your font-family, colour palette, and border-radius values. The change applies to every block instantly — no component code changes needed.',
              },
              {
                question: 'Is the engine production-ready for enterprise deployments?',
                answer: 'Yes. npm run build produces a fully static dist/ directory deployable to any CDN — Vercel, Netlify, CloudFront, or your own S3 bucket. Each block is a separate async chunk, so pages only load the components they use. Zod validation runs before any block renders, so malformed JSON cannot reach the UI.',
              },
              {
                question: 'How do I contact support if I cannot find my answer here?',
                answer: 'Click "Contact Support" at the top of this page or email support@whilter.ai. Enterprise customers on the Growth or Enterprise tier receive a dedicated Slack channel with a 4-hour SLA.',
              },
              {
                question: 'Do you offer white-label or custom engine deployments?',
                answer: 'Yes — contact sales@whilter.ai for enterprise licensing. We support fully white-labelled deployments with custom block registries, proprietary design systems, and source-code delivery.',
              },
            ],
          },
        },
        {
          type: 'rich_data_grid',
          props: {
            heading: 'Support SLAs by plan',
            caption: 'Response times measured from first contact. Live chat and phone support available on Growth and Enterprise plans.',
            columns: ['Support Channel', 'Starter', 'Growth', 'Enterprise'],
            rows: [
              ['Help Center access',   '✅ Full',      '✅ Full',         '✅ Full'],
              ['Email support',        '48hr response', '24hr response',  '4hr response'],
              ['Live chat',            '❌',            '✅ Business hrs', '✅ 24/7'],
              ['Phone support',        '❌',            '❌',             '✅ Dedicated line'],
              ['Dedicated Slack',      '❌',            '❌',             '✅ Included'],
              ['Onboarding session',   '❌',            '✅ 1 session',   '✅ Unlimited'],
            ],
          },
        },
        {
          type: 'cta_banner',
          props: {
            heading: 'Still need help?',
            subtext: 'Our support team is online right now. Most tickets are resolved within one business hour on Growth and Enterprise plans.',
            buttonLabel: 'Contact Support',
            buttonHref: '#contact',
            variant: 'dark',
          },
        },
      ],
    },
  },
}

export const templateOptions = [
  { value: '',           label: '— Load Template —' },
  { value: 'landing',    label: 'Landing Page' },
  { value: 'service',    label: 'Service Page' },
  { value: 'blog',       label: 'Blog Hub' },
  { value: 'ecommerce',  label: 'E-commerce Product' },
  { value: 'helpcenter', label: 'Help Center' },
]
