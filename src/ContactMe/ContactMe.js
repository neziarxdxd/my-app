import React from 'react';
function ContactMe() {
    return(
        <main>  
           <div className="contact-menu">                    
            <div className="title-bar">
                Let's talk 
            </div>

            <div className="contact-form">
                <div className="label-card">
                    <div className="label-name">First Name</div> 
                    <div className="input-name"><input className="input-label-s" type="text"/></div>
                </div>
                <div className="label-card">
                    <div className="label-name">Last Name</div> 
                    <div className="input-name"><input className="input-label-s" type="text"/></div>
                </div>
                <div className="label-card">
                    <div className="label-name">Email Address</div> 
                    <div className="input-name"><input className="input-label-s" type="text"/></div>
                </div>
                <div className="label-card">
                    <div className="label-name">Subject: </div> 
                    <div className="input-name"><input className="input-label-s" type="text"/></div>
                </div>
                <div className="label-card">
                    <div className="label-name">Message</div> 
                    <div className="input-name"><textarea className="input-label-s" type="text"/></div>
                </div>
                <div className="label-card-button">
                    
                    <div className="input-name">
                        <button class="btn">Send </button>
                    </div>
                </div>
            </div>
           </div>
        </main>

    );
}
export default ContactMe;