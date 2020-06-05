import React from 'react'
import Social from "../Social/Social"
import  {Navbar} from 'react-bootstrap'


function footer(){

    const style={
        // paddingTop:"60px",
        marginTop:"200px"
    }

    
return (

    <Navbar style={style}  fixed="bottom">
         
       
         
            
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
                    <div className="ml-auto">
                    <Social />
                    </div>
       
       
                    <div className="ml-auto">
<p className="nav-item"> &copy;2020. All rights reserved. Made in SF, CA. </p>
</div>
    </Navbar>
)


}
export default footer;