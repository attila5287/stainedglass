import React from 'react'

export default function index() {
    return (
        <div className='text-center'>
        <nav className="navbar navbar-expand navbar-dark bg-transparent">
            <ul className="navbar-nav w-100 nav-tabs nav-fill bg-transparent">
                { [
                    {social:'instagram', href:'https://www.instagram.com/'},
                    {social:'facebook' , href:'https://www.facebook.com/'},
                    {social:'pinterest', href:'https://www.pinterest.com/'},
                ].map((d,i) => {return(<li  key={'navbottom'+i} className="nav-item bg-transparent border-0">
                <a className="nav-link border-0 bg-transparent" href={d.href}>
                    <h3 className={"text-info add-anime fab fa-"+d.social}></h3>
                </a>
            </li>)}) }
            </ul>
        </nav>
            <small>
            © 2021 - Ramazan Kayacan - All Rights Reserved
            </small>
            <br />
    </div>
    )
}
