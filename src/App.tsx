import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, BookOpen, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <main className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">David Myriel</h1>
          <p className="text-xl text-gray-300">
            Professional writer and educator in vector search and machine learning
          </p>
        </header>

        <section className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://vectorsearch.tech" 
            className="flex items-center hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-6 h-6 mr-2" />
            <span>Blog</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/davidmyriel/" 
            className="flex items-center hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/davidmyriel" 
            className="flex items-center hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 mr-2" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:davidmyriel@gmail.com" 
            className="flex items-center hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6 mr-2" />
            <span>Email</span>
          </a>
        </section>

        <section className="prose prose-invert mx-auto">
          <p className="text-lg mb-6">
            Currently creating community efforts and educational content at Qdrant, 
            focusing on vector search technology and machine learning applications.
          </p>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Creating educational content at VectorSearch.tech</li>
              <li>Learning statistics, Python, and machine learning</li>
              <li>Contributing to open source documentation projects</li>
              <li>Building community around vector search technology</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;