import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Animated} from 'react-animated-css';
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import NavBottom from "./components/NavBottom";
import Carousel from "./components/Carousel";
import Refs from "./components/Refs";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Info from "./components/Info";
import { useState } from "react";


function App() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
  <>
    <Nav loading={ loading }/>
    <div className="mini">
        <Loading loading={ loading }/>
        <Refs />
        <Awards />
        <Contact />
        <Carousel />
        <Info />
    </div>
    <NavBottom/>
  </>
  );
}

export default App;
