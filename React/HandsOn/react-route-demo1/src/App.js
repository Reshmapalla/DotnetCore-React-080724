import React from "react";
<<<<<<< Updated upstream
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import Blogs from "./Pages/blogs";
import Contact from "./Pages/contact";
=======
import {BrowserRouter,Routes,Route} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Blogs from "./Pages/blogs";
>>>>>>> Stashed changes
import NoPage from "./Pages/nopage";
import Layout from "./Pages/layout";
function App() {
  return (
    <>
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
=======
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<NoPage/>}/>
      <Route></Route>
    </Routes>
    </BrowserRouter>
>>>>>>> Stashed changes
    </>
  );
}

export default App;