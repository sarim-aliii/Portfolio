import { SECTION_IDS } from '../constants';
import Section from './Section';


const skillsData = [
  { name: 'Java', proficiency: 'Proficient', category: 'Programming Languages', description: "Robust, object-oriented language for enterprise-level application development, Android apps, and large systems." },
  { name: 'JavaScript(ES6+)', proficiency: 'Proficient', category: 'Programming Languages', description: "Core language for web development, enabling interactive and dynamic content on websites." },
  { name: 'TypeScript', proficiency: 'Proficient', category: 'Programming Languages', description: "A statically typed superset of JavaScript that enhances code quality, scalability, and maintainability with type safety and modern development features." },
  { name: 'Python', proficiency: 'Familiar', category: 'Programming Languages', description: "Versatile language known for its readability, widely used in web development, data science, AI, and scripting." },

  { name: 'React', proficiency: 'Proficient', category: 'Frameworks/Libraries', description: "A popular JavaScript library for building declarative and efficient user interfaces based on components." },
  { name: 'Node.js', proficiency: 'Expert', category: 'Frameworks/Libraries', description: "Backend JavaScript runtime environment that allows running JavaScript code on the server-side." },
  { name: 'Express.js', proficiency: 'Proficient', category: 'Frameworks/Libraries', description: "Minimalist and flexible Node.js web application framework for building APIs and web servers." },
  { name: 'Tailwind CSS', proficiency: 'Proficient', 'category': 'Frameworks/Libraries', description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML." },
  { name: 'BootStrap', proficiency: 'Proficient', 'category': 'Frameworks/Libraries', description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML." },
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
  { name: 'MySQL', proficiency: 'Familiar', category: 'Databases', description: "Widely-used open-source relational database management system, popular for web applications." },

  { name: 'Git & GitHub', proficiency: 'Expert', category: 'Tools', description: "Essential version control system (Git) and web-based hosting service (GitHub) for collaboration and code management." },
  {
    name: 'Firebase', proficiency: 'Proficient', category: 'Tools', description: "Google's Backend-as-a-Service (BaaS) platform for building web and mobile apps with services like authentication, NoSQL databases, and hosting."
  },
  {
    name: 'Appwrite', proficiency: 'Proficient', category: 'Tools', description: "An open-source, self-hostable Backend-as-a-Service (BaaS) platform that provides developers with a set of APIs for authentication, databases, and storage."
  },
  { name: 'Figma', proficiency: 'Proficient', category: 'Tools', description: "A collaborative interface design tool for creating wireframes, prototypes, and user interfaces." },


  { name: 'Agile Development', proficiency: 'Proficient', category: 'Concepts', description: "Iterative approach to project management and software development that helps teams deliver value faster." },
  { name: 'RESTful APIs', proficiency: 'Expert', category: 'Concepts', description: "Architectural style for designing networked applications, focusing on stateless client-server communication." },
  { name: 'Data Structures & Algorithms', proficiency: 'Expert', category: 'Concepts', description: "Fundamental computer science concepts for organizing data efficiently and solving problems effectively." },
];


const proficiencyColors = {
  'Expert': 'bg-green-500/80 text-green-50',
  'Proficient': 'bg-sky-500/80 text-sky-50',
  'Familiar': 'bg-yellow-500/80 text-yellow-50',
};

const SkillsSection = () => {
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  return (
    <Section id={SECTION_IDS.SKILLS} title="My Skills" className="bg-neutral-900">
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-primary-light mb-6">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative bg-neutral-800 p-4 rounded-lg shadow-lg hover:shadow-primary/50 
                             opacity-0 animate-skill-item-appear" // Base for animation
                    style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay
                  >
                    <div className="flex items-center justify-between transition-transform duration-300 group-hover:scale-105">
                      <span className="text-neutral-100 font-medium">{skill.name}</span>
                    </div>
                    <span className={`mt-2 inline-block text-xs px-2.5 py-1 rounded-full ${proficiencyColors[skill.proficiency]}`}>
                      {skill.proficiency}
                    </span>
                    {skill.description && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 
                                   bg-neutral-700 text-neutral-100 text-xs rounded-md shadow-xl 
                                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                   transition-all duration-300 ease-in-out pointer-events-none z-20">
                        <p className="font-semibold text-sm mb-1 text-primary-light">{skill.name}</p>
                        {skill.description}
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