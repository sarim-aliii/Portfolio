import React, { useState } from 'react';
import { SECTION_IDS } from '../constants';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import LeetCodeIcon from './icons/LeetCodeIcon';


const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/sarim-aliii', icon: <GitHubIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sarim-ali-0a7102295', icon: <LinkedInIcon /> },
  { name: 'LeetCode', url: 'https://leetcode.com/u/_thelearninguy/', icon: <LeetCodeIcon /> },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id={SECTION_IDS.CONTACT} title="Get In Touch" className="bg-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-neutral-100 mb-4">Let's Connect!</h3>
          <p className="text-neutral-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out to me.
          </p>
          <p className="text-neutral-300 mb-2">
            <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-primary hover:underline hover:text-primary-light">sarimali.cs23@bmsce.ac.in</a>
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`My ${link.name} profile`}
                className="text-neutral-400 hover:text-primary transition-transform duration-200 hover:scale-110"
              >
                {React.cloneElement(link.icon, { className: 'w-8 h-8' })}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                   className="mt-1 block w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-100" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                   className="mt-1 block w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-100" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">Subject</label>
            <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                   className="mt-1 block w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-100" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300">Message</label>
            <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required
                      className="mt-1 block w-full px-3 py-2 bg-neutral-700/50 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-neutral-100"></textarea>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {isSubmitted && <p className="text-green-400 text-sm">Thank you! Your message has been sent (simulated).</p>}
          <div>
            <button type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark focus:ring-offset-neutral-800 btn-glow-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
