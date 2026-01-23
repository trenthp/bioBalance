import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "services",
        label: "Services",
        path: "src/content/services",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "shortTitle",
            label: "Short Title (for navigation)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Meta Description (SEO)",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "sectionTag",
            label: "Section Tag",
            required: true,
          },
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "sectionTitleHighlight",
            label: "Section Title Highlight",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Introduction Paragraphs",
            list: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "credentials",
            label: "Credentials/Features",
            list: true,
          },
          {
            type: "string",
            name: "symptomsTitle",
            label: "Symptoms Section Title",
            required: true,
          },
          {
            type: "string",
            name: "symptoms",
            label: "Symptoms List",
            list: true,
          },
          {
            type: "string",
            name: "benefitsTag",
            label: "Benefits Section Tag",
            required: true,
          },
          {
            type: "string",
            name: "benefitsTitle",
            label: "Benefits Title",
            required: true,
          },
          {
            type: "string",
            name: "benefitsTitleHighlight",
            label: "Benefits Title Highlight",
            required: true,
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "ctaTitle",
            label: "CTA Title",
            required: true,
          },
          {
            type: "string",
            name: "ctaTitleHighlight",
            label: "CTA Title Highlight",
            required: true,
          },
          {
            type: "string",
            name: "ctaDescription",
            label: "CTA Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "testimonials",
        label: "Testimonials",
        path: "src/content/testimonials",
        format: "md",
        fields: [
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "authorName",
            label: "Author Name",
            required: true,
          },
          {
            type: "string",
            name: "authorInitials",
            label: "Author Initials",
            required: true,
          },
          {
            type: "string",
            name: "authorDetail",
            label: "Author Detail (e.g., 'BHRT Patient, 18 months')",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
          },
        ],
      },
      {
        name: "team",
        label: "Team Members",
        path: "src/content/team",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
          },
          {
            type: "string",
            name: "credentials",
            label: "Credentials",
            list: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Bio",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "src/data",
        format: "json",
        match: {
          include: "settings",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "string",
            name: "siteTagline",
            label: "Site Tagline",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description (SEO)",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
            required: true,
          },
          {
            type: "string",
            name: "fax",
            label: "Fax Number",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "telemedicineNote",
            label: "Telemedicine Note",
          },
          {
            type: "string",
            name: "hours",
            label: "Office Hours",
            required: true,
          },
          {
            type: "string",
            name: "statesServed",
            label: "States Served (full names)",
            list: true,
          },
          {
            type: "string",
            name: "statesServedAbbr",
            label: "States Served (abbreviations)",
            list: true,
          },
          {
            type: "number",
            name: "year",
            label: "Copyright Year",
            required: true,
          },
          {
            type: "string",
            name: "disclaimer",
            label: "Disclaimer Text",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "homepage",
        label: "Homepage",
        path: "src/data",
        format: "json",
        match: {
          include: "homepage",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight (gradient text)" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimary", label: "Primary Button Text" },
              { type: "string", name: "ctaSecondary", label: "Secondary Button Text" },
            ],
          },
          {
            type: "object",
            name: "painPoints",
            label: "Pain Points Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "cta", label: "CTA Text" },
              { type: "string", name: "ctaButton", label: "CTA Button Text" },
              {
                type: "object",
                name: "items",
                label: "Pain Point Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "approach",
            label: "Approach Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "lead", label: "Lead Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "process",
            label: "Process Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "description", label: "Description" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "number", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              { type: "string", name: "credentials", label: "Credentials", list: true },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "button", label: "Button Text" },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Section",
            fields: [
              { type: "string", name: "tag", label: "Section Tag" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "titleHighlight", label: "Title Highlight" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
    ],
  },
});
