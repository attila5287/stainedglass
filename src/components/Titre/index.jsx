import React from 'react'

export default function index(props) {
    return (
        <div>
            <div className='titre text-info'>
            <i className={ "fa-pull-left fa" + props.icon }></i>
            <b className="">    { props.title } </b> 
            </div>
            <hr className='mx-2' />
        </div>
    )
}
