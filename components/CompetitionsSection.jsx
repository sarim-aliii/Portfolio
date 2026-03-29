import { useRef } from 'react';
import Section from "./Section";
import { competitions } from "../constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Inline Trophy Icon for visual flair
const TrophyIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export default function CompetitionsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Select all competition cards
    const cards = gsap.utils.toArray('.competition-card');

    // Initial state: pushed down and invisible
    gsap.set(cards, { y: 50, opacity: 0 });

    // ScrollTrigger batch animation
    ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          overwrite: true
        });
      },
      start: 'top 85%', // Trigger when section is 85% in view
    });
  }, { scope: containerRef });

  return (
    <Section id="competitions" title="Competitions & Achievements" className="bg-neutral-900">
      <div ref={containerRef} className="max-w-4xl mx-auto space-y-6">
        {competitions.map((c, i) => (
          <div 
            key={i} 
            className="competition-card group relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors duration-500 overflow-hidden shadow-lg"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
              
              {/* Icon Container */}
              <div className="flex-shrink-0 mt-1 bg-neutral-700/50 p-4 rounded-full text-secondary-light group-hover:text-primary-light group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                <TrophyIcon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                  <a 
                    href={c.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xl font-bold text-neutral-100 hover:text-primary-light transition-colors duration-200 inline-flex items-center"
                  >
                    {c.title}
                  </a>
                  
                  {/* Date Badge */}
                  <span className="text-sm font-medium text-secondary-light bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full w-fit">
                    {c.date}
                  </span>
                </div>
                
                <div className="text-primary-light font-medium mb-4">{c.role}</div>
                
                {/* Bullet Points */}
                {c.points?.length ? (
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {c.points.map((p, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3 mt-1.5 opacity-70 text-xs">◆</span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}