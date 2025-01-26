
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import React from "react";
import ProjectSection from "./Components/Projects/ProjectSection";




 


function App() {
  return (
    <>

    <div>
      <Routes>  
      <Route path="/project" element={<ProjectSection/> }/> 
      <Route path="/"  element={<MainPage/>} />
      </Routes>
      </div>
   
    </>
  );
}

export default App;
 