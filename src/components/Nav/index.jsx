import React from 'react'
import {Animated} from 'react-animated-css';

export default function index ( props ) {
    const { loading } = props;
      if (loading) {
      return <div className='d-flex flex-row justify-content-center'>
          <h1 className='midi fas fa-spinner fa-pulse mx-2'>
          </h1>
          <Animated
            animationIn='slideInRight'
            animationOut='bounceOut'
            isVisible={true}
          >
          <h2>
          Loading...
          </h2>
          </Animated>
      </div>;
   }

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
                    <a className="nav-link disabled" href="/price">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">About</a>
                </li>
            </ul>
         </nav>
        </>
    )
}
