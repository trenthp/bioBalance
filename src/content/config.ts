import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    metaDescription: z.string(),
    heroSubtitle: z.string(),
    sectionTag: z.string(),
    sectionTitle: z.string(),
    sectionTitleHighlight: z.string(),
    intro: z.array(z.string()),
    credentials: z.array(z.string()),
    symptomsTitle: z.string(),
    symptoms: z.array(z.string()),
    benefitsTag: z.string(),
    benefitsTitle: z.string(),
    benefitsTitleHighlight: z.string(),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    ctaTitle: z.string(),
    ctaTitleHighlight: z.string(),
    ctaDescription: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    authorName: z.string(),
    authorInitials: z.string(),
    authorDetail: z.string(),
    rating: z.number().min(1).max(5),
    order: z.number(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    role: z.string(),
    credentials: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  services,
  testimonials,
  team,
};
