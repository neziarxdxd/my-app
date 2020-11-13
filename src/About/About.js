import React from 'react';
function About() {
    return(
        
        <main>
            <div className="about-grid">
            <div className="about-card INTRO">
                <div className="about-section-title">About me</div>
                <div className="about-content">
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
            <div className="about-card EDUCATION">
                <div className="about-section-title">Education</div>
                <div className="about-content-grid">
                    <div className="education-card">
                        <div className="school-year"> 🗓 2018-Present</div>
                        <div className="name-school">City College of Angeles</div>
                        <div className="field-study"> 🖥 BS in Computer Science</div>
                    </div>

                    <div className="education-card">
                        <div className="school-year">🗓 2016-2018</div>
                        <div className="name-school">STI College Angeles</div>
                        <div className="field-study"> 🖥 ICT major in Programming</div>
                    </div>             

                </div>

            </div>
            
            <div className="about-card EDUCATION">
                <div className="about-section-title">Work Experience</div>
                <div className="about-content-grid">
                    <div className="education-card">
                        <div className="school-year">2018-Present</div>
                        <div className="name-school">Freelancing</div>
                        <div className="field-study">Building solution and part time programmer</div>
                    </div>

                    <div className="education-card">
                        <div className="school-year"> Dec 2017- Mar 2018</div>
                        <div className="name-school">Web Programmer</div>
                        <div className="field-study">STI College of Angeles</div>
                        <div className="field-study">Building website for work immersion portal using PHP</div>
                    </div>

               

                </div>
            </div>





            </div>
        </main>
    );
}

export default About;