import React from "react";
import Link from "next/link"

const Navbar = () => {
    return(
        <div>
       <header class="fixed moved-up">
          <div class="container">
              <nav>
                <div class="logo">
                  <a href="/"><img src="images/logo.png" alt="#" /></a>
                </div>
                <ul class="nav-links">
                    <li class="active">
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
              <div class="toggle">
              	<a href="#" class="menu"><span></span></a>
              </div>
          </div>
      </header>
    </div>
    )
}

export default Navbar;
 
