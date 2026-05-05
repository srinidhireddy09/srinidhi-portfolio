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
  siteTitle: "Srinidhi Sanikommu | Data Scientist",
  siteDescription: "Senior Data Scientist with 6+ years building ML solutions for Fortune 500 companies. Goldman Sachs, JPMorgan, UnitedHealth. 50+ models, 15M+ records, 99.2% accuracy.",
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
  titleLine2: "Into Decisions",
  descriptionLine1: "6+ years building ML solutions for Fortune 500.",
  descriptionLine2: "50+ models. 15M+ records. 99.2% accuracy.",
  ctaText: "Explore Work",
  ctaTargetId: "philosophy",
}

export const philosophyConfig: PhilosophyConfig = {
  eyebrow: "PHILOSOPHY / 001",
  title: "Engineered Impact",
  body: "I don't just build models. I architect end-to-end ML systems that transform how enterprises operate. From Goldman Sachs' regulatory NLP engines to JPMorgan's real-time fraud detection, every solution is designed for measurable business impact at scale.",
  rollingWords: [
    "PRECISION",
    "SCALE",
    "IMPACT",
    "INFERENCE",
    "AUTOMATION",
    "INTELLIGENCE",
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
        { label: "ROLE", value: "Lead Data Scientist" },
        { label: "STACK", value: "Python, Spark, Kafka, AWS" },
        { label: "IMPACT", value: "$50M+ fraud prevented" },
        { label: "PERF", value: "99.2% precision" },
      ],
      paragraphs: [
        "Built an end-to-end real-time fraud detection system processing over 10 million daily transactions. The architecture combines Spark Streaming for data ingestion, ensemble ML methods (XGBoost + Isolation Forest) for detection, and Kafka for event-driven pipeline orchestration.",
        "The system achieves 99.2% precision while reducing false positives by 35% compared to the legacy rules-based approach. Deployed on AWS with automated model retraining pipelines, the solution has prevented over $50 million in fraudulent transactions since launch.",
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
        { label: "ROLE", value: "Senior Data Scientist" },
        { label: "STACK", value: "BERT, PyTorch, Hugging Face" },
        { label: "SCALE", value: "1M+ documents" },
        { label: "SCORE", value: "94% F1-score" },
      ],
      paragraphs: [
        "Led the development of an enterprise NLP platform for regulatory document analysis at Goldman Sachs. Built on BERT and PyTorch, the system performs document classification, named entity extraction, and compliance risk scoring across 1 million+ regulatory filings.",
        "The platform achieved a 94% F1-score on entity extraction tasks, outperforming the previous vendor solution by 18 percentage points. Fine-tuned transformer models with domain-specific pretraining on financial regulatory text for optimal accuracy.",
        "I established the MLOps framework for model versioning, A/B testing, and automated retraining. Mentored a team of 4 data scientists on transformer architectures, experimental design, and production ML best practices.",
      ],
    },
    {
      id: "churn-prediction",
      title: "Churn Radar",
      location: "JPMorgan Chase",
      year: "2021",
      image: "images/project-3.jpg",
      subtitle: "Deep learning customer retention engine",
      meta: [
        { label: "ROLE", value: "Data Scientist" },
        { label: "STACK", value: "TensorFlow, Keras, SQL" },
        { label: "IMPACT", value: "$12M annual savings" },
        { label: "MODEL", value: "Deep Neural Network" },
      ],
      paragraphs: [
        "Developed a deep learning customer churn prediction engine for JPMorgan Chase that identifies at-risk customers 30 days in advance. The model uses TensorFlow and Keras with embeddings for categorical features and temporal attention for behavioral sequences.",
        "The system enables proactive retention campaigns that have resulted in $12 million in annual savings. Built automated ETL pipelines processing 50 million records daily using PySpark and Airflow, ensuring fresh feature engineering for real-time predictions.",
        "Created executive dashboards in Tableau for monitoring churn metrics, model performance, and campaign ROI. Collaborated with marketing and product teams to integrate predictions into CRM workflows for automated intervention triggers.",
      ],
    },
    {
      id: "healthcare-risk",
      title: "HealthGuard",
      location: "UnitedHealth",
      year: "2019",
      image: "images/project-4.jpg",
      subtitle: "Predictive healthcare readmission risk model",
      meta: [
        { label: "ROLE", value: "Data Analyst" },
        { label: "STACK", value: "Scikit-learn, XGBoost, Plotly" },
        { label: "IMPACT", value: "87% accuracy" },
        { label: "USERS", value: "200+ executives" },
      ],
      paragraphs: [
        "Designed and deployed a predictive model for patient readmission risk at UnitedHealth Group, achieving 87% accuracy and improving hospital resource allocation. The model analyzes structured EHR data, claims history, and clinical notes to identify high-risk patients.",
        "Built interactive Tableau dashboards used by over 200 executives for strategic planning and real-time outcome tracking. Automated reporting pipelines that saved 20+ hours per week of manual work using SQL and Python.",
        "Partnered with clinicians and operations teams to translate healthcare challenges into actionable analytical frameworks. Conducted deep exploratory data analysis on structured and unstructured healthcare data to uncover key risk drivers.",
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
      description: "Scikit-learn, TensorFlow, PyTorch, XGBoost, LightGBM, Keras, Hugging Face Transformers. 50+ models in production.",
    },
    {
      cn: "NLP",
      en: "NATURAL LANGUAGE",
      description: "BERT, transformer fine-tuning, entity extraction, document classification, sentiment analysis, regulatory text processing.",
    },
    {
      cn: "DATA",
      en: "DATA ENGINEERING",
      description: "Apache Spark, Airflow, Kafka, Databricks, Snowflake, BigQuery. Processing 50M+ records daily.",
    },
    {
      cn: "CLOUD",
      en: "CLOUD & MLOPS",
      description: "AWS SageMaker, EC2, S3, Azure ML, GCP, Docker, Kubernetes, MLflow. CI/CD for ML pipelines.",
    },
    {
      cn: "VIZ",
      en: "VISUALIZATION",
      description: "Tableau, Power BI, Plotly, Matplotlib, Seaborn, D3.js. Dashboards for 200+ executive users.",
    },
  ],
}

export const footerConfig: FooterConfig = {
  visionText: "I believe data science is not about algorithms — it is about solving real problems that matter. Every model I build is measured by one standard: did it change something for the better? From Wall Street to healthcare, that principle guides every line of code.",
  brandName: "Srinidhi Sanikommu",
  columns: [
    {
      heading: "CONNECT",
      entries: [
        { text: "LinkedIn", href: "https://linkedin.com/in/srinidhi-sanikommu" },
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
