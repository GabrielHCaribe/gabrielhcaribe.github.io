// data/projects.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  content: string[];
  tags: string[];
  image: string;    // This remains your "Thumbnail" for the main page
  gallery?: string[]; // New optional array for the specific project page
  link?: string;
}

export const projects: Project[] = [
  // {
  //   id: "0",
  //   title: "CAN-RXG Team Cristar",
  //   shortDescription: "Electrical lead researching laser-induced crystallization in 0-g.",
  //   content: [
  //     "As part of the CAN-RXG Team Cristar, we are designing and building an apparatus to study laser-induced crystallization in microgravity aboard a Falcon 20. We are currently in the preliminary design phase of the project, with the flight scheduled for June, 2026.",
  //     "As the Electrical Lead, I am responsible for electrical component selection, securing sponsorships, designing and building the GUI, and testing to ensure flight-readiness.",
  //     "The results will help determine whether short duration parabolic flights are a viable option for improved crystal growth, supporting industries that rely on high-quality crystals such as the pharmaceutical industry."
  //   ],
  //   tags: ["Electrical Design", "Component Selection", "Research"],
  //   image: "/canrgx.png"
  // },
  {
    id: "0",
    title: "CAN-RGX: Team Cristar", // Fixed RXG to RGX
    shortDescription: "Electrical Lead for a microgravity research mission studying laser-induced crystallization aboard the NRC Falcon 20.",
    content: [
      "I serve as the Electrical Lead for Team Cristar, a University of Toronto research group selected for the 9th Canadian Reduced Gravity Experiment (CAN-RGX) challenge. In partnership with the Canadian Space Agency (CSA) and the National Research Council (NRC), we are developing a flight-certified apparatus to investigate laser-induced crystallization of lysozyme proteins.",
      "Our experiment utilizes a high-precision laser cavitation system to trigger crystal growth during the microgravity and hypergravity phases of parabolic flight. By analyzing the resulting crystal morphology and purity, we aim to validate short-duration suborbital flights as a cost-effective alternative to the International Space Station for pharmaceutical-grade crystal production.",
      "As the Electrical Lead, I manage the full lifecycle of the electrical subsystem. This includes rigorous component selection for high-G environments, designing an intuitive GUI for real-time data collection and experiment control, and securing industry sponsorships to fund critical hardware. I am currently leading the team through the Preliminary Design Review (PDR) phase to ensure all systems meet the stringent safety and operational requirements for flight aboard a Falcon 20 jet in June 2026.",
      "For more information on the challenge and our project, visit the CAN-RGX website: https://www.seds.ca/can-rgx/."
    ],
    tags: ["Electrical Design", "Hardware-Software Integration", "Microgravity Research"],
    image: "/canrgx.png",
    gallery: [
      "/canrgx.png",
    ]
  },
  // {
  //   id: "1",
  //   title: "Advanced Physics Lab",
  //   shortDescription: "High-Temp super conductor analysis and particle identification",
  //   content: [
  //     "Last semester as part of my Advanced Physics Lab course, I conducted performed experiments and analyzed data relating to determining the critical temperature of an unknown high-temperature super conductor and particle identification in bubble chamber images.",
  //     "1. In the high-temperature super conductor experiment, I cooled an a BSCCO sample using liquid nitrogen and plotted its resitance against temperature using a 4 wire method to overcome the wire's internal resistance. I also measued the magnetic susceptability of the sample as it cooled, using aa two coil method. I analyzed the data using a Savitzky-Golay filter and Monte-Carlo simulations, and calculated a critical temperature that aligns with literature values.",
  //     "2. For the bubble chamber experiment, I analyzed two strong interactions in images taken at the Stanford Linear Accelerator center, and deterined all particles involved using conservation properties. This experiment was much more data-heavy, having tracked numerous calculated and inferred particle properteis for dozens of bubble chamber tracks in Excel. In the end, I successfully identified all particles involved in both interactions, with momentum and energy being conserved."
  //   ],
  //   tags: ["Research", "Documentation", "Physics"],
  //   image: "/levetation.png"
  // },
  {
    id: "1",
    title: "Advanced Physics Labs",
    shortDescription: "Investigating superconductivity, particle kinematics, and microwave resonance through rigorous instrumentation and data modeling.",
    content: [
      "As part of the Advanced Physics Laboratory at the University of Toronto, I conduct high-precision experiments that require deep technical mastery of complex apparatus, noise reduction, and statistical data analysis. My work spans condensed matter physics, particle kinematics, and quantum resonance.",
      "In the High-Temperature Superconductor (HTC) lab, I characterized the phase transition of a BSCCO sample. Utilizing a four-wire Kelvin sensing method to eliminate lead resistance, I mapped the R-T curve as the sample cooled via liquid nitrogen. I supplemented this with magnetic susceptibility measurements using a mutual inductance two-coil system. To extract the critical temperature (Tc) from noisy data, I implemented Savitzky-Golay smoothing filters and performed Monte-Carlo simulations to quantify experimental uncertainties, yielding results highly consistent with BCS theory literature.",
      "For the High Energy Physics (HEP) study, I performed a kinematic analysis of π+ meson interactions within a liquid hydrogen bubble chamber using original Stanford Linear Accelerator Center (SLAC) data. I tracked and reconstructed dozens of secondary particle trajectories, calculating momentum, energy, and strangeness to identify 'V-particle' production. By managing a high-density dataset of curvature and vertex measurements in Excel, I verified the validity of conservation laws (energy, momentum, and baryon number) across multiple complex decay chains.",
      "Currently, I am investigating Electron Spin Resonance (ESR) using 9.37 GHz microwave radiation to determine the g-factor of DPPH free radicals. This experiment involves the hands-on operation of a microwave bridge and waveguide bench, where I am gaining expertise in microwave components including isolators, magic tees, variable attenuators, and directional couplers. I am responsible for tuning resonant cavities and utilizing an electromagnet/control unit to achieve the Larmor condition, bridging the gap between quantum mechanical theory and practical RF engineering."
    ],
    tags: ["Experimental Physics", "Data Modeling", "RF & Microwaves", "Python"],
    image: "/levetation.png",
    gallery: [
      "/levetation.png",        // Superconductor levitation
      "/202540794.png", // Particle tracks (highly recommended)
      "/esr.jpg",     // The microwave bench setup
      "/All_susceptabilities.png"            // A clean plot of your R-T curve
    ]
  },
  // {
  //   id: "2",
  //   title: "PID Heating System",
  //   shortDescription: "Engineering tool for calculating internal forces in beam structures.",
  //   content: [
  //     "As part of my internship at the Max Planck Institute for the Structure and Dynamics of Matter, I designed, constructed, and tested a custom PID heating system.",
  //     "The goal was to maintain the temperatrue of the small sample of glycerol used in a laser ablation experiment to analyze rubber-like elastic properties of Newtonian fluids.",
  //     "The system was composed of an industrial level Arduino (Industruino), temperature transducers, a relay,PT-1000 thermometers, and a resistive heater. I designed the electrical system and perfomed claulcations as to required power and componenet ratings.",
  //     "I wrote all the code for the PID controller from scratch in Arduino-C, and tested the entire system to ensure it met the required temperature stability of ±0.3K, meeting system requirements.",
  //     "To document the project, I wrote an 18-page user manual detailing the saftey consideration, electrical design, software, and user instructions."
  //   ],
  //   tags: ["Electrical Design", "Arduino-C", "Testing"],
  //   image: "/box.jpg"
  // },
  {
    id: "2",
    title: "PID Heating System",
    shortDescription: "Custom-engineered heating system for laser ablation experiments at the Max Planck Institute (MPSD).",
    content: [
      "During my research internship at the Max Planck Institute for the Structure and Dynamics of Matter, I designed and built a high-precision Proportional-Integral-Derivative (PID) heating system. The system was engineered to stabilize the temperature of glycerol samples during laser ablation experiments, facilitating the study of rubber-like elastic properties in Newtonian fluids.",
      "I designed and built every aspect of the hardware system, utilizing industrial-grade components such as the Industruino D21G, WAGO temperature transducers, and PT1000 RTD sensors. I was responsible for calculating power requirements and component ratings for vacuum-chamber compatibility, and wiring the high-current relays and safety-critical circuits to interface the control electronics with the resistive heating elements.",
      "On the software side, I developed the control algorithm from scratch in Arduino-C, implementing a custom PID loop with fine-tuned coefficients to minimize overshoot and steady-state error. The final system achieved a thermal stability of ±0.3K, exceeding the experimental requirements. To ensure long-term maintainability, I wrote a comprehensive 18-page technical manual covering electrical schematics, software logic, and safety protocols for laboratory staff."
    ],
    tags: ["Embedded Systems", "Control Theory", "Technical Writing"],
    image: "/box.jpg",
    gallery: [
      "/box.jpg",
    ],
  },
  // {
  //   id: "3",
  //   title: "Ember Lift",
  //   shortDescription: "Engineering tool for calculating internal forces in beam structures.",
  //   content: [
  //     "I designed the electrical system for my group's Praxis III (Engineering Design and Communication) design project. I this project, I went through all stages of the engineering desing process, from defining requirements to prototyping and testing, resulting in an easy to use, automated system to remove debris from roofs.",
  //     "After converging to a rooftop tarp system, I selected electrical components based on power, size, and strength requirements, and wired the system to be controlled by Raspberry Pi Picos.",
  //     "I modeled the entire system in SOLIDWORKS to ensure proper fit and function within the overall mechanical design.",
  //     "Finally, I led the testing and iteration phase, ensuring the system met all design specifications and functioned reliably under various conditions."
  //   ],
  //   tags: ["Electrical Design", "SOLIDWORKS", "Documentation"],
  //   image: "/ember_lift.jpg",
  //   gallery: [
  //     "/ember_lift.jpg",      // Main photo
  //     "/Prototype_Visual_Abstract.jpg",  // Add more paths here
  //   ]
  // },
  {
    id: "3",
    title: "Ember Lift: Automated Wildfire Mitigation",
    shortDescription: "An electrically-actuated rooftop debris removal system designed to reduce fuel loads in fire-prone regions.",
    content: [
      "For my Praxis III (Engineering Design and Communication) cornerstone project, I served as the Lead Electrical Designer for Ember Lift—an automated solution created to protect residential structures from wildfire ignition. The system utilizes an electrically actuated tarp mechanism to clear pine needles and combustible debris from rooftops, directly addressing the 'ember spotting' risk that accounts for numerous structure losses during forest fires.",
      "I was responsible for the end-to-end electrical architecture, which involved selecting high-torque actuators capable of operating under environmental stress. I developed the control logic using Raspberry Pi Picos, ensuring the system could be triggered reliably with minimal user intervention. My work bridged the gap between mechanical design and automation, resulting in a cohesive, functional prototype.",
      "To ensure seamless integration with the mechanical assembly, I modeled the entire design in SOLIDWORKS. This facilitated the planning of tarp layouts for different roof geometries, and guided the design of our small-scale prototype. During the final testing phase, I validated the system against rigorous performance requirements for speed, load capacity, and reliability under simulated debris conditions."
    ],
    tags: ["Mechatronics", "SOLIDWORKS", "Prototyping"],
    image: "/ember_lift.jpg",
    gallery: [
      "/ember_lift.jpg",
      "/Prototype_Visual_Abstract.jpg",
    ]
  },
  // {
  //   id: "4",
  //   title: "Software Projects",
  //   shortDescription: "Engineering tool for calculating internal forces in beam structures.",
  //   content: ["Description coming soon!"
  //     // "1.",
  //     // "2. Sema carving project: \nDeveloped a C program to reduce image size while maintaining visual integrity using the seam carving algorithm. Implemented dynamic programming techniques to identify and remove low-energy seams, optimizing for horizontal and vertical reductions. The program processes images in PPM format, allowing users to specify target dimensions. Successfully reduced image sizes by up to 50% while preserving key visual features, demonstrating proficiency in C programming and algorithmic problem-solving.",

  //   ],
  //   tags: ["MATLAB", "Python", "C"],
  //   image: "/pde.jpg"
  // },
  {
    id: "4",
    title: "Software & Algorithms",
    shortDescription: "Computational tools implementing advanced algorithms for image processing and natural language analysis.",
    content: [
      "PDE Solver: I developed a computational physics solver in MATLAB to analyze the vibration modes of an L-shaped membrane. The program utilizes the Finite Difference Method (FDM) to discretize the Laplacian operator on a non-convex domain, constructing large sparse matrices to represent the structural system. By implementing an eigensolver to extract the smallest eigenvalues and their corresponding eigenfunctions, I was able to model and visualize the resonant frequencies and 'drumhead' displacement patterns. This project highlights my ability to translate complex partial differential equations (PDEs) into efficient numerical simulations using linear algebra and sparse matrix techniques.",
      "Seam Carving: I developed a content-aware image resizing application in C that implements a Seam Carving algorithm to reduce dimensions while preserving key visual features. By calculating the dual-gradient energy of every pixel, the program identifies low-importance paths, or 'seams,' across the image. I utilized dynamic programming to determine the path of least energy and implemented manual memory management to handle RGB image buffers, successfully optimizing image composition by removing redundant data rather than standard pixel scaling.",
      "Gomoku AI: I developed a Gomoku Artificial Intelligence in Python that utilizes a strategic scoring engine to play against human opponents. The AI's core logic relies on a comprehensive game-state analysis algorithm that identifies 'open' and 'semi-open' sequences in four directions (horizontal, vertical, and both diagonals). I implemented a heuristic search function that simulates all possible next moves and evaluates them based on a custom weight-based scoring system to determine the optimal strategic position."
    ],
    tags: ["C Programming", "Python", "MATLAB"],
    image: "/pde.jpg", // This is a great placeholder name for algorithmic art
    gallery: [
      "/pde.jpg"
    ]
  },
  // {
  //   id: "5",
  //   title: "Bridge Design",
  //   shortDescription: "Engineering tool for calculating internal forces in beam structures.",
  //   content: [
  //     "Wrote MATLAB code to iterate through different bridge designs quickly and perdict failure mode and load.",
  //     "Final design withstood over 100lbs, outperforming 80% of other designs in the class.",
  //     "Detailed documentation of design process and final analysis compiled into a comprehensive report."
  //   ],
  //   tags: ["Statics", "MATLAB", "Documentation"],
  //   image: "/bridge.jpg"
  // }
  {
    id: "5",
    title: "Structural Optimization: Bridge Design",
    shortDescription: "Computational modeling and physical testing of a beam bridge using MATLAB for structural analysis.",
    content: [
      "In this structural engineering challenge, I developed a MATLAB-based simulation tool to perform iterative stress analysis on various beam bridge cross sections. My code was able to rapidly calculate tensile and compressive forces for loads placed at all locations along the bridge, and predict specific failure modes—such as buckling or tensile fracture, based on material properties and geometric constraints.",
      "The simulation enabled me to optimize the strength based on material and adhesive quantity constraints. The final physical prototype, constructed from matboard and adhesive, withstood a compressive load exceeding 100 lbs, outperforming 80% of peer designs.",
      "I compiled the entire design cycle—from initial force diagrams and computational iterations to post-failure analysis—into a comprehensive technical report. This project demonstrated my ability to bridge the gap between abstract mathematical models and real-world physical performance."
    ],
    tags: ["Computational Modeling", "Statics", "MATLAB", "Structural Analysis"],
    image: "/bridge.jpg",
    gallery: [
      "/bridge.jpg",
    ]
  }
  // Add more projects here as needed...
];