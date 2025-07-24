import { SECTION_IDS, PROJECT_PLACEHOLDER_IMAGE_BASE } from '../constants';
import Section from './Section';
import ProjectCard from './ProjectCard';


const projectsData = [
  {
    id: 'project1',
    title: 'Airbnb Clone',
    description: 'A full-stack property rental platform inspired by Airbnb. Features user authentication, property listings, image uploads with Cloudinary, and interactive maps with Mapbox. Built with Node.js, Express, and EJS for server-side rendering.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Passport.js', 'Mapbox', 'Cloudinary'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/4f46e5/FFFFFF?text=Airbnb+Clone`,
    githubUrl: 'https://github.com/sarim-aliii/Airbnb-Clone',
    liveDemoUrl: 'https://airbnb-clone-hj4h.onrender.com',
  },
  {
    id: 'project2',
    title: 'Personal Portfolio Website',
    description: 'This portfolio website, designed to showcase my skills and projects. Built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/4F46E5/FFFFFF?text=Portfolio+Website`,
    githubUrl: 'https://github.com/sarim-aliii/Portfolio',
    liveDemoUrl: 'https://sarim-ali-portfolio.netlify.app/',
  },
  {
    id: 'project3',
    title: 'Closure - Student Community App',
    description: 'An interactive platform designed to connect students, featuring forums, resource sharing, and real-time chat. The app facilitates collaboration and communication within a campus community, all powered by a MERN stack with real-time capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/06b6d4/FFFFFF?text=Student+Community`,
    githubUrl: 'https://github.com/sarim-aliii/Closure',
    liveDemoUrl: '#',
  },
  {
    id: 'project4',
    title: 'Docket - React Todo App',
    description: 'A dynamic and responsive to-do list application built with React. Features include creating, editing, deleting, and filtering tasks, with all data saved to the browser\'s local storage for persistence.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/06B6D4/FFFFFF?text=Todo+App`,
    githubUrl: 'https://github.com/sarim-aliii/Docket---Todo-App',
    liveDemoUrl: 'https://docket-todo-app.netlify.app/',
  },
  {
    id: 'project5',
    title: 'Atmo - Weather App',
    description: 'A sleek, responsive weather application that provides real-time weather data for any location. Built by fetching data from the OpenWeatherMap API and designed with a clean, user-friendly interface using Material-UI.',
    technologies: ['React', 'JavaScript (ES6+)', 'Material-UI (MUI)', 'REST APIs'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/06B6D4/FFFFFF?text=Weather+App`,
    githubUrl: 'https://github.com/sarim-aliii/atmo-weather-app', 
    liveDemoUrl: 'https://atmo-weather-app.netlify.app',
  },
  {
    id: 'project6',
    title: 'Urban Bites - Restaurant Website',
    description: 'A visually appealing and fully responsive website for a modern restaurant. Features a dynamic menu, an elegant image gallery, and a functional contact form. Designed in Figma and built to provide a seamless user experience for customers.',
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Figma'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/c2410c/FFFFFF?text=Restaurant+Site`,
    githubUrl: 'https://github.com/sarim-aliii/Urban-Bites---Restaurant',
    liveDemoUrl: 'https://urban-bites-restaurant.onrender.com',
  },
  {
    id: 'project7',
    title: 'CardSpark - Digital Business Card Generator',
    description: 'An interactive web application for creating, customizing, and sharing digital business cards. Features a real-time editor, 12+ design templates, an accent color picker, AI-powered logo generation, and digital sharing via downloadable vCards and QR codes.',
    technologies: ['React', 'Vite', 'JavaScript (ES6+)', 'CSS', 'html2canvas', 'jsPDF', 'Stability AI API'],
    imageUrl: `${PROJECT_PLACEHOLDER_IMAGE_BASE}/4C6EF5/FFFFFF?text=CardSpark`,
    githubUrl: 'https://github.com/sarim-aliii/CardSpark---Business-Card-Generator',
    liveDemoUrl: 'https://cardsparkbusinesscardgenerator.netlify.app/',
  },
];

const ProjectsSection = () => {
  return (
    <Section id={SECTION_IDS.PROJECTS} title="My Projects" className="bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <div key={project.id} className="group/card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;