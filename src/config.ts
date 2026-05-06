export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavLink {
  label: string
  targetId: string
}

export interface NavigationConfig {
  brandMark: string
  links: NavLink[]
}

export interface HeroConfig {
  wordmarkText: string
  eyebrow: string
  titleLine1: string
  titleLine2: string
  descriptionLine1: string
  descriptionLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface PhilosophyConfig {
  eyebrow: string
  title: string
  body: string
  rollingWords: string[]
}

export interface ProjectMeta {
  label: string
  value: string
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  subtitle: string
  meta: ProjectMeta[]
  paragraphs: string[]
}

export interface GalleryConfig {
  sectionLabel: string
  title: string
  projects: ProjectData[]
}

export interface MediumItem {
  cn: string
  en: string
  description: string
}

export interface MediumsConfig {
  sectionLabel: string
  items: MediumItem[]
}

export interface FooterEntry {
  text: string
  href?: string
}

export interface FooterColumn {
  heading: string
  entries: FooterEntry[]
}

export interface FooterConfig {
  visionText: string
  brandName: string
  columns: FooterColumn[]
  copyright: string
  videoPath: string
}

export interface ProjectDetailConfig {
  backLabel: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Srinidhi Sanikommu | Data Scientist & ML Engineer",
  siteDescription: "Data Scientist with 2+ years designing, deploying, and scaling production-grade ML, NLP, and LLM systems for Fortune 100 financial services. $50M+ fraud prevented. $12M retention savings.",
}

export const navigationConfig: NavigationConfig = {
  brandMark: "SS",
  links: [
    { label: "About", targetId: "philosophy" },
    { label: "Work", targetId: "gallery" },
    { label: "Expertise", targetId: "mediums" },
    { label: "Contact", targetId: "footer" },
  ],
}

export const heroConfig: HeroConfig = {
  wordmarkText: "SRINIDHI",
  eyebrow: "DATA SCIENTIST & ML ENGINEER",
  titleLine1: "Turning Data",
  titleLine2: "Into Impact",
  descriptionLine1: "2+ years building ML, NLP & LLM systems.",
  descriptionLine2: "Fortune 100 finance. $50M+ fraud prevented.",
  ctaText: "Explore Work",
  ctaTargetId: "philosophy",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "PHILOSOPHY / 001",
  title: "Engineered Impact",
  body: "Results-driven Data Scientist with 2+ years designing, deploying, and scaling production-grade ML, NLP, and LLM systems for Fortune 100 financial services. Delivered $50M+ in annual fraud-loss prevention, $12M in customer-retention savings, and a 60% reduction in model deployment cycle time.",
  rollingWords: [
    "PRECISION",
    "SCALE",
    "AUTOMATION",
    "INFERENCE",
    "RAG",
    "MLOPS",
  ],
}

export const galleryConfig: GalleryConfig = {
  sectionLabel: "FEATURED PROJECTS / 002",
  title: "Selected Work",
  projects: [
    {
      id: "fraud-detection",
      title: "Fraud Shield",
      location: "Goldman Sachs",
      year: "2023",
      image: "images/project-1.jpg",
      subtitle: "Real-time transaction fraud detection at scale",
      meta: [
        { label: "ROLE", value: "Data Scientist" },
        { label: "STACK", value: "Python, Spark, Kafka, AWS" },
        { label: "IMPACT", value: "$50M+ fraud prevented" },
        { label: "PERF", value: "99.2% precision" },
      ],
      paragraphs: [
        "Built an end-to-end real-time fraud detection system processing over 10 million daily transactions. The architecture combines Spark Streaming for data ingestion, an ensemble ML method (XGBoost + Isolation Forest) for detection, and Kafka for event-driven pipeline orchestration.",
        "The system achieves 99.2% precision while reducing false-positive alerts by 35% compared to the legacy rules-based approach. Deployed on AWS with automated model retraining pipelines, the solution has prevented over $50 million in fraudulent transactions since launch.",
        "I architected the MLOps infrastructure using Databricks and AWS SageMaker, reducing model deployment time by 60%. The system includes real-time monitoring, drift detection, and automated alerting to ensure sustained performance in production.",
      ],
    },
    {
      id: "nlp-platform",
      title: "DocuMind AI",
      location: "Goldman Sachs",
      year: "2024",
      image: "images/project-2.jpg",
      subtitle: "NLP platform for regulatory document intelligence",
      meta: [
        { label: "ROLE", value: "Data Scientist" },
        { label: "STACK", value: "BERT, PyTorch, Hugging Face" },
        { label: "SCALE", value: "1M+ documents" },
        { label: "SCORE", value: "94% F1-score" },
      ],
      paragraphs: [
        "Led the development of an enterprise NLP platform for regulatory document analysis at Goldman Sachs. Built on BERT and PyTorch, the system performs document classification, named entity extraction, and compliance risk scoring across 1 million+ regulatory filings.",
        "The platform achieved a 94% F1-score on entity extraction tasks, reducing manual compliance review workload by 35%. Fine-tuned transformer models with domain-specific pretraining on financial regulatory text for optimal accuracy.",
        "Prototyped Retrieval-Augmented Generation (RAG) workflows over internal regulatory corpora using vector embeddings (FAISS) and LLM-based summarization, accelerating analyst research cycles by an estimated 40%.",
      ],
    },
    {
      id: "churn-prediction",
      title: "Churn Radar",
      location: "Goldman Sachs",
      year: "2023",
      image: "images/project-3.jpg",
      subtitle: "Deep learning customer retention engine",
      meta: [
        { label: "ROLE", value: "Data Scientist" },
        { label: "STACK", value: "TensorFlow, Keras, SQL" },
        { label: "IMPACT", value: "$12M annual savings" },
        { label: "MODEL", value: "Deep Neural Network" },
      ],
      paragraphs: [
        "Designed a deep-learning customer churn prediction model in TensorFlow and Keras, identifying high-risk customer cohorts 30 days in advance and driving $12 million in annual retention savings through targeted intervention campaigns.",
        "Built automated ETL pipelines processing 50 million+ records daily using PySpark and Apache Airflow on the firm's cloud data lake, improving feature freshness and downstream model SLAs.",
        "Deployed the model via FastAPI with Tableau dashboards for business stakeholders to monitor cohort-level risk in real time. SHAP-based explainability ensures transparent, audit-ready model decisions.",
      ],
    },
    {
      id: "credit-risk-api",
      title: "RiskGuard",
      location: "Goldman Sachs",
      year: "2024",
      image: "images/project-4.jpg",
      subtitle: "Production-grade credit risk scoring REST API",
      meta: [
        { label: "ROLE", value: "Data Scientist" },
        { label: "STACK", value: "FastAPI, LightGBM, SHAP" },
        { label: "LATENCY", value: "sub-50ms p99" },
        { label: "FOCUS", value: "Explainable AI" },
      ],
      paragraphs: [
        "Shipped a production-grade credit-risk scoring REST API using FastAPI and LightGBM with sub-50ms p99 latency and SHAP-based explainability for model-risk governance and regulatory audit readiness.",
        "The API serves real-time risk scores to downstream trading and risk systems, enabling faster credit decisions while maintaining full transparency on model predictions. Integrated with existing risk dashboards for continuous monitoring.",
        "Collaborated with Risk, Compliance, and Engineering leadership to translate regulatory requirements into audit-ready ML deliverables aligned with SR 11-7 model risk management standards.",
      ],
    },
  ],
}

export const mediumsConfig: MediumsConfig = {
  sectionLabel: "TECHNICAL EXPERTISE / 003",
  items: [
    {
      cn: "ML",
      en: "MACHINE LEARNING",
      description: "Scikit-learn, TensorFlow, PyTorch, XGBoost, LightGBM, Keras. Ensemble methods, anomaly detection, time-series forecasting, hyperparameter tuning. 50+ models in production.",
    },
    {
      cn: "NLP",
      en: "NLP & GENERATIVE AI",
      description: "BERT, RoBERTa, GPT, Hugging Face Transformers, LoRA, PEFT. RAG, vector databases (FAISS, Pinecone, Chroma), NER, text classification, summarization, prompt engineering.",
    },
    {
      cn: "OPS",
      en: "MLOPS & CLOUD",
      description: "MLflow, Docker, Kubernetes, AWS SageMaker, Vertex AI, Azure ML. CI/CD, model monitoring, drift detection, feature stores (Feast), FastAPI, Flask, REST APIs, A/B testing.",
    },
    {
      cn: "DATA",
      en: "DATA ENGINEERING",
      description: "Apache Spark, Kafka, Airflow, Databricks, Snowflake, BigQuery, Delta Lake. ETL/ELT pipelines, streaming data, data lakes, data warehousing. Processing 50M+ records daily.",
    },
    {
      cn: "VIZ",
      en: "VISUALIZATION",
      description: "Tableau, Power BI, Looker, Plotly, Matplotlib, Seaborn, Streamlit, D3.js, Dash. Executive dashboards and real-time business intelligence reporting.",
    },
  ],
}

export const footerConfig: FooterConfig = {
  visionText: "I believe data science is measured by one standard: did it change something for the better? From $50M+ fraud prevention to $12M retention savings, every model I build is designed for measurable business impact at scale.",
  brandName: "Srinidhi Sanikommu",
  columns: [
    {
      heading: "CONNECT",
      entries: [
        { text: "LinkedIn", href: "http://linkedin.com/in/srinidhi-sanikommu" },
        { text: "GitHub", href: "http://github.com/srinidhi-sanikommu" },
        { text: "Portfolio", href: "https://srinidhi-portfolio-sand.vercel.app/" },
        { text: "Email", href: "mailto:srinidhireddy0822@gmail.com" },
        { text: "+1 856 526 2084" },
      ],
    },
    {
      heading: "LOCATION",
      entries: [
        { text: "Newark, NJ" },
        { text: "United States" },
      ],
    },
    {
      heading: "EDUCATION",
      entries: [
        { text: "MS Data Science" },
        { text: "Rowan University" },
        { text: "GPA 3.4 / 4.0" },
        { text: "May 2026" },
      ],
    },
    {
      heading: "CERTIFICATIONS",
      entries: [
        { text: "AWS ML – Specialty" },
        { text: "Databricks ML Pro" },
        { text: "DeepLearning.AI\nGenerative AI & NLP" },
      ],
    },
  ],
  copyright: "© 2025 Srinidhi Sanikommu. All rights reserved.",
  videoPath: "videos/footer.mp4",
}

export const projectDetailConfig: ProjectDetailConfig = {
  backLabel: "← Back",
}

export function getProjectById(id: string): ProjectData | undefined {
  return galleryConfig.projects.find((p) => p.id === id)
}
