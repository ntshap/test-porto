import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">John Doe</span>
            <div className="space-x-6">
              <a href="/" className="text-blue-600 font-medium">Home</a>
              <a href="/projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frontend Developer & UI Designer
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Hi, I'm John Doe. A passionate Frontend Developer based in Jakarta, Indonesia. 
              I love creating beautiful and functional websites.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="mailto:email@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
              'Next.js', 'Git', 'Figma', 'REST API'
            ].map((skill) => (
              <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <a href="/projects" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            View All <ExternalLink size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/api/placeholder/400/200" 
                alt={`Project ${project}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project and the technologies used in its development.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;