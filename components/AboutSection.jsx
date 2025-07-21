import { useState, useEffect } from 'react';
import { SECTION_IDS, RESUME_DOWNLOAD_LINK } from '../constants';
import Section from './Section';
import LightbulbIcon from './icons/LightbulbIcon';
import CodeBracketIcon from './icons/CodeBracketIcon';
import BrainCircuitIcon from './icons/BrainCircuitIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';


const journeyData = [
  {
    id: 'j1',
    icon: <LightbulbIcon className="w-8 h-8 text-secondary" />,
    title: 'Spark of Curiosity',
    description: 'My fascination with technology began with wondering how websites and games were built, sparking a desire to create my own digital experiences.',
  },
  {
    id: 'j2',
    icon: <CodeBracketIcon className="w-8 h-8 text-secondary" />,
    title: 'First Lines of Code',
    description: 'Writing my first "Hello, World!" program was a magical moment. Since then, I\'ve been captivated by the power of code to bring ideas to life.',
  },
  {
    id: 'j3',
    icon: <BrainCircuitIcon className="w-8 h-8 text-secondary" />,
    title: 'Diving Deeper',
    description: 'From DSA and web development to exploring AI, I continuously seek to expand my knowledge and tackle more complex challenges in the CS landscape.',
  },
];

const philosophyData = [
  {
    id: 'p1',
    title: 'Innovation & Creativity',
    description: 'Striving to find novel solutions and thinking outside the box.',
    details: 'I believe true progress comes from challenging a_status_quo and creatively applying technology to solve real-world problems. I enjoy experimenting with new tools and approaches to build unique and impactful solutions.'
  },
  {
    id: 'p2',
    title: 'Lifelong Learning',
    description: 'The tech world is ever-evolving, and so is my learning journey.',
    details: 'My passion for CS is fueled by a commitment to continuous learning. I actively seek out new technologies, concepts, and best practices to stay at the forefront of innovation and refine my skills.'
  },
  {
    id: 'p3',
    title: 'Impact-Driven Development',
    description: 'Focusing on creating software that makes a tangible difference.',
    details: 'For me, the ultimate goal of software development is to create solutions that are not only technically sound but also provide real value and positive impact to users and society.'
  },
];

const aboutImages = [
  "/img/workspace.jpeg",
  "/img/project-team.png",
  "/img/hobby.jpg",
];

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section id={SECTION_IDS.ABOUT} title="About Me" className="bg-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 items-start">
        <div className="lg:col-span-3 space-y-10">
          <p className="text-neutral-200 text-lg md:text-xl leading-relaxed opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: '0.1s'}}>
            Hi there! I'm <span className="font-bold text-primary-light">Sarim Ali</span>, a driven Computer Science student with a profound interest in developing impactful software. My journey into the world of coding began with a simple "Hello, World!" and has since evolved into a passion for solving complex problems through elegant and efficient code.
          </p>

          {/* My Journey */}
          <div className="opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">My Journey So Far</h3>
            <div className="space-y-6">
              {journeyData.map((item, index) => (
                <div key={item.id} className="flex items-start gap-4 p-4 bg-neutral-700/30 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow duration-300 opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: `${0.4 + index * 0.15}s`}}>
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-secondary-light">{item.title}</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-semibold text-neutral-100 mb-6">Core Philosophy</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {philosophyData.map((item, index) => (
                <div key={item.id} className="group/philosophy bg-neutral-700/50 p-5 rounded-lg shadow-lg hover:bg-neutral-700 transition-all duration-300 opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: `${0.7 + index * 0.15}s`}}>
                  <h4 className="font-semibold text-xl text-primary-light mb-2">{item.title}</h4>
                  <p className="text-neutral-300 mb-3 text-sm">{item.description}</p>
                  <p className="text-neutral-400 text-xs leading-relaxed max-h-0 opacity-0 group-hover/philosophy:max-h-40 group-hover/philosophy:opacity-100 group-hover/philosophy:mt-2 transition-all duration-500 ease-in-out">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8 opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: '0.2s'}}>
          {/* Image Slideshow */}
          <div className="relative w-full aspect-[4/3] rounded-xl shadow-2xl overflow-hidden border-4 border-neutral-700 group-[.is-visible]/section:animate-subtle-pulse" style={{animationDelay: '0.4s'}}>
            {aboutImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`About me - aspect ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/50 via-transparent to-transparent"></div>
          </div>
          
          <div className="text-center lg:text-left opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in" style={{animationDelay: '0.5s'}}>
            <a
              href={RESUME_DOWNLOAD_LINK}
              download="Sarim_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md btn-glow-primary transition-transform hover:scale-105"
            >
              Download My Resume
            </a>
          </div>

          {/* Currently Exploring */}
           <div className="bg-neutral-700/60 p-6 rounded-lg shadow-xl opacity-0 group-[.is-visible]/section:animate-slide-up-fade-in group-[.is-visible]/section:animate-subtle-pulse" style={{animationDelay: '0.8s'}}>
            <h4 className="text-xl font-semibold text-secondary-light mb-3 flex items-center">
              <ChevronRightIcon className="w-6 h-6 mr-2 text-secondary" />
              Currently Exploring
            </h4>
            <ul className="space-y-2 text-neutral-300 text-sm list-inside">
              <li className="flex items-center"><span className="text-secondary mr-2">•</span> Advanced AI</li>
              <li className="flex items-center"><span className="text-secondary mr-2">•</span> Mobile Application Development</li>
              <li className="flex items-center"><span className="text-secondary mr-2">•</span> Full-Stack Web Applications</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;