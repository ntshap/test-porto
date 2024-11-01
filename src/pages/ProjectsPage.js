import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online store operations, including inventory management, order processing, and analytics visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Web Application"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application that provides detailed forecasts, interactive maps, and severe weather alerts for locations worldwide.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Redux", "OpenWeather API", "Styled Components"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Web Application"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates, task assignments, and progress tracking capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Full Stack"
    },
    {
      title: "Personal Blog Platform",
      description: "A modern blogging platform with markdown support, categories, and search functionality.",
      image: "/api/placeholder/600/400",
      technologies: ["Gatsby", "GraphQL", "MDX", "Netlify CMS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Web Application"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">John Doe</span>
            <div className="space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="/projects" className="text-blue-600 font-medium">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Header */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          A collection of my work that showcases my skills and experience in web development.
        </p>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow
                       text-gray-700 font-medium whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-20 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
          <p className="mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;