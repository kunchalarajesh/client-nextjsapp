import React from "react";
import Image from 'next/image';
import Link from "next/link"


function Footer(){
    return(
        <div>
            <footer>
                <div className="container">
                    <div className="footer">
                        <div className="about-comp">
                        <ul>
                            <li><Link href="#"><Image src="/images/logo.png" alt="" width="128px" height="50px" /></Link></li>
                            <li><span>lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</span></li>
                        </ul>
                        </div>
                        <div className="address">
                        <strong>OUR TEAM</strong><br />
                        <ul>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i><span>Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia</span></li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i><span>(+62) 21-2224 3333</span></li>
                        </ul>
                        </div>
                        <div className="stay-in">
                        <strong>STAY IN TOUCH</strong>
                            
                            <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Subscribe our newsletter" aria-label="Subscribe our newsletter" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button"><Image src="/images/send.png" width="25px" height="25px" alt="" /></button>
                                    </div>
                                    </div>
                            <div className="social-icons">
                            <ul>
                                <li><Link href="#"><Image src="/images/fb-icon.png" alt="" width="35px" height="35px" /></Link></li>
                                <li><Link href="#"><Image src="/images/twit-icon.png" alt="" width="35px" height="35px" /></Link></li>
                                <li><Link href="#"><Image src="/images/web-icon.png" alt="" width="35px" height="35px" /></Link></li>
                                <li><Link href="#"><Image src="/images/insta-icon.png" alt="" width="35px" height="35px" /></Link></li>
                                <li><Link href="#"><Image src="/images/google-icon.png" alt="" width="35px" height="35px" /></Link></li>
                                <li><Link href="#"><Image src="/images/youtube-icon.png" alt="" width="35px" height="35px" /></Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="terms">
                        <ul className="inner-terms">
                            <li><Link href="#">HELP</Link></li>
                            <li><Link href="#">TERMS &amp; CONDITION</Link></li>
                            <li><Link href="#">PRIVACY</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="#">Copyright © 2015 - Tajem Creative</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
      </div>
    )
}

export default Footer;