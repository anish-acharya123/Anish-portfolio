import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import { Icon } from "@iconify/react";
import img from "./assets/icons/logo.svg";
import img1 from "./assets/icons/logo2.svg";

function App() {
  let moon = <Icon icon="bytesize:moon" width={25} />;
  let sun = <Icon icon="akar-icons:sun" width={25} color="white" />;
  const [icon, setIcon] = useState(moon);
  const [mode, setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("black");
  const [image, setImage] = useState(img);
  const toogleMode = () => {
    console.log("hi");
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
      <Home mode={mode} />
      <Skill mode={mode} />
    </div>
  );
}

export default App;
