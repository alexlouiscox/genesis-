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
  intro: [
    "I graduated from the University of Bath in 2026 with a 2:1 in Accounting & Management. Alongside my degree, I spent four years on renewable energy installation sites, which taught me how a business actually runs, from the job site through to the numbers.",
    "I'm at my best in the detail: researching, organising and analysing data to find where value is being created or lost, then communicating it clearly to the people who need it.",
    "I'm now looking for my first role where I can put that to work, whether that's analysing companies as investments, helping clients understand and improve their businesses, or supporting financial decisions from the inside.",
  ],
  experience: {
    kinectid: {
      heading:
        "Kinectid | Junior Renewable Energy Engineer | London | Sep 2022 – Aug 2026",
      stats: [
        { value: "40+", label: "installations" },
        { value: "20+", label: "jobs analysed" },
      ],
      bullets: [
        {
          label: "On site:",
          text: "Worked across 40+ solar PV and air source heat pump installations for commercial and residential clients, including the projects shown above, and later specialised in solar.",
        },
        {
          label: "Operations:",
          text: "Briefly managed grid connection (DNO) and MCS certification applications, and helped streamline how engineers report on-site data, improving the accuracy and speed of submissions.",
        },
        {
          label: "Internal finance project:",
          text: "Investigating the sources of the company's losses. This involves designing sampling techniques to match on-site receipts against what was quoted across 20+ jobs, and building methods to estimate missing data where records have gaps, drawing on first-hand knowledge of how engineers work on site.",
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
        { value: "20", label: "high-volume accounts flagged" },
      ],
      bullets: [
        {
          label: "Data & segmentation:",
          text: "Extracted account-level ordering data from the company's CRM into Excel and applied a pre-defined segmentation framework, using structured filtering to compare what butchers, hotels and farmers' markets were ordering, and where.",
        },
        {
          label: "Recommendations:",
          text: "Used these ordering patterns to identify the product ranges performing best with similar businesses elsewhere, and proposed trial-stock strategies to introduce those proven ranges to high-volume accounts not yet stocking them.",
        },
        {
          label: "Retention:",
          text: "Identified 20 previously high-volume accounts that had stopped ordering, flagged them for follow-up, and presented findings and recommendations to the sales and marketing team.",
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
      title: "Business and the Natural Environment",
      body: "An evaluation of whether National Grid's operations, governance and strategy reflect genuine sustainability.",
      achievement: "3rd place, PRME Undergraduate Essay Competition",
      result: "75%",
    },
    {
      title: "Entrepreneurial Finance & Intellectual Property",
      body: "A full venture capital due diligence report on Spring Broth Ltd, a live Crowdcube investment case.",
      achievement: "86%",
      result: "Referee: Dimo Dimov",
    },
    {
      title: "Dissertation",
      body: "Does BYD's competitive advantage transfer to the German market? Answered using a weighted composite index.",
      achievement: "71%",
      result: undefined,
    },
  ],
  study: {
    paragraph:
      "Ongoing study of value investing in the tradition of Benjamin Graham and Warren Buffett.",
    bullets: [
      {
        label: "Built an automated Excel stock screener",
        text: "to filter listed companies against value-investing criteria.",
      },
      {
        label: "Use AI to condense lengthy company filings",
        text: "into focused briefs, built around the principles my value-investing study has shown matter most.",
      },
    ],
    skills:
      "Excel · Google Sheets · Sage Accounting · AI prompt engineering (certified, 2024)",
    interests: "Tennis · Boxing · Water-skiing",
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
