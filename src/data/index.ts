// ============================================================
// KYNYX SOLUTION - Mock Data (Ready for MERN API Integration)
// ============================================================

export const siteConfig = {
  name: "Kynyx Solution",
  tagline: "Engineering Tomorrow",
  description: "Premium technology consulting and development firm specializing in enterprise-grade digital transformation.",
  email: "hello@kynyx.com",
  phone: "+1 (888) 123-4567",
  address: "One World Trade Center, New York, NY 10007",
  social: {
    twitter: "https://twitter.com/kynyx",
    linkedin: "https://linkedin.com/company/kynyx",
    github: "https://github.com/kynyx",
    dribbble: "https://dribbble.com/kynyx",
  },
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
];

export const trustedByLogos = [
  { name: "Microsoft", logo: "MS" },
  { name: "Google", logo: "G" },
  { name: "Amazon", logo: "AWS" },
  { name: "Stripe", logo: "S" },
  { name: "Vercel", logo: "V" },
  { name: "Linear", logo: "L" },
  { name: "Notion", logo: "N" },
  { name: "Figma", logo: "F" },
];

export const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", description: "Enterprise-grade solutions shipped" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Measured via NPS surveys" },
  { value: 8, suffix: "+", label: "Years of Excellence", description: "In the tech consulting space" },
  { value: 50, suffix: "+", label: "Expert Engineers", description: "Full-stack & specialized talent" },
];

export const services = [
  {
    id: "web-dev",
    icon: "Code2",
    title: "Web Application Development",
    description: "Scalable, performant web applications built with modern stacks. From MVP to enterprise platforms.",
    features: ["React / Next.js", "Node.js APIs", "PostgreSQL / MongoDB", "Cloud Deploy"],
    gradient: "from-blue-500 to-cyan-500",
    accent: "#3B82F6",
  },
  {
    id: "mobile-dev",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that delight users and scale with your business.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Mode"],
    gradient: "from-purple-500 to-pink-500",
    accent: "#8B5CF6",
  },
  {
    id: "cloud",
    icon: "Cloud",
    title: "Cloud Architecture & DevOps",
    description: "Robust cloud infrastructure designed for high availability, security, and cost efficiency.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Auto-scaling"],
    gradient: "from-cyan-500 to-blue-500",
    accent: "#06B6D4",
  },
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt — from recommendation engines to computer vision.",
    features: ["LLM Integration", "Data Pipelines", "Model Training", "MLOps"],
    gradient: "from-violet-500 to-purple-500",
    accent: "#7C3AED",
  },
  {
    id: "design",
    icon: "Layers",
    title: "UI/UX & Product Design",
    description: "Award-winning digital experiences crafted with precision, empathy, and a relentless focus on conversion.",
    features: ["Design Systems", "Prototyping", "User Research", "Motion Design"],
    gradient: "from-rose-500 to-orange-500",
    accent: "#F43F5E",
  },
  {
    id: "consulting",
    icon: "BarChart3",
    title: "Technology Consulting",
    description: "Strategic guidance that aligns your technology roadmap with business objectives and market reality.",
    features: ["Tech Audits", "Architecture Review", "Team Scaling", "Digital Strategy"],
    gradient: "from-amber-500 to-yellow-500",
    accent: "#F59E0B",
  },
];

export const industries = [
  { name: "FinTech", icon: "DollarSign", desc: "Banking, payments, and investment platforms" },
  { name: "HealthTech", icon: "Heart", desc: "Telehealth, EHR, and wellness applications" },
  { name: "EdTech", icon: "GraduationCap", desc: "Learning management and e-learning platforms" },
  { name: "E-Commerce", icon: "ShoppingCart", desc: "D2C, marketplaces, and retail tech" },
  { name: "SaaS", icon: "Zap", desc: "B2B software products and platforms" },
  { name: "Logistics", icon: "Truck", desc: "Supply chain, fleet, and inventory systems" },
  { name: "Real Estate", icon: "Building2", desc: "PropTech, listings, and management tools" },
  { name: "Media", icon: "Play", desc: "Streaming, content, and publishing platforms" },
];

export const whyChooseUs = [
  {
    icon: "Shield",
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption, penetration testing, and zero-trust architecture.",
    stat: "99.99% uptime",
  },
  {
    icon: "Zap",
    title: "Lightning Fast Delivery",
    description: "Agile sprints, daily standups, and a culture of radical ownership ensure your product ships on time.",
    stat: "2x faster",
  },
  {
    icon: "Award",
    title: "Award-Winning Quality",
    description: "Our work has been recognized by Awwwards, CSS Design Awards, and multiple industry publications.",
    stat: "12 awards",
  },
  {
    icon: "Users",
    title: "Dedicated Teams",
    description: "We embed with your team — not just write code and disappear. Every project gets a committed pod.",
    stat: "100% dedicated",
  },
  {
    icon: "Globe",
    title: "Global Talent, Local Care",
    description: "Access world-class engineering talent across 15 time zones while receiving boutique-agency attention.",
    stat: "15 time zones",
  },
  {
    icon: "TrendingUp",
    title: "Results-Driven",
    description: "We measure success by your metrics — conversion rates, load times, user retention, and revenue impact.",
    stat: "3x avg ROI",
  },
];

