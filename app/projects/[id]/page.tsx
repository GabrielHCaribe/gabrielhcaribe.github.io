'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const projects: { [key: string]: { title: string; description: string; tags: string[] } } = {
    '0': {
      title: "CAN-RXG Team Cristar",
      description: "A numerical analysis project exploring wave function collapse using Python and NumPy.",
      tags: ["Physics", "Python", "Simulation"]
    },
    '1': {
      title: "Engineering Statics Tool",
      description: "Calculates internal forces and moments for complex beam structures under varying loads.",
      tags: ["Engineering", "MATLAB", "Statics"]
    },
    '2': {
      title: "Data Visualization Lab",
      description: "Interactive dashboard created to visualize real-time sensor data from lab experiments.",
      tags: ["React", "Data", "Physics"]
    },
    '3': {
      title: "Thermodynamics Solver",
      description: "A tool designed to solve multi-stage heat engine efficiency problems automatically.",
      tags: ["Thermo", "Algorithms"]
    },
    '4': {
      title: "Signal Processing App",
      description: "Filters and analyzes acoustic signals to determine frequency harmonics.",
      tags: ["Signals", "Python"]
    },
    '5': {
      title: "Robotics Kinematics",
      description: "Calculates forward and inverse kinematics for a 3-degree-of-freedom robotic arm.",
      tags: ["Math", "Robotics"]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl text-zinc-400">Project not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-[#fafafa] relative z-10 flex flex-col">
      <Navigation />

      <main className="flex-grow w-full flex justify-center pt-24 pb-24" style={{ paddingTop: '8rem' }}>
        <div className="w-full max-w-5xl px-6 flex flex-col">
          
          {/* Back Arrow */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ea580c] transition-colors mb-12"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Project Title */}
          <div className="mb-16 text-center flex flex-col items-center w-full">
            <h1 className="text-6xl font-bold tracking-tight text-white">{project.title}</h1>
          </div>

          {/* Project Content - Similar to About Me */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src="/project-placeholder.jpg" 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="max-w-xl text-center md:text-left flex flex-col gap-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                This project demonstrates advanced problem-solving techniques and practical application of engineering principles. The work involved detailed analysis, implementation, and testing to ensure robustness and efficiency.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm font-semibold px-4 py-2 bg-zinc-800/80 text-[#ea580c] rounded-full border border-[#ea580c]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
