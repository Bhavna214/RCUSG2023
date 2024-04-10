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
  project,
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
    title: "Growth",
    icon: web,
  },
  {
    title: "Unity",
    icon: mobile,
  },
  {
    title: "Togetherness",
    icon: backend,
  },
  {
    title: "Enjoyment",
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
    title: "Khushiyon Wali Teej",
    company_name: "Rtr. Roshni Panjwani, Rtr. Supriya",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 29, 2023 - September 2, 2023",
    points: [
      "Teej, a vibrant and joyous Hindu festival, celebrates the arrival of the monsoon season, renewal of life, and the bond between husband and wife.",
      " Adorned in colorful traditional attire, women sing and dance, swinging on intricately decorated swings, while the aroma of traditional sweets and delicacies fills the air.",
      "It's a time of prayer, fasting, and festivity, as communities come together to share in the merriment, marking the rejuvenation of nature and the spirit of togetherness.",
    ],
  },
  {
    title: "Umeed 3.0 session 6",
    company_name: "Rtr. Dev Tanwani, Rtr. Param Charha",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 26, 2023",
    points: [
      "Teaching underprivileged children is a noble endeavor that holds the power to transform lives and bridge societal gaps.",
      " By imparting knowledge and skills, educators create a pathway for these children to break the cycle of poverty and realize their potential. ",
      " Through patience, compassion, and tailored teaching approaches, educators not only provide academic guidance but also inspire confidence, ignite curiosity, and instill a belief in the value of education.",
      "Each lesson becomes a step toward empowerment, fostering dreams and aspirations that hold the promise of a brighter future.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This club has given me the opportunity to use my skills and talents for a greater cause. It's inspiring to work alongside such dedicated and compassionate individuals.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Joining this club has shown me the true power of collective action. Together, we've tackled important issues and made a real difference in the lives of those we serve.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've been a member of this social service club for years, and I'm continuously amazed by the positive change we bring to our community. It's an honor to be part of this incredible team.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Be The Change",
    description:
      "The Rotaract Club's blood donation project exemplifies the spirit of humanitarian service and community support. By organizing blood drives and awareness campaigns, the club plays a crucial role in addressing the ongoing need for life-saving blood donations. Through these efforts, they contribute to medical emergencies, surgeries, and treatments, ultimately saving lives and fostering a culture of voluntary giving.",
    tags: [
      {
        name: "bloodDonation",
        color: "blue-text-gradient",
      },
      {
        name: "saveLives",
        color: "green-text-gradient",
      },
      {
        name: "donateBlood",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://www.instagram.com/reel/C5kxlQoPIpO/?igsh=MWc4M2NmZnJzZTFiaQ==",
  },
  {
    name: "Be The Change",
    description:
      "The Rotaract Club's blood donation project exemplifies the spirit of humanitarian service and community support. By organizing blood drives and awareness campaigns, the club plays a crucial role in addressing the ongoing need for life-saving blood donations. Through these efforts, they contribute to medical emergencies, surgeries, and treatments, ultimately saving lives and fostering a culture of voluntary giving.",
    tags: [
      {
        name: "bloodDonation",
        color: "blue-text-gradient",
      },
      {
        name: "saveLives",
        color: "green-text-gradient",
      },
      {
        name: "donateBlood",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://www.instagram.com/reel/C5lLVvyt9_g/?igsh=dm5jN2pxMzBvbnc0",
  },
  {
    name: "Be The Change",
    description:
      "The Rotaract Club's blood donation project exemplifies the spirit of humanitarian service and community support. By organizing blood drives and awareness campaigns, the club plays a crucial role in addressing the ongoing need for life-saving blood donations. Through these efforts, they contribute to medical emergencies, surgeries, and treatments, ultimately saving lives and fostering a culture of voluntary giving.",
    tags: [
      {
        name: "bloodDonation",
        color: "blue-text-gradient",
      },
      {
        name: "saveLives",
        color: "green-text-gradient",
      },
      {
        name: "donateBlood",
        color: "pink-text-gradient",
      },
    ],
    image: project,
    source_code_link: "https://www.instagram.com/reel/C5ijDt4tl5a/?igsh=MXVzOTN5ZjRmMHZ2ag==",
  },
];

export { services, technologies, experiences, testimonials, projects };
