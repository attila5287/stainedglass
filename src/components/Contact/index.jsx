import {Animated} from 'react-animated-css';
import React from 'react'
import Titre from "../Titre";
import Imaj from "../Imaj";
import Socials from "../Socials";

export default function index() {
  return (
    <div id="contact" className='section'>
      <Titre icon='s fa-envelope' title='Contact'/>
      <Socials/>
      <div className="row text-mont">
        <div className='col-4 text-center'>
          <Imaj
            src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/contact/0.png"
            alt='contact'/>
        </div>
        <div className='col-8'>
          {[
            {
              icon: 'r fa-copyright',
              content: 'Ramazan Kayacan'
            }, {
              icon: 's fa-envelope',
              content: 'contact@example.com'
            }, {
              icon: 'b fa-skype',
              content: 'ExampleUserName'
            }, {
              icon: 's fa-phone',
              content: '7207107100'
            }, {
              icon: 'b fa-whatsapp',
              content: '7207107100'
            }
          ].map((d, i) => {
            return (

              <Animated
                key={'social' + i}
                animationIn='slideInRight'
                animationInDelay={i * 250}
                animationOut='bounceOut'
                isVisible={true} className='my-3'>
                <i className={"mx-2 fa" + d.icon}></i>
                {d.content}
              </Animated>
            )
          })
        }
        </div>
      </div>

    </div>
  )
}
