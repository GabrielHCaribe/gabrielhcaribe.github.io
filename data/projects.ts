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
  {
    id: "0",
    title: "CAN-RXG Team Cristar",
    shortDescription: "Electrical lead researching laser-induced crystallization in 0-g.",
    content: [
      "As part of the CAN-RXG Team Cristar, we are designing and building an apparatus to study laser-induced crystallization in microgravity aboard a Falcon 20. We are currently in the preliminary design phase of the project, with the flight scheduled for June, 2026.",
      "As the Electrical Lead, I am responsible for electrical component selection, securing sponsorships, designing and building the GUI, and testing to ensure flight-readiness.",
      "The results will help determine whether short duration parabolic flights are a viable option for improved crystal growth, supporting industries that rely on high-quality crystals such as the pharmaceutical industry."
    ],
    tags: ["Electrical Design", "Component Selection", "Research"],
    image: "/canrgx.png"
  },
  {
    id: "1",
    title: "Advanced Physics Lab",
    shortDescription: "High-Temp super conductor analysis and particle identification",
    content: [
      "Last semester as part of my Advanced Physics Lab course, I conducted performed experiments and analyzed data relating to determining the critical temperature of an unknown high-temperature super conductor and particle identification in bubble chamber images.",
      "1. In the high-temperature super conductor experiment, I cooled an a BSCCO sample using liquid nitrogen and plotted its resitance against temperature using a 4 wire method to overcome the wire's internal resistance. I also measued the magnetic susceptability of the sample as it cooled, using aa two coil method. I analyzed the data using a Savitzky-Golay filter and Monte-Carlo simulations, and calculated a critical temperature that aligns with literature values.",
      "2. For the bubble chamber experiment, I analyzed two strong interactions in images taken at the Stanford Linear Accelerator center, and deterined all particles involved using conservation properties. This experiment was much more data-heavy, having tracked numerous calculated and inferred particle properteis for dozens of bubble chamber tracks in Excel. In the end, I successfully identified all particles involved in both interactions, with momentum and energy being conserved."
    ],
    tags: ["Research", "Documentation", "Physics"],
    image: "/levetation.png"
  },
  {
    id: "2",
    title: "PID Heating System",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "As part of my internship at the Max Planck Institute for the Structure and Dynamics of Matter, I designed, constructed, and tested a custom PID heating system.",
      "The goal was to maintain the temperatrue of the small sample of glycerol used in a laser ablation experiment to analyze rubber-like elastic properties of Newtonian fluids.",
      "The system was composed of an industrial level Arduino (Industruino), temperature transducers, a relay,PT-1000 thermometers, and a resistive heater. I designed the electrical system and perfomed claulcations as to required power and componenet ratings.",
      "I wrote all the code for the PID controller from scratch in Arduino-C, and tested the entire system to ensure it met the required temperature stability of ±0.3K, meeting system requirements.",
      "To document the project, I wrote an 18-page user manual detailing the saftey consideration, electrical design, software, and user instructions."
    ],
    tags: ["Electrical Design", "Arduino-C", "Testing"],
    image: "/box.jpg"
  },
  {
    id: "3",
    title: "Ember Lift",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "I designed the electrical system for my group's Praxis III (Engineering Design and Communication) design project. I this project, I went through all stages of the engineering desing process, from defining requirements to prototyping and testing, resulting in an easy to use, automated system to remove debris from roofs.",
      "After converging to a rooftop tarp system, I selected electrical components based on power, size, and strength requirements, and wired the system to be controlled by Raspberry Pi Picos.",
      "I modeled the entire system in SOLIDWORKS to ensure proper fit and function within the overall mechanical design.",
      "Finally, I led the testing and iteration phase, ensuring the system met all design specifications and functioned reliably under various conditions."
    ],
    tags: ["Electrical Design", "SOLIDWORKS", "Documentation"],
    image: "/ember_lift.jpg",
    gallery: [
      "/ember_lift.jpg",      // Main photo
      "/Prototype_Visual_Abstract.jpg",  // Add more paths here
    ]
  },
  {
    id: "4",
    title: "Software Projects",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: ["Description coming soon!"
      // "1.",
      // "2. Sema carving project: \nDeveloped a C program to reduce image size while maintaining visual integrity using the seam carving algorithm. Implemented dynamic programming techniques to identify and remove low-energy seams, optimizing for horizontal and vertical reductions. The program processes images in PPM format, allowing users to specify target dimensions. Successfully reduced image sizes by up to 50% while preserving key visual features, demonstrating proficiency in C programming and algorithmic problem-solving.",

    ],
    tags: ["MATLAB", "Python", "C"],
    image: "/pde.jpg"
  },
  {
    id: "5",
    title: "Bridge Design",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "Wrote MATLAB code to iterate through different bridge designs quickly and perdict failure mode and load.",
      "Final design withstood over 100lbs, outperforming 80% of other designs in the class.",
      "Detailed documentation of design process and final analysis compiled into a comprehensive report."
    ],
    tags: ["Statics", "MATLAB", "Documentation"],
    image: "/bridge.jpg"
  }
  // Add more projects here as needed...
];