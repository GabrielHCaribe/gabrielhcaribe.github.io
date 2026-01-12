'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Projects() {
  const projectList = [
    {
      title: "CAN-RXG Team Cristar",
      description: "Electrical lead for team Cristar. Working on testing the affects of gravity on laser-induced crystallization.",
      tags: ["Electrical Engineering", "Component Selection", "Python"]
    },
    {
      title: "PID Heating System",
      description: "text.",
      tags: ["Engineering", "MATLAB", "Statics"]
    },
    {
      title: "Praxis III",
      description: "text.",
      tags: ["React", "Data", "Physics"]
    },
    {
      title: "Praxis II",
      description: "A tool designed to solve multi-stage heat engine efficiency problems automatically.",
      tags: ["Thermo", "Algorithms"]
    },
    {
      title: "Some coding assignment",
      description: "Talk about one of my esc 190 projects.",
      tags: ["Signals", "Python"]
    },
    {
      title: "FIRST Robotics",
      description: "Calculates forward and inverse kinematics for a 3-degree-of-freedom robotic arm.",
      tags: ["Math", "Robotics"]
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
      <Navigation />

      {/* 1. paddingTop: 8rem: Pushes the header down just below the nav.
          2. items-center: Ensures the header and grid are horizontally centered.
      */}
      <main className="flex-grow w-full flex justify-center pb-24" style={{ paddingTop: '4rem' }}>
        <div className="w-full max-w-5xl px-6 flex flex-col items-center">
        
          {/* Header Section: Now strictly centered */}
          <div className="text-center flex flex-col items-center w-full gap-12" style={{ marginBottom: '4rem' }}>
            <h1 className="text-6xl font-bold tracking-tight">Projects</h1>
            <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
              A collection of work spanning engineering physics, numerical simulations, and software development.
            </p>
          </div>

          {/* Projects Grid: Balanced and centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {projectList.map((project, index) => (
              <Link href={`/projects/${index}`} key={index}>
                <div 
                  className="group bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#ea580c]/40 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)] cursor-pointer"
                >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
                  <img 
                    src="" 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center text-center p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ea580c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tags stay at bottom and centered */}
                <div className="flex flex-wrap gap-2 mt-auto justify-center px-8 pb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="text-xs font-semibold px-3 py-1 bg-zinc-800/80 text-zinc-300 rounded-full border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}