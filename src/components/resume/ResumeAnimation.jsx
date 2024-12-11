import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Branding and Social Media Consultant`,
    jobType: `WTD Kenya | Remote`,
    jobDuration: `Mar 2020 - Oct 2023`,
    timeDuraton: `Part Time`,
    compnayName: "World Top Destinations",
    jobDescription: `Enhanced brand identity with a new logo and refreshed corporate visuals. 
    Revamped promotional materials like social media posts, flyers, and catalogs. 
    Created an e-Commerce website. Boosted online traffic through Social Media Marketing 
    and Search Engine Optimization. Increased sales with a new WordPress-based eCommerce platform. 
    Expanded brand awareness through effective marketing materials and broader social media reach.`,
  },
  {
    jobPosition: `Branding and Social Media Consultant`,
    jobType: `BakeKing Solutions | Hybrid`,
    jobDuration: `May 2018 - Jan 2023`,
    timeDuraton: `Part Time`,
    compnayName: "BakeKing Solutions",
    jobDescription: `Improved brand image through logo and packaging redesign. 
    Increased online traffic and sales with a new e-Commerce site. 
    Raised brand awareness through marketing materials and expanded social media presence. 
    Employed Figma and Adobe Premier, Illustrator, Indesign tools for visuals and 
    Facebook Manager, Google tools for online marketing success.`,
  },
  {
    jobPosition: `Office Admin & Marketing Support`,
    jobType: `BBROOD Kenya | on-site`,
    jobDuration: `Oct 2016 - Mar 2018`,
    timeDuraton: `Full-time`,
    compnayName: "BBROOD Kenya",
    jobDescription: ` 
    I created marketing materials per global brand guidelines, trained staff on their use, 
    and did product photography. Managed marketing campaigns across platforms, using 
    Google Analytics and Facebook Pixels for better results. Boosted social media engagement and SEO. 
    Set up an Excel system for personnel records. Resolved complaints and managed calls, 
    leading to 90% customer satisfaction. Ensured on-time deliveries to customers and
    BBROOD outlets at a rate of 95%`,
  },
  {
    jobPosition: `Digital Marketing Executive`,
    jobType: `FCM Travel Kenya | On-Site`,
    jobDuration: `Nov 2009 - Sept 2016`,
    timeDuraton: `Full-time`,
    compnayName: "FCM Travel Solutions, Kenya",
    jobDescription: `Created marketing materials using Adobe Creative Suite, following global brand guidelines, 
    and trained team members on their effective use. Executed impactful marketing campaigns across print, broadcast, 
    and online platforms. Developed and managed websites, blogs, and social media pages, resulting in increased 
    brand awareness. Managed client databases, sent regular newsletters, and updated company systems to enhance 
    efficiency. Conducted SEO and used Google Analytics to track website performance, improving visibility and traffic.
    Coordinated marketing communication and designed newsletters, improving engagement. Provided IT support for smooth operations.`,
  },
  {
    jobPosition: `Digital Marketing Executive`,
    jobType: `Internship | Hybrid`,
    jobDuration: `May 2023 - Oct 2024`,
    timeDuraton: `Full-time`,
    compnayName: "Kuza Biashara",
    jobDescription: `
    Successfully created 6 months of social media content, researched Agritech, and wrote compelling stories on agripreneurs’ journeys. Attended Agritech conferences, capturing insights through photography and videos, and contributed to brainstorming, report writing, and content strategy development. 
    `,
  },
  {
    jobPosition: `Digital Learning Programme - DLP ICT Officer`,
    jobType: `Internship`,
    jobDuration: `Feb 2023 - Feb 2024`,
    timeDuraton: `Full-time, On-site`,
    compnayName: "Ministry Of Education, Kenya (MOE)",
    jobDescription: `
    Contributed to KEMIS and ElimuTrees UI design, created engaging content, 
    and facilitated communication between the ministry and teachers. 
    Enhanced digital education outcomes in Kenyan public primary schools.`,
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
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
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
