import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="floating-avatar mb-8">
          <div className="relative w-48 h-48 mx-auto transform-gpu transition-transform hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-spin-slow" />
            <div className="absolute inset-1 rounded-full bg-black">
              <User className="w-24 h-24 mx-auto mt-8 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          {[
            { Icon: Github, href: "#", label: "GitHub" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
            { Icon: Mail, href: "#", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="transform-gpu transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon className="w-8 h-8 text-white hover:text-cyan-400" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}