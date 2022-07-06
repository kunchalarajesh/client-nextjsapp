import React from "react";
import Link from "next/link"
import Image from 'next/image';

const Navbar = () => {
    return(
        <div>
       <header className="fixed moved-up">
          <div className="container">
              <nav>
                <div className="logo">
                  <a href="/"><Image src="/images/logo.png" width="128px" height="50px" alt="#" /></a>
                </div>
                <ul className="nav-links">
                    <li className="active">
                        <Link href="/"><a>Home</a></Link></li>
                    <li>
                        <Link href="/About"><a>About</a></Link></li>
                    <li>
                        <Link href="/Expertise"><a>Expertise</a></Link></li>
                    <li>
                        <Link href="/Works"><a>Works</a></Link></li>
                    <li>
                        <Link href="/Testimonials"><a>Testimonials</a></Link></li>
                    <li>
                        <Link href="/Contact"><a>Contact</a></Link></li>
                </ul>  
              </nav>   
              <div className="toggle">
              	<a href="#" className="menu"><span></span></a>
              </div>
          </div>
      </header>
    </div>
    )
}

export default Navbar;
 
