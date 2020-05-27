

function navBar() {
    return (
        <div className="row">
            <div className="col-lg-12 navPosition">
                <nav className="navbar fixed-top justify-content-end">
                    <ul className="nav nav-bar">
                        <li className="nav-item">
                            <a className="nav-link active" href="/Home"><strong class="navBorder">Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/aboutSection"><strong class="navBorder">About</strong></a>
                        </li>
                        <br/>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolioSection"><strong
                                    className="navBorder">Portfolio</strong></a>
                            </li>
                            <br/>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactSection"><strong className="navBorder">Contact</strong></a>
                                </li>
                                <br/>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default navBar;