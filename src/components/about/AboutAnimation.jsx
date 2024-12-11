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
                    <img src="/img/about/about-me.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Graphic & Web | UX/UI Designer</p>
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
                  <p>I'm a seasoned branding consultant with over a decade of experience, located in Nairobi, Kenya, 
                    and actively engaged in online projects. My expertise lies in graphic and WordPress design, with a 
                    focus on frontend development. 
                  </p>
                  <p>As an aspiring UX/UI Designer, I am passionate and skilled in creating meaningful and visually 
                  appealing designs. Currently pursuing a degree in Computer Science at Kibo School, I am inspired to 
                  expand my knowledge in inclusive design to develop solutions that empower diverse users through 
                  accessible and user-friendly design practices.
                  </p>
                  <p>
                  In addition to my roles as a branding consultant and designer, I am a dedicated Patient Advocate 
                  committed to raising awareness about narcolepsy and non-communicable diseases (NCDs).
                  With a fervent belief in the power of advocacy, I actively engage in initiatives to promote understanding 
                  and knowledge about narcolepsy, advocating for greater support and resources for individuals affected by 
                  this condition. Additionally, my commitment extends to addressing broader issues related to non-communicable diseases, 
                  working towards fostering a healthier and more informed community. 
                  </p>
                  <p> 
                  Through my multifaceted approach, I aim to contribute to a society that is well-informed, empathetic, 
                  and supportive of individuals facing health challenges.
                  </p>
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
                process.env.PUBLIC_URL + "/img/border-dark.png"
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
                process.env.PUBLIC_URL + "/img/border-dark.png"
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
                process.env.PUBLIC_URL + "/img/border-dark.png"
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
