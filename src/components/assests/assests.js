import home_imgs from './home.png';
import about_imgs from './about.png';
import linkdin from './linkdin.png';
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
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
        project_img : linkdin
    }
]
export const skills = [
  { icon: <RiReactjsFill className="skillicon" />,
     name: "React Js"
  },
  { icon: <JavascriptIcon className="skillicon" />,
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
  }
];