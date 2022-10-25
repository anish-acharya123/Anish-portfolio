import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Icon } from "@iconify/react";
import img from "./assets/icons/logo.svg";
import img1 from "./assets/icons/logo2.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  let moon = <Icon icon="bytesize:moon" width={25} />;
  let sun = <Icon icon="akar-icons:sun" width={25} color="white" />;
  const [icon, setIcon] = useState(moon);
  const [mode, setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("black");
  const [image, setImage] = useState(img);

  const toogleMode = () => {
    // mode = "light";
    if (mode === "light") {
      setImage(img1);
      setIcon(sun);
      setTextcolor("white");
      setMode("black");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setImage(img);
      setIcon(moon);
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
        icon={icon}
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
