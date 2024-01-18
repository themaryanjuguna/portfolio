import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `Maryanne is highly talented in the sphere of digital marketing. She carries out her tasks with utmost passion and enthusiasm. She is also a team player with a pleasant personality.`,
      reviewerName: "Elizabeth Kipruto",
      designation: "HR - FCM Travel Solutions",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: `Maryanne has a creative touch which blends perfectly with her digital marketing skills to get the business message across to customers.`,
      reviewerName: "Anthony Gathura",
      designation: "Marketing Manager - FCM Travel Solutions",
      delayAnimation: "200",
    },
    {
      imageName: "team-2",
      desc: ` Maryanne is a very dedicated person at work, great Designer and full of wisdom.`,
      reviewerName: "Peter Maina Kamuti",
      designation: "Head of Department - FCM Travel Solutions",
      delayAnimation: "400",
    },
    {
      imageName: "team-2",
      desc: ` Maryanne is hardworking,creative/innovative and very enthusiastic in her work. 
      She is also result oriented person who always attempts to create harmony when working with others. She is reliable and confident.`,
      reviewerName: "Simon Gitau",
      designation: "Former Deputy Warden - Mt. Kenya National Park and Reserve",
      delayAnimation: "400",
    },
    {
      imageName: "team-2",
      desc: ` Maryanne is a knowledgeable and dutiful student. She takes instructions well and is able to communicate eloquently. She is a very respectiful. She takes initiative in her work and needs minimal supervision.She is well versed with environmental issues. I recommend her any employer.`,
      reviewerName: "Isabella Mbandi",
      designation: "Lecturer at Center for Tourism, Training & Research",
      delayAnimation: "400",
    },
    {
      imageName: "team-2",
      desc: ` Innovative and hands on`,
      reviewerName: "Nduta Mwangi",
      designation: "Founder Everything Maternity Kenya",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
