import React from "react";
import Image from 'next/image';

function Contact(){
    return(
        <div style={{paddingTop:"80px"}}>
            <section className="section-8">
                <div className="container">
                    <div className="form">
                    <div className="submit-form">
                    <h4>GIVE US A GOOD NEWS</h4>
                    <form className="form-inline" action="/action_page.php">
                    <div className="form-group">
                    <input type="text" className="form-control" id="text" placeholder="Name" />
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control" id="email"  placeholder="Email" />
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="pwd"  placeholder="Password" />
                    </div>
                    <div className="md-form">
                    <textarea id="form7" className="md-textarea form-control" rows="15"  placeholder="Meassage"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default buttons">Submit</button>
                    </form>
                    </div>
                    <div className="clients">
                    <h4>OUR HAPPY CLIENT</h4>
                    <ul>
                    <li><a href="#"><Image src="/images/company-1.png" width="162px" height="22px" /></a></li>
                    <li><a href="#"><Image src="/images/company-2.png" width="150px" height="22px" /></a></li>
                    <li><a href="#"><Image src="/images/company-3.png" width="150px" height="42px" /></a></li>
                    <li><a href="#"><Image src="/images/company-4.png" width="150px" height="22px" /></a></li>
                    <li><a href="#"><Image src="/images/company-5.png" width="150px" height="22px" /></a></li>
                    <li><a href="#"><Image src="/images/company-6.png" width="150px" height="34px" /></a></li>
                    <li><a href="#"><Image src="/images/company-7.png" width="150px" height="60px" /></a></li>
                    <li><a href="#"><Image src="/images/company-8.png" width="110px" height="56px" /></a></li>
                    <li><a href="#"><Image src="/images/company-9.png" width="119px" height="53px" /></a></li>
                    <li><a href="#"><Image src="/images/company-10.png" width="130px" height="70px" /></a></li>
                    </ul>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;