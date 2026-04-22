import { useState, useEffect, useRef } from "react";

const t = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", publications: "Publications", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Vítor Emmanuel",
      surname: "Andrade",
      title: "AI & Machine Learning Engineer",
      subtitle: "Building intelligent systems from research to production",
      cta: "View My Work",
      cv: "Download CV"
    },
    about: {
      title: "About Me",
      p1: "Engineer with an MSc in Industrial Engineering from the Federal University of Bahia (UFBA) and ongoing doctoral research in computer vision applied to healthcare — focusing on digital biomarker extraction and algorithmic fairness in medical imaging.",
      p2: "Over 5 years of hands-on experience building production AI systems: multi-agent pipelines, NLP, computer vision, and SaaS platforms serving real clients. I thrive on constrained hardware, turning CPU-only machines into capable AI workstations.",
      p3: "Published researcher in Type-2 Fuzzy Logic, neural networks, and predictive analytics. Complementary background in university teaching (AI, Data Science, Finance) and team leadership.",
      stats: [
        { value: "5+", label: "Years in AI/ML" },
        { value: "MSc", label: "Industrial Eng." },
        { value: "Ph.D.", label: "In Progress" },
        { value: "40+", label: "SaaS Users" }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { name: "ML & AI", icon: "🧠", items: ["Scikit-learn", "PyTorch", "Neural Networks", "Type-2 Fuzzy Logic", "Genetic Algorithms", "NLP", "RAG", "XAI", "LLMs", "Prompt Engineering"] },
        { name: "Computer Vision", icon: "👁", items: ["OpenCV", "Medical Image Analysis", "Digital Biomarker Extraction", "AI Fairness (Fitzpatrick Scale)"] },
        { name: "Python & Backend", icon: "⚙", items: ["FastAPI", "Flask", "NiceGUI", "Pandas", "NumPy", "PyMuPDF", "SQLAlchemy", "ReportLab"] },
        { name: "Data & Storage", icon: "🗄", items: ["PostgreSQL", "SQLite", "ChromaDB", "MongoDB", "Web Scraping", "ETL Pipelines"] },
        { name: "Infra & DevOps", icon: "🐳", items: ["Docker", "Docker Compose", "Linux", "KVM/QEMU", "Git", "Ollama", "Systemd"] },
        { name: "AI Frameworks", icon: "🔗", items: ["LangChain", "Agno", "Ollama", "Hugging Face", "yfinance"] },
        { name: "Frontend", icon: "🎨", items: ["HTMX", "DaisyUI", "Tailwind CSS", "HTML/CSS/JS", "React"] },
        { name: "Languages", icon: "🌐", items: ["Portuguese (Native)", "English (Fluent)", "Spanish (Intermediate)"] }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          tag: "MULTI-AGENT AI",
          title: "Financial Digest System",
          desc: "Architected a sequential 4-agent AI pipeline (collection, geopolitical analysis, curation, writing) using the Agno framework with Qwen3 models via Ollama. Features RAG with ChromaDB, yfinance integration, and SQLite history — all optimized for CPU-only hardware (Intel N95, 16GB RAM).",
          tech: ["Agno", "Ollama", "ChromaDB", "yfinance", "SQLite", "Systemd"],
          color: "#6366f1"
        },
        {
          tag: "DOCTORAL RESEARCH",
          title: "Fairness & XAI in Medical Imaging",
          desc: "Developing a diabetic foot ulcer (DFU) detection algorithm with fairness analysis across skin tones using the Fitzpatrick scale. Applying Explainable AI techniques for digital biomarker validation. Target: Computers in Biology and Medicine.",
          tech: ["PyTorch", "OpenCV", "XAI", "Fairness", "Medical Imaging"],
          color: "#06b6d4"
        },
        {
          tag: "PRODUCTION SAAS",
          title: "Multi-Tenant Platform",
          desc: "Built and maintained a SaaS platform serving 40+ users, migrating from NiceGUI to FastAPI + HTMX + DaisyUI. Includes a PDF annotation component (PDF.js + Canvas + PyMuPDF) with coordinate-based text extraction and Excel export.",
          tech: ["FastAPI", "HTMX", "DaisyUI", "PyMuPDF", "PDF.js", "Docker"],
          color: "#10b981"
        },
        {
          tag: "QUANTITATIVE FINANCE",
          title: "Systematic Trading System",
          desc: "Analyzed 10 quantitative trading systems against CFD broker cost structures (~6.75% annual swap). Developed a 5-phase implementation roadmap with Python backtesting, swap cost analysis, and asset selection logic.",
          tech: ["Python", "Backtesting", "yfinance", "Pandas", "NumPy"],
          color: "#f59e0b"
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        { role: "Technology & Management Consultant", company: "Lado Humano Consultoria", period: "Jul 2016 – Present", desc: "Process automation, data analysis, and custom Python systems (SaaS, ETL, automated reporting) for SMEs." },
        { role: "University Lecturer — AI, Data & Finance", company: "UniRuy Wyden", period: "Feb 2020 – Dec 2025", desc: "Taught Data Analysis, Python, Database Modeling, Derivatives, and Capital Markets. Increased class engagement by 20% through data-driven initiatives." },
        { role: "Researcher — AI for Fault Diagnosis", company: "UFBA – Graduate Program", period: "Sep 2009 – Apr 2014", desc: "Fault detection in industrial processes using Type-2 Fuzzy Logic, Neural Networks, and Genetic Algorithms. Published in international journals." },
        { role: "Process Engineering Intern", company: "Petrobras – URGN-3-BA", period: "Apr 2008 – Nov 2008", desc: "Process analysis and operating point simulation at a natural gas processing facility." }
      ]
    },
    publications: {
      title: "Publications",
      items: [
        { title: "An Interval Type-2 Fuzzy Logic Approach for Instrument Fault Detection and Diagnosis", type: "Journal Article" },
        { title: "Machine Learning for Bitcoin Price Trend Analysis Based on Social Media and Market Data", type: "Research Paper" }
      ]
    },
    education: {
      title: "Education",
      items: [
        { degree: "Ph.D. (in progress)", field: "Digital Biomarkers in Medical Images" },
        { degree: "MSc. Industrial Engineering", field: "Federal University of Bahia (2009–2011)" },
        { degree: "B.Tech. Systems Analysis & Development", field: "UniFavip Wyden" }
      ]
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Open to opportunities in AI/ML Engineering, Data Science, and Computer Vision.",
      email: "vitor.e.a@gmail.com",
      phone: "+55 71 98794-6284",
      linkedin: "linkedin.com/in/vitorem",
      location: "Salvador, BA — Brazil"
    },
    footer: "Designed & Built by Vítor Andrade"
  },
  pt: {
    nav: { about: "Sobre", skills: "Habilidades", projects: "Projetos", experience: "Experiência", publications: "Publicações", contact: "Contato" },
    hero: {
      greeting: "Olá, eu sou",
      name: "Vítor Emmanuel",
      surname: "Andrade",
      title: "Engenheiro de IA & Machine Learning",
      subtitle: "Construindo sistemas inteligentes da pesquisa à produção",
      cta: "Ver Meu Trabalho",
      cv: "Baixar CV"
    },
    about: {
      title: "Sobre Mim",
      p1: "Engenheiro com mestrado em Engenharia Industrial pela Universidade Federal da Bahia (UFBA) e pesquisa de doutorado em visão computacional aplicada à saúde — com foco em extração de biomarcadores digitais e fairness algorítmica em imagens médicas.",
      p2: "Mais de 5 anos de experiência prática construindo sistemas de IA em produção: pipelines multi-agente, NLP, visão computacional e plataformas SaaS atendendo clientes reais. Especialista em otimização para hardware limitado, transformando máquinas CPU-only em estações de IA capazes.",
      p3: "Pesquisador publicado em Lógica Fuzzy Tipo-2, redes neurais e análise preditiva. Background complementar em docência universitária (IA, Ciência de Dados, Finanças) e liderança de equipes.",
      stats: [
        { value: "5+", label: "Anos em IA/ML" },
        { value: "MSc", label: "Eng. Industrial" },
        { value: "Ph.D.", label: "Em Andamento" },
        { value: "40+", label: "Usuários SaaS" }
      ]
    },
    skills: {
      title: "Competências Técnicas",
      categories: [
        { name: "ML & IA", icon: "🧠", items: ["Scikit-learn", "PyTorch", "Redes Neurais", "Lógica Fuzzy Tipo-2", "Algoritmos Genéticos", "NLP", "RAG", "XAI", "LLMs", "Prompt Engineering"] },
        { name: "Visão Computacional", icon: "👁", items: ["OpenCV", "Análise de Imagens Médicas", "Extração de Biomarcadores", "Fairness em IA (Fitzpatrick)"] },
        { name: "Python & Backend", icon: "⚙", items: ["FastAPI", "Flask", "NiceGUI", "Pandas", "NumPy", "PyMuPDF", "SQLAlchemy", "ReportLab"] },
        { name: "Dados & Storage", icon: "🗄", items: ["PostgreSQL", "SQLite", "ChromaDB", "MongoDB", "Web Scraping", "Pipelines ETL"] },
        { name: "Infra & DevOps", icon: "🐳", items: ["Docker", "Docker Compose", "Linux", "KVM/QEMU", "Git", "Ollama", "Systemd"] },
        { name: "Frameworks IA", icon: "🔗", items: ["LangChain", "Agno", "Ollama", "Hugging Face", "yfinance"] },
        { name: "Frontend", icon: "🎨", items: ["HTMX", "DaisyUI", "Tailwind CSS", "HTML/CSS/JS", "React"] },
        { name: "Idiomas", icon: "🌐", items: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Intermediário)"] }
      ]
    },
    projects: {
      title: "Projetos em Destaque",
      items: [
        {
          tag: "IA MULTI-AGENTE",
          title: "Sistema de Digest Financeiro",
          desc: "Arquitetei pipeline sequencial de 4 agentes IA (coleta, análise geopolítica, curação, redação) usando framework Agno com modelos Qwen3 via Ollama. Integra RAG com ChromaDB, yfinance e SQLite — otimizado para hardware CPU-only (Intel N95, 16GB RAM).",
          tech: ["Agno", "Ollama", "ChromaDB", "yfinance", "SQLite", "Systemd"],
          color: "#6366f1"
        },
        {
          tag: "PESQUISA DE DOUTORADO",
          title: "Fairness & XAI em Imagens Médicas",
          desc: "Desenvolvendo algoritmo de detecção de úlceras diabéticas (DFU) com análise de fairness entre tons de pele (escala Fitzpatrick). Aplicando técnicas de IA Explicável para validação de biomarcadores digitais. Alvo: Computers in Biology and Medicine.",
          tech: ["PyTorch", "OpenCV", "XAI", "Fairness", "Imagens Médicas"],
          color: "#06b6d4"
        },
        {
          tag: "SAAS EM PRODUÇÃO",
          title: "Plataforma Multi-Tenant",
          desc: "Construí e mantive plataforma SaaS com 40+ usuários, migrando de NiceGUI para FastAPI + HTMX + DaisyUI. Inclui componente de anotação PDF (PDF.js + Canvas + PyMuPDF) com extração coordenada de texto e exportação Excel.",
          tech: ["FastAPI", "HTMX", "DaisyUI", "PyMuPDF", "PDF.js", "Docker"],
          color: "#10b981"
        },
        {
          tag: "FINANÇAS QUANTITATIVAS",
          title: "Sistema de Trading Sistemático",
          desc: "Analisei 10 sistemas de trading quantitativo contra estrutura de custos de corretora CFD (~6,75% swap anual). Desenvolvi roadmap de 5 fases com backtesting Python, análise de swap e seleção de ativos.",
          tech: ["Python", "Backtesting", "yfinance", "Pandas", "NumPy"],
          color: "#f59e0b"
        }
      ]
    },
    experience: {
      title: "Experiência",
      items: [
        { role: "Consultor de Tecnologia & Gestão", company: "Lado Humano Consultoria", period: "Jul 2016 – Presente", desc: "Automação de processos, análise de dados e sistemas Python customizados (SaaS, ETL, relatórios automatizados) para PMEs." },
        { role: "Professor Universitário — IA, Dados & Finanças", company: "UniRuy Wyden", period: "Fev 2020 – Dez 2025", desc: "Docente em Análise de Dados, Python, Modelagem de BD, Derivativos e Mercado de Capitais. Aumentou engajamento em 20% com iniciativas data-driven." },
        { role: "Pesquisador — IA para Diagnóstico de Falhas", company: "UFBA – Pós-Graduação", period: "Set 2009 – Abr 2014", desc: "Detecção de falhas em processos industriais usando Lógica Fuzzy Tipo-2, Redes Neurais e Algoritmos Genéticos. Publicação em periódico internacional." },
        { role: "Estagiário de Engenharia de Processos", company: "Petrobras – URGN-3-BA", period: "Abr 2008 – Nov 2008", desc: "Análise de processos e simulação de pontos operacionais em unidade de processamento de gás natural." }
      ]
    },
    publications: {
      title: "Publicações",
      items: [
        { title: "An Interval Type-2 Fuzzy Logic Approach for Instrument Fault Detection and Diagnosis", type: "Artigo em Periódico" },
        { title: "Uso de Machine Learning na Análise de Tendências de Preço do Bitcoin Baseado em Dados de Redes Sociais e Mercado", type: "Artigo de Pesquisa" }
      ]
    },
    education: {
      title: "Formação",
      items: [
        { degree: "Doutorado (em andamento)", field: "Biomarcadores Digitais em Imagens Médicas" },
        { degree: "MSc. Engenharia Industrial", field: "Universidade Federal da Bahia (2009–2011)" },
        { degree: "Análise e Desenvolvimento de Sistemas", field: "UniFavip Wyden" }
      ]
    },
    contact: {
      title: "Vamos Conectar",
      subtitle: "Aberto a oportunidades em Engenharia de IA/ML, Ciência de Dados e Visão Computacional.",
      email: "vitor.e.a@gmail.com",
      phone: "+55 71 98794-6284",
      linkedin: "linkedin.com/in/vitorem",
      location: "Salvador, BA — Brasil"
    },
    footer: "Projetado & Construído por Vítor Andrade"
  }
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  :root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-card: #181825;
    --bg-card-hover: #1e1e2e;
    --accent: #6366f1;
    --accent-glow: rgba(99,102,241,0.15);
    --cyan: #06b6d4;
    --emerald: #10b981;
    --amber: #f59e0b;
    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border: #1e293b;
    --gradient-1: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
    --gradient-2: linear-gradient(135deg, #06b6d4 0%, #10b981 100%);
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  html { scroll-behavior: smooth; }

  body, #root {
    font-family: 'Sora', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: var(--accent); color: white; }

  /* NOISE OVERLAY */
  .noise {
    position: fixed; top:0; left:0; width:100%; height:100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 9999; opacity: 0.4;
  }

  /* NAV */
  nav {
    position: fixed; top:0; left:0; right:0; z-index:100;
    padding: 1rem 2rem;
    backdrop-filter: blur(20px);
    background: rgba(10,10,15,0.8);
    border-bottom: 1px solid rgba(30,41,59,0.5);
    display: flex; justify-content: space-between; align-items: center;
    transition: all 0.3s ease;
  }
  nav.scrolled { padding: 0.6rem 2rem; background: rgba(10,10,15,0.95); }
  .nav-logo {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600; font-size: 1.1rem; color: var(--accent);
    letter-spacing: -0.5px;
  }
  .nav-links { display: flex; gap: 1.8rem; align-items: center; }
  .nav-links a {
    color: var(--text-secondary); text-decoration: none; font-size: 0.82rem;
    font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;
    transition: color 0.2s;
    position: relative;
  }
  .nav-links a:hover { color: var(--text-primary); }
  .nav-links a::after {
    content:''; position:absolute; bottom:-4px; left:0; width:0; height:2px;
    background: var(--accent); transition: width 0.3s ease;
  }
  .nav-links a:hover::after { width: 100%; }

  .lang-toggle {
    display: flex; border: 1px solid var(--border); border-radius: 6px; overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
  }
  .lang-btn {
    padding: 0.35rem 0.7rem; font-size: 0.75rem; font-weight: 600;
    border: none; cursor: pointer; transition: all 0.2s;
    background: transparent; color: var(--text-muted);
    font-family: 'JetBrains Mono', monospace;
  }
  .lang-btn.active { background: var(--accent); color: white; }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    padding: 8rem 2rem 4rem;
    position: relative; overflow: hidden;
  }
  .hero-bg {
    position: absolute; top: -50%; right: -20%; width: 800px; height: 800px;
    background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-bg-2 {
    position: absolute; bottom: -30%; left: -10%; width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-content { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
  .hero-greeting {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem; color: var(--accent); margin-bottom: 1rem;
    letter-spacing: 2px; text-transform: uppercase;
    opacity: 0; animation: fadeUp 0.6s ease forwards 0.2s;
  }
  .hero-name {
    font-size: clamp(2.8rem, 7vw, 5.5rem); font-weight: 800;
    line-height: 1.05; margin-bottom: 0.5rem; letter-spacing: -2px;
    opacity: 0; animation: fadeUp 0.6s ease forwards 0.4s;
  }
  .hero-name .gradient {
    background: var(--gradient-1); -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hero-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem); color: var(--text-secondary);
    font-weight: 400; margin-bottom: 0.6rem;
    opacity: 0; animation: fadeUp 0.6s ease forwards 0.6s;
  }
  .hero-subtitle {
    font-size: 1rem; color: var(--text-muted); max-width: 500px; line-height: 1.6;
    opacity: 0; animation: fadeUp 0.6s ease forwards 0.8s;
  }
  .hero-actions {
    display: flex; gap: 1rem; margin-top: 2.5rem; flex-wrap: wrap;
    opacity: 0; animation: fadeUp 0.6s ease forwards 1s;
  }
  .btn-primary {
    padding: 0.85rem 2rem; background: var(--accent); color: white;
    border: none; border-radius: 8px; font-family: 'Sora'; font-weight: 600;
    font-size: 0.9rem; cursor: pointer; transition: all 0.3s; text-decoration: none;
    box-shadow: 0 4px 20px rgba(99,102,241,0.3);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.4); }
  .btn-outline {
    padding: 0.85rem 2rem; background: transparent; color: var(--text-primary);
    border: 1px solid var(--border); border-radius: 8px; font-family: 'Sora'; font-weight: 600;
    font-size: 0.9rem; cursor: pointer; transition: all 0.3s; text-decoration: none;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

  .hero-terminal {
    margin-top: 3rem; background: var(--bg-secondary); border: 1px solid var(--border);
    border-radius: 12px; padding: 1.5rem; font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem; max-width: 600px;
    opacity: 0; animation: fadeUp 0.6s ease forwards 1.2s;
  }
  .terminal-dots { display: flex; gap: 6px; margin-bottom: 1rem; }
  .terminal-dot { width: 10px; height: 10px; border-radius: 50%; }
  .terminal-line { color: var(--text-muted); line-height: 1.8; }
  .terminal-line .cmd { color: var(--emerald); }
  .terminal-line .flag { color: var(--amber); }
  .terminal-line .val { color: var(--cyan); }
  .terminal-cursor {
    display: inline-block; width: 8px; height: 16px; background: var(--accent);
    animation: blink 1s step-end infinite; vertical-align: middle; margin-left: 4px;
  }

  /* SECTIONS */
  section { padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; }
  .section-title {
    font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;
    letter-spacing: -1px;
  }
  .section-line {
    width: 60px; height: 3px; background: var(--gradient-1);
    border-radius: 2px; margin-bottom: 3rem;
  }

  /* ABOUT */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .about-text p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.2rem; font-size: 0.95rem; }
  .about-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
  }
  .stat-card {
    background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
    padding: 1.5rem; text-align: center; transition: all 0.3s;
  }
  .stat-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 8px 30px var(--accent-glow); }
  .stat-value { font-size: 2rem; font-weight: 800; background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .stat-label { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.3rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; }

  /* SKILLS */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem; }
  .skill-card {
    background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
    padding: 1.5rem; transition: all 0.3s; position: relative; overflow: hidden;
  }
  .skill-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .skill-card-header { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 1rem; }
  .skill-icon { font-size: 1.3rem; }
  .skill-name { font-weight: 600; font-size: 0.95rem; }
  .skill-items { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .skill-tag {
    padding: 0.3rem 0.65rem; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);
    border-radius: 6px; font-size: 0.72rem; color: var(--text-secondary); font-weight: 500;
    transition: all 0.2s;
  }
  .skill-card:hover .skill-tag { border-color: rgba(99,102,241,0.4); color: var(--text-primary); }

  /* PROJECTS */
  .projects-grid { display: grid; gap: 1.5rem; }
  .project-card {
    background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
    padding: 2rem; transition: all 0.4s; position: relative; overflow: hidden;
    display: grid; grid-template-columns: 1fr; gap: 1rem;
  }
  .project-card:hover { border-color: var(--text-muted); transform: translateY(-3px); }
  .project-accent {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    border-radius: 16px 16px 0 0;
  }
  .project-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem; font-weight: 600; letter-spacing: 1.5px; margin-bottom: 0.2rem;
  }
  .project-title { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.5px; }
  .project-desc { color: var(--text-secondary); line-height: 1.7; font-size: 0.9rem; }
  .project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
  .tech-pill {
    padding: 0.3rem 0.7rem; border-radius: 20px; font-size: 0.72rem;
    font-weight: 600; font-family: 'JetBrains Mono', monospace;
    background: rgba(255,255,255,0.05); color: var(--text-secondary);
    border: 1px solid var(--border);
  }

  /* EXPERIENCE */
  .timeline { position: relative; padding-left: 2rem; }
  .timeline::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 2px; background: linear-gradient(to bottom, var(--accent), var(--cyan), var(--emerald), transparent);
  }
  .timeline-item { position: relative; padding-bottom: 2.5rem; }
  .timeline-item::before {
    content: ''; position: absolute; left: -2rem; top: 6px;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--accent); border: 2px solid var(--bg-primary);
    margin-left: -4px;
  }
  .timeline-role { font-weight: 700; font-size: 1.05rem; }
  .timeline-company { color: var(--accent); font-size: 0.9rem; font-weight: 500; }
  .timeline-period { color: var(--text-muted); font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; margin: 0.3rem 0; }
  .timeline-desc { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; }

  /* PUBLICATIONS & EDUCATION */
  .pub-card, .edu-card {
    background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
    padding: 1.5rem; margin-bottom: 1rem; transition: all 0.3s;
  }
  .pub-card:hover, .edu-card:hover { border-color: var(--accent); }
  .pub-type, .edu-field { color: var(--text-muted); font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; margin-top: 0.3rem; }
  .edu-degree { font-weight: 600; font-size: 1rem; }

  /* CONTACT */
  .contact-section { text-align: center; padding: 6rem 2rem 4rem; }
  .contact-title { font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 0.8rem; }
  .contact-subtitle { color: var(--text-secondary); max-width: 500px; margin: 0 auto 2.5rem; line-height: 1.6; }
  .contact-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
  .contact-item {
    display: flex; align-items: center; gap: 0.6rem;
    padding: 0.8rem 1.5rem; background: var(--bg-card); border: 1px solid var(--border);
    border-radius: 10px; color: var(--text-secondary); font-size: 0.9rem;
    transition: all 0.3s; text-decoration: none;
  }
  .contact-item:hover { border-color: var(--accent); color: var(--text-primary); transform: translateY(-2px); }
  .contact-icon { font-size: 1.1rem; }

  /* FOOTER */
  footer {
    text-align: center; padding: 2rem; border-top: 1px solid var(--border);
    color: var(--text-muted); font-size: 0.8rem;
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink { 50% { opacity: 0; } }

  .fade-in {
    opacity: 0; transform: translateY(25px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* MOBILE NAV */
  .hamburger {
    display: none; flex-direction: column; gap: 5px; cursor: pointer;
    background: none; border: none; padding: 4px;
  }
  .hamburger span {
    width: 22px; height: 2px; background: var(--text-primary);
    transition: all 0.3s;
  }
  .mobile-menu {
    display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(10,10,15,0.97); z-index: 99;
    flex-direction: column; justify-content: center; align-items: center; gap: 2rem;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    color: var(--text-primary); text-decoration: none; font-size: 1.3rem;
    font-weight: 600; letter-spacing: 1px;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .about-grid { grid-template-columns: 1fr; gap: 2rem; }
    .skills-grid { grid-template-columns: 1fr; }
    .hero { padding: 6rem 1.5rem 3rem; }
    section { padding: 4rem 1.5rem; }
    .hero-name { letter-spacing: -1px; }
    .contact-grid { flex-direction: column; align-items: center; }
    nav { padding: 0.8rem 1.2rem; }
  }
`;

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-in ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const d = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{css}</style>
      <div className="noise" />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {Object.entries(d.nav).map(([key, val]) => (
          <a key={key} onClick={() => navClick(key)} style={{cursor:"pointer"}}>{val}</a>
        ))}
        <div className="lang-toggle" style={{marginTop:"1rem"}}>
          <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <button className={`lang-btn ${lang === "pt" ? "active" : ""}`} onClick={() => setLang("pt")}>PT</button>
        </div>
      </div>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">{"<VEA />"}</div>
        <div className="nav-links">
          {Object.entries(d.nav).map(([key, val]) => (
            <a key={key} onClick={() => navClick(key)} style={{cursor:"pointer"}}>{val}</a>
          ))}
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            <button className={`lang-btn ${lang === "pt" ? "active" : ""}`} onClick={() => setLang("pt")}>PT</button>
          </div>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-bg-2" />
        <div className="hero-content">
          <div className="hero-greeting">{d.hero.greeting}</div>
          <h1 className="hero-name">
            {d.hero.name}{" "}
            <span className="gradient">{d.hero.surname}</span>
          </h1>
          <div className="hero-title">{d.hero.title}</div>
          <p className="hero-subtitle">{d.hero.subtitle}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navClick("projects")}>{d.hero.cta}</button>
            <button className="btn-outline" onClick={() => navClick("contact")}>{d.hero.cv}</button>
          </div>
          <div className="hero-terminal">
            <div className="terminal-dots">
              <div className="terminal-dot" style={{background:"#ff5f57"}} />
              <div className="terminal-dot" style={{background:"#febc2e"}} />
              <div className="terminal-dot" style={{background:"#28c840"}} />
            </div>
            <div className="terminal-line"><span className="cmd">$</span> python <span className="flag">--version</span></div>
            <div className="terminal-line"><span className="val">Python 3.11.x</span></div>
            <div className="terminal-line"><span className="cmd">$</span> vitor.<span className="flag">skills</span>()</div>
            <div className="terminal-line"><span className="val">["PyTorch", "FastAPI", "Docker", "LangChain", "XAI", "RAG"]</span></div>
            <div className="terminal-line"><span className="cmd">$</span> vitor.<span className="flag">status</span></div>
            <div className="terminal-line"><span className="val">{lang === "en" ? "Building intelligent systems..." : "Construindo sistemas inteligentes..."}</span><span className="terminal-cursor" /></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <FadeIn>
          <h2 className="section-title">{d.about.title}</h2>
          <div className="section-line" />
        </FadeIn>
        <div className="about-grid">
          <FadeIn delay={100}>
            <div className="about-text">
              <p>{d.about.p1}</p>
              <p>{d.about.p2}</p>
              <p>{d.about.p3}</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="about-stats">
              {d.about.stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <FadeIn>
          <h2 className="section-title">{d.skills.title}</h2>
          <div className="section-line" />
        </FadeIn>
        <div className="skills-grid">
          {d.skills.categories.map((cat, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <span className="skill-name">{cat.name}</span>
                </div>
                <div className="skill-items">
                  {cat.items.map((item, j) => <span className="skill-tag" key={j}>{item}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <FadeIn>
          <h2 className="section-title">{d.projects.title}</h2>
          <div className="section-line" />
        </FadeIn>
        <div className="projects-grid">
          {d.projects.items.map((proj, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="project-card">
                <div className="project-accent" style={{ background: proj.color }} />
                <div>
                  <div className="project-tag" style={{ color: proj.color }}>{proj.tag}</div>
                  <div className="project-title">{proj.title}</div>
                </div>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tech">
                  {proj.tech.map((t, j) => <span className="tech-pill" key={j}>{t}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <FadeIn>
          <h2 className="section-title">{d.experience.title}</h2>
          <div className="section-line" />
        </FadeIn>
        <div className="timeline">
          {d.experience.items.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="timeline-item">
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <FadeIn>
          <h2 className="section-title">{d.education.title}</h2>
          <div className="section-line" />
        </FadeIn>
        {d.education.items.map((item, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="edu-card">
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-field">{item.field}</div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* PUBLICATIONS */}
      <section id="publications">
        <FadeIn>
          <h2 className="section-title">{d.publications.title}</h2>
          <div className="section-line" />
        </FadeIn>
        {d.publications.items.map((item, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="pub-card">
              <div style={{ fontWeight: 600 }}>{item.title}</div>
              <div className="pub-type">{item.type}</div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <FadeIn>
          <h2 className="contact-title">{d.contact.title}</h2>
          <p className="contact-subtitle">{d.contact.subtitle}</p>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="contact-grid">
            <a className="contact-item" href={`mailto:${d.contact.email}`}>
              <span className="contact-icon">✉</span> {d.contact.email}
            </a>
            <a className="contact-item" href={`tel:${d.contact.phone}`}>
              <span className="contact-icon">☎</span> {d.contact.phone}
            </a>
            <a className="contact-item" href={`https://${d.contact.linkedin}`} target="_blank" rel="noreferrer">
              <span className="contact-icon">in</span> {d.contact.linkedin}
            </a>
            <span className="contact-item">
              <span className="contact-icon">📍</span> {d.contact.location}
            </span>
          </div>
        </FadeIn>
      </section>

      <footer>{d.footer} — {new Date().getFullYear()}</footer>
    </>
  );
}
