import { useRef } from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  // ===========================
  // Programming Languages
  // ===========================
  {
    name: "Java",
    proficiency: "Proficient",
    category: "Programming Languages",
    description:
      "Object-oriented programming language for enterprise applications, backend services, and scalable software development."
  },
  {
    name: "JavaScript (ES6+)",
    proficiency: "Proficient",
    category: "Programming Languages",
    description:
      "Modern JavaScript for building interactive web applications using contemporary language features."
  },
  {
    name: "TypeScript",
    proficiency: "Proficient",
    category: "Programming Languages",
    description:
      "Strongly typed JavaScript that improves scalability, maintainability, and developer productivity."
  },
  {
    name: "Python",
    proficiency: "Proficient",
    category: "Programming Languages",
    description:
      "Versatile programming language used for backend development, AI/ML, automation, and scripting."
  },
  {
    name: "HTML5 & CSS3",
    proficiency: "Proficient",
    category: "Programming Languages",
    description:
      "Core web technologies for building responsive and accessible user interfaces."
  },

  // ===========================
  // Frameworks & Libraries
  // ===========================
  {
    name: "React",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Component-based JavaScript library for building modern, responsive user interfaces."
  },
  {
    name: "Redux Toolkit",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Efficient state management solution for scalable React applications."
  },
  {
    name: "Node.js",
    proficiency: "Expert",
    category: "Frameworks/Libraries",
    description:
      "JavaScript runtime for building scalable backend services and REST APIs."
  },
  {
    name: "Express.js",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Minimal and flexible Node.js framework for web applications and APIs."
  },
  {
    name: "Spring Boot",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Framework for developing production-ready Java applications, REST APIs, and microservices."
  },
  {
    name: "Spring Data JPA",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Simplifies database access using JPA repositories and Hibernate."
  },
  {
    name: "Hibernate",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "ORM framework for mapping Java objects to relational databases."
  },
  {
    name: "Spring Security",
    proficiency: "Familiar",
    category: "Frameworks/Libraries",
    description:
      "Authentication and authorization framework for securing Spring applications."
  },
  {
    name: "Flask",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Lightweight Python framework for REST APIs and backend development."
  },
  {
    name: "Tailwind CSS",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Utility-first CSS framework for rapidly building modern user interfaces."
  },
  {
    name: "Bootstrap",
    proficiency: "Proficient",
    category: "Frameworks/Libraries",
    description:
      "Popular CSS framework for building responsive websites with reusable UI components."
  },

  // ===========================
  // AI / LLM
  // ===========================
  {
    name: "LangChain",
    proficiency: "Proficient",
    category: "AI/LLM Development",
    description:
      "Framework for building LLM-powered applications, RAG pipelines, and AI agents."
  },
  {
    name: "LangGraph",
    proficiency: "Proficient",
    category: "AI/LLM Development",
    description:
      "Framework for creating stateful AI agents and multi-agent workflows."
  },
  {
    name: "LangSmith",
    proficiency: "Proficient",
    category: "AI/LLM Development",
    description:
      "Platform for debugging, testing, evaluating, and monitoring LLM applications."
  },
  {
    name: "Machine Learning & NLP",
    proficiency: "Proficient",
    category: "AI/LLM Development",
    description:
      "Experience with deep learning, transformers, embeddings, NLP, and model evaluation."
  },
  {
    name: "MLflow",
    proficiency: "Familiar",
    category: "AI/LLM Development",
    description:
      "Platform for experiment tracking, model management, and ML lifecycle."
  },

  // ===========================
  // Databases
  // ===========================
  {
    name: "MySQL",
    proficiency: "Proficient",
    category: "Databases",
    description:
      "Relational database for transactional applications and SQL-based data management."
  },
  {
    name: "MongoDB",
    proficiency: "Proficient",
    category: "Databases",
    description:
      "NoSQL document database designed for scalable and flexible applications."
  },
  {
    name: "Postgres SQL",
    proficiency: "Proficient",
    category: "Databases",
    description:
      "Databases optimized for storing and searching vector embeddings in AI applications."
  },

  // ===========================
  // Cloud & Backend
  // ===========================
  {
    name: "REST APIs",
    proficiency: "Expert",
    category: "Cloud & Backend",
    description:
      "Designing scalable RESTful APIs following industry best practices."
  },
  {
    name: "JWT Authentication",
    proficiency: "Proficient",
    category: "Cloud & Backend",
    description:
      "Secure authentication and authorization using JSON Web Tokens."
  },
  {
    name: "Docker",
    proficiency: "Proficient",
    category: "Cloud & Backend",
    description:
      "Containerizing and deploying applications with Docker."
  },
  {
    name: "AWS (EC2 & S3)",
    proficiency: "Familiar",
    category: "Cloud & Backend",
    description:
      "Deploying applications and managing storage using Amazon Web Services."
  },
  {
    name: "Apache Kafka",
    proficiency: "Familiar",
    category: "Cloud & Backend",
    description:
      "Distributed event streaming platform for asynchronous communication between services."
  },
  {
    name: "Microservices",
    proficiency: "Familiar",
    category: "Cloud & Backend",
    description:
      "Developing modular backend systems using service-oriented architecture."
  },

  // ===========================
  // Tools
  // ===========================
  {
    name: "Git & GitHub",
    proficiency: "Expert",
    category: "Tools",
    description:
      "Version control, collaboration, branching strategies, and code management."
  },
  {
    name: "Maven",
    proficiency: "Proficient",
    category: "Tools",
    description:
      "Dependency management and build automation for Java applications."
  },
  {
    name: "Gradle",
    proficiency: "Familiar",
    category: "Tools",
    description:
      "Modern build automation tool for Java and multi-project builds."
  },
  {
    name: "JUnit",
    proficiency: "Familiar",
    category: "Tools",
    description:
      "Unit testing framework for Java applications."
  },
  {
    name: "Linux",
    proficiency: "Proficient",
    category: "Tools",
    description:
      "Working with Linux environments, shell commands, and server administration basics."
  },
  {
    name: "Firebase",
    proficiency: "Expert",
    category: "Tools",
    description:
      "Backend-as-a-Service platform providing authentication, databases, storage, and hosting."
  },
  {
    name: "Appwrite",
    proficiency: "Proficient",
    category: "Tools",
    description:
      "Open-source Backend-as-a-Service platform for authentication, databases, and storage."
  },
  {
    name: "Figma",
    proficiency: "Proficient",
    category: "Tools",
    description:
      "Designing wireframes, UI prototypes, and collaborative design systems."
  },

  // ===========================
  // Concepts
  // ===========================
  {
    name: "Data Structures & Algorithms",
    proficiency: "Expert",
    category: "Concepts",
    description:
      "Problem-solving using efficient algorithms and optimized data structures."
  },
  {
    name: "Object-Oriented Programming",
    proficiency: "Expert",
    category: "Concepts",
    description:
      "Strong understanding of encapsulation, inheritance, polymorphism, abstraction, and SOLID principles."
  },
  {
    name: "Design Patterns",
    proficiency: "Proficient",
    category: "Concepts",
    description:
      "Applying common software design patterns to create maintainable and scalable applications."
  },
  {
    name: "ORM (JPA/Hibernate)",
    proficiency: "Proficient",
    category: "Concepts",
    description:
      "Mapping Java objects to relational databases using JPA and Hibernate."
  },
  {
    name: "Agile Development",
    proficiency: "Proficient",
    category: "Concepts",
    description:
      "Collaborative software development using Agile methodologies and iterative delivery."
  }
];

