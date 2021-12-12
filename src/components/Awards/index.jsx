import React from 'react'
import {Animated} from 'react-animated-css';


export default function index() {
    return (
        <div id='awards' className='section'>
        <h2 className='titre font-style-italic'>
            <i className='fas fa-trophy mx-2 '></i>
            Awards</h2>
            <hr />
            <div className="row no-gutters my-5 px-4">
            <div className="col-4 text-center">
                <Animated
                    animationIn='slideInLeft'
                    animationInDelay={500}
                    animationOut='bounceOut'
                    isVisible={true}
                >
        <img className="img-minix rounded-3xl" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/awards/0.png" alt="avatar"/>            
                        </Animated>
        </div>
        <div className="col-8">
              <p className='text-center'>
                  <i className='text-xl fas fa-quote-left fa-pull-left'></i>
                { [
                    'Instute of Classical Architecture & Art, Rocky Mountain',
                    'Winner:',
                    'Ann Wolff Glass Design Artizanship',
                    'Project Team:',
                    'Ann Wolff,  Indre McCraw', 'Ramazan Kayacan',
                  ].map( ( d, i ) => {
                      return (
                        <Animated
                        animationIn='slideInRight'
                        animationInDelay={i*500}
                        animationOut='bounceOut'
                        isVisible={true}
                        >
                                <i>{d}
                                </i>
                        </Animated>
                          
                          )
                        })}
                    <i className='text-xl fas fa-quote-right fa-pull-right'></i>
                  
            </p>
        </div>
    </div>

        </div>
    )
}