export const processSteps = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    duration: "Week 1-2",
    description: "Deep-dive into your business, users, and technical landscape. We define the problem before we solve it.",
    deliverables: ["Technical Audit", "Competitive Analysis", "Project Roadmap", "Architecture Blueprint"],
    icon: "Search",
    color: "#3B82F6",
  },
  {
    phase: "02",
    title: "Design & Prototype",
    duration: "Week 2-4",
    description: "High-fidelity designs and interactive prototypes that validate concepts before a single line of code is written.",
    deliverables: ["Design System", "Interactive Prototype", "User Testing", "Design Handoff"],
    icon: "Paintbrush2",
    color: "#8B5CF6",
  },
  {
    phase: "03",
    title: "Build & Iterate",
    duration: "Week 4-12",
    description: "Iterative development with bi-weekly demos. You see progress every sprint, not just at the end.",
    deliverables: ["Sprint Deliverables", "Code Reviews", "Testing Suite", "Demo Sessions"],
    icon: "Code2",
    color: "#06B6D4",
  },
  {
    phase: "04",
    title: "Launch & Scale",
    duration: "Week 12+",
    description: "Smooth production deployment with monitoring, performance tuning, and ongoing optimization support.",
    deliverables: ["Production Deploy", "Performance Report", "Training Docs", "Support SLA"],
    icon: "Rocket",
    color: "#10B981",
  },
];

export const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Express.js", "FastAPI", "GraphQL"] },
  { category: "Mobile", items: ["React Native", "Swift", "Kotlin", "Expo", "Flutter"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Prisma"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "AI & Data", items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Pinecone", "Hugging Face"] },
];

