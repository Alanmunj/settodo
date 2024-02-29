import React from 'react';
import About from './Pages/About';
import List from './Pages/List';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import NaviBar from "./NaviBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NaviBar />
        <div className = "container">
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/home" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/list" element = {<List />} />
              <Route path = "*" element = {<NoPage />} />
            </Routes>
        </div>
        </div>
    </BrowserRouter>
  )
  
}