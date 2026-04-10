import { useRef } from 'react';
import { SECTION_IDS, PROJECT_PLACEHOLDER_IMAGE_BASE } from '../constants';
import Section from './Section';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 'project1',
    title: 'Kairon AI',
    description: 'An AI-driven learning platform transforming static material into interactive experiences. Features an AI Tutor using the Socratic method, a Spaced Repetition System (SRS) for flashcards, semantic search, and interactive D3.js concept maps.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'D3.js', 'Web Speech API'],
    imageUrl: `/1.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/version2',
    liveDemoUrl: 'https://version2-mdrc.onrender.com/',
  },
  {
    id: 'project2',
    title: 'Airbnb Clone',
    description: 'A full-stack property rental platform. Integrated Cloudinary with Multer for multi-image upload, achieving a 60% improvement in image delivery. Features secure authentication via Passport.js, server-side validation with Joi, and interactive Mapbox geolocation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js', 'Mapbox', 'Cloudinary', 'Multer'],
    imageUrl: `/2.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Airbnb-Clone',
    liveDemoUrl: 'https://airbnb-clone-hj4h.onrender.com',
  },
  {
    id: 'project3',
    title: 'Personal Portfolio Website',
    description: 'This portfolio website, designed to showcase my skills and projects. Built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS'],
    imageUrl: `/3.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Portfolio',
    liveDemoUrl: 'https://sarim-ali-portfolio.netlify.app/',
  },
  {
    id: 'project4',
    title: 'Closure - Student Community App',
    description: 'An interactive platform designed to connect students, featuring forums, resource sharing, and real-time chat. The app facilitates collaboration and communication within a campus community, all powered by a MERN stack with real-time capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/06b6d4/FFFFFF?text=Student+Community`,
    githubUrl: 'https://github.com/sarim-aliii/Closure',
    liveDemoUrl: '#',
  },
  {
    id: 'project5',
    title: 'Docket - React Todo App',
    description: 'A dynamic and responsive to-do list application built with React. Features include creating, editing, deleting, and filtering tasks, with all data saved to the browser\'s local storage for persistence.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: `/5.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Docket---Todo-App',
    liveDemoUrl: 'https://docket-todo-app.netlify.app/',
  },
  {
    id: 'project6',
    title: 'Atmo - Weather App',
    description: 'A sleek, responsive weather application that provides real-time weather data for any location. Built by fetching data from the OpenWeatherMap API and designed with a clean, user-friendly interface using Material-UI.',
    technologies: ['React', 'JavaScript (ES6+)', 'Material-UI (MUI)', 'REST APIs'],
    imageUrl: `/6.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/atmo-weather-app',
    liveDemoUrl: 'https://atmo-weather-app.netlify.app',
  },
  {
    id: 'project7',
    title: 'Urban Bites - Restaurant Website',
    description: 'A visually appealing and fully responsive website for a modern restaurant. Features a dynamic menu, an elegant image gallery, and a functional contact form. Designed in Figma and built to provide a seamless user experience for customers.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Figma'],
    imageUrl: `/7.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Urban-Bites---Restaurant',
    liveDemoUrl: 'https://urban-bites-restaurant.onrender.com',
  },
  {
    id: 'project8',
    title: 'CardSpark - Digital Business Card Generator',
    description: 'An interactive web application for creating, customizing, and sharing digital business cards. Features a real-time editor, 12+ design templates, an accent color picker, AI-powered logo generation, and digital sharing via downloadable vCards and QR codes.',
    technologies: ['React', 'Vite', 'JavaScript (ES6+)', 'CSS', 'html2canvas', 'jsPDF', 'Stability AI API'],
    imageUrl: `/8.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/CardSpark---Business-Card-Generator',
    liveDemoUrl: 'https://cardsparkbusinesscardgenerator.netlify.app/',
  },
  {
    id: 'project9',
    title: 'PocketFlow - Expense Tracker Dashboard',
    description: 'A comprehensive personal finance dashboard built with React. Features full CRUD functionality, data visualization with dynamic charts, category filtering, multi-level sorting, dark mode, and a recurring transactions module. All data is saved persistently to local storage.',
    technologies: ['React', 'Vite', 'React Router', 'Chart.js', 'Framer Motion', 'CSS Variables'],
    imageUrl: `/9.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/PocketFlow-Expense-Tracker',
    liveDemoUrl: 'https://pocketflow-expense-tracker.netlify.app/',
  },
  {
    id: 'project10',
    title: 'Coview - COVID-19 Tracker',
    description: 'An interactive dashboard that visualizes global COVID-19 data in real-time. Features an interactive Leaflet map with data-driven circles, historical trend graphs via Chart.js, and a dynamic data table. Users can filter data by country and by metric (cases, recovered, deaths) for a comprehensive view.',
    technologies: ['React', 'Vite', 'Material-UI', 'Leaflet', 'React-Leaflet', 'Chart.js', 'Numeral.js', 'CSS'],
    imageUrl: `/10.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Coview---Covid-19-Tracker.git',
    liveDemoUrl: 'https://coview-virus-tracker.netlify.app/',
  },
  {
    id: 'project11',
    title: 'Spamurai - Intelligent Spam Detector',
    description: 'An intelligent spam detection tool that analyzes both raw text and the content of live web pages. Features an efficient machine learning model, interactive visualizations with Altair explaining the predictions, and a feedback loop for continuous improvement. The entire application is built with a user-friendly Streamlit web interface.',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Altair', 'BeautifulSoup', 'Requests'],
    imageUrl: `/11.jpg`,
    githubUrl: 'https://github.com/sarim-aliii/Spamurai--Spam-Email-Detector',
    liveDemoUrl: 'https://spamurai--spam-email-detector.streamlit.app/'
  },
  {
    id: 'project12',
    title: 'AgentDoc - A Conversational RAG Assistant',
    description: 'A sophisticated, conversational RAG (Retrieval-Augmented Generation) assistant built from the ground up. AgentDoc provides accurate, context-aware answers from a custom knowledge base. It features a full-featured Streamlit web interface, conversational memory to handle follow-up questions, a persistent chat history with SQLite, and robust security guardrails. The entire project is built using a modern, local-first tech stack.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'Hugging Face Transformers', 'ChromaDB', 'SQLite', 'Pandas', 'Pypdf'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/333333/FFFFFF?text=AgentDoc`,
    githubUrl: 'https://github.com/sarim-aliii/AgentDoc--RAG-Chat-Assistant',
    liveDemoUrl: 'https://agentdoc--rag-chat-assistant.streamlit.app/'
  },
  {
    id: "project13",
    title: "Ensemble AI Tag Extractor",
    description: "A sophisticated text analysis application that uses a multi-method ensemble to provide robust and context-aware keyword extraction. The system orchestrates three parallel methods using LangGraph. A final LLM agent aggregates and ranks the combined results.",
    technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini", "spaCy", "Pandas", "Matplotlib", "Pydantic"],
    imageUrl: `/13.jpg`,
    githubUrl: "https://github.com/sarim-aliii/ensemble-ai-tag-extractor",
    liveDemoUrl: "https://ensemble-ai-tag-extractor.streamlit.app/"
  },
  {
    id: "project14",
    title: "ReelFeel: IMDB Movie Review Sentiment Analysis",
    description: "A deep learning web application that classifies movie reviews as Positive or Negative using Recurrent Neural Networks (RNN). The system features end-to-end NLP preprocessing, including tokenization and sequence padding, to deliver real-time sentiment scores.",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "RNN", "NLP", "Scikit-learn", "WordCloud", "NumPy"],
    imageUrl: "/14.jpg",
    githubUrl: "https://github.com/sarim-aliii/imdb-sentiment-rnn",
    liveDemoUrl: "https://imdb-movie-review-analysis-rnn.streamlit.app/"
  },
  {
    id: "project15",
    title: "Next Word Prediction using LSTM",
    description: "An interactive deep learning application that uses Long Short-Term Memory (LSTM) networks to predict the most likely succeeding word in a given text sequence. The system features a sophisticated language model trained to capture long-range dependencies in text.",
    technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Streamlit", "NumPy", "Pickle", "NLP"],
    imageUrl: "/15.jpg",
    githubUrl: "https://github.com/sarim-aliii/next-word-prediction-lstm",
    liveDemoUrl: "https://sentence-next-word-prediction-lstm.streamlit.app/"
  },
  {
    "id": "project16",
    "title": "BMSCE Digital Excellence Portal",
    "description": "A next-generation institutional platform designed for modern academic administration. It features a multilingual AI academic advisor powered by Gemini Pro, an innovation hub showcasing advanced lab infrastructure, and a secure admin command center for managing courses, departments, and faculty.",
    "technologies": ["React 18", "TypeScript", "Vite", "Firebase", "Google Gemini API", "Tailwind CSS", "Framer Motion", "GSAP"],
    "imageUrl": "/16.jpg",
    "githubUrl": "https://github.com/sarim-aliii/browser-battle-codeathon",
    "liveDemoUrl": "https://browser-battle-codeathon.vercel.app/"
  },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.gsap-project-card');

    gsap.set(cards, { y: 100, opacity: 0 });

    ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          overwrite: true
        });
      },
      start: 'top 85%',
    });
  }, { scope: containerRef });

  return (
    <Section id={SECTION_IDS.PROJECTS} title="My Projects" className="bg-neutral-800">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
        {projectsData.map(project => (
          <div key={project.id} className="gsap-project-card group/card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;