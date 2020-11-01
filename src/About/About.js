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
                <div className="about-section-title">About me</div>
                <div className="about-content-grid">
                    <div className="education-card">
                        <div className="school-year">2016-2018</div>
                        <div className="name-school">STI College Angeles</div>
                        <div className="field-study">Information Communication Technology</div>
                    </div>

                    <div className="education-card">
                        <div className="school-year">2016-2018</div>
                        <div className="name-school">STI College Angeles</div>
                        <div className="field-study">Information Communication Technology</div>
                    </div>

                    <div className="education-card">
                        <div className="school-year">2016-2018</div>
                        <div className="name-school">STI College Angeles</div>
                        <div className="field-study">Information Communication Technology</div>
                    </div>

                    <div className="education-card">
                        <div className="school-year">2016-2018</div>
                        <div className="name-school">STI College Angeles</div>
                        <div className="field-study">Information Communication Technology</div>
                    </div>

                </div>
            </div>
            </div>
        </main>
    );
}

export default About;