import React from 'react';
import { Code2, Globe, Palette } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary web application built with React and Node.js",
    icon: Code2,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Project Beta",
    description: "Modern design system with component library",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Project Gamma",
    description: "Full-stack e-commerce platform with real-time features",
    icon: Globe,
    color: "from-green-500 to-emerald-500"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group perspective"
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="relative bg-gray-900 rounded-xl p-6 transform-gpu transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                <div className={`absolute -top-6 left-6 w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mt-6 mb-3">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                
                <div className="mt-4 transform-gpu transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300">Learn more →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}