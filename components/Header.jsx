import { useState, useEffect, useRef } from 'react';
import { SECTION_IDS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const navLinks = [
  { id: SECTION_IDS.HOME, label: 'Home' },
  { id: SECTION_IDS.ABOUT, label: 'About' },
  { id: SECTION_IDS.SKILLS, label: 'Skills' },
  { id: SECTION_IDS.PROJECTS, label: 'Projects' },
  { id: SECTION_IDS.EXPERIENCE, label: 'Experience' },
  { id: SECTION_IDS.COMPETITION, label: 'Competitions' },
  { id: SECTION_IDS.COURSE, label: 'Courses' },
  { id: SECTION_IDS.CONTACT, label: 'Contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Tracks if header is visible
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks previous scroll position
  const [activeSection, setActiveSection] = useState(SECTION_IDS.HOME);
  
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // 1. Handle Background Blur Logic
    setIsScrolled(currentScrollY > 50);

    // 2. Handle Smart Hide/Show Logic
    if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
      // Scrolling down and past 100px -> hide header
      setIsVisible(false);
    } else {
      // Scrolling up -> show header
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    // 3. Handle Active Section Highlighting
    let currentSection = "";
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const link = navLinks[i];
      const sectionElement = document.getElementById(link.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= (headerRef.current?.offsetHeight || 64) + window.innerHeight * 0.3) { 
          currentSection = link.id;
          break; 
        }
      }
    }
    if (!currentSection && currentScrollY < 200) {
        currentSection = SECTION_IDS.HOME;
    }
    setActiveSection(currentSection || SECTION_IDS.HOME);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    } else if (section) {
       window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const navItemClasses = (id) => 
    `nav-link-underline px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer ${
      activeSection === id 
      ? 'text-primary-light active'
      : 'text-neutral-300 hover:text-white'
    }`;
  
  // Notice the transform classes added based on `isVisible`
  const headerBaseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu";
  const visibilityClasses = isVisible ? "translate-y-0" : "-translate-y-full";
  const scrolledClasses = "bg-neutral-900/80 backdrop-blur-lg shadow-xl border-b border-neutral-800/50";
  const transparentClasses = "bg-transparent";

  return (
    <header 
      ref={headerRef}
      className={`${headerBaseClasses} ${visibilityClasses} ${isScrolled || isMobileMenuOpen ? scrolledClasses : transparentClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href={`#${SECTION_IDS.HOME}`}
              onClick={(e) => { 
                e.preventDefault(); navigateToSection(SECTION_IDS.HOME); 
              }} 
              className="text-2xl font-bold text-primary hover:text-primary-light transition-colors">
              Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); navigateToSection(link.id); }}
                  className={navItemClasses(link.id)}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} 
        id="mobile-menu"
      > 
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900/95 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); navigateToSection(link.id); }}
              className={`${navItemClasses(link.id)} block`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;