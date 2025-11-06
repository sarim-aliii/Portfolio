import { useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import BackToTopButton from './components/BackToTopButton';
import CompetitionsSection from "./components/CompetitionsSection";
import CoursesSection from "./components/CoursesSection";


const App = () => {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  const addCursorPointer = () => document.body.classList.add('cursor-pointer');
  const removeCursorPointer = () => document.body.classList.remove('cursor-pointer');

  const addCursorText = () => document.body.classList.add('cursor-text');
  const removeCursorText = () => document.body.classList.remove('cursor-text');

  useEffect(() => {
    const dot = cursorDotRef.current;
    const follower = cursorFollowerRef.current;

    if (!dot || !follower) return;

    const handleMouseMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cursor style changes on hover
    const interactiveElements = document.querySelectorAll(
      'a, button, input[type="submit"], [role="button"], .project-card-tilt, .group\\/link'
    );
    const textInputs = document.querySelectorAll(
        'input[type="text"], input[type="email"], textarea'
    );


    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addCursorPointer);
      el.addEventListener('mouseleave', removeCursorPointer);
    });
    
    textInputs.forEach(el => {
        el.addEventListener('mouseenter', addCursorText);
        el.addEventListener('mouseleave', removeCursorText);
    });


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addCursorPointer);
        el.removeEventListener('mouseleave', removeCursorPointer);
      });
      textInputs.forEach(el => {
        el.removeEventListener('mouseenter', addCursorText);
        el.removeEventListener('mouseleave', removeCursorText);
      });
    };
  }, []);


  return (
    <div className="bg-neutral-900 text-neutral-100 font-sans leading-relaxed selection:bg-primary selection:text-white">
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
      <div ref={cursorFollowerRef} className="custom-cursor-follower"></div>
      
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <CompetitionsSection />
        <CoursesSection />
        <ContactSection />
      </main>

      <BackToTopButton />

      <footer className="py-8 bg-neutral-950 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} Sarim Ali. All rights reserved.</p>
        <p>Designed with <span role="img" aria-label="heart">❤️</span> and React JS.</p>
      </footer>
    </div>
  );
};

export default App;