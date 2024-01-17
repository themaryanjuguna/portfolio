import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "2023 NCD Advocacy Award",
    awardFor: "In recognition of my commitment in Advocacy towards NCD-free Kenya.",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "May 2015 Employee of the Month",
    awardFor: "In recognition and appreciation of significant website developments and improvement of online brand presence in 2014",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Summiting Mt. Kenya",
    awardFor: "8 days summit to Point Lenana the third highest Mt. Kenya peak. I was also involved in mountain rescue drills.",
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
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
