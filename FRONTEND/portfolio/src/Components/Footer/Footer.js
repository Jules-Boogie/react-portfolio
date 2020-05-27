import React from 'react'
import Social from "../Social/Social"


function footer(){
return (

    <footer className="footer  navbar">
        <div className="row"> 
       
        <div className="col">
            <ul>
                <li>
                    <a href="#"> About </a>  </li>
                <li> <a href="#"> Contact </a> </li>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> Portfolio </a> </li>
                <li><a href="#"> Skills </a> </li>
            </ul>

        </div>
        <div className="col">
        <Social/>
        </div>
        </div>

<p>Copyright &copy; 2020</p>
    </footer>
)


}
export default footer;