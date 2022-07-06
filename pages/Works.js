import React from "react";
import Script from "next/script";
import Image from 'next/image';
import Link from "next/link"


function Works(){
    return(
        <div style={{paddingTop:"80px"}}>
            <div className="section-5">
                <div className="container">
                    <div className="company-team">
                        <div className="team-list">
                            <h3>MEET OUR AMAZING TEAM</h3>
                            <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            <span></span>
                        </div>
                        <div className="slider-2">
                        <div>
                            <div className="team-about">
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-7.jpg" alt="" width="280" height="200" />
                                </div>
                                <h4>SEMF UCUK</h4>
                                    <p>CEO n FOUNDER</p>
                                </div>
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-8.jpg" alt="" width="280" height="200" />
                                </div>
                                <h4>DIK ADALIN</h4>
                                    <p>ENGINEERING</p>
                                </div>
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-7.jpg" alt="" width="280" height="200"  />
                                </div>
                                <h4>JENG KOL</h4>
                                    <p>DESIGNER</p>
                                </div>
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-7.jpg" alt="" width="280" height="200" />
                                </div>
                                <h4>SEMF UCUK</h4>
                                    <p>CEO n FOUNDER</p>
                                </div>
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-7.jpg" alt="" width="280" height="200" />
                                </div>
                                <h4>SEMF UCUK</h4>
                                    <p>CEO n FOUNDER</p>
                                </div>
                                <div className="member-1">
                                <div className="img-1">
                                    <Image src="/images/service-7.jpg" alt="" width="280" height="200" />
                                </div>
                                <h4>SEMF UCUK</h4>
                                    <p>CEO n FOUNDER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <span>Become part of our dream team, let’s join us ! </span>
                    <Link href="#"><a className="buttons">WE ARE HIRING</a></Link>
                    </div>
                </div>
            </div>
        
        <Script src="js/jquery-3.6.0.min.js"></Script>
        <Script src="slick/slick.min.js"></Script>
        <Script src="js/main.js"></Script>

        </div>

    )
} 

export default Works;
