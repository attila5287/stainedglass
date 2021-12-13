import React from 'react'
import {Animated} from 'react-animated-css';

export default function index(props) {
  return (
    <div>
      <Animated animationIn='fadeIn' animationInDelay={Math.floor(2000*Math.random())} isVisible={true}>
        <img className="add-anime img-minix" src={props.src} alt={props.alt}/>
      </Animated>
    </div>
  )
}
