import React, { useState, useRef } from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import LeetCodeIcon from './icons/LeetCodeIcon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sarim-aliii', icon: <GitHubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sarim-ali-0a7102295', icon: <LinkedInIcon /> },
  { name: 'LeetCode', url: 'https://leetcode.com/u/_thelearninguy/', icon: <LeetCodeIcon /> },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const containerRef = useRef(null);

  // --- GSAP Entrance Animations ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Trigger when section is 75% in view
      }
    });

    // Animate Left Side (Info)
    tl.fromTo('.contact-info-anim',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    )
    // Spring animation for social icons
    .fromTo('.social-icon-anim',
      { scale: 0, opacity: 0, rotation: -45 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
      "-=0.4"
    )
    // Animate Right Side (Form Card)
    .fromTo('.contact-form-card',
       { x: 50, opacity: 0 },
       { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
       "-=1" // Sync with left side
    )
    // Cascade form inputs
    .fromTo('.form-field-anim',
       { y: 20, opacity: 0 },
       { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
       "-=0.4"
    );

  }, { scope: containerRef });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    // Animate button click success state
    gsap.to('.submit-btn', { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id={SECTION_IDS.CONTACT} title="Get In Touch" className="bg-neutral-800">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 overflow-hidden py-4">
        
        {/* LEFT COLUMN: Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="contact-info-anim text-3xl md:text-4xl font-bold text-neutral-100 mb-6 leading-tight">
            Let's build something <span className="text-primary-light">amazing together.</span>
          </h3>
          <p className="contact-info-anim text-neutral-300 mb-8 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something innovative. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-info-anim bg-neutral-900/50 border border-neutral-700/50 p-6 rounded-xl inline-block mb-10 shadow-lg">
            <p className="text-sm text-neutral-400 mb-1 uppercase tracking-wider font-semibold">Direct Email</p>
            <a 
              href="mailto:sarimali.cs23@bmsce.ac.in" 
              className="text-xl font-medium text-primary-light hover:text-white transition-colors duration-300 flex items-center group"
            >
              sarimali.cs23@bmsce.ac.in
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="flex space-x-6 items-center">
            <span className="contact-info-anim text-neutral-400 font-medium">Follow me:</span>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`My ${link.name} profile`}
                className="social-icon-anim group p-3 bg-neutral-700/30 border border-neutral-600/50 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              >
                {React.cloneElement(link.icon, { className: 'w-6 h-6 text-neutral-300 group-hover:text-white transition-colors' })}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="contact-form-card bg-neutral-900/60 backdrop-blur-xl border border-neutral-700/50 p-8 md:p-10 rounded-2xl shadow-2xl relative">
          
          {/* Subtle glowing orb behind form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] pointer-events-none -z-10"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="form-field-anim">
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
              <input 
                type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                className="w-full px-4 py-3 bg-neutral-800/80 border border-neutral-600 rounded-lg shadow-inner placeholder-neutral-500 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-field-anim">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
              <input 
                type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 bg-neutral-800/80 border border-neutral-600 rounded-lg shadow-inner placeholder-neutral-500 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-field-anim">
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
              <input 
                type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3 bg-neutral-800/80 border border-neutral-600 rounded-lg shadow-inner placeholder-neutral-500 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300" 
                placeholder="How can I help you?"
              />
            </div>
            
            <div className="form-field-anim">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea 
                name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                className="w-full px-4 py-3 bg-neutral-800/80 border border-neutral-600 rounded-lg shadow-inner placeholder-neutral-500 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <div className="form-field-anim h-6">
              {error && <p className="text-red-400 text-sm animate-pulse">{error}</p>}
              {isSubmitted && <p className="text-green-400 text-sm font-medium">✨ Thank you! Your message has been sent.</p>}
            </div>
            
            <div className="form-field-anim pt-2">
              <button 
                type="submit"
                className="submit-btn w-full flex justify-center py-4 px-8 border border-transparent rounded-lg shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] text-base font-bold text-white bg-primary hover:bg-primary-light hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] focus:outline-none transition-all duration-300 transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;