import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="./img/about/about-me.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Graphic & WordPress Designer | Frontend Developer</p>
                  <h3>Maryanne Nyambura</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>I am a seasoned branding consultant with over a decade of experience, specializing in graphic and WordPress design. Based in Nairobi, Kenya, I am now expanding my expertise into frontend web development, exploring new ways to create meaningful, visually appealing, and functional designs for clients.</p>
                  <p>In addition to my professional work, I am a dedicated Patient Advocate living with narcolepsy. I share my lived experiences to empower patients, raise awareness of narcolepsy, rare diseases, and non-communicable diseases (NCDs), and advocate for inclusive health policies. My advocacy focuses on fostering understanding, empathy, and support for individuals facing health challenges.</p>
                  <p>By blending my design expertise, growing frontend development skills, and passion for advocacy, I aim to contribute to a world where impactful branding, accessible web design, and informed health policies drive meaningful change.</p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                    <ul>
                        <li>
                          <label>Name: </label>
                          <span>Maryanne Nyambura</span>
                        </li>
                        <li>
                          <label>Year of Birth: </label>
                          <span>1989</span>
                        </li>
                        <li>
                          <label>Linkree: </label>
                          <span><a href="https://linktr.ee/themaryanjuguna" target="_blank" rel="noreferrer">Linktree</a></span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Nairobi, Kenya</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+254)727 680 056</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>marianne.njuguna@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>mbuseh</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
