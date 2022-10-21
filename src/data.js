//importing icons for skills
import { Icon } from "@iconify/react";
const html = <Icon icon="akar-icons:html-fill" color="#0087ca" />;
const css = <Icon icon="akar-icons:css-fill" color="#0087ca" />;
const javascript = <Icon icon="akar-icons:javascript-fill" color="#0087ca" />;
const react = <Icon icon="akar-icons:react-fill" color="#0087ca" />;
const tailwind = <Icon icon="bxl:tailwind-css" color="#0087ca" />;
const git = <Icon icon="bi:git" color="#0087ca" />;

export const Links = [
  { id: 1, item: "Home", path: "home" },
  { id: 2, item: "Skill", path: "skill" },
  { id: 3, item: "Project", path: "project" },
  { id: 4, item: "Contact", path: "contact" },
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
