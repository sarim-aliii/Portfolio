import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container"> 
      <div className="bg-neutral-800 rounded-lg shadow-xl overflow-hidden flex flex-col project-card-tilt hover:shadow-primary/50 h-full">
        <div className="overflow-hidden h-48"> 
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover project-image-zoom"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold text-primary-light mb-2">{project.title}</h3>
          <p className="text-neutral-300 text-sm mb-4 flex-grow">{project.description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-400 mb-1">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={tech} 
                  className="tech-tag bg-neutral-700 text-secondary-light text-xs px-2 py-1 rounded-full opacity-0 group-hover/card:animate-tech-tag-appear" 
                  style={{ animationDelay: `${index * 0.05 + 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto flex space-x-4">
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