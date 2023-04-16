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
  shopify,
  ga,
  med,
  wallaroos,
  carrent,
  jobit,
  tripguide,
  threejs,
  padi,
  ttt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Business Development",
    icon: mobile,
  },
  {
    title: "Full Stack Application Development",
    icon: backend,
  },
  {
    title: "SEO and Marketing",
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
    title: "Student",
    company_name: "General Assembly",
    icon: ga,
    iconBg: "#383E56",
    date: "Dec 2022 - March 2023",
    points: [
      "Completed General Assembly's Software Engineering Immersive Course, graduating with a comprehensive understanding of software development principles and practices.",
      "Demonstrated exceptional collaboration skills through successful group projects, working effectively with peers in pairs and teams to deliver full-stack web applications.",
      "Implementing responsive designs, CRUD, DRY code and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "PADI Staff Instructor",
  company_name: "Spiration Scuba LLC",
  icon: padi,
  iconBg: "#E6DEDD",
  date: "June 2014 - Dec 2017",
  points: [
    "Developing and maintaining ecommerce websites on the Shopify platform.",
    "Collaborating with clients to establish a clear brand and marketing strategy.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Monitoring and reporting site analytics to clients.",
    ],
  },
  {
    title: "CTO",
    company_name: "PNW Med. Supply",
    icon: med,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - June 2020",
    points: [
      "As Chief Technology Officer (CTO), my primary focus was to develop web crawlers that would scrape for contact information of key decision makers, then pass that information along to the sales team.",
      "I was also in charge of setting up landing pages in order to capture and convert shoppers online.",
    ],
  },
  {
     title: "Lead Web Developer",
    company_name: "Wallaroo's Furniture",
    icon: wallaroos,
    iconBg: "#383E56",
    date: "Dec 2017 - Jan 2020",
    points: [
      "Website Development: Designed, developed, and maintained the company's website, ensuring that it is user-friendly, visually appealing, and optimized for search engines. This includes creating wireframes, mockups, and prototypes, as well as coding and testing the website.",
      "Content Management: Managed and updated website content, including product descriptions, images, and pricing. This also included configuring metadata, image descriptions and on-page schema markups for SEO.",
      "Website Analytics: Monitored and analyzed website analytics to identify areas for improvement and make data-driven decisions. I used tools such as AdWords, Jetpack, and other SEO plugins.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Shopify/WooCommerce",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "June 2014 - Dec 2017",
    points: [
      "Developing and maintaining ecommerce websites on the Shopify platform.",
      "Collaborating with clients to establish a clear brand and marketing strategy.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Monitoring and reporting site analytics to clients.",
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
    name: "CodeIt (DEPLOYMENT UNDER MAINTENANCE)",
    description:
      "CodeIt is designed to provide users with personalized code suggestions, bug fixes, and syntax corrections in real-time, which can help streamline the coding process and increase productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ethandb23/Chat-Bot",
    deploy_link: "",
  },
  {
    name: "Fitness Tracker",
    description:
      "An application which allows users to track their workout history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ethandb23/fitness-tracker",
    deploy_link: "https://fitnesstracker-ga.netlify.app/",
  },
  {
    name: "Dad Jokes",
    description:
      "An app whic allows users to fetch and collect dad jokes in a saved list using the icanhazdadjoke api.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ethandb23/dad-jokes",
    deploy_link: "https://dad-jokes-api-list-project-2.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "A Classic Tic Tac Toe Game.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ttt,
    source_code_link: "https://github.com/ethandb23/TTT",
    deploy_link: "https://codepen.io/Ethandberk/full/rNrwMzo",
  }
];

export { services, technologies, experiences, testimonials, projects };
