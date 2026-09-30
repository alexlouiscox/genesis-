/**
 * Site copy and contact.
 */

export const site = {
  name: "Alex Cox",
  slogan: "Investment · Consulting · Finance",
  email: "alex.louis.cox@gmail.com",
  emailProviders: [
    {
      label: "Outlook",
      href: "https://outlook.live.com/mail/0/deeplink/compose?to=alex.louis.cox@gmail.com",
      external: true,
    },
    {
      label: "Gmail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=alex.louis.cox@gmail.com",
      external: true,
    },
    {
      label: "Yahoo Mail",
      href: "https://compose.mail.yahoo.com/?to=alex.louis.cox@gmail.com",
      external: true,
    },
    {
      label: "AOL",
      href: "https://mail.aol.com/webmail-std/en-us/compose?to=alex.louis.cox@gmail.com",
      external: true,
    },
  ],
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
    "I've always been curious about how businesses really work. My degree in Accounting & Management at the University of Bath (2:1) taught me how to analyse one: how to read its accounts, test its strategy and compare it with its competitors. My professional experience taught me what sits behind that analysis: the everyday costs, pressures and trade-offs that shape real decisions. Together, these skills give me the ability to read the numbers behind a business and understand the choices behind them.",
    "I'm at my best in the detail: researching, organising and analysing data to understand what's really driving a business, then communicating what I find clearly to the people making the decisions.",
    "I'm eager to put this to work, whether that's analysing companies as investments, helping clients understand and improve their businesses, or supporting financial decisions from the inside.",
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
        "Working to tight deadlines",
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
          text: "Extracted ordering data from the company's CRM into Excel and applied a pre-defined segmentation framework, investigating which products accounts with different profiles were ordering, and why.",
        },
        {
          label: "Outcome:",
          text: "Identified 30 high-volume accounts for the sales team to contact, each with a tailored recommendation. Some had stopped ordering altogether, while others weren't yet stocking ranges that were performing well with similar businesses, making them strong candidates for a trial-stock strategy. Presented findings to the sales and marketing team in a weekly meeting.",
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
      title: "Entrepreneurial Finance and Intellectual Property",
      body: "Conducted a full venture capital due diligence report on a live crowdcube investment case. Report included: market sizing, valuation modelling, cap table analysis and return scenario forecasting. (Reference: Dimo Dimov)",
      achievement: "86%",
      result: undefined,
    },
    {
      title: "Business and the Natural Environment",
      body: "Assessed whether National Grid is close to achieving genuine sustainability, focusing on organisational tools, management practices and strategic choices.",
      achievement: "3rd place, PRME undergraduate essay competition",
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
      "Ongoing study of value investing in the tradition of Benjamin Graham and Warren Buffett. Key texts: The Intelligent Investor (Graham), Warren Buffett and the Interpretation of Financial Statements (Mary Buffett & David Clark), The Essays of Warren Buffett (Buffett & Cunningham).",
    bullets: [
      "Built an automated Excel stock screener to filter listed companies against value-investing criteria.",
      "Built an AI model that condenses lengthy company filings into focused briefs, structured around the principles I've learnt through self-directed study.",
    ],
  },
} as const;
