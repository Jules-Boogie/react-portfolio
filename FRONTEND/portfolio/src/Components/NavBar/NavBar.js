import React from 'react'


function navBar() {
    return (
        <div className="row">
            <div className="col-lg-12 navPosition">
                <nav className="navbar fixed-top justify-content-end">
                    <ul className="nav nav-bar">
                        <li className="nav-item">
                            <a className="nav-link active" href="/"><strong className="navBorder">Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/About"><strong className="navBorder">About</strong></a>
                        </li>
                        <br/>
                            <li className="nav-item">
                                <a className="nav-link" href="/Portfolio"><strong
                                    className="navBorder">Portfolio</strong></a>
                            </li>
                            <br/>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact"><strong className="navBorder">Contact</strong></a>
                                </li>
                                <br/>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default navBar;