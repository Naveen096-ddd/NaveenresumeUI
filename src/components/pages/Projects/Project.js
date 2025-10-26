import React from "react";
import { Button, Card} from "react-bootstrap";
import { Projects } from "../../assests/assests";
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import "./project.css";

const Project = () => {
  return (
    <div className="linkdin container">
      <h1 className="mb-4">Projects Page</h1>
      {Projects.map((item, index) => (
        <Card className="p-4 linkdin-card mx-auto mb-4" style={{backgroundColor:'#181818'}} key={index}>
          {item.project_title && (
            <h4 className="mb-4">{item.project_title}</h4>
          )}
          <div className="linkdin-row d-flex flex-md-row flex-column align-items-center">
            <div className="linkdin-image me-md-4 mb-3 mb-md-0">
              <img
                src={item.project_img}
                alt="Project"
                className="img-fluid imglink"
              />
            </div>
            <div className="linkdin-content">
              <RiReactjsFill style={{color:'white',width:'25px',height:'25px'}} className="icons"/>
              <JavascriptIcon style={{color:'white',width:'45px',height:'45px'}} className="icons"/>
              <HtmlIcon style={{color:'white',width:'35px',height:'35px',marginLeft:'5px'}} className="icons"/>
              <CssIcon style={{color:'white',width:'40px',height:'40px',marginLeft:'5px'}} className="icons"/>
              <FaBootstrap style={{color:'white',width:'25px',marginLeft:'5px',height:'25px'}} className="icons"/>
              <p className="linkdin-text" style={{color:'white'}}>{item.project_content}</p>
              <div className="linkbutton">
                <Button className="linkbutton1" style={{backgroundColor:'#181818'}}>Github</Button>
                <Button style={{marginLeft:"10px",backgroundColor:'#181818'}} className="linkbutton2">Demo</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Project;
