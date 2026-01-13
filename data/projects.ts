// data/projects.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Used for the Gallery cards
  content: string[];        // Array of strings to allow multiple paragraphs
  tags: string[];
  image: string;
  link?: string;            // Optional: for external links (GitHub, Live site)
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
    image: "levetation.png"
  },
  {
    id: "2",
    title: "PID Heating System",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Electrical Design", "Arduino-C", "Testing"],
    image: "box.jpg"
  },
  {
    id: "3",
    title: "Ember Lift",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Electrical Design", "SOLIDWORKS", "Documentation"],
    image: "ember_lift.jpg"
  },
  {
    id: "4",
    title: "Software Projects",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["MATLAB", "Python", "C"],
    image: "/project-placeholder.jpg"
  },
  {
    id: "5",
    title: "Bridge Design",
    shortDescription: "Engineering tool for calculating internal forces in beam structures.",
    content: [
      "A short, concise description for this specific project."
    ],
    tags: ["Statics", "MATLAB", "Documentation"],
    image: "/project-placeholder.jpg"
  }
  // Add more projects here as needed...
];