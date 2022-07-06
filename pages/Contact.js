import React from "react";

function Contact(){
    return(
        <div style={{paddingTop:"80px"}}>
            <section class="section-8">
                <div class="container">
                    <div class="form">
                    <div class="submit-form">
                    <h4>GIVE US A GOOD NEWS</h4>
                    <form class="form-inline" action="/action_page.php">
                    <div class="form-group">
                    <input type="text" class="form-control" id="text" placeholder="Name" />
                    </div>
                    <div class="form-group">
                    <input type="email" class="form-control" id="email"  placeholder="Email" />
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control" id="pwd"  placeholder="Password" />
                    </div>
                    <div class="md-form">
                    <textarea id="form7" class="md-textarea form-control" rows="15"  placeholder="Meassage"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default buttons">Submit</button>
                    </form>
                    </div>
                    <div class="clients">
                    <h4>OUR HAPPY CLIENT</h4>
                    <ul>
                    <li><a href="#"><img src="images/company-1.png" /></a></li>
                    <li><a href="#"><img src="images/company-2.png" /></a></li>
                    <li><a href="#"><img src="images/company-3.png" /></a></li>
                    <li><a href="#"><img src="images/company-4.png" /></a></li>
                    <li><a href="#"><img src="images/company-5.png" /></a></li>
                    <li><a href="#"><img src="images/company-6.png" /></a></li>
                    <li><a href="#"><img src="images/company-7.png" /></a></li>
                    <li><a href="#"><img src="images/company-8.png" /></a></li>
                    <li><a href="#"><img src="images/company-9.png" /></a></li>
                    <li><a href="#"><img src="images/company-10.png" /></a></li>
                    </ul>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;