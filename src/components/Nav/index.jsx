import React from 'react'

export default function index() {
    return (
        <>
             <nav className="navbar navbar-expand navbar-dark bg-primary sticky-top">
            <a className="navbar-brand p-0" href="`#">
                <img src="https://raw.githubusercontent.com/attila5287/stainedglassimg/main/nav/brand.png" alt="Stained Glass"  />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" href="#">Home
                    <span className="visually-hidden">(current)</span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="/price">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#">About</a>
                </li>
            </ul>
            </nav>
        </>
    )
}
