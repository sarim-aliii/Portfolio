import { useRef } from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ... (Keep your existing skillsData array exactly as it is) ...
const skillsData = [
  { name: 'Java', proficiency: 'Proficient', category: 'Programming Languages', description: "Robust, object-oriented language for enterprise-level application development, Android apps, and large systems." },
  { name: 'JavaScript(ES6+)', proficiency: 'Proficient', category: 'Programming Languages', description: "Core language for web development, enabling interactive and dynamic content on websites." },
  { name: 'TypeScript', proficiency: 'Proficient', category: 'Programming Languages', description: "A statically typed superset of JavaScript that enhances code quality, scalability, and maintainability with type safety and modern development features." },
  { name: 'Python', proficiency: 'Proficient', category: 'Programming Languages', description: "Versatile language known for its readability, widely used in web development, data science, AI, and scripting." },

  { name: 'React', proficiency: 'Proficient', category: 'Frameworks/Libraries', description: "A popular JavaScript library for building declarative and efficient user interfaces based on components." },
  { name: 'Node.js', proficiency: 'Expert', category: 'Frameworks/Libraries', description: "Backend JavaScript runtime environment that allows running JavaScript code on the server-side." },
  { name: 'Express.js', proficiency: 'Proficient', category: 'Frameworks/Libraries', description: "Minimalist and flexible Node.js web application framework for building APIs and web servers." },
  { name: 'Tailwind CSS', proficiency: 'Proficient', 'category': 'Frameworks/Libraries', description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML." },
  { name: 'BootStrap', proficiency: 'Proficient', 'category': 'Frameworks/Libraries', description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML." },
  { name: 'Flask', proficiency: 'Proficient', category: 'Frameworks/Libraries', description: "A lightweight Python web framework used to build scalable backend applications and REST APIs with minimal boilerplate and flexible architecture."},

  {"name": "LangChain", "proficiency": "Proficient", "category": "AI/LLM Development", "description": "A comprehensive framework for developing applications powered by LLMs. It provides modular components for prompt management, model interaction, data retrieval (RAG), and agent creation, simplifying the process of building complex, context-aware AI systems."
  },
  {
    "name": "LangGraph",
    "proficiency": "Proficient",
    "category": "AI/LLM Development",
    "description": "A library for building robust, stateful multi-agent systems on top of LangChain. It allows developers to define complex workflows as cyclical graphs, enabling advanced patterns like parallel execution and agent revision loops."
  },
  {
    "name": "LangSmith",
    "proficiency": "Proficient",
    "category": "AI/LLM Development & Observability",
    "description": "A unified platform for debugging, testing, evaluating, and monitoring LLM applications. It provides full observability into agent traces, making it easier to understand model behavior, diagnose errors, and improve performance."
  },
  
  { name: 'MongoDB', proficiency: 'Proficient', category: 'Databases', description: "A NoSQL document-oriented database that stores data in flexible, JSON-like documents, suitable for scalable applications." },
  { name: 'MySQL', proficiency: 'Proficient', category: 'Databases', description: "Widely-used open-source relational database management system, popular for web applications." },

  { name: 'Git & GitHub', proficiency: 'Expert', category: 'Tools', description: "Essential version control system (Git) and web-based hosting service (GitHub) for collaboration and code management." },
  { name: 'Firebase', proficiency: 'Expert', category: 'Tools', description: "Google's Backend-as-a-Service (BaaS) platform for building web and mobile apps with services like authentication, NoSQL databases, and hosting." },
  { name: 'Appwrite', proficiency: 'Proficient', category: 'Tools', description: "An open-source, self-hostable Backend-as-a-Service (BaaS) platform that provides developers with a set of APIs for authentication, databases, and storage." },
  { name: 'Figma', proficiency: 'Proficient', category: 'Tools', description: "A collaborative interface design tool for creating wireframes, prototypes, and user interfaces." },

  { name: 'Agile Development', proficiency: 'Proficient', category: 'Concepts', description: "Iterative approach to project management and software development that helps teams deliver value faster." },
  { name: 'RESTful APIs', proficiency: 'Expert', category: 'Concepts', description: "Architectural style for designing networked applications, focusing on stateless client-server communication." },
  { name: 'Data Structures & Algorithms', proficiency: 'Expert', category: 'Concepts', description: "Fundamental computer science concepts for organizing data efficiently and solving problems effectively." },
];

// Upgraded to modern, translucent badge styles
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