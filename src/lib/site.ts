/**
 * Site copy and contact placeholders.
 * Copy is word-for-word from the brief — do not rewrite.
 *
 * TODO: set `email` (mailto) and `linkedin` (profile URL) when ready.
 */

export const site = {
  name: "Alex Cox",
  slogan: "Investment · Consulting · Finance",
  email: undefined as string | undefined, // TODO
  linkedin: undefined as string | undefined, // TODO
  cvHref: "/alex-cox-cv.pdf",
  hero: {
    videoSrc: "/hero.mp4",
    posterSrc: "/hero-poster.jpg",
  },
  headings: {
    intro: "Introduction",
    experience: "Professional experience",
    education: "Standout education achievements",
    study: "Self-directed study",
  },
  intro: [
    "Two very different paths shape how I look at a business. At the University of Bath, where I earned a 2:1 in Accounting & Management, I learned to prepare and read financial statements, and to judge real businesses against a different set of criteria in each module. But understanding a business on paper is only half the picture. Working inside businesses, from renewable energy installations to a specialist food supplier, showed me the other half: the real costs, pressures and trade-offs, and how managers work through them, learning from what worked and what didn't.",
    "I'm at my best in the detail: researching, organising and analysing data to get beneath the surface of a business, turning my findings into clear, practical insights for the people making the decisions.",
    "I'm now looking for my first role where I can put that to work, whether that's analysing companies as investments, helping clients understand and improve their businesses, or supporting financial decisions from the inside.",
  ],
  experience: {
    kinectid: {
      heading:
        "Kinectid | Junior Renewable Energy Engineer | London | Sep 2022 – Aug 2026",
      stats: [{ value: "40+", label: "installations" }],
      bullets: [
        {
          label: "On site:",
          text: "Worked across 40+ solar PV and air source heat pump installations for commercial and residential clients, including the projects shown above.",
        },
        {
          label: "Operations:",
          text: "Briefly managed grid connection (DNO) and MCS certification applications, and helped streamline how engineers report on-site data, improving the accuracy and speed of submissions.",
        },
        {
          label: "Internal finance project:",
          text: "Investigating the sources of the company's losses. This involves designing sampling techniques to match on-site receipts against what was quoted across jobs. This task also required me to build methods in order to estimate missing data, drawing on first-hand knowledge of how engineers work on site.",
        },
      ],
      tags: [
        "Data reconciliation",
        "Cost analysis",
        "Process improvement",
        "Commercial awareness",
      ],
    },
    olive: {
      heading:
        "The Real Olive Company | Sales & Data Analyst Intern | Bristol | July 2025",
      stats: [
        { value: "150+", label: "accounts analysed" },
        { value: "30", label: "high-volume accounts targeted" },
      ],
      bullets: [
        {
          label: "Data & segmentation:",
          text: "Extracted ordering data from the company's CRM into Excel and applied a pre-defined segmentation framework to investigate which products accounts with different profiles were ordering, and why.",
        },
        {
          label: "Recommendations:",
          text: "Used these ordering patterns to identify the product ranges performing best with similar businesses elsewhere, and proposed trial-stock strategies to introduce those proven ranges to high-volume accounts not yet stocking them.",
        },
        {
          label: "Outcome:",
          text: "Identified 30 high-volume accounts for the sales team to contact, each with a tailored recommendation. Some had stopped ordering altogether, while others were strong candidates for a trial-stock strategy. Presented findings to the sales and marketing team in a weekly meeting.",
        },
      ],
      tags: [
        "CRM data extraction",
        "Excel",
        "Customer segmentation",
        "Sales analysis",
        "Presenting findings",
      ],
    },
    cloudcustom: {
      heading: "Cloudcustom | Trainee Consultant | Remote | Aug – Sep 2023",
      summary:
        "A B2B lead generation agency, booking sales meetings on behalf of tech and marketing clients.",
      bullets: [
        "Trained in structured outbound calling techniques, including scripting and tonality.",
        "Hit my targets for meetings booked for the CEO through targeted outreach and lead qualification.",
      ],
    },
  },
  education: [
    {
      title: "Entrepreneurial Finance & Intellectual Property",
      body: "A full venture capital due diligence report on Spring Broth Ltd, a live Crowdcube investment case. Report included: market sizing, valuation modelling, cap table analysis and return scenario forecasting. Referee: Dimo Dimov",
      achievement: "86%",
      result: undefined,
    },
    {
      title: "Business and the Natural Environment",
      body: "Assessed whether National Grid is close to achieving genuine sustainability, focusing on organisational tools, management practices and strategic choices.",
      achievement: "3rd place, PRME Undergraduate Essay Competition",
      result: "75%",
    },
    {
      title: "Dissertation",
      body: "Focused on whether BYD's incumbent competitive advantage transfers to the German market, including the construction of a weighted composite index, with consideration to macroeconomic themes such as trade tariffs and industrial policy.",
      achievement: "71%",
      result: undefined,
    },
  ],
  study: {
    paragraph:
      "Ongoing study of value investing in the tradition of Benjamin Graham and Warren Buffett.",
    bullets: [
      "Built an automated Excel stock screener to filter listed companies against value-investing criteria.",
      "Built an AI model to condense lengthy company filings into focused briefs, built around the principles my value-investing study has shown matter most.",
    ],
  },
  readingList: {
    label: "Reading list",
    titles: [
      "The Intelligent Investor (Graham)",
      "Warren Buffett and the Interpretation of Financial Statements (Mary Buffett & David Clark)",
      "The Essays of Warren Buffett (Buffett & Cunningham)",
    ],
  },
} as const;
