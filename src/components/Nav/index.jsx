import React from 'react'
import {Animated} from 'react-animated-css';

export default function index(props) {
  const {loading} = props;
  if (loading) {
    return <div className='d-flex flex-row justify-content-center'>
      <h1 className='midi fas fa-spinner fa-pulse mx-2'></h1>
      <Animated animationIn='slideInRight' animationOut='bounceOut' isVisible={true}>
        <h2>
          Loading...
        </h2>
      </Animated>
    </div>;
  }
    return ( <>
        <nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">
    <a className="navbar-brand p-0" href="https://attila5287.github.io/stainedglass/">
      <img
        src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/nav/brand.png"
        alt="Stained Glass"/>
    </a>
    <ul className="navbar-nav py-1">
    { [
        { icon: 'home', section: '' },
        { icon: 'comments', section: 'refs' },
        { icon: 'trophy', section: 'awards' },
        { icon: 'envelope', section: 'contact' },
        { icon: 'film', section: 'slideshow' },
        { icon: 'info', section: 'info' },
    ].map(d=>{return(      <li className="nav-item">
        <a className="nav-link px-4 py-1" href={"#"+d.section}>
          <h3 className={'fas fa-'+d.icon}>
          </h3>
        </a>
      </li>)}) }
    </ul>
  </nav>
  </>
  )
}
