import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  PugHaus,
  HackTheHood,
  threejs,
  pomodoro,
  SAV,
  uber,
  carshow,
  AISWE,
  Kcord,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about"
  },
  {
    id: "Github",
    title: "Github",
    link: "https://github.com/Kylejeong2"
  },
  {
    id: "Twitter",
    title: "Twitter",
    link: "https://twitter.com/kylejeong21"
  },
  {
    id: "Linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/kyle-jeong/"
  },
];

const services = [
  {
    title: "Front-end Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / ML",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "PugHaus",
    icon: PugHaus,
    iconBg: "#383E56",
    date: "June 2023 - November 2023",
    points: [
      "Designed sales funnel from scratch with webflow and added HTML, CSS, and JavaScript integrations",
      "Utilized Airtable and JavaScript to create data management system to manage over 100 users.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Hack the Hood",
    icon: HackTheHood,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Collaborated with a small team to design and create a multi-paged website for a small business in under 3 weeks.",
      "Increased online customer retention and improved sales by refining website UI and overall ease of use.",

    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MyDoro Timer",
    description:
      "Customizable Pomodoro Timer Chrome Extension",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pomodoro,
    source_code_link: "https://github.com/Kylejeong2/MyDoro-Timer",
  },
  {
    name: "Kcord",
    description:
      "Full Stack Chat application using Flask, Jinja, and a SQL database.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: Kcord,
    source_code_link: "https://github.com/Kylejeong2/Kcord",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "React application showing popular sorting algorithms visualized.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: SAV,
    source_code_link: "https://github.com/Kylejeong2/SortingAlgorithmVisualizer2.0",
  },
  {
    name: "Uber App Clone",
    description:
      "Clone of the Uber Mobile App using React Native and Tailwind. ",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: uber,
    source_code_link: "https://github.com/Kylejeong2/Uber-App-Clone",
  },
  {
    name: "CarShow",
    description:
      "Car displaying app using Next.js and Vercel to host it. ",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Ninja API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carshow,
    source_code_link: "https://github.com/Kylejeong2/Carshow-Next.js-Project",
  },
  {
    name: "AI SWE Assistant",
    description:
      "React App that assists user programming using OpenAI 'agents' to generate code. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "pink-text-gradient",
      },
    ],
    image: AISWE,
    source_code_link: "https://github.com/Kylejeong2/AI-SWE",
  },
];

export { services, technologies, experiences, testimonials, projects };