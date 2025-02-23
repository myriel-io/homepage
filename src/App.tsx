import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
              alt="Profile Picture"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 shadow-xl object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <a 
            href="https://vectorsearch.tech" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <BookOpen className="w-5 h-5" />
            VectorSearch.tech
          </a>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <User className="w-6 h-6 mr-3 text-blue-400" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-8">
            I'm a passionate developer with 5 years of experience building modern web applications.
            I specialize in React, Node.js, and cloud technologies, focusing on creating scalable
            and user-friendly solutions that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code2 className="w-6 h-6 mr-3 text-blue-400" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack React & Node.js application with real-time inventory management",
                link: "#"
              },
              {
                title: "Task Manager Pro",
                description: "Collaborative project management tool with real-time updates",
                link: "#"
              },
              {
                title: "Social Analytics",
                description: "Data visualization dashboard for social media metrics",
                link: "#"
              },
              {
                title: "AI Chat Assistant",
                description: "Natural language processing chatbot for customer support",
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold">Senior Developer - Tech Corp</h3>
              <p className="text-gray-400">2020 - Present</p>
              <p className="text-gray-300 mt-2">
                Led development of multiple high-impact projects and mentored junior developers.
              </p>
            </div>
            <div className="border-l-2 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Developer - StartUp Inc</h3>
              <p className="text-gray-400">2018 - 2020</p>
              <p className="text-gray-300 mt-2">
                Developed and maintained various web applications using modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2024 John Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;