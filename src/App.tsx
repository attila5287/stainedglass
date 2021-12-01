import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Animated} from 'react-animated-css';
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import { useState } from "react";


function App() {
  const [loading, setLoading] = useState<boolean>(false);

    return (
    <>
        <Nav loading={ loading }/>
        <div className="mini">
            <Loading loading={ loading }></Loading>
            <Carousel />
        </div>
    </>
  );
}

export default App;
