import { useRef } from 'react';
import ArrowUpIcon from './icons/ArrowUpIcon'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackToTopButton = () => {
  const buttonWrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useGSAP(() => {
    const wrapper = buttonWrapperRef.current;
    const button = buttonRef.current;
    if (!wrapper || !button) return;

    // 1. Initial hidden state
    gsap.set(wrapper, { autoAlpha: 0, y: 50, scale: 0.8 });
    
    // Set up SVG circle length for progress ring
    const circle = wrapper.querySelector('.progress-ring-circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    gsap.set(circle, { strokeDasharray: circumference, strokeDashoffset: circumference });

    // 2. Scroll Progress Ring Animation
    gsap.to(circle, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1, // Smoothly ties the animation to the scrollbar
      }
    });

    // 3. Visibility Toggle (Pop in/out)
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: '300px top', // Triggers when page is scrolled 300px down
      onEnter: () => gsap.to(wrapper, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }),
      onLeaveBack: () => gsap.to(wrapper, { autoAlpha: 0, y: 50, scale: 0.8, duration: 0.3, ease: 'power2.in' }),
    });

    // 4. Magnetic Button Effect
    const xTo = gsap.quickTo(button, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(button, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      gsap.to(button, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: buttonWrapperRef });

  return (
    <div 
      ref={buttonWrapperRef} 
      className="fixed bottom-8 right-8 z-40 p-2 invisible" // invisible initially, GSAP autoAlpha handles it
    >
      {/* Magnetic Wrapper */}
      <div 
        ref={buttonRef}
        className="relative group cursor-pointer"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        {/* SVG Progress Ring Background */}
        <svg width="56" height="56" className="absolute -inset-1 transform -rotate-90 drop-shadow-lg pointer-events-none">
          {/* Background Track */}
          <circle 
            cx="28" cy="28" r="24" 
            className="stroke-neutral-800" 
            strokeWidth="3" 
            fill="transparent" 
          />
          {/* Animated Progress Ring */}
          <circle 
            cx="28" cy="28" r="24" 
            className="progress-ring-circle stroke-primary" 
            strokeWidth="3" 
            fill="transparent" 
            strokeLinecap="round"
          />
        </svg>

        {/* Actual Button */}
        <button
          className="bg-neutral-800 hover:bg-neutral-700 text-primary-light p-3 rounded-full shadow-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-900 relative z-10 w-12 h-12 flex items-center justify-center border border-neutral-700/50 group-hover:text-primary transition-all"
          tabIndex={-1} // Let the parent div handle the click/focus semantics
        >
          <ArrowUpIcon className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default BackToTopButton;