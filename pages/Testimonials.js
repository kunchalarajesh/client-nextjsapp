import React from "react";
import Image from 'next/image';


function Testimonials(){
    return(
        <div style={{paddingTop:"80px"}}>
            <section className="section-7">
                <div className="container">
                <div className="testimonials-slider">
                    <div>
                    <div className="reviews" style={{paddingTop:'50px', marginTop:'0'}}>
                        <div className="quotes">
                        <Image src="/images/quotes.png" alt="" width="32px" height="26px"/>
                        </div>
                        <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                        <strong>JANE GALADRIEL</strong>
                        <span>CEO TENGKUREP</span>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        </div> 
    )
}

export default Testimonials;