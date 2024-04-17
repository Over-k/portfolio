import type { Routes, Site, SkillsObjects, SocialObjects, CMDs } from "./types";
export const ROUTES: Routes = [
  {
    name: "Works",
    path: "/works"
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];
export const SITE: Site = {
  website: "https://aitmiloud.com/",
  author: "Khalid Ait Miloud",
  desc: "I am 21 years old. I am from a small village near Imintanout. I am a student at Racine in Marrakech, Morocco. I am interested in dev, web security and  Open Source technologies.",
  title: "Khalid Ait Miloud",
  ogImage: "logo.png",
  lightAndDarkMode: true,
  postPerPage: 10,
};
export const SKILLS: SkillsObjects = [
  {
    name: "HTML",
    active: true,
    icon: "skills/html",
  },
  {
    name: "CSS",
    active: true,
    icon: "skills/css",
  },
  {
    name: "Javascript",
    active: true,
    icon: "skills/javascript",
  },
  {
    name: "Typescript",
    active: true,
    icon: "skills/typescript",
  },
  {
    name: "Tailwind",
    active: true,
    icon: "skills/tailwind",
  },
  {
    name: "Git",
    active: true,
    icon: "skills/git",
  },
  {
    name: "MySQL",
    active: true,
    icon: "skills/mysql",
  },
  {
    name: "Bootstrap",
    active: true,
    icon: "skills/bootstrap",
  },
  {
    name: "Docker",
    active: true,
    icon: "skills/docker",
  },
  {
    name: "Figma",
    active: true,
    icon: "skills/figma",
  },
  {
    name: "Python",
    active: true,
    icon: "skills/python",
  },
  {
    name: "Java",
    active: true,
    icon: "skills/java",
  },
  {
    name: "C",
    active: true,
    icon: "skills/c",
  },
];
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/over-k",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khalid-ait-miloud/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
    icon: "linkedin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Overk_khaled/",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
    icon: "x",
  },
];
export const COMMANDS: CMDs = [
  {
    name: "whoami",
    desc: "display all my information.",
    content: "<b>Khalid Ait Miloud </b>a 21-year-old web development student from a small village near Imintanout. Currently studying full-stack development at Racine in Marrakech, Morocco. Interested in UX/UI, web security, and new technologies. Believer in open-source and a part-time blogger. Enjoys working with JS and Python, reading and listening to software development content, watching documentaries and MMA fights. Also enjoys playing soccer, walking, and running."
  },
  {
    name: "education",
    desc: "display all my information about my education.",
    content: "Currently a Software Engineering student at Racine in Marrakech, Morocco.<br> Completed Baccalaureate in Physics in 2020 from Ibn Alhaytam High School in Imintanout, Morocco."
  },
  {
    name: "interests",
    desc: "display all my interests.",
    content: "Internet of Things, Data Structures, Problem Solving, Web Security, Open Source Technologies..."
  },
  {
    name: "blog",
    desc: "display link of my blog",
    content: "I regular share my thought on my <a href='https://dev.to/over-k'>Blog</a>."
  },
  {
    name: "contact",
    desc: "ways to reach me",
    content: "<b>Linkedin:</b> Khalid Ait Miloud<br><b>Email:</b> aitmiloudkhaled@gmail.com<br><b>Instagram:</b> Khaled_aitmiloud"
  },
  {
    name: "overK",
    desc: "who is over-k",
    content: "ehh, I just use this name went i find my original (khalid) name already taken."
  },
  {
    name: "hi",
    desc: "Say hi ",
    content: "👋 Hi!"
  },
  {
    name: "clear",
    desc: "to clear terminal",
    content: "I should be clear now."
  }
];