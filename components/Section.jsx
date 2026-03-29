import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, children, className = '', title, titleClassName = '' }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // Only animate if a title exists
    if (titleRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Triggers when the top of the section hits 80% down the screen
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(titleRef.current, 
        { y: -20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
      .fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power2.out', transformOrigin: 'center' },
        "-=0.3"
      );
    }
  }, { scope: sectionRef });

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`relative py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        {title && (
          <div className="mb-12 md:mb-16 text-center">
            <h2 
              ref={titleRef}
              className={`text-3xl sm:text-4xl font-bold text-neutral-100 ${titleClassName} opacity-0`}
            >
              {title}
            </h2>
            <div 
              ref={lineRef}
              className="w-24 h-1.5 mx-auto mt-4 bg-primary rounded-full opacity-0 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
            ></div>
          </div>
        )}
        
        {/* Child components handle their own specific GSAP stagger animations */}
        <div className="relative">
         {children}
        </div>
      </div>
    </section>
  );
};

export default Section;