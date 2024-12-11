import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "WordPress Design",
    descriptions: `Crafting user-friendly and visually captivating website designs that ensure excellent user experiences across devices.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-cloud",
    title: "Web Development",
    descriptions: `Building responsive websites with optimized performance, using technologies like HTML, CSS, JavaScript, React, and Angular.`,
    delayAnimation: "300"
  },
  {
    icon: "icon-tools",
    title: "Graphic Design",
    descriptions: `Creating visually appealing designs for print and digital mediums, including logos, flyers, packaging, and social media banners.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-search",
    title: "SEO Optimization",
    descriptions: `Optimizing websites for search engines to improve ranking, traffic, and discoverability using strategic keywords and analytics.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-lightbulb",
    title: "Branding Consultant",
    descriptions: `Helping businesses define their identity through impactful branding strategies that align with their values and target audience.`,
    delayAnimation: "300",
  },
  {
    icon: "icon-mobile",
    title: "Digital Marketing",
    descriptions: `Developing data-driven digital marketing strategies to boost brand visibility, engagement, and online conversions.`,
    delayAnimation: "400"
  },
];
;
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
