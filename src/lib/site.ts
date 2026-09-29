/**
 * Site copy and contact.
 */

export const site = {
  name: "Alex Cox",
  slogan: "Investment · Consulting · Finance",
  email: "alex.louis.cox@gmail.com",
  emailHref: "mailto:alex.louis.cox@gmail.com",
  // Public profile URL — not linkedin.com/feed/
  linkedin: "https://www.linkedin.com/in/alexander-cox-058597338/",
  downloadsHref: "/downloads",
  downloads: [
    {
      label: "Entrepreneurial Finance & Intellectual Property",
      href: "/downloads/entrepreneurial-finance-report.pdf",
      fileName: "Entrepreneurial-Finance-Intellectual-Property-Report.pdf",
    },
    {
      label: "Business and the Natural Environment",
      href: "/downloads/business-and-the-natural-environment.pdf",
      fileName: "Business-and-the-Natural-Environment.pdf",
    },
    {
      label: "Dissertation",
      href: "/downloads/dissertation.pdf",
      fileName: "Dissertation.pdf",
    },
  ],
  hero: {
    videoSrc: "/hero.mp4",
    posterSrc: "/hero-poster.jpg",
  },
  headings: {
    intro: "About me",
    experience: "Professional experience",
    education: "Standout education achievements",
    study: "Self-directed study",
  },
  educationNote: "Full copies of the report, essay and dissertation are available to",
  intro: [
    "My studies and my work have both been driven by the same question: how do businesses really work? At the University of Bath, where I earned a 2:1 in Accounting & Management, I learned to prepare and read financial statements, and to judge real businesses against a different set of criteria in each module. But understanding a business on paper is only half the picture. Working inside businesses, from renewable energy installations to a specialist food supplier, showed me the other half: the real costs, pressures and trade-offs, and how managers work through them.",
    "I'm at my best in the detail: researching, organising and analysing data to understand what's really driving a business, then communicating what I find clearly to the people making the decisions.",
    "I'm now looking for my first role where I can put that to work, whether that's analysing companies as investments, helping clients understand and improve their businesses, or supporting financial decisions from the inside.",
  ],
  experience: {
    kinectid: {
      heading:
        "Kinectid | Multi Role | London | September 2022 – August 2026",
      stats: [
        { value: "40+", label: "installations" },
        { value: "20+", label: "jobs analysed" },
      ],
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
          text: "Investigated the sources of the company's losses. This involved designing sampling techniques to match on-site receipts against what was quoted. The task also required me to build methods to estimate missing data where records have gaps, drawing on first-hand knowledge of how engineers work on site.",
        },
      ],
      tags: [
        "Data reconciliation",
        "Cost analysis",
        "Process improvement",
        "Commercial awareness",
        "Working to deadlines",
      ],
    },
    olive: {
      heading:
        "The Real Olive Company | Sales & Data Analyst Intern | Bristol | July 2025",
      stats: [
        { value: "150+", label: "accounts analysed" },
        { value: "30", label: "high-volume opportunities identified" },
      ],
      bullets: [
        {
          label: "Data & segmentation:",
          text: "Extracted ordering data from the company's CRM into Excel and applied a pre-defined segmentation framework, and investigated which products accounts with different profiles were ordering, and why.",
        },
        {
          label: "Recommendations:",
          text: "Used these ordering patterns to identify the product ranges performing best with similar businesses elsewhere, and proposed trial-stock strategies to introduce those proven ranges to high-volume accounts not yet stocking them.",
        },
        {
          label: "Outcome:",
          text: "Identified 30 high-volume accounts for the sales team to contact, each with a tailored recommendation. Some had stopped ordering altogether, while others were strong candidates for the trial-stock strategy. Presented findings to the sales and marketing team in a weekly meeting.",
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
      heading: "Cloudcustom | Trainee Consultant | Remote | August – September 2023",
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
      body: "A full venture capital due diligence report on Spring Broth Ltd, a live Crowdcube investment case. Reference: Dimo Dimov",
      achievement: "86%",
      result: undefined,
    },
    {
      title: "Featured: Business and the Natural Environment",
      body: "An evaluation of whether National Grid's operations, governance and strategy reflect genuine sustainability.",
      achievement: "3rd place, PRME Undergraduate Essay Competition",
      result: "75%",
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
      "Ongoing study of value investing in the tradition of Benjamin Graham and Warren Buffett. Key texts: The Intelligent Investor (Graham), Warren Buffett and the Interpretation of Financial Statements (Mary Buffett & David Clark), The Essays of Warren Buffett (Buffett & Cunningham).",
    bullets: [
      "Built an automated Excel stock screener to filter listed companies against value-investing criteria.",
      "Built an AI model that condenses lengthy company filings into focused briefs, structured around the principles I've learnt through self-directed study.",
    ],
  },
} as const;
