import { useEffect, useState, useRef } from 'react';
import { SECTION_IDS, PHOTO_URL } from '../constants';
import Section from './Section';


const HeroBackgroundSVG = ({ mousePos }) => {
  const [gridSize] = useState(50); 
  const [numPoints] = useState(30);
  const [points, setPoints] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const newPoints = Array.from({ length: numPoints }, (_, i) => ({
      x: Math.random() * 100, // as percentage
      y: Math.random() * 100, 
      id: `p${i}`
    }));
    setPoints(newPoints);
  }, [numPoints]);

  const parallaxFactor = 0.01; // How much elements react to mouse

  return (
    <svg 
      ref={svgRef}
      className="hero-svg-bg absolute inset-0 w-full h-full" 
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="gridPattern" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
          <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke="rgba(129, 140, 248, 0.03)" strokeWidth="0.5"/>
        </pattern>
         <filter id="subtleBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />
      
      {points.map((p1, i) => 
        points.slice(i + 1).map(p2 => {
          const distSq = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
          if (distSq < Math.pow(25, 2)) {
            return (
              <line 
                key={`${p1.id}-${p2.id}`}
                x1={`${p1.x + (mousePos.x - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`} 
                y1={`${p1.y + (mousePos.y - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`}
                x2={`${p2.x + (mousePos.x - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`} 
                y2={`${p2.y + (mousePos.y - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`}
                className="constellation-line"
                filter="url(#subtleBlur)"
              />
            );
          }
          return null;
        })
      )}

      {points.map(p => (
        <circle 
          key={p.id} 
          cx={`${p.x + (mousePos.x - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`} 
          cy={`${p.y + (mousePos.y - 50) * parallaxFactor * (Math.random() * 0.5 + 0.5)}%`} 
          r={`${Math.random() * 1.5 + 0.5}`} 
          className="constellation-point"
          style={{ animationDelay: `${Math.random() * 2}s`}}
        />
      ))}
    </svg>
  );
};


const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showInnovator, setShowInnovator] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  
  const typeTargetText = "Software Engineer | Web Developer | ";
  const innovatorText = "Problem Solver";
  const typingSpeed = 70;
  const innovatorDelay = 500;

  const sectionContentRef = useRef(null); 
  const spotlightRef = useRef(null); 
  const [spotlightVisible, setSpotlightVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }); 

  useEffect(() => {
    if (typedText.length < typeTargetText.length) {
      setShowCaret(true);

      const timer = setTimeout(() => {
        setTypedText(typeTargetText.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    } 
    else {
      setShowCaret(false);

      const innovatorTimer = setTimeout(() => {
        setShowInnovator(true);
      }, innovatorDelay);

      return () => clearTimeout(innovatorTimer);
    }
  }, [typedText, typeTargetText]);

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (spotlightRef.current) {
        const rect = spotlightRef.current.getBoundingClientRect();
        const xSpot = event.clientX - rect.left;
        const ySpot = event.clientY - rect.top;
        spotlightRef.current.style.setProperty('--mouse-x', `${xSpot}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${ySpot}px`);
      }

      // background parallax
      const xSVG = (event.clientX / window.innerWidth) * 100;
      const ySVG = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x: xSVG, y: ySVG });
    };
    
    const currentSectionContentRef = sectionContentRef.current; 
     if (currentSectionContentRef) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSpotlightVisible(true);
                    window.addEventListener('mousemove', handleMouseMove);
                } 
                else {
                    setSpotlightVisible(false);
                    window.removeEventListener('mousemove', handleMouseMove);
                }
            }, { threshold: 0.1}
        );

        const parentSection = currentSectionContentRef.closest('section');
        if (parentSection) {
            observer.observe(parentSection);
        }
        
        return () => {
            if (parentSection) {
              observer.unobserve(parentSection);
            }
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }
  }, []);


  return (
    <Section 
      id={SECTION_IDS.HOME} 
      className="group/section min-h-screen flex items-center pt-16 md:pt-0 
                 bg-neutral-950 relative overflow-hidden" 
    >
      <HeroBackgroundSVG mousePos={mousePosition} />

      <div ref={spotlightRef} className="absolute inset-0 z-[5]">
        <div className={`hero-spotlight ${spotlightVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <div ref={sectionContentRef} className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 mb-4 opacity-0 group-[.is-visible]/section:animate-text-pop-up group-[.is-visible]/section:delay-[200ms]">
            Hello, I'm <span className="text-primary-light opacity-0 group-[.is-visible]/section:animate-glitch-and-assemble group-[.is-visible]/section:delay-[500ms] inline-block">Sarim Ali</span>
          </h1>
          
          <div className="h-10 sm:h-12 lg:h-14 mb-6 relative opacity-0 group-[.is-visible]/section:animate-fade-in-up group-[.is-visible]/section:delay-[900ms]">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-secondary-light">
              <span className="whitespace-nowrap overflow-hidden inline-block align-bottom">
                {typedText}
              </span>
              {showCaret && typedText.length < typeTargetText.length && (
                <span className="border-r-4 border-secondary-light animate-caret-blink inline-block h-[1em] relative top-[0.1em] ml-px"></span>
              )}
              {showInnovator && (
                <span className="inline-block opacity-0 animate-innovator-pop ml-1">
                  {innovatorText}
                </span>
              )}
            </p>
          </div>

          <p className="text-lg text-neutral-300 mb-8 max-w-xl mx-auto md:mx-0 opacity-0 group-[.is-visible]/section:animate-fade-in-up group-[.is-visible]/section:delay-[1200ms]">
            A passionate Computer Science student dedicated to crafting innovative software solutions and exploring the frontiers of technology and hands-on experience in Data Structures and Algorithms.
            Currently focused on full-stack development and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 group-[.is-visible]/section:animate-fade-in-up group-[.is-visible]/section:delay-[1400ms]">
            <button
              onClick={() => navigateToSection(SECTION_IDS.PROJECTS)}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md btn-glow-primary"
            >
              View My Projects
            </button>
            <button
              onClick={() => navigateToSection(SECTION_IDS.ABOUT)}
              className="bg-transparent hover:bg-neutral-700 text-neutral-100 font-semibold py-3 px-8 rounded-lg border-2 border-neutral-400 btn-glow-outline group-[.is-visible]/section:delay-[100ms]"
            >
              Learn More About Me
            </button>
          </div>
        </div>
        
        <div className="md:w-2/5 flex justify-center opacity-0 group-[.is-visible]/section:animate-slide-in-from-right group-[.is-visible]/section:delay-[800ms]">
          <img
            src={PHOTO_URL}
            alt="Sarim Ali"
            className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-primary"
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;