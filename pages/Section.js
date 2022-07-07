import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function Section(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="section-1">
            <Slider {...settings}>
            <div>
                <div className="banner-content">
                    <h3>We Are Awesome Creative Agency</h3>
                    <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                    <Link href="#" ><a className="buttons">Learn more</a></Link>
                </div>
            </div>
            <div>
                <div className="banner-content">
                    <h3>Good to See You</h3>
                    <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                    <Link href="#" ><a className="buttons">Learn more</a></Link>
                </div>
            </div>
            <div>
                <div className="banner-content">
                    <h3>We Are Awesome Creative Agency</h3>
                    <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                    <Link href="#" ><a className="buttons">Learn more</a></Link>
                </div>
            </div>
            <div>
                <div className="banner-content">
                    <h3>Good to See You</h3>
                    <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                    <Link href="#" ><a className="buttons">Learn more</a></Link>
                </div>
            </div>
            </Slider>
        </div>
    )
}

export default Section;

 
  