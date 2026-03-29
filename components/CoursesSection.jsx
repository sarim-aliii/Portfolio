import { useRef } from 'react';
import Section from "./Section";
import { courses } from "../constants";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Inline Icons for visual flair
const CertificateIcon = ({ className }) => (
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
    <path d="M15 12h-5" />
    <path d="M15 8h-5" />
    <path d="M19 21v-5.4A5 5 0 0 0 21 12a5 5 0 0 0-2-3.6V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5.4A5 5 0 0 0 3 12a5 5 0 0 0 2 3.6V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
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
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function CoursesSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Select all course cards
    const cards = gsap.utils.toArray('.course-card');

    // Initial state setup
    gsap.set(cards, { y: 60, opacity: 0 });

    // ScrollTrigger batch to create a cascading reveal
    ScrollTrigger.batch(cards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          overwrite: true
        });
      },
      start: 'top 85%', // Trigger slightly before the section fully enters
    });
  }, { scope: containerRef });

  return (
    <Section id="courses" title="Courses & Certificates" className="bg-neutral-900/50">
      <div ref={containerRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <article 
            key={i} 
            className="course-card group relative flex flex-col bg-neutral-800/40 backdrop-blur-md border border-neutral-700/50 rounded-2xl p-6 hover:bg-neutral-800/80 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/10 overflow-hidden h-full"
          >
            {/* Background decorative element */}
            <div className="absolute -right-6 -top-6 text-neutral-700/20 group-hover:text-primary/10 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
              <CertificateIcon className="w-32 h-32" />
            </div>

            <div className="relative z-10 flex flex-col flex-grow">
              <header className="mb-4">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl font-bold text-neutral-100 group-hover:text-primary-light transition-colors leading-tight">
                    {c.name}
                  </h3>
                  <span className="flex-shrink-0 text-xs font-semibold text-secondary-light bg-secondary/10 px-2.5 py-1 rounded-md whitespace-nowrap">
                    {c.date}
                  </span>
                </div>
                <div className="flex items-center text-sm font-medium text-primary/80">
                  <CertificateIcon className="w-4 h-4 mr-1.5" />
                  {c.provider}
                </div>
              </header>

              {/* Skills Tags */}
              {c.skills?.length ? (
                <div className="mt-2 mb-6 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs text-neutral-300 bg-neutral-900/50 border border-neutral-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-grow"></div> // Spacer if no skills
              )}

              {/* Footer / Link */}
              {c.link && (
                <div className="mt-auto pt-4 border-t border-neutral-700/50">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-neutral-400 group-hover:text-primary-light transition-colors"
                  >
                    View Credential
                    <ArrowRightIcon className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}