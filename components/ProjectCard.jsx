import { useRef } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  // 3D Hover Tilt Effect using GSAP
  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // Create fast, performant setters for rotation
    const xTo = gsap.quickTo(card, "rotationY", { ease: "power3", duration: 0.5 });
    const yTo = gsap.quickTo(card, "rotationX", { ease: "power3", duration: 0.5 });

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse X position inside card
      const y = e.clientY - rect.top;  // Mouse Y position inside card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation limits (max 8 degrees)
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      xTo(rotateY);
      yTo(rotateX);
    };

    const handleMouseLeave = () => {
      // Reset rotation when mouse leaves
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div className="project-card-container h-full perspective-[1000px]"> 
      <div 
        ref={cardRef} 
        className="bg-neutral-800 rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-primary/30 h-full border border-neutral-700/50 transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="overflow-hidden h-48 relative"> 
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow bg-neutral-800/90 backdrop-blur-sm z-10" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-2xl font-semibold text-primary-light mb-2">{project.title}</h3>
          <p className="text-neutral-300 text-sm mb-4 flex-grow">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-400 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={tech} 
                  className="bg-neutral-700/50 border border-neutral-600 text-secondary-light text-xs px-2 py-1 rounded-full transition-colors hover:bg-neutral-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto flex space-x-4 pt-4 border-t border-neutral-700/50">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center group/link"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GitHubIcon className="w-5 h-5 mr-1 group-hover/link:fill-primary transition-colors" /> GitHub
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center group/link"
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLinkIcon className="w-5 h-5 mr-1 group-hover/link:stroke-primary transition-colors" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;