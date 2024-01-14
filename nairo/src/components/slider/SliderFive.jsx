import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Maryanne Nyambura",
  description: `I specialize in crafting customized solutions for clients of all sizes, with expertise in developing sleek and contemporary websites, web services, online stores, and incorporating graphic design elements. My focus is on delivering visually appealing and functional designs that effectively cater to the unique needs of each customer.`,
  btnText: "HIRE ME",
  btnText2: "My Work",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Hello there...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Graphic Designer</p>
                  <p className="loop-text lead">WordPress Designer</p>
                  <p className="loop-text lead">UI/UX Designer</p>
                  <p className="loop-text lead">Front-End Developer</p>
                  <p className="loop-text lead">Narcolepsy Patient Advocate</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline " href="#contactus">
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <img src="img/slider/home-professional-2.png" alt="about image" />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
