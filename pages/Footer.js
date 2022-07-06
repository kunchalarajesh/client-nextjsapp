import React from "react";

function Footer(){
    return(
        <div>
            <footer>
                <div class="container">
                    <div class="footer">
                        <div class="about-comp">
                        <ul>
                            <li><a href="#"><img src="images/logo.png" alt="" /></a></li>
                            <li><span>lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</span></li>
                        </ul>
                        </div>
                        <div class="address">
                        <strong>OUR TEAM</strong><br />
                        <ul>
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i><span>Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia</span></li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i><span>(+62) 21-2224 3333</span></li>
                        </ul>
                        </div>
                        <div class="stay-in">
                        <strong>STAY IN TOUCH</strong>
                            
                            <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Subscribe our newsletter" aria-label="Subscribe our newsletter" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button"><img src="images/send.png" alt="" /></button>
                                    </div>
                                    </div>
                            <div class="social-icons">
                            <ul>
                                <li><a href="#"><img src="images/fb-icon.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/twit-icon.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/web-icon.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/insta-icon.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/google-icon.png" alt="" /></a></li>
                                <li><a href="#"><img src="images/youtube-icon.png" alt="" /></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="terms">
                        <ul class="inner-terms">
                            <li><a href="#">HELP</a></li>
                            <li><a href="#">TERMS &amp; CONDITION</a></li>
                            <li><a href="#">PRIVACY</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Copyright © 2015 - Tajem Creative</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
      </div>
    )
}

export default Footer;