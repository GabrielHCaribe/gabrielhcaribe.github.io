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
      "This project involved a deep dive into numerical analysis, specifically exploring wave function collapse using Python and NumPy.",
      "As the Electrical Lead, my primary focus was component selection and ensuring the stability of the laser system under varying gravitational loads.",
      "The results provided significant data for our research into microgravity physics."
    ],
    tags: ["Electrical Design", "Component Selection", "Research"],
    image: "/canrgx.png"
  },
  {
    id: "1",
    title: "Advanced Physics Lab",
    shortDescription: "Particle identification, optical traps, and super conductor analysis.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Research", "Documentation", "Physics"],
    image: "/levetation.png"
  },
  {
    id: "2",
    title: "PID Heating System",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
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
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["MATLAB", "Python", "C"],
    image: "/pde.jpg"
  },
  {
    id: "5",
    title: "Bridge Design",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Statics", "MATLAB", "Documentation"],
    image: "/bridge.jpg"
  }
  // Add more projects here as needed...
];