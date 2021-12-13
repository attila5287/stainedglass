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
    return ( 
        <nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">
    <a className="navbar-brand p-0" href="https://attila5287.github.io/stainedglass/">
      <img
        src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/nav/brand.png"
        alt="Stained Glass"/>
    </a>
    <ul className="w-100 nav nav-justified py-1">
    { [
        { icon: 's fa-home', section: '' },
        { icon: 's fa-comments', section: 'refs' },
        { icon: 's fa-trophy', section: 'awards' },
        { icon: 's fa-envelope', section: 'contact' },
        { icon: 's fa-film', section: 'slideshow' },
        { icon: 's fa-info', section: 'info' },
    ].map((d,i)=>{return(      <li key={'nav'+i} className="nav-item">
        <a className="nav-link py-2" href={"#"+d.section}>
          <i className={'text-xl fa'+d.icon}>
          </i>
        </a>
      </li>)}) }
    </ul>
  </nav>
  )
}