const proficiencyStyles = {
  'Expert': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Proficient': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'Familiar': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const SkillsSection = () => {
  const containerRef = useRef(null);
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  useGSAP(() => {
    // Select all category blocks
    const categoryBlocks = gsap.utils.toArray('.skill-category-block');

    categoryBlocks.forEach((block) => {
      const title = block.querySelector('.category-title');
      const items = block.querySelectorAll('.skill-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: 'top 85%',
        }
      });

      // Set initial state
      gsap.set(title, { x: -20, opacity: 0 });
      gsap.set(items, { y: 20, opacity: 0, scale: 0.95 });

      // Animate title then stagger the skill items
      tl.to(title, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
        .to(items, { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.05, // Fast pop-in effect
          ease: 'back.out(1.5)' 
        }, "-=0.3");
    });
  }, { scope: containerRef });

  return (
    <Section id={SECTION_IDS.SKILLS} title="My Technical Skills" className="bg-neutral-900 overflow-hidden">
      <div ref={containerRef} className="space-y-16 max-w-5xl mx-auto">
        {categories.map(category => (
          <div key={category} className="skill-category-block">
            
            <h3 className="category-title text-2xl font-bold text-neutral-100 mb-8 flex items-center">
              <span className="w-8 h-px bg-primary mr-4 hidden sm:block"></span>
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-4 sm:gap-5">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item group relative bg-neutral-800/40 backdrop-blur-sm border border-neutral-700/50 p-4 rounded-xl hover:bg-neutral-800 hover:border-primary/50 transition-all duration-300 cursor-default flex-grow sm:flex-grow-0 min-w-[140px]" 
                  >
                    <div className="flex flex-col h-full justify-between gap-3">
                      <span className="text-neutral-100 font-semibold text-lg tracking-wide">{skill.name}</span>
                      <span className={`self-start text-xs px-3 py-1 rounded-full border ${proficiencyStyles[skill.proficiency]}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    
                    {/* Tooltip Hover Effect */}
                    {skill.description && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 p-4 
                                     bg-neutral-800 border border-neutral-700 text-neutral-300 text-sm rounded-xl shadow-2xl 
                                     opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                     transition-all duration-300 ease-in-out pointer-events-none z-20
                                     group-hover:-translate-y-2">
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px 
                                        border-8 border-transparent border-t-neutral-700"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[2px] 
                                        border-8 border-transparent border-t-neutral-800"></div>
                        
                        <p className="font-bold text-primary-light mb-1.5">{skill.name}</p>
                        <p className="leading-relaxed">{skill.description}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;