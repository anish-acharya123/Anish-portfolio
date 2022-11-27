import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import img from "./assets/icons/logo.svg";
import img1 from "./assets/icons/dark.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  const user_fav_mode = localStorage.getItem('mode')

  // const [icon, setIcon] = useState(moon);
  const [mode, setMode] = useState(user_fav_mode?user_fav_mode:"light");
  const [textcolor, setTextcolor] = useState("black");
  const [image, setImage] = useState(img);
useEffect(()=>{
  localStorage.setItem('mode',mode)
},[mode])


if(mode==="light"){
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
else{
  document.body.style.backgroundColor = "#2e2e2e";
  document.body.style.color = "white";
}










  const toogleMode = () => {
    // mode = "light";
    if (mode === "light") {
      setImage(img1);
      // setIcon(sun);
      setTextcolor("white");
      setMode("black");
      
    } else if(mode==="black") {
      setImage(img);
      // setIcon(moon);
      setTextcolor("black");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div className="App">
      <Navbar
        img={image}
        textcolor={textcolor}
        // icon={icon}
        toogleMode={toogleMode}
        mode={mode}
      />
      <Home mode={mode} textcolor={textcolor} />
      <Skill mode={mode} />
      <Project />
      <Contact mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
