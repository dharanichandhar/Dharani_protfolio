import skillsData from './skills.json';
import projectsData from './projects.json';
import achievementsData from './achievements.json';
import educationData from './education.json';

export { skillsData, projectsData, achievementsData, educationData };

export const personalInfo = {
  name: "Dharani Chandhar",
  greeting: "Hello, I'm",
  title: "Fresher Developer",
  description: "Building scalable solutions and bridging the gap between complex systems and real-world applications. Passionate about creating impactful technology.",
  resumeLink: "/assets/Dharani_Resume.pdf",
  profileImage: "/assets/dcpic.png",
  socialLinks: {
    github: "https://github.com/dharanichandhar",
    linkedin: "https://www.linkedin.com/in/dharani-chandhar-v-28b770289"
  },
  contact: {
    email: "dharaniv2308@gmail.com",
    location: "Available Worldwide"
  }
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const typedPhrases = [
  "Fresher Developer",
  "Aspiring Engineer",
  "Python Enthusiast",
  "React Developer",
  "Problem Solver"
];

export const aboutData = {
  paragraphs: [
    "I'm a <strong>Fresher Developer</strong> passionate about building solutions that make a real impact. With a solid foundation in modern technologies, I'm eager to apply my skills in Python, React, and Node.js to create innovative applications and grow as a developer.",
    "My journey in tech has been driven by curiosity and a desire to solve problems. I'm enthusiastic about learning new technologies and thrive in dynamic environments where I can contribute to meaningful projects while developing my skills.",
    "When I'm not coding, you'll find me exploring new technologies, working on personal projects, or sharing my knowledge with the developer community."
  ],
  stats: [
    { icon: "clock", label: "Years Experience", value: "Fresher", isText: true },
    { icon: "folder", label: "Projects Completed", value: 3, suffix: "+" },
    { icon: "users", label: "Happy Clients", value: 1, suffix: "+" },
    { icon: "star", label: "Certifications", value: 5, suffix: "+" }
  ]
};

export const emailConfig = {
  serviceId: "service_tv1iam1",
  templateId: "template_kgtrwjd",
  publicKey: "Pu65SchGkmVNsu2De"
};
