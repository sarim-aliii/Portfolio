import { useRef } from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import TimelineItem from './TimelineItem';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    id: 'exp1',
    role: 'Software Engineering Intern',
    company: 'Tech Solutions Inc.',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    responsibilities: [
      'Developed and maintained features for a large-scale web application using React and Node.js.',
      'Collaborated with a team of 5 engineers in an Agile environment.',
      'Contributed to API design and database schema improvements.',
      'Wrote unit and integration tests, improving code coverage by 15%.',
    ],
  },
  {
    id: 'exp2',
    role: 'Teaching Assistant - Intro to Programming',
    company: 'University of Technology',
    startDate: 'Sep 2022',
    endDate: 'Dec 2022',
    responsibilities: [
      'Assisted professor in teaching Python fundamentals to over 50 students.',
      'Graded assignments and provided constructive feedback.',
      'Hosted weekly lab sessions to help students with coding exercises.',
    ],
  },
  {
    id: 'exp3',
    role: 'Lead Developer - Capstone Project',
    company: 'University of Technology',
    startDate: 'Jan 2024',
    endDate: 'Present',
    responsibilities: [
      'Leading a team of 3 students to develop a mobile application for campus event discovery.',
      'Responsible for project architecture, backend development using Firebase, and CI/CD pipeline setup.',
      'Conducting regular team meetings and managing project timelines.',
    ],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // Animate the central timeline line drawing downwards as you scroll
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center", // Start drawing when top of section hits center of viewport
          end: "bottom center", // Finish drawing when bottom of section hits center
          scrub: 1, // Smooth scrubbing effect linked to scrollbar
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <Section id={SECTION_IDS.EXPERIENCE} title="My Experience" className="bg-neutral-900 overflow-hidden">
      <div ref={sectionRef} className="relative max-w-5xl mx-auto py-10">
        
        {/* Background Track Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-neutral-800 rounded-full transform md:-translate-x-1/2"></div>
        
        {/* Animated Progress Line (Primary Color) */}
        <div 
          ref={lineRef} 
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-light via-primary to-primary-dark rounded-full transform md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(99,102,241,0.8)]"
        ></div>

        <div className="space-y-12 md:space-y-24">
          {experienceData.map((exp, index) => (
            <TimelineItem 
              key={exp.id} 
              experience={exp} 
              index={index} // Pass index to determine left/right alternating layout
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default ExperienceSection;