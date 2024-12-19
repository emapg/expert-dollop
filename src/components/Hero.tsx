import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import * as THREE from 'three';

export default function Hero() {
  useEffect(() => {
    // Set up the 3D scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-background').appendChild(renderer.domElement);

    // Create a rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* 3D Background */}
      <div
        id="three-background"
        className="absolute inset-0 opacity-30 bg-cover bg-center"
      ></div>
      
      {/* Content */}
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
