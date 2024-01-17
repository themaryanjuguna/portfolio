import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Digital Learning Programme - DLP ICT Officer`,
    jobType: `Internship`,
    jobDuration: `Feb 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Ministry Of Education, Kenya (MOE)",
    jobDescription: `Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
  },
  {
    jobPosition: `Branding and Social Media Consultant`,
    jobType: `WTD Kenya | Remote`,
    jobDuration: `Mar 2020 - 2023`,
    timeDuraton: `Part Time`,
    compnayName: "World Top Destinations",
    jobDescription: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor. Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`,
  },
  {
    jobPosition: `Branding and Social Media Consultant`,
    jobType: `BakeKing Solutions | Hybrid`,
    jobDuration: `Jan 2019 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "BakeKing Solutions",
    jobDescription: ` Consectetur adipisicing elit,lorem ipsum dolor sit amet,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
  },
  {
    jobPosition: `Digital Marketing Executive (Office & Marketing Support)`,
    jobType: `BBROOD Kenya | on-site`,
    jobDuration: `Jan 2019 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "BBROOD Kenya",
    jobDescription: ` Consectetur adipisicing elit,lorem ipsum dolor sit amet,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
  },
  {
    jobPosition: `Digital Marketing Executive`,
    jobType: `FCM Travel Kenya| Remote`,
    jobDuration: `Nov 2009 - Sept 2016`,
    timeDuraton: `Full Time`,
    compnayName: "FCM Travel Solutions, Kenya",
    jobDescription: ` Consectetur adipisicing elit,lorem ipsum dolor sit amet,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor.`,
  },
];

const educatonContent = [
  {
    passingYear: "2022-Present",
    degreeTitle: "Bsc. Computer Science,",
    instituteName: "Kibo School of Technology",
  },
  {
    passingYear: "2022",
    degreeTitle: "Software Development for Android BootCamp",
    instituteName: "Moringa School",
  },
  {
    passingYear: "2013-2014",
    degreeTitle: "Diploma in Web Design",
    instituteName: "Graffins College",
  },
  {
    passingYear: "2008-2009",
    degreeTitle: "Certificate in Tour Guiding and Administration",
    instituteName: "Centre for Tourism Training and Research (CTTR)",
  },
  {
    passingYear: "2004-2007",
    degreeTitle: "Kenya Certificate of Secondary Education, Grade: C-",
    instituteName: "Huruma Girls High School ",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
