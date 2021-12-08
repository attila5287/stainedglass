import React from 'react'
import {Animated} from 'react-animated-css';

export default function index() {
  return (
    <div className="row">
        <div className="col-4 text-center">
        <img className="img-minix" src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/avatar/0.png" alt="avatar"/>            
        </div>
        <div className="col-8">
              <p className='text-center'>
                  <i className='text-xl fas fa-quote-left fa-pull-left'></i>
                  { [ 'As the owner of the Collins Architectural Glass which has been in business since 1980, I have  known Ramazan Kayacan since 1999.',
                      'He has performed work on many occasions for me as a contract worker, including fabrication of stained glass panels.',
                      'He is an excellent craftsman in all facets of work including selection of glass, efficient utilization of materials, accurate cutting, leading, soldering, puttying and cleaning.',
                      '',
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
  )
}
