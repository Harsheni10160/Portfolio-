// src/data/portfolio.js
export const portfolioData = {
  // Personal Info
  name: "Deva Harsheni",
  tagline: "Frontend Developer who builds delightful user experiences",
  email: "deva.harsheni.s76@kalvium.community",
  location: "Coimbatore, India",
  
  // Social Links
  social: {
    github: "https://github.com/Harsheni10160",
    linkedin: "https://linkedin.com/in/deva-harsheni-singaravel-560a91356",
    // resume: "/path-to-your-resume.pdf" // Put resume in public folder
  },

  // About Section
  about: {
    description: `I'm a passionate frontend developer who loves creating beautiful, 
                 accessible web experiences. I enjoy working with modern JavaScript 
                 frameworks and have a keen eye for design details.`,
    skills: {
      frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      tools: ["Git", "VS Code", "Figma", "Photoshop"],
      learning: ["TypeScript", "Node.js", "Three.js"]
    }
  },

  // Projects (Add your real projects here)
  projects: [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for managing online store operations with real-time analytics.",
      tech: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
      features: [
        "Real-time sales analytics",
        "Product inventory management", 
        "Responsive design for all devices"
      ],
      image: "/project1.jpg", // Add to public folder
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project1",
      status: "Completed"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Clean, minimalist weather application with location-based forecasts and beautiful UI.",
      tech: ["JavaScript", "Weather API", "CSS Grid", "LocalStorage"],
      features: [
        "5-day weather forecast",
        "Location-based detection",
        "Dark/light theme toggle"
      ],
      image: "/project2.jpg",
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project2", 
      status: "Completed"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task manager with drag-and-drop functionality and team features.",
      tech: ["React", "React DnD", "Firebase", "Material-UI"],
      features: [
        "Drag and drop task organization",
        "Team collaboration features",
        "Progress tracking and analytics"
      ],
      image: "/project3.jpg",
      demo: "https://your-demo-link.com",
      github: "https://github.com/yourusername/project3",
      status: "In Progress"
    }
  ]
};