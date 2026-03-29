import { useState, useEffect, useRef } from 'react';
import { SECTION_IDS, RESUME_DOWNLOAD_LINK } from '../constants';
import Section from './Section';
import LightbulbIcon from './icons/LightbulbIcon';
import CodeBracketIcon from './icons/CodeBracketIcon';
import BrainCircuitIcon from './icons/BrainCircuitIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef(null);
  const magneticButtonRef = useRef(null);

  // Image Slideshow Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // 1. Scroll Reveal Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Triggers when the top of the section hits 75% down the viewport
      }
    });

    // Set initial states
    gsap.set('.about-text', { y: 30, opacity: 0 });
    gsap.set('.journey-item', { x: -30, opacity: 0 });
    gsap.set('.philosophy-card', { y: 30, opacity: 0 });
    gsap.set('.about-right-col', { y: 50, opacity: 0 });

    // Sequence the animations
    tl.to('.about-text', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .to('.journey-item', { x: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'back.out(1.2)' }, "-=0.4")
      .to('.philosophy-card', { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, "-=0.2")
      .to('.about-right-col', { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, "-=1");

    // 2. Magnetic Button Effect
    const button = magneticButtonRef.current;
    if (button) {
      const xTo = gsap.quickTo(button, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(button, "y", { duration: 0.4, ease: "power3" });

      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect();
        // Calculate distance from center of button
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3; // 30% pull strength
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        // Snap back to center
        xTo(0);
        yTo(0);
        gsap.to(button, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, { scope: containerRef });

  return (
    <Section id={SECTION_IDS.ABOUT} title="About Me" className="bg-neutral-800">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-3 space-y-10">
          <p className="about-text text-neutral-200 text-lg md:text-xl leading-relaxed">
            Hi there! I'm <span className="font-bold text-primary-light">Sarim Ali</span>, a driven Computer Science student with a profound interest in developing impactful software. My journey into the world of coding began with a simple "Hello, World!" and has since evolved into a passion for solving complex problems through elegant and efficient code.
          </p>

          {/* My Journey */}
          <div>
            <h3 className="about-text text-2xl font-semibold text-neutral-100 mb-6">My Journey So Far</h3>
            <div className="space-y-6">
              {journeyData.map((item, index) => (
                <div key={item.id} className="journey-item flex items-start gap-4 p-4 bg-neutral-700/30 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow duration-300">
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
          <div>
            <h3 className="about-text text-2xl font-semibold text-neutral-100 mb-6">Core Philosophy</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {philosophyData.map((item, index) => (
                <div key={item.id} className="philosophy-card group/philosophy bg-neutral-700/50 p-5 rounded-lg shadow-lg hover:bg-neutral-700 transition-all duration-300 cursor-default">
                  <h4 className="font-semibold text-xl text-primary-light mb-2">{item.title}</h4>
                  <p className="text-neutral-300 mb-3 text-sm">{item.description}</p>
                  <div className="grid grid-rows-[0fr] group-hover/philosophy:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <p className="text-neutral-400 text-xs leading-relaxed overflow-hidden opacity-0 group-hover/philosophy:opacity-100 group-hover/philosophy:mt-2 transition-opacity duration-500 delay-100">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Image Slideshow with "Ken Burns" subtle zoom */}
          <div className="about-right-col relative w-full aspect-[4/3] rounded-xl shadow-2xl overflow-hidden border-4 border-neutral-700">
            {aboutImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`About me - aspect ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-105' // slight zoom in when active
                    : 'opacity-0 scale-100'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
          </div>
          
          {/* Magnetic Resume Button */}
          <div className="about-right-col text-center lg:text-left flex justify-center lg:justify-start">
            <div ref={magneticButtonRef} className="inline-block p-4 -m-4"> {/* Padding wrapper to increase magnetic hover area */}
              <a
                href={RESUME_DOWNLOAD_LINK}
                download="Sarim_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors border border-transparent hover:border-primary-light"
                style={{ willChange: 'transform' }}
              >
                Download My Resume
              </a>
            </div>
          </div>

          {/* Currently Exploring */}
          <div className="about-right-col bg-neutral-700/60 p-6 rounded-lg shadow-xl hover:shadow-primary/10 transition-shadow duration-500">
            <h4 className="text-xl font-semibold text-secondary-light mb-4 flex items-center">
              <ChevronRightIcon className="w-6 h-6 mr-2 text-secondary animate-pulse" />
              Currently Exploring
            </h4>
            <ul className="space-y-3 text-neutral-300 text-sm list-inside">
              <li className="flex items-center transform transition-transform hover:translate-x-2">
                <span className="text-secondary mr-3 text-lg">•</span> Advanced AI
              </li>
              <li className="flex items-center transform transition-transform hover:translate-x-2">
                <span className="text-secondary mr-3 text-lg">•</span> Mobile Application Development
              </li>
              <li className="flex items-center transform transition-transform hover:translate-x-2">
                <span className="text-secondary mr-3 text-lg">•</span> Full-Stack Web Applications
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default AboutSection;