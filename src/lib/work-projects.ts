export type WorkProject = {
  slug: string;
  title: string;
  role: string;
  team: string;
  shipped: string;
  status: string;
  description: string;
  accent: "pink" | "teal" | "green" | "orange";
  imageHeight: number;
  tilt: number;
  images: [string, string];
  overview: string;
  highlights: string[];
  process: string[];
  takeaway: string;
};

export const workProjects: WorkProject[] = [
  {
    slug: "decision-operating-systems",
    title: "Decision Operating Systems",
    role: "Operations Transformation",
    team: "Independent research",
    shipped: "Latest",
    status: "DECISION OPS",
    description:
      "A strategy reflection on why five-minute decisions become two-day threads, and how governed operating systems turn ambiguity into accountable execution.",
    accent: "orange",
    imageHeight: 250,
    tilt: -0.2,
    images: ["/images/work/splunk/content-layout-final.png", "/images/work/splunk/solution-investigate.png"],
    overview:
      "This project reframes slow cross-functional decisions as an operating system problem, not a collaboration problem. Pricing debates, customer escalations, and AI workflow ideas stall when ownership, data integrity, risk, governance, and ROI are not designed into the decision layer.",
    highlights: [
      "Explained why new problems need new operating systems instead of old playbooks or more disconnected tools.",
      "Separated where AI helps from where humans must own judgment, trade-offs, risk, trust, and accountability.",
      "Mapped an operating response around structure, orchestration, human-in-the-loop review, risk-based governance, agentic execution, MCP-connected workflows, and ROI tracking.",
    ],
    process: [
      "Studied recurring enterprise decision friction across RevOps, finance, legal, product, delivery, customer escalation, and AI governance scenarios.",
      "Identified the repeated failure mode: unclear ownership turns small decisions into sprawling threads with no clean benchmark or execution path.",
      "Synthesized a decision operating system that clarifies the decision, connects systems and agents, keeps humans accountable, and tracks measurable business value.",
    ],
    takeaway:
      "Operational excellence today means turning ambiguity into decisions faster, turning decisions into governed workflows, and turning workflows into measurable value.",
  },
  {
    slug: "insight-to-execution-operations",
    title: "Insight-to-Execution Operations",
    role: "AI Operations Strategy",
    team: "Independent research",
    shipped: "Project 02",
    status: "KNOWLEDGE OPS",
    description:
      "A strategy reflection on turning shared knowledge, market signals, customer insight, and agent workflows into governed execution, ROI tracking, and operational value.",
    accent: "orange",
    imageHeight: 250,
    tilt: -0.4,
    images: ["/images/work/splunk/content-layout-final.png", "/images/work/splunk/rootcause-tree-diagram.webp"],
    overview:
      "This project frames the next operating edge for leaders: knowledge should move work forward. Across Adobe, ServiceNow, Salesforce, and DBS Bank, the pattern is similar even when the functions differ. The value is not more tools; the value is better orchestration that turns insight into execution.",
    highlights: [
      "Connected market signals, customer insights, sales knowledge, and operations handoffs to one execution problem.",
      "Mapped knowledge operations, GTM transformation, MCP connectors, multi-agent workflows, human approvals, governance, and ROI tracking as the next operating layer.",
      "Positioned AI as workflow support while operational excellence creates the measurable value.",
    ],
    process: [
      "Studied enterprise examples where content, support, agent workflows, and shared knowledge systems are becoming managed operating systems.",
      "Identified the repeated failure mode: useful knowledge gets trapped across docs, calls, CRM notes, dashboards, and manual handoffs.",
      "Synthesized an insight-to-execution operating model focused on faster execution, lower rework, cleaner ownership, stronger governance, and clearer ROI.",
    ],
    takeaway:
      "AI supports the workflow, but operational excellence creates the value through orchestration, ownership, governance, and measurable execution.",
  },
  {
    slug: "snowflake-cortex-analyst",
    title: "Snowflake Cortex Analyst",
    role: "Enterprise AI Analysis",
    team: "Independent research",
    shipped: "Project 03",
    status: "AI STRATEGY",
    description:
      "A reflection on why production AI systems need semantic context, verified queries, evaluation loops, observability, and governance to earn executive trust.",
    accent: "teal",
    imageHeight: 250,
    tilt: -0.6,
    images: ["/images/work/splunk/rootcause-tree-diagram.webp", "/images/work/splunk/content-layout-final.png"],
    overview:
      "This project studies what separates impressive AI demos from AI systems that executives can trust in production. Snowflake Cortex Analyst became a useful lens for thinking about text-to-SQL, semantic context, verified queries, regression tracking, latency visibility, and continuous refinement.",
    highlights: [
      "Framed accuracy as a system problem, not only a model problem.",
      "Connected enterprise text-to-SQL to governance, observability, and auditability.",
      "Mapped the gap between polished demos and production decision support.",
    ],
    process: [
      "Studied Snowflake Cortex Analyst and the operational discipline around text-to-SQL.",
      "Compared clean demos against messy real-world business definitions, policy exceptions, and edge cases.",
      "Synthesized the core lesson: production trust has to be engineered.",
    ],
    takeaway:
      "Enterprise AI becomes valuable when teams can stand behind the decision, not just when the answer arrives faster.",
  },
  {
    slug: "agent-maestro",
    title: "Agent Maestro",
    role: "Product Strategy",
    team: "Independent build",
    shipped: "Project 04",
    status: "AI OPERATIONS",
    description:
      "An AI-native decision layer concept for operations that structures requests, grounds decisions in policy and data, flags risk, assigns ownership, and keeps humans in the loop.",
    accent: "pink",
    imageHeight: 290,
    tilt: 0.5,
    images: ["/images/work/splunk/flow-01-create-investigations.webp", "/images/work/splunk/solution-remediate.png"],
    overview:
      "Agent Maestro is an AI-native decision layer for operations. It was shaped around a common enterprise problem: simple requests turn into long threads because ownership, risk, policy, and context are scattered across systems.",
    highlights: [
      "Designed around decision friction rather than chatbot novelty.",
      "Structured requests, policy, data, ownership, risk, and human judgment into one operating layer.",
      "Used an $81K refund and cross-region escalation as a sample scenario.",
    ],
    process: [
      "Identified fragmentation patterns across operations, data, and execution.",
      "Defined the system requirements: classify requests, flag risk, align owners, and prepare execution.",
      "Positioned AI as an orchestration layer that supports governed human decisions.",
    ],
    takeaway:
      "AI alone does not create operational value. AI plus strategic orchestration and human judgment can reduce delay, cost, and risk.",
  },
  {
    slug: "gopractice-ai-for-pms",
    title: "GoPractice AI for PMs",
    role: "AI Product Learning",
    team: "Course project",
    shipped: "Project 05",
    status: "AI LEARNING",
    description:
      "A business-focused analysis of reinforcement learning, DeepSeek R1-Zero, hybrid AI approaches, and how leaders choose the right AI model for real outcomes.",
    accent: "green",
    imageHeight: 250,
    tilt: -0.3,
    images: ["/images/projects/loop.png", "/images/work/lingofable/bento-2-track-progress.png"],
    overview:
      "This work came from GoPractice's Generative AI for PMs course and explored why reinforcement learning felt overlooked compared with supervised learning and LLMs. DeepSeek R1-Zero made RL newly relevant as a path toward reasoning without supervised fine-tuning.",
    highlights: [
      "Compared reinforcement learning, supervised learning, self-supervised learning, and LLM-driven approaches.",
      "Connected model strategy to business adoption and leadership decisions.",
      "Focused on how AI should serve real organizational outcomes.",
    ],
    process: [
      "Studied RL through the lens of product management and AI strategy.",
      "Tracked how DeepSeek and hybrid AI approaches changed the conversation.",
      "Translated technical shifts into questions leaders can use when adopting AI.",
    ],
    takeaway:
      "The most valuable AI leaders will know how, when, and why to use each model approach for business impact.",
  },
  {
    slug: "netflix-live-event-analysis",
    title: "Netflix Live Event Analysis",
    role: "Tech Strategy Analysis",
    team: "Independent case reflection",
    shipped: "Project 06",
    status: "SYSTEMS",
    description:
      "A strategic look at Netflix's live-streaming challenge, covering real-time demand, scaling, resilience, analytics, communication, and customer experience.",
    accent: "orange",
    imageHeight: 270,
    tilt: 0.4,
    images: ["/images/projects/gcal-wrapped.gif", "/images/projects/copilot.gif"],
    overview:
      "This analysis reflected on Netflix's live streaming of the Tyson vs. Jake Paul fight as a case in ambitious product strategy, infrastructure stress, user expectations, and real-time operational response.",
    highlights: [
      "Separated live streaming demands from on-demand content assumptions.",
      "Explored 60M+ concurrent viewers as both a data and infrastructure challenge.",
      "Connected outages to transparency, quality culture, and resilience planning.",
    ],
    process: [
      "Examined the event through product, infrastructure, and customer experience lenses.",
      "Mapped the importance of real-time analytics and agile response.",
      "Synthesized lessons for high-demand digital launches.",
    ],
    takeaway:
      "Bold innovation needs resilient systems, stress testing, and communication plans that match user expectations.",
  },
  {
    slug: "fraudulent-survey-response-detection",
    title: "Fraudulent Survey Response Detection",
    role: "Project Manager",
    team: "Vista Research",
    shipped: "Project 07",
    status: "DATA QUALITY",
    description:
      "Led work showcasing fraudulent straight-line survey responses in Streamlit and connecting clean market research data to stronger business decisions.",
    accent: "teal",
    imageHeight: 280,
    tilt: -0.4,
    images: ["/images/projects/cu-reviews.gif", "/images/work/splunk/content-sme-findings.png"],
    overview:
      "At Vista Research, this project focused on the business impact of fraudulent survey responses, especially straight-line behavior where respondents select the same answer across questions.",
    highlights: [
      "Connected bad data quality to flawed market research and business strategy.",
      "Showcased fraudulent response behavior in real time using Streamlit.",
      "Led a team focus on improving data quality and decision reliability.",
    ],
    process: [
      "Identified straight-line behavior as a visible fraud pattern.",
      "Built a demonstration to make data integrity issues easier to understand.",
      "Framed clean data as the foundation for trustworthy analytics and AI models.",
    ],
    takeaway:
      "Market research is only valuable when the underlying data can be trusted.",
  },
  {
    slug: "supply-chain-resilience",
    title: "Supply Chain Resilience",
    role: "Technology Management",
    team: "UIUC MS project",
    shipped: "Project 08",
    status: "SUPPLY CHAIN",
    description:
      "Explored sustainable and resilient supply chains through IoT, blockchain, big data analytics, zero-trust cybersecurity, geopolitical risk planning, and Lean Six Sigma thinking.",
    accent: "green",
    imageHeight: 245,
    tilt: 0.6,
    images: ["/images/work/splunk/entry-final-hybrid.png", "/images/work/splunk/flow-03-auto-apply.webp"],
    overview:
      "This UIUC Technology Management project explored how modern supply chains can become more sustainable, resilient, transparent, and secure.",
    highlights: [
      "Applied IoT, blockchain, and big data analytics to transparency and traceability.",
      "Studied zero-trust and continuous monitoring for supply chain cybersecurity.",
      "Considered geopolitical tensions and trade conflicts as operational risk factors.",
    ],
    process: [
      "Defined the pillars of resilience, sustainability, cybersecurity, and operational efficiency.",
      "Mapped technology choices to trust, traceability, and risk mitigation.",
      "Used Lean Six Sigma thinking to connect resilience with process improvement.",
    ],
    takeaway:
      "Resilient supply chains require sustainability, risk management, cybersecurity, and operational discipline working together.",
  },
  {
    slug: "harmonyhub",
    title: "HarmonyHub",
    role: "Project Manager",
    team: "UIUC MS project",
    shipped: "Project 09",
    status: "PRODUCTIVITY",
    description:
      "Managed a wearable-integrated productivity app concept with scope planning, risk management, budgets, change control, Gantt charts, WBS, and stakeholder communication.",
    accent: "pink",
    imageHeight: 255,
    tilt: -0.5,
    images: ["/images/projects/lingofable.png", "/images/work/lingofable/bento-1-fairy-tales.png"],
    overview:
      "HarmonyHub is a productivity app concept designed to integrate with wearable devices and support productivity and well-being.",
    highlights: [
      "Defined project scope, risk, budget, and change management using ProjectLibre.",
      "Created Gantt charts, WBS, and communication plans.",
      "Focused on user satisfaction, wearable integration, privacy, and security.",
    ],
    process: [
      "Planned the project using PMI-style management practices.",
      "Built execution artifacts for timeline, scope, risk, and stakeholder communication.",
      "Tracked how core features would be delivered without critical issues.",
    ],
    takeaway:
      "Strong project execution turns a product idea into a manageable, measurable delivery plan.",
  },
  {
    slug: "ai-in-microsoft-teams",
    title: "AI in Microsoft Teams",
    role: "Tech Strategy",
    team: "UIUC MS project",
    shipped: "Project 10",
    status: "AI INTEGRATION",
    description:
      "Evaluated AI integration in Microsoft Teams, including real-time translation, transcription, automated summaries, scheduling support, and team performance insights.",
    accent: "teal",
    imageHeight: 265,
    tilt: 0.35,
    images: ["/images/projects/splunk.gif", "/images/work/splunk/solution-investigate.png"],
    overview:
      "This project evaluated the strategic decision to integrate AI into Microsoft Teams to improve user experience, collaboration, and operational productivity.",
    highlights: [
      "Explored real-time language translation and transcription for global collaboration.",
      "Considered meeting summaries, scheduling, follow-ups, and routine task automation.",
      "Connected AI features to user engagement, operational efficiency, and market leadership.",
    ],
    process: [
      "Assessed AI capabilities against communication and productivity needs.",
      "Mapped features to strategic benefits for Microsoft Teams.",
      "Synthesized skills across strategy, competitive analysis, and project execution.",
    ],
    takeaway:
      "AI features are strongest when they remove collaboration friction and make teams more inclusive and productive.",
  },
  {
    slug: "quickhook",
    title: "QuickHook",
    role: "New Product Development",
    team: "UIUC course project",
    shipped: "Project 11",
    status: "PRODUCT RESEARCH",
    description:
      "Used Qualtrics-driven market research and product development methods to gather user insight for QuickHook, a sleek portable hook device concept.",
    accent: "orange",
    imageHeight: 255,
    tilt: -0.25,
    images: ["/images/projects/sklonuj.png", "/images/work/lingofable/onboarding-commit.png"],
    overview:
      "QuickHook was developed through a New Product Development course, using the product development life cycle from ideation and market research to prototyping and launch planning.",
    highlights: [
      "Used Qualtrics for real-time feedback, segmentation analysis, dashboards, and predictive insights.",
      "Built on prior market research experience to shape a portable hook product concept.",
      "Invited user feedback to influence product direction.",
    ],
    process: [
      "Applied PDLC methods to ideation, market research, and validation.",
      "Used survey tooling to gather customer needs and preferences.",
      "Translated feedback into product learning for QuickHook.",
    ],
    takeaway:
      "Good product development starts with structured user insight, not assumptions.",
  },
  {
    slug: "cliftonstrengths-profile",
    title: "CliftonStrengths Profile",
    role: "Leadership Reflection",
    team: "Gies College of Business",
    shipped: "Oldest",
    status: "LEADERSHIP",
    description:
      "A strengths-based leadership reflection across Analytical, Communication, Individualization, Strategic, and Connectedness themes.",
    accent: "pink",
    imageHeight: 235,
    tilt: 0.45,
    images: ["/images/about/portrait-1.jpg", "/images/communities/dcc-photo.png"],
    overview:
      "This reflection unpacked the top five CliftonStrengths themes and connected them to product management, project management, supply chain, analytics, and team collaboration.",
    highlights: [
      "Top strengths: Analytical, Communication, Individualization, Strategic, and Connectedness.",
      "Connected self-awareness to leadership and collaboration.",
      "Framed strengths as a foundation for career growth and cross-functional work.",
    ],
    process: [
      "Reviewed each CliftonStrengths theme and what it enables.",
      "Mapped the themes to professional contexts and team environments.",
      "Synthesized a personal leadership profile grounded in self-awareness.",
    ],
    takeaway:
      "Understanding personal strengths helps turn collaboration, strategy, and communication into repeatable leadership behaviors.",
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
