import React from "react";
import { FaReact, FaNodeJs, FaPaintBrush, FaPython, FaJs, FaCss3Alt, FaGitAlt, FaDocker, FaCube } from "react-icons/fa"; // Import icons
import { SiTypescript, SiGraphql, SiFirebase } from "react-icons/si"; // Specific icons

const skills = [
  { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
  { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "UI/UX Design", level: 75, icon: <FaPaintBrush className="text-pink-500" /> },
  { name: "Three.js", level: 70, icon: <FaCube className="text-purple-500" /> }, // Placeholder cube icon
  { name: "GraphQL", level: 65, icon: <SiGraphql className="text-pink-400" /> },
  { name: "Docker", level: 60, icon: <FaDocker className="text-blue-300" /> },
  { name: "Python", level: 75, icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", level: 90, icon: <FaJs className="text-yellow-500" /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Firebase", level: 70, icon: <SiFirebase className="text-orange-400" /> },
  { name: "Git", level: 80, icon: <FaGitAlt className="text-red-400" /> },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Skills & Expertise</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="mb-8 transform-gpu hover:translate-x-2 transition-transform"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium flex items-center">
                  <span className="mr-2 text-2xl">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform-gpu transition-transform duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-400">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <p>
          Connect with me on{" "}
          <a
            href="https://twitter.com"
            className="text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="https://linkedin.com"
            className="text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
      </footer>
    </section>
  );
}
