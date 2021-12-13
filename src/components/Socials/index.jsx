import React from 'react'

export default function index() {
    return (
        <div className='text-center'>
            <ul className="nav w-100 nav-fill bg-transparent">
                { [
                    {social:'instagram', href:'https://www.instagram.com/'},
                    {social:'facebook' , href:'https://www.facebook.com/'},
                    {social:'pinterest', href:'https://www.pinterest.com/'},
                ].map((d,i) => {return(<li  key={'navbottom'+i} className="nav-item bg-transparent border-0">
                <a className="nav-link border-0 bg-transparent" href={d.href}>
                    <h3 className={"text-light add-anime fab fa-"+d.social}></h3>
                </a>
            </li>)}) }
            </ul>
            <br />
    </div>
    )
}
