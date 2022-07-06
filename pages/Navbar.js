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
                  <Link href="/"><Image src="/images/logo.png" width="128px" height="50px" alt="#" /></Link>
                </div>
                <ul className="nav-links">
                    <li className="active">
                        <Link href="/">Home</Link></li>
                    <li>
                        <Link href="/About">About</Link></li>
                    <li>
                        <Link href="/Expertise">Expertise</Link></li>
                    <li>
                        <Link href="/Works">Works</Link></li>
                    <li>
                        <Link href="/Testimonials">Testimonials</Link></li>
                    <li>
                        <Link href="/Contact">Contact</Link></li>
                </ul>  
              </nav>   
              <div className="toggle">
              	<Link href="#" className="menu"><span></span></Link>
              </div>
          </div>
      </header>
    </div>
    )
}

export default Navbar;
 
