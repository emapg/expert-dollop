import React from 'react';

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Three.js", level: 70 }
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
              style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
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
    </section>
  );
}