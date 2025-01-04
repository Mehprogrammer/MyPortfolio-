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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  edmonton,
  depot,
  lac,
  T,
  password
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
      title: "Web Developer",
      icon: web,
  },
  {
      title: "React Native Developer",
      icon: mobile,
  },
  {
      title: "Backend Developer",
      icon: backend,
  },
  {
      title: "Content Creator",
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
      title: "Project Coordinator",
      company_name: "Tunio Developments Inc.",
      icon: T, // Use a relevant icon if available
      iconBg: "#E6DEDD",
      date: "May 2024 - Sep 2024",
      points: [
          "Developed comprehensive project plans, schedules, and resource allocation strategies to meet project objectives.",
          "Monitored project progress and performance, identifying and mitigating risks to ensure successful project outcomes.",
          "Prepared project proposals, tender documents, including scope definition, cost estimation, and timeline development.",
          "Coordinated and managed multiple projects simultaneously, ensuring timely completion and adherence to budget constraints.",
      ],
  },
  {
      title: "Seasonal Sales Associate",
      company_name: "The Home Depot Canada",
      icon: depot, // Use a relevant icon if available
      iconBg: "#383E56",
      date: "Mar 2024 - May 2024",
      points: [
          "Assisted customers in locating products and provided product knowledge.",
          "Handled transactions efficiently and provided exceptional customer service.",
      ],
  },
  {
      title: "Recreation Technician I",
      company_name: "City of Edmonton",
      icon: edmonton, // Use a relevant icon if available
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
          "Supported recreational programs and activities.",
          "Maintained a safe and enjoyable environment for participants.",
      ],
  },
  {
      title: "Seasonal Associate",
      company_name: "Lac La Biche County",
      icon: lac, // Use a relevant icon if available
      iconBg: "#383E56",
      date: "Jul 2021 - Aug 2021",
      points: [
          "Performed maintenance tasks and supported community events.",
          "Ensured a clean and organized workspace.",
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
      name: "Weather Text Bot",
      description:
          "An automated weather forecasting service using Python, integrating open-source APIs to deliver personalized updates.",
      tags: [
          {
              name: "python",
              color: "blue-text-gradient",
          },
          {
              name: "api",
              color: "green-text-gradient",
          },
      ],
      image: carrent, // Replace with the actual project image
      source_code_link: "https://github.com/",
  },
  {
      name: "Password Manager",
      description:
          "A secure and efficient password management tool using symmetric key encryption with Python's Fernet module.",
      tags: [
          {
              name: "python",
              color: "blue-text-gradient",
          },
          {
              name: "encryption",
              color: "green-text-gradient",
          },
      ],
      image: password, // Replace with the actual project image
      source_code_link: "https://github.com/",
  },
  {
      name: "Travel Text Bot",
      description:
          "A travel assistant application leveraging transportation APIs to provide real-time ETA for destinations.",
      tags: [
          {
              name: "python",
              color: "blue-text-gradient",
          },
          {
              name: "gis",
              color: "green-text-gradient",
          },
      ],
      image: tripguide, // Replace with the actual project image
      source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
