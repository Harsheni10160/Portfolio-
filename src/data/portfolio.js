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
    resume: "./public/resume pdf[1].pdf" // Put resume in public folder
  },

  // About Section
  about: {
    description: `I'm a passionate frontend developer who loves creating beautiful, 
                 accessible web experiences. I enjoy working with modern JavaScript 
                 frameworks and have a keen eye for design details.`,
    skills: {
      frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      tools: ["Git", "VS Code", "Figma"],
      backend: ["Node.js", "Express", "MongoDB"],
      programs: ["Java", "Python", "C++"],
      learning: ["TypeScript", "Node.js", "Three.js"]
    }
  },

  // Projects (Add your real projects here)
  projects: [
    {
      id: 1,
      title: "Anime Typing Game",
      description: " A Responsive Typing Game with Anime Theme, Real-time Leaderboard, and Engaging UI.",
      tech: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
      features: [
        "Real-time typing speed and accuracy tracking",
        "Anime-themed UI with character animations",
        "Global leaderboard with Firebase integration"
      ],
      image: "/project1.png", // Add to public folder
      github: "https://github.com/Harsheni10160/Anime-typing-speed-testing-",
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
      github: "https://github.com/yourusername/project3",
      status: "In Progress"
    }
  ]
};