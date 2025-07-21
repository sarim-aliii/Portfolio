import { useRef, useEffect, useState } from 'react';


const Section = ({ id, children, className = '', title, titleClassName = '' }) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, 
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasIntersected]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`group/section py-16 md:py-24 transition-opacity duration-700 ease-out ${className} ${hasIntersected ? 'opacity-100 is-visible' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {title && (
          <div className={`mb-12 md:mb-16 text-center opacity-0 ${hasIntersected ? 'animate-fade-in-up' : ''}`}>
            <h2 className={`text-3xl sm:text-4xl font-bold text-neutral-100 ${titleClassName} ${hasIntersected ? 'animate-title-breathe' : ''}`}>
              {title}
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-primary rounded"></div>
          </div>
        )}
        <div 
            className={`opacity-0 ${hasIntersected ? 'animate-fade-in-up' : ''}`}
            style={hasIntersected ? { animationDuration: '0.7s' } : {animationDuration: '0.7s'}}
        >
         {children}
        </div>
      </div>
    </section>
  );
};

export default Section;