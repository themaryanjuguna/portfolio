import React from "react";

const ServiceContent = [
  {
    icon: "icon-strategy",
    title: "Product Design",
    descriptions: `In the realm of Product Design, I conceptualize and craft intuitive solutions that marry form and function, enriching user experiences and driving product success.`,
    delayAnimation: "",
  },
  {
    icon: "icon-cloud",
    title: "Frontend Development",
    descriptions: `As a proficient Frontend Developer, I bring designs to life with clean and responsive code, ensuring seamless user interactions and optimal website performance.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-tools",
    title: "Graphic Design",
    descriptions: `Through innovative Graphic Design, I transform concepts into visually stunning creations, captivating audiences and leaving a lasting impression`,
  },
  {
    icon: "icon-laptop",
    title: "WordPress Design",
    descriptions: `With expertise in WordPress Design, I create dynamic and user-friendly websites that seamlessly blend aesthetics with functionality, enhancing online presence and user experience.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-mobile",
    title: "Digital Marketing",
    descriptions: `In the realm of Digital Marketing, I utilize cutting-edge strategies to drive engagement and deliver measurable results, propelling businesses toward success.
    `,
  },
  {
    icon: "icon-target",
    title: "Branding Consultant",
    descriptions: `As a skilled Branding Consultant, I craft captivating narratives that resonate with audiences, ensuring brands stand out in today's competitive landscape.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
