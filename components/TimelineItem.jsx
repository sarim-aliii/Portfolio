import React, { useRef, useEffect, useState } from 'react';

const TimelineItem = ({ experience, isLast }) => {
  // Corrected: Removed the <HTMLDivElement> TypeScript type
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (itemRef.current && !isLast) {
        // Calculate height from the dot to the bottom of the content, or a fixed reasonable height.
        // For simplicity, let's use a dynamic calculation based on content height.
        // This might need adjustment based on final styling.
        const contentHeight = itemRef.current.querySelector('.timeline-content')?.getBoundingClientRect().height || 100;
        setLineHeight(contentHeight + 30); // Add some padding below content
    }
  }, [experience, isLast]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const svgLineInitialLength = lineHeight; // Start with full length for dash array

  return (
    <div ref={itemRef} className={`relative pl-10 py-4 group ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: isVisible ? '0.2s': '0s'}}>
      {/* Dot */}
      <div className="absolute left-[-0.375rem] top-6 w-4 h-4 bg-primary rounded-full border-2 border-neutral-800 group-hover:bg-primary-light transition-colors duration-200 z-10"></div>
      
      {/* SVG Line - only if not the last item */}
      {!isLast && lineHeight > 0 && (
        <svg 
            className="absolute left-0 top-6 w-1 overflow-visible" // Adjusted left to align with dot center
            height={lineHeight} // Dynamic height
            style={{ transform: 'translate(-0.5px, 16px)'}} // Move half pixel left, and 16px down (dot height/2 + border)
        >
          <line 
            x1="0" 
            y1="0" 
            x2="0" 
            y2={lineHeight -16} // Line ends slightly above next item's implied start
            strokeWidth="2" 
            className={`stroke-neutral-600 ${isVisible ? 'animate-svg-line-draw' : ''}`}
            strokeDasharray={svgLineInitialLength}
            strokeDashoffset={isVisible ? 0 : svgLineInitialLength}
            style={{transition: 'stroke-dashoffset 1s ease-out 0.3s'}} // JS handles visibility, CSS transition handles draw
          />
        </svg>
      )}

      {/* Content */}
      <div className="ml-4 timeline-content">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
          <h3 className="text-xl font-semibold text-primary-light">{experience.role}</h3>
          <p className="text-sm text-neutral-400 sm:text-right">{experience.startDate} - {experience.endDate}</p>
        </div>
        <p className="text-md font-medium text-neutral-200 mb-2">{experience.company}</p>
        <ul className="list-disc list-outside pl-5 space-y-1 text-neutral-300 text-sm">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;