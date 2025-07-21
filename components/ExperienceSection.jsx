import React from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import TimelineItem from './TimelineItem';

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
  return (
    <Section id={SECTION_IDS.EXPERIENCE} title="My Experience" className="bg-neutral-900">
      <div className="relative">
        {experienceData.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} isLast={index === experienceData.length -1}/>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
