import React from 'react'

export default function index() {
    return (
        <div className='my-5 text-center'>
            <hr className='my-5' />
            <small>
            © 2021 - Ramazan Kayacan - All Rights Reserved
            </small>
            <br />

        <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark border-0">
            <ul class="navbar-nav w-100 nav-pills nav-justified">
                { [
                    {social:'instagram', href:'https://www.instagram.com/'},
                    {social:'facebook' , href:'https://www.facebook.com/'},
                    {social:'pinterest', href:'https://www.pinterest.com/'},
                ].map(d => {return(<li class="nav-item">
                <a class="nav-link py-1" href={d.href}>
                    <h3 class={"text-info add-anime px-4 fab fa-"+d.social}></h3>
                </a>
            </li>)}) }
            </ul>
        </nav>
    </div>
    )
}
