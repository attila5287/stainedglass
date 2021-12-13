import React from 'react'
import {Animated} from 'react-animated-css';
import Titre from "../Titre";
import Imaj from "../Imaj";

export default function index() {
  return (
    <div id='awards' className='section'>
      <Titre icon='s fa-trophy' title='Awards'/>

      <div className="row my-5">
        <div className="col-4 text-center">
        <Imaj src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/awards/0.jpg" alt='awards'/>
        </div>
        <div className="col-8">
          <div className='text-center'>
            <i className='text-xl fas fa-angle-left fa-pull-left'></i>
            {[
              'Institute of Classical Architecture & Art, Rocky Mountain',
              '2014 Robert & Judi Newman Awards',
              '\(w)\ Ann Wolff Glass Design Artizanship',
              'Project Team:',
              'Ann Wolff,  Indre McCraw',
              'Ramazan Kayacan'
            ].map((d, i) => {
              return (
                  <Animated
                      key={ 'awards' + i }
                  animationIn='slideInRight'
                  animationInDelay={i * 500}
                  animationOut='bounceOut'
                  isVisible={true} className='text-mont'>
                  <p>{d}
                  </p>
                </Animated>

              )
            })}
            <i className='text-xl fas fa-angle-right fa-pull-right'></i>

          </div>
        </div>
      </div>

    </div>
  )
}
