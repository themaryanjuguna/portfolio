import React from "react";

const AwardContnet = [
  {
    img: "a4",
    awardName: "Peer Support Award",
    awardFor: "Recognizing students who foster a positive online community, providing assistance to other students in course channels and answering their questions during your first year at Kibo.",
    delayAnimation: "0",
  },
  {
    img: "a1",
    awardName: "2023 NCD Advocacy Award",
    awardFor: "In recognition of my commitment in Advocacy towards NCD-free Kenya.",
    delayAnimation: "200",
  },
  {
    img: "a2",
    awardName: "Employee of the Month",
    awardFor: "In recognition and appreciation of significant ISIC website developments and improvement of online brand presence in 2014 - May 2015 Award",
    delayAnimation: "200",
  },

];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
