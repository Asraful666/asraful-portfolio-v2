export const personalInfo = {
  name: "Md Asraful Islam",
  designation: "Aspiring Full-Stack Developer",
  introduction:
    "A Computer Science and Engineering student passionate about building modern and responsive web applications.",
  photo: "/images/profile.jpeg",
  email: "6mdasrafulislam@gmail.com",
  phone: "01989601086",
  phoneLink: "+8801989601086",

  about: [
    "I am Md Asraful Islam, a Computer Science and Engineering student at Sylhet International University and an aspiring full-stack developer. I started my web development journey by learning HTML and CSS, including Flexbox and Grid, before moving on to JavaScript and React.",

    "I enjoy building responsive web applications and turning ideas into useful projects. Through projects such as BazarDor, Dev Stack, and FitLog, I am developing my skills in frontend development, API integration, and backend technologies.",

    "I regularly practice programming problems to improve my logical thinking and understanding of algorithms and data structures. Outside programming, I enjoy cricket, reading storybooks, and gardening. My goal is to become a professional full-stack developer and build applications that solve practical problems.",
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Asraful666",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mdasrafulislam.asraf.7965",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mdasraful1924/",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend — Currently Learning",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

export const education = [
  {
    institution: "Sylhet International University",
    qualification: "BSc (Engg.) in CSE",
    period: "September 2024 – September 2028 (Expected)",
    status: "Currently Studying",
    description:
      "Studying Computer Science and Engineering, including programming, software development, and computer science fundamentals.",
  },
  {
    institution: "Uniatena",
    qualification: "Executive Diploma in Machine Learning",
    period: "",
    status: "Completed",
    description:
      "Studied machine learning concepts, programming, and practical applications of intelligent systems.",
  },
];

export type Project = {
  slug: string;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  futurePlans: string;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    name: "BazarDor — বাজার দর",
    image: "/images/bazar-dor.png",
    description:
      "A responsive Bengali market-price application for viewing daily essential-product prices, price changes, and market comparisons.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "React Hot Toast",
    ],
    liveUrl: "https://bazar-dor-7c27.vercel.app/",
    githubUrl: "https://github.com/Asraful666/bazar-dor-v2",
    challenges:
      "The main challenges included configuring email/password and Google/GitHub authentication, resolving OAuth callback errors, and connecting MongoDB. Other challenges involved protecting product and profile pages, handling API failures, and sorting product prices numerically.",
    futurePlans:
      "I plan to add product price-history charts, allow users to save favorite products, and introduce price-change alerts.",
  },
  {
    slug: "dev-stack",
    name: "Dev Stack",
    image: "/images/dev-stack.png",
    description:
      "A web application that helps developers explore technologies, view their details, and build a personal technology stack by adding or removing technologies.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Icons",
      "React Toastify",
      "JSON",
    ],
    liveUrl: "https://celadon-treacle-de6632.netlify.app/",
    githubUrl: "https://github.com/Asraful666/B14_A5_dev_stack",
    challenges:
      "The main challenges included managing selected technologies with React state, preventing duplicate selections, and keeping the interface updated when users added or removed technologies. Loading JSON data and passing data and event handlers between components also required careful implementation.",
    futurePlans:
      "I plan to add technology search and category filters, introduce side-by-side technology comparisons, and provide an option to export a selected stack.",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    image: "/images/fitlog.png",
    description:
      "A responsive workout library that lets users explore exercises, view workout details, save workouts, and manage a personal workout plan.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "React Hot Toast",
      "REST API",
    ],
    liveUrl: "https://a6-fit-log-amber.vercel.app/",
    githubUrl: "https://github.com/Asraful666/a6-fit-log",
    challenges:
      "The main challenges included fetching workout data from a REST API, creating dynamic workout details pages, and managing planned and saved workouts with Context API. Keeping workout actions consistent across pages and implementing sorting by duration, calories, and rating also required careful state management.",
    futurePlans:
      "I plan to add weekly workout schedules, workout-progress charts, and personalized workout recommendations.",
  },
];