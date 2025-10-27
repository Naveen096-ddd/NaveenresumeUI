import React, { useContext } from "react";
import './about.css';
import { abouts } from '../../../components/assests/assests.js';
import Button from '@mui/material/Button';
import Contact from "../Contact/Contact.js";
import Project from "../Projects/Project.js";
import { ResumeContext } from "../contex/Contex.js";
import Skill from "../Skills/Skill.js";
const About = () => {
    const {downloadResume} = useContext(ResumeContext);
  return (
    <>
    <div id='about' className="about">
        {abouts.map((item,index)=>(
            <div key={index} className='aboutlist'>
                <h1 className="title">{item.about_title}</h1>
                <h2 className="name">{item.about_name}</h2>
                <h3 className="role">{item.about_role}</h3>
                <p>{item.about_content}</p>
                 <Button variant="contained" onClick={(downloadResume)}
                    className='buttonabout'
                    sx={{backgroundColor:'#111111',borderRadius:'8px',padding:'10px 20px',fontSize:'16px',border:'2px solid white'}}>Download Resume
                </Button><br/>
                <div style={{marginBottom:'50px'}}>
                </div>
            </div>
            
        ))}
    </div>
    </>
    );  
};
export default About;