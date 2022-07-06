import React from "react";
import Head from 'next/head';


function About(){
    return(
        <div style={{paddingTop:"80px"}}>
            <section>
            <div class="section-2">
            <div class="container">
                <div class="about">
                <div class="about-img">
                    <img src="images/about-img.png" alt=""/>
                </div>
                <div class="about-text">
                    <h2>OUR STORY</h2>
                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</p>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <a href="#" class="buttons">Learn more</a>
                </div>  
                </div> 
            </div>  
            </div>  
            </section>
            <section class="section-3">
                <div class="play-video">
                <a href="https://twitter.com/i/status/1465852983829168128"><img src="images/play-btn.png" alt="" /></a>
                <h3>WATCH OUR STORY</h3>
                </div>
            </section>
        </div>
    )
}

export default About;