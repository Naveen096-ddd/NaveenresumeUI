import React, { useContext } from "react";
import "./home.css";
import { homes } from "../../../components/assests/assests.js";
import Button from "@mui/material/Button";
import { ResumeContext } from "../contex/Contex.js";
function Home() {
  const { downloadResume } = useContext(ResumeContext);

  return (
    <>
    <div id='home' className="home">
      {homes.map((item, index) => (
        <div key={index} className="homelist">
          <h2>{item.home_con}</h2>
          <h1 className="htitle">{item.home_title}</h1>
          <p>{item.home_content}</p>
          <br />
          <Button variant="contained" onClick={downloadResume} className="buttonhome" sx={{backgroundColor: "#111111",borderRadius: "8px",padding: "10px 20px",fontSize: "16px",border: "2px solid white",}}>
            Download Resume
          </Button>
          
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;
