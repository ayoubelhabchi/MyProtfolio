import {
  faHome,
  faEnvelope,
  faUserGraduate,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: faHome,
    path: "/",
  },
  {
    id: 2,
    name: `About`,
    icon: faUserGraduate,
    path: "/About",
  },
  {
    id: 3,
    name: "Projects",
    icon: faFolder,
    path: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    icon: faEnvelope,
    path: "/Contact",
  },
];

export const experience = [
  {
    id: 1,
    no: "6",
    title: "Months Of Experience",
  },
  {
    id: 2,
    no: "2+",
    title: "Complete Projects",
  },
  {
    id: 3,
    no: "1+",
    title: "Projects in Progress",
  },
];

import image2 from "../images/react.png";
import image3 from "../images/node.png";
import image5 from "../images/mongo.png";
import image7 from "../images/git.png";
import image8 from "../images/tailwindcss.png";
import image9 from "../images/js.png";
import image10 from "../images/express.png";
import image12 from "../images/html.png";
import image11 from "../images/css.png";
export const tools = [
  
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
  
  {
    id: 5,
    img: image5,
  },
  
  {
    id: 7,
    img: image7,
  },
  {
    id: 8,
    img: image8,
  },
  {
    id: 9,
    img: image9,
  },
  {
    id: 10,
    img: image10,
  },
  {
    id: 11,
    img: image11,
  },
  {
    id: 12,
    img: image12,
  },
];

import { faCodeBranch, faCode } from "@fortawesome/free-solid-svg-icons";
export const services = [
  {
    id: 1,
    icon: faCode,
    name: "Frontend Development",
    des: "Experienced in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I specialize in creating responsive user interfaces and dynamic client-side features. My proficiency with contemporary frontend frameworks enables me to deliver smooth and efficient web experiences",
  },
  {
    id: 2,
    icon: faCodeBranch,
    name: "Backend Development",
    des: "Skilled in MERN Stack, and MongoDb. Proficient in building scalable architectures, crafting secure APIs, and optimizing database performance for high-functioning web applications.",
  },
];

import protfoliImg1 from "../images/photograph.png";
import protfoliImg2 from "../images/ecom.png";
import protfoliImg3 from "../images/survey.png";
import protfoliImg4 from "../images/ai.png";
import protfoliImg5 from "../images/GuideMe_Morocco.png";
import protfoliImg6 from "../images/fushaar.png";
export const portfolio = [

  {
    id: 5,
    img: protfoliImg5,
    name: "GuideMe Morocco",
    des: "Tourism website where you can buy or sell your service, whatever it is camping or tour",
    github: "https://github.com/ayoubelhabchi/Guide-Tourism.git",
    deployment: "https://guideme-morocco.netlify.app/",
  },
  {
    id: 6,
    img: protfoliImg6,
    name: "Fushaar App",
    des: "Movie app build to simplify  the way you search for movies information using APi Tmdb.",
    github: "https://github.com/ayoubelhabchi/Movies-App",
  },
];

import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";
import avatar4 from "../images/avatar4.png";
export const testimonials = [
  {
    id: 1,
    img: avatar1,
    name: "Dong Lee",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  },
  {
    id: 2,
    img: avatar2,
    name: "Mohammed Habib",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  },
  {
    id: 3,
    img: avatar3,
    name: "Jhon Alas",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  },
  {
    id: 4,
    img: avatar4,
    name: "Irfan Nazir",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem architecto sunt sint quis ipsam odio neque.",
  },
];
