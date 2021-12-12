import React from 'react'

export default function index() {
    return (
    <div className='my-5'>
        <nav class="navbar fixed-bottom navbar-expand navbar-dark justify-content-center bg-dark">
            <ul class="navbar-nav">
                { [
                    {social:'instagram', href:'https://www.instagram.com/'},
                    {social:'facebook' , href:'https://www.facebook.com/'},
                    {social:'pinterest', href:'https://www.pinterest.com/'},
                ].map(d => {return(<li class="nav-item">
                <a class="nav-link py-1" href={d.href}>
                    <h4 class={"add-anime px-4 fab fa-"+d.social}></h4>
                </a>
            </li>)}) }
            </ul>
        </nav>
    </div>
    )
}
