//importing icons for skills
import { Icon } from "@iconify/react";
//importing data for projects
import eProperty from "./assets/imgaes/eProperty.png";
import Holi from "./assets/imgaes/holi.png";
import Textanalyzer from "./assets/imgaes/textanalyzer.png";
import Tip from "./assets/imgaes/tip.jpg";

//importing icons for skills
const html = <Icon icon="akar-icons:html-fill" color="#0087ca" />;
const css = <Icon icon="akar-icons:css-fill" color="#0087ca" />;
const javascript = <Icon icon="akar-icons:javascript-fill" color="#0087ca" />;
const react = <Icon icon="akar-icons:react-fill" color="#0087ca" />;
const tailwind = <Icon icon="bxl:tailwind-css" color="#0087ca" />;
const git = <Icon icon="bi:git" color="#0087ca" />;

//importing icons for contact
const address = <Icon icon="entypo:location" color="#0087ca" />;
const phone = <Icon icon="bx:phone-call" color="#0087ca" />;
const email = <Icon icon="carbon:email" color="#0087ca" />;

//for navbar
export const Links = [
  { id: 1, item: "Home", path: "home", max_rang: 25, min_range: -5 },
  { id: 2, item: "Skill", path: "skill", max_rang: 50, min_range: 25 },
  { id: 3, item: "Project", path: "project", max_rang: 85, min_range: 50 },
  {
    id: 4,
    item: "Contact",
    path: "contact",
    max_rang: 110,
    min_range: 85,
  },
];

//icons for home
export const Icons = [
  {
    id: 1,
    link: "https://www.facebook.com/anish.acharya.79230",
    svg: "eva:facebook-outline",
  },
  {
    id: 2,
    link: "https://github.com/anish-acharya123",
    svg: "eva:github-outline",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/anish-acharya-819755212/",
    svg: "lucide:linkedin",
  },
  {
    id: 4,
    link: "https://www.instagram.com/iamanish_acharya/",
    svg: "ion:logo-instagram",
  },
];

//skills icon
export const Skills = [
  {
    id: 1,
    icon: html,
    title: "Html",
    Description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 2,
    icon: css,
    title: "Css",
    Description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language.",
  },
  {
    id: 3,
    icon: javascript,
    title: "Javascript",
    Description:
      "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.",
  },
  {
    id: 4,
    icon: react,
    title: "React",
    Description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
  },
  {
    id: 5,
    icon: git,
    title: "Git",
    Description: "Git is a DevOps tool used for source code management.",
  },
  {
    id: 6,
    icon: tailwind,
    title: "Tailwind",
    Description: "Tailwind CSS is an open source CSS framework. ",
  },
];

//for project
export const Projects = [
  {
    id: 1,
    name: "eProperty Website",
    img: eProperty,
    source: "React",
    link: `https://eproperty.vercel.app/`,
    description: "eProperty Nepal - Buy your dream house",
  },
  {
    id: 2,
    name: "Holi Project",
    img: Holi,
    source: "Html/Css",
    link: `https://anish-acharya123.github.io/Holi-project/`,
    description: "Heppy Holi to all my friends out there.",
  },
  {
    id: 3,
    name: "Textanalyzer- Text Modifier",
    img: Textanalyzer,
    source: "Bootstrap",
    link: `https://text-analyzer-two.vercel.app/`,
    description: " word counter use to manipulate your text .",
  },
  {
    id: 4,
    name: "Tips Calculator",
    img: Tip,
    source: "JavaScript",
    link: `https://anish-acharya123.github.io/Tips-Calculator/`,
    description: " which calculate your Tips.",
  },
];

//for contact
export const Contacts = [
  {
    id: 1,
    item: "Address",
    icon: address,
    details: "Rupandehi,Nepal",
  },
  {
    id: 2,
    item: "Phone",
    icon: phone,
    details: "+977-9847060394",
  },
  {
    id: 3,
    item: "Email",
    icon: email,
    details: "acharyaanish920@gmail.com",
  },
];
