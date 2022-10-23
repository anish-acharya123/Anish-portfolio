//importing icons for skills
import { Icon } from "@iconify/react";
//importing data for projects
import eProperty from "./assets/imgaes/eProperty.png";
import Holi from "./assets/imgaes/holi.png";
import Textanalyzer from "./assets/imgaes/textanalyzer.png";

//importing icons for skills
const html = <Icon icon="akar-icons:html-fill" color="#0087ca" />;
const css = <Icon icon="akar-icons:css-fill" color="#0087ca" />;
const javascript = <Icon icon="akar-icons:javascript-fill" color="#0087ca" />;
const react = <Icon icon="akar-icons:react-fill" color="#0087ca" />;
const tailwind = <Icon icon="bxl:tailwind-css" color="#0087ca" />;
const git = <Icon icon="bi:git" color="#0087ca" />;

export const Links = [
  { id: 1, item: "Home", path: "home", max_rang: 50, min_range: -5 },
  { id: 2, item: "Skill", path: "skill", max_rang: 98, min_range: 50 },
  { id: 3, item: "Project", path: "project", max_rang: 150, min_range: 98 },
  {
    id: 4,
    item: "Contact",
    path: "contact",
    max_rang: undefined,
    min_range: undefined,
  },
];

//icons for home
export const Icons = [
  {
    id: 1,
    link: "#",
    svg: "eva:facebook-outline",
  },
  { id: 2, link: "#", svg: "eva:github-outline" },
  { id: 3, link: "#", svg: "lucide:linkedin" },
  { id: 4, link: "#", svg: "ion:logo-instagram" },
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
    id: 1,
    name: "Holi Project",
    img: Holi,
    source: "Html/Css",
    link: `https://anish-acharya123.github.io/Holi-project/`,
    description: "Heppy Holi to all my friends out there.",
  },
  {
    id: 1,
    name: "Textanalyzer- Text Modifier",
    img: Textanalyzer,
    source: "React/Bootstrap",
    link: `https://text-analyzer-two.vercel.app/`,
    description: " word counter use to manipulate your text .",
  },
];
