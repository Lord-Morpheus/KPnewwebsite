import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import Projects from "./components/Home/Projects";
import Footer from "./components/Footer";
import NavMenu from "./components/NavDrop";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);
  const toggle = () => {
    setNav((prev) => !prev);
  };
  const links = [
    {
      text: "PROJECTS",
      link: "/#projects",
    },
    {
      text: "TEAM",
      link: "/#team",
    },
    {
      text: "GSOC",
      link: "/gsoc",
    },
    {
      text: "HALL OF FAME",
      link: "/halloffame",
    },
    {
      text: "CONTACT US",
      link: "/contact",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Nav toggle={toggle} nav={nav} links={links} />
        <NavMenu links={links} nav={nav}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
