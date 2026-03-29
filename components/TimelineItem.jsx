import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const TimelineItem = ({ experience, index, isLast }) => {
  const itemRef = useRef(null);
  const dotRef = useRef(null);
  const cardRef = useRef(null);

  // Determine if the card should be on the left or right side of the central line
  // (Defaults to everything on the right for mobile screens)
  const isEven = index % 2 === 0;

  useGSAP(() => {
    // Create a specific timeline for this item that triggers when it scrolls into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%", // Trigger when the top of this item hits 80% down the viewport
        toggleActions: "play none none reverse" // Play down, reverse up
      }
    });

    // 1. Animate the timeline dot (pop in and glow)
    tl.fromTo(dotRef.current, 
      { scale: 0, opacity: 0, backgroundColor: '#262626', borderColor: '#404040' }, // neutral-800 / neutral-700
      { scale: 1, opacity: 1, backgroundColor: '#818cf8', borderColor: '#171717', duration: 0.5, ease: 'back.out(2)' } // primary-light / neutral-900
    )
    // 2. Animate the experience card sliding in
    .fromTo(cardRef.current,
      { 
        x: isEven ? 50 : -50, // Slide from right if even, left if odd
        opacity: 0,
        y: 20 
      },
      { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: 'power3.out' 
      },
      "-=0.3" // Start the card slide slightly before the dot finishes popping
    );

  }, { scope: itemRef });

  return (
    <div ref={itemRef} className="relative flex items-center justify-between md:justify-normal w-full group py-4">
      
      {/* Timeline Dot 
        Absolutely positioned. On mobile: left side. On desktop: dead center.
      */}
      <div 
        ref={dotRef}
        className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-full border-[4px] border-neutral-900 transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(129,140,248,0.0)] group-hover:shadow-[0_0_15px_rgba(129,140,248,0.6)] transition-shadow duration-300"
      ></div>

      {/* Card Wrapper (Alternating Layout Logic)
        Mobile: Full width, margin left. 
        Desktop: 5/12 width (to leave room for center line), alternating margins.
      */}
      <div className={`w-full md:w-5/12 ml-14 md:ml-0 ${isEven ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
        
        {/* The Glassmorphic Experience Card */}
        <div 
          ref={cardRef}
          className="bg-neutral-800/40 backdrop-blur-md border border-neutral-700/50 p-6 rounded-2xl shadow-xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Date Badge & Role */}
            <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-4`}>
              <span className="text-xs font-bold text-primary-light bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block tracking-wide">
                {experience.startDate} — {experience.endDate}
              </span>
              <h3 className="text-2xl font-bold text-neutral-100 leading-tight mb-1">{experience.role}</h3>
              <h4 className="text-md font-medium text-secondary-light">{experience.company}</h4>
            </div>

            {/* Responsibilities List */}
            <ul className={`space-y-2.5 text-sm text-neutral-300 ${isEven ? 'md:text-right' : 'text-left'} mt-4`}>
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className={`flex items-start ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                  {/* Custom Bullet Point */}
                  <span className={`text-primary/70 mt-1 text-xs ${isEven ? 'md:ml-3 ml-0 mr-3 md:mr-0' : 'mr-3'}`}>◆</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelineItem;