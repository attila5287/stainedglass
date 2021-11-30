import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Animated} from 'react-animated-css';


function App() {
  return (
    <>
        <nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">
            <a className="navbar-brand p-0" href="`#">
                <img src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/nav/brand.png" alt="Stained Glass"  />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
            </ul>
        </nav>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/carousel/1.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/carousel/2.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/carousel/3.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </>
  );
}

export default App;
