import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Loader from "./components/Loader/loader";
import img from "./assets/icons/logo.svg";
import img1 from "./assets/icons/dark.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  const user_fav_mode = localStorage.getItem("mode");
  const [mode, setMode] = useState(user_fav_mode ? user_fav_mode : "light");
  const [textcolor, setTextcolor] = useState("black");
  const [image, setImage] = useState(img);
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  if (mode === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "#2e2e2e";
    document.body.style.color = "white";
  }

  const toogleMode = () => {
    if (mode === "light") {
      setImage(img1);
      setTextcolor("white");
      setMode("black");
    } else if (mode === "black") {
      setImage(img);
      setTextcolor("black");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  //for loader
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  });

  return (
    <div className="App">
      {loader ? (
        <Loader mode={mode} img={image} />
      ) : (
        <>
          <Navbar
            img={image}
            textcolor={textcolor}
            toogleMode={toogleMode}
            mode={mode}
          />
          <Home mode={mode} textcolor={textcolor} />
          <Skill mode={mode} />
          <Project />
          <Contact mode={mode} />
          <Footer mode={mode} />
        </>
      )}
    </div>
  );
}

export default App;
