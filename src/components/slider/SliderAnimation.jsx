import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+254 727 680 056",
  email: "marianne.njuguna@gmail.com",
};

const sliderContent = {
  name: "Maryanne Nyambura",
  designation: "Full-stack Developer",
  description: `I specialize in crafting customized solutions for clients of all sizes, 
  with expertise in developing sleek and contemporary websites, web services, online stores, 
  and incorporating graphic design elements. My focus is on delivering visually appealing and 
  functional designs that effectively cater to the unique needs of each customer.`,
  btnText: "PORTFOLIO",
  btnText2: "HIRE ME",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+727 680-056">{conctInfo.phone}</a>
            <a href="mailto:marianne.njuguna@gmail.com">
              {conctInfo.email}
            </a>
          </div>
          {/* <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div> */}
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                  <p className="loop-text lead">Graphic Designer</p>
                  <p className="loop-text lead">WordPress Designer</p>
                  <p className="loop-text lead">UI/UX Designer</p>
                  <p className="loop-text lead">Front-End Developer</p>
                  <p className="loop-text lead">Narcolepsy Patient Advocate</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div className="d-flex gap-4 btn-wrapper">
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="#work"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn btn-outline"
                    href="#contactus"
                  >
                    {sliderContent.btnText2}
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
