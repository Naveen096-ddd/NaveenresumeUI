import React, { createContext } from "react";
import resume from "../../../components/assests/Naveenresume.pdf";

export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Naveenresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResumeContext.Provider value={{ downloadResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