export const portfolio = [
  {
    id: "finverse",
    title: "FinVerse Banking Platform",
    category: "FinTech",
    description: "Next-gen digital banking platform serving 500K+ users with real-time transactions and AI-powered insights.",
    image: "/projects/finverse.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    stats: { users: "500K+", performance: "99.99%", delivery: "4 months" },
    featured: true,
    gradient: "from-blue-600 to-cyan-600",
    accent: "#3B82F6",
  },
  {
    id: "healio",
    title: "Healio Telehealth Suite",
    category: "HealthTech",
    description: "HIPAA-compliant telehealth platform with video consultations, EHR integration, and AI diagnostics.",
    image: "/projects/healio.jpg",
    tags: ["Next.js", "WebRTC", "Python", "MongoDB"],
    stats: { users: "120K+", performance: "98.5%", delivery: "6 months" },
    featured: true,
    gradient: "from-emerald-600 to-teal-600",
    accent: "#10B981",
  },
  {
    id: "edusync",
    title: "EduSync Learning Platform",
    category: "EdTech",
    description: "Adaptive learning management system with AI personalization serving 50+ enterprise institutions.",
    image: "/projects/edusync.jpg",
    tags: ["React", "GraphQL", "Redis", "GCP"],
    stats: { users: "80K+", performance: "97.2%", delivery: "5 months" },
    featured: false,
    gradient: "from-violet-600 to-purple-600",
    accent: "#8B5CF6",
  },
  {
    id: "logistiq",
    title: "Logistiq Fleet Management",
    category: "Logistics",
    description: "Real-time fleet tracking and route optimization platform reducing fuel costs by 32% for enterprise clients.",
    image: "/projects/logistiq.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "AWS"],
    stats: { users: "15K+", performance: "99.8%", delivery: "3 months" },
    featured: false,
    gradient: "from-orange-600 to-amber-600",
    accent: "#F59E0B",
  },
  {
    id: "shopwave",
    title: "ShopWave Commerce Engine",
    category: "E-Commerce",
    description: "Headless commerce platform processing $50M+ monthly with sub-100ms response times.",
    image: "/projects/shopwave.jpg",
    tags: ["Next.js", "Shopify", "Node.js", "PostgreSQL"],
    stats: { users: "200K+", performance: "99.95%", delivery: "5 months" },
    featured: true,
    gradient: "from-rose-600 to-pink-600",
    accent: "#F43F5E",
  },
  {
    id: "datapulse",
    title: "DataPulse Analytics SaaS",
    category: "SaaS",
    description: "Enterprise business intelligence platform with real-time dashboards and predictive analytics.",
    image: "/projects/datapulse.jpg",
    tags: ["React", "Python", "Kubernetes", "GCP"],
    stats: { users: "5K+", performance: "99.9%", delivery: "7 months" },
    featured: false,
    gradient: "from-cyan-600 to-blue-600",
    accent: "#06B6D4",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "FinVerse Capital",
    avatar: "SC",
    content: "Kynyx didn't just build our platform — they transformed how we think about product development. The architecture they designed is handling 10x our initial traffic with zero issues.",
    rating: 5,
    project: "Banking Platform",
    accentColor: "#3B82F6",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Engineering",
    company: "Healio Health",
    avatar: "MR",
    content: "Working with Kynyx felt like having a co-founder who happened to be a world-class engineering team. Their attention to HIPAA compliance without sacrificing UX was remarkable.",
    rating: 5,
    project: "Telehealth Suite",
    accentColor: "#10B981",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Founder & CEO",
    company: "EduSync",
    avatar: "EW",
    content: "From discovery to launch in 5 months — and the product genuinely works better than we imagined. The team's communication and technical depth are unmatched in the market.",
    rating: 5,
    project: "LMS Platform",
    accentColor: "#8B5CF6",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Head of Product",
    company: "ShopWave",
    avatar: "DK",
    content: "Our conversion rate jumped 40% after Kynyx redesigned and rebuilt our commerce engine. The performance improvements alone paid for the entire engagement in 3 months.",
    rating: 5,
    project: "E-Commerce Platform",
    accentColor: "#F43F5E",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "CIO",
    company: "DataPulse",
    avatar: "PP",
    content: "The AI features Kynyx integrated have become our primary product differentiator. Their machine learning expertise is genuinely rare — they think in systems, not just features.",
    rating: 5,
    project: "Analytics SaaS",
    accentColor: "#06B6D4",
  },
];

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects range from 3-9 months depending on scope. We use 2-week sprints with continuous delivery, so you see working software from week 4 onwards. We'll provide a detailed timeline after our discovery phase.",
  },
  {
    question: "Do you work with early-stage startups or only enterprises?",
    answer: "We work with both. For startups, we offer a focused MVP engagement (8-12 weeks) designed to get you to market and investor-ready. For enterprises, we handle complex migrations, scaling challenges, and greenfield builds.",
  },
  {
    question: "What does your pricing model look like?",
    answer: "We offer both time-and-materials and fixed-scope engagements. Most projects are structured as a discovery phase (fixed fee) followed by development sprints. We're transparent about costs — no surprises.",
  },
  {
    question: "Will you maintain the code after launch?",
    answer: "Yes. We offer tiered SLA-backed maintenance plans starting at 20 hours/month. All clients get 60 days of complimentary post-launch support included in the project scope.",
  },
  {
    question: "How do you handle security and data privacy?",
    answer: "Security is embedded in our process, not bolted on. We follow OWASP guidelines, conduct code security reviews, and can build to HIPAA, SOC 2, GDPR, and PCI-DSS requirements depending on your needs.",
  },
  {
    question: "What happens if our requirements change mid-project?",
    answer: "Our agile process is designed for change. We review scope at the end of every sprint. Changes are evaluated for impact on timeline and cost — then you decide whether to proceed. We never penalize reasonable evolution.",
  },
  {
    question: "Do you build MVPs or full production systems?",
    answer: "Both, with the same level of care. Our MVPs are built on production-grade foundations so you're not paying to rebuild later. We think about future scale from day one.",
  },
  {
    question: "Can you augment our existing engineering team?",
    answer: "Absolutely. Staff augmentation is a core offering. We can embed 1-5 senior engineers into your team on a fractional or full-time basis, following your existing processes and tooling.",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Building Production-Grade RAG Systems with LangChain and Pinecone",
    excerpt: "A deep-dive into architecting retrieval-augmented generation pipelines that actually work at scale — not just in demos.",
    category: "AI & ML",
    readTime: "8 min read",
    publishedAt: "Dec 10, 2024",
    author: { name: "Alex Torres", role: "AI Lead", avatar: "AT" },
    tags: ["LangChain", "RAG", "Vector DB"],
    slug: "building-production-rag-systems",
    gradient: "from-violet-500 to-purple-500",
    featured: true,
  },
  {
    id: "2",
    title: "The Architecture Decisions Behind Scaling to 1M Concurrent Users",
    excerpt: "What we learned rebuilding a fintech platform from the ground up — the tradeoffs nobody tells you about at startup scale.",
    category: "Architecture",
    readTime: "12 min read",
    publishedAt: "Nov 28, 2024",
    author: { name: "Raj Mehta", role: "Solutions Architect", avatar: "RM" },
    tags: ["Scaling", "Node.js", "Redis"],
    slug: "scaling-to-1m-concurrent-users",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    id: "3",
    title: "Why We Stopped Using Redux and What We Use Instead",
    excerpt: "After 5 years of Redux in production, here's our honest assessment and the state management patterns we now recommend.",
    category: "Frontend",
    readTime: "6 min read",
    publishedAt: "Nov 15, 2024",
    author: { name: "Nina Clarke", role: "Frontend Architect", avatar: "NC" },
    tags: ["React", "Zustand", "State"],
    slug: "stopped-using-redux",
    gradient: "from-rose-500 to-pink-500",
    featured: false,
  },
];
