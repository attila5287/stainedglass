import React from 'react'

export default function index(props) {
    return (
        <div>
            <div className='titre text-info font-style-italic'>
            <i className={ "fa-pull-left fa" + props.icon }></i>
            {props.title}</div>
            <hr />
        </div>
    )
}
