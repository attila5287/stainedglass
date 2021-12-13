import {Animated} from 'react-animated-css';
import React from 'react'
import Titre from "../Titre";
import Imaj from "../Imaj";


export default function index() {
  return (
    <div id="contact" className='section'>

        <Titre icon='s fa-envelope' title='Contact' />
          

          <div className="row">
        <div className='col-4 text-center'>
        <Imaj src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/contact/0.png" alt='contact'/>
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
              content: '720-710-7100'
            }, {
              icon: 'b fa-whatsapp',
              content: '720-710-7100'
            }, {
              icon: 'b fa-instagram',
              content: 'https://www.instagram.com/StainedArtGlassDenver'
            }, {
              icon: 'b fa-facebook',
              content: 'https://www.facebook.com/StainedArtGlassDenver'
            }, {
              icon: 'b fa-pinterest',
              content: 'https://www.pinterest.com/StainedArtGlassDenver'
            }
          ].map((d, i) => {
            return (

              <Animated
                animationIn='slideInRight'
                animationInDelay={i * 250}
                animationOut='bounceOut'
                isVisible={true}>
                <i className={"mx-4 fa" + d.icon}></i>
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
