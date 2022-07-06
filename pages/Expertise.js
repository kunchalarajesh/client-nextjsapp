import React from 'react'
import Image from 'next/image';
import Link from "next/link"


function Expertise(){
  return (
      <div style={{paddingTop:"80px"}}>
        <section className="section-4">
        <div className="container">
          <h3>EXPERTISE</h3>
          <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          <span></span>
          <div className="expertise">
            <ul>
              <li>
                <Image src="/images/icon-1.png" alt="" width="49px" height="50px" />
                <h4>WEB DESIGN DEVELOPMENT</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
              <li>
                <Image src="/images/icon-2.png" alt="" width="49px" height="50px" />
                <h4>BRANDING IDENTITY</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
              <li>
                <Image src="/images/icon-3.png" alt="" width="49px" height="50px" />
                <h4>MOBILE APP</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
              <li>
                <Image src="/images/icon-4.png" alt="" width="49px" height="50px" />
                <h4>WEB DESIGN DEVELOPMENT</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
              <li>
                <Image src="/images/icon-5.png" alt="" width="49px" height="50px" />
                <h4>BRANDING IDENTITY</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
              <li>
                <Image src="/images/icon-6.png" alt="" width="49px" height="50px" />
                <h4>MOBILE APP</h4>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Expertise;