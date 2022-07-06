import React from "react";
import Image from 'next/image';


function About(){
    return(
        <div style={{paddingTop:"80px"}}>
            <section>
            <div className="section-2">
            <div className="container">
                <div className="about">
                <div className="about-img">
                    <Image src="/images/about-img.png" width="235px" height="239px" alt=""/>
                </div>
                <div className="about-text">
                    <h2>OUR STORY</h2>
                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <a href="#" className="buttons">Learn more</a>
                </div>  
                </div> 
            </div>  
            </div>  
            </section>
            <section className="section-3">
                <div className="play-video">
                <a href="https://twitter.com/i/status/1465852983829168128"><Image src="/images/play-btn.png" width="100px" height="100px" alt="" /></a>
                <h3>WATCH OUR STORY</h3>
                </div>
            </section>
        </div>
    )
}

export default About;