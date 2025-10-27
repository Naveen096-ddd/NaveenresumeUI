import home_imgs from './home.png';
import about_imgs from './abouts.png';
import linkdin from './linkdin.png';
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import ekalavya from './ekalavyaui.png';
import laundrys from './laundryui.png';
import dashboard from './dashboardui.png';
export const homes =[
    {
        home_con :'UI ALCHEMIST',
        home_title :'Frontend Developer',
        home_content :'I am your pixel magician! ✨ Crafting interfaces that captivate like Martian landscapes & convert like space lasers. Lets make your vision legendary!. Ready to see your vision come alive? Lets chat!',
        home_img : home_imgs
    }
]
export const abouts =[
    {
        about_title :'About Me',
        about_name :'Hi, I am Naveen Menda',
        about_role :'Frontend Developer',
        about_content :'I am a passionate Frontend Developer with a knack for creating stunning and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in bringing designs to life using modern frameworks like React. My goal is to craft seamless digital experiences that not only look great but also function flawlessly across all devices. When I am not coding, I enjoy exploring the latest tech trends and enhancing my skills to stay ahead in this ever-evolving field.',
        about_img : about_imgs
    }
]

export const Projects  =[
    {
        project_title :'LinkedIn Clone',
        project_content :'LinkedIn clone with login authentication and using firebase.',
        project_img : linkdin,
        project_git:'https://www.linkedin.com/in/menda-naveen-03043b224'
    },
    {
      project_title :'EkalavyaUI',
      project_content : 'The Ekalavya UI is a responsive web platform built using React.js and Bootstrap,Material UI.',
      project_img : ekalavya,
      project_git: 'https://github.com/Naveen096-ddd/EkalavyaUI.git'
    },
    {
      project_title :'LaundryUI',
      project_content : 'The Laundry Management System is a responsive web application built with React.js.',
      project_img : laundrys,
      project_git: 'https://github.com/Naveen096-ddd/LaundryUI.git'
    },
    {
      project_title :'DashboardUI',
      project_content : 'To design User,Admin,Manager Dashboards for Ekalavya website by using React.js and Chats.js',
      project_img : dashboard,
      project_git: 'https://github.com/Naveen096-ddd/EkalavyaUI/tree/main/client/src/pages'
    }
]
export const skills = [
  { icon: <RiReactjsFill className="skillicon" />,
     name: "React Js"
  },
  { icon: <JavascriptIcon className="skillicon"/>,
    name: "JavaScript"
  },
  { icon: <HtmlIcon className="skillicon" />,
    name: "HTML" 
  },
  { icon: <CssIcon className="skillicon" />,
    name: "CSS"
  },
  { icon: <FaBootstrap className="skillicon" />,
    name: "Bootstrap"
  },
  {
    icon: <FaGithub className='skillicon'/>,
    name: 'Github'
  },
  { icon: <VscVscode className="skillicon" />,
    name: "Vs code" 
  }
  ,
  { icon: <SiMysql className="skillicon" />,
    name: "My Sql" 
  }
];