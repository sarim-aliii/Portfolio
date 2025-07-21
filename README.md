# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, designed and built to showcase my skills, projects, and professional experience. It's a modern, fully responsive Single-Page Application built with a focus on clean design, performance, and a great user experience.

**Live Demo:** https://sarim-ali-portfolio.netlify.app/


## Features

-   **Fully Responsive Design:** A mobile-first approach ensures the site looks and works perfectly on all devices, from mobile phones to widescreen desktops.
-   **Interactive UI:** Smooth-scrolling navigation and dynamic, on-scroll reveal animations create an engaging and modern user experience.
-   **Component-Based Architecture:** Built with React, the UI is organized into reusable and maintainable components for each section.
-   **Dark Mode Aesthetic:** A clean, modern, and professional dark theme that is easy on the eyes.
-   **Optimized for Performance:** Built with Vite for lightning-fast development and a highly optimized production build.


## Tech Stack

This project was built using the following technologies:

-   **Frontend:**
    -   [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
    -   [**Vite**](https://vitejs.dev/) - A next-generation frontend build tool for fast development.
    -   [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **Deployment:**
    -   [**Netlify**](https://www.netlify.com/) / [**Vercel**](https://vercel.com/) / 

## Project Structure

The project is organized into a clean and logical file structure:
portfolio/
├── public/ # Static assets (favicon, etc.)
├── src/
│ ├── components/ # Reusable React components for each section
│ │ ├── icons/ # SVG icon components
│ │ ├── AboutSection.jsx
│ │ ├── HeroSection.jsx
│ │ └── ...etc
│ ├── App.jsx # Main application component (layout)
│ ├── constants.js # Global constants (section IDs, links)
│ ├── index.css # Global styles and Tailwind directives
│ └── main.jsx # Main entry point for the React app
├── .gitignore
├── index.html # The single HTML page shell
├── package.json
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js # Vite configuration


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js] and [npm] installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    git clone https://github.com/sarim-aliii/Portfolio.git

2.  **Navigate to the project directory:**
    cd Portfolio

3.  **Install NPM packages:**
    npm install

4.  **Run the development server:**
    npm run dev

The application will be available at `http://localhost:5173` (or the next available port).


### Building for Production
To create a final, optimized build for deployment, run:

npm run build 

This command will generate a dist folder containing the static files for your website.


Contact
Sarim Ali - sarimali.cs23@bmsce.ac.in
Project Link: https://github.com/sarim-aliii/Portfolio.git