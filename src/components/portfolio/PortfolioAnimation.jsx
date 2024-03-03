import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Corporate Identity", "Packaging", "Web Design", "Marketing Materials"];
const tabListContent = [
  {
    portfoliItems: [
      {
        img: "img/portfolio/tote-bag-mockup-hanging.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Narcolepsy Awareness Campaign",
        alterText: "Tote Bag Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Lightbox",
        alterText: "Waridi Logo",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Letterhead",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Lamp-Post-Banner-Mockup.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Codecanyon Market",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "img/portfolio/Website mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Graphicriver Market",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "Moringa Team Project",
        alterText: "Property Management App",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
    ],
  },
  {
    portfoliItems: [
      {
        img: "img/portfolio/tote-bag-mockup-hanging.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Narcolepsy Awareness Campaign",
        alterText: "Tote Bag Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Lightbox",
        alterText: "Waridi Logo",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Letterhead",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Lamp-Post-Banner-Mockup.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Codecanyon Market",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "img/portfolio/Website mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Graphicriver Market",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "Moringa Team Project",
        alterText: "Property Management App",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
    ],
  },
  {
    portfoliItems: [
      {
        img: "img/portfolio/tote-bag-mockup-hanging.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Narcolepsy Awareness Campaign",
        alterText: "Tote Bag Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Lightbox",
        alterText: "Waridi Logo",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Letterhead",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Lamp-Post-Banner-Mockup.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Codecanyon Market",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "img/portfolio/Website mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Graphicriver Market",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "Moringa Team Project",
        alterText: "Property Management App",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
    ],
  },
  {
    portfoliItems: [
      {
        img: "img/portfolio/tote-bag-mockup-hanging.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Narcolepsy Awareness Campaign",
        alterText: "Tote Bag Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Lightbox",
        alterText: "Waridi Logo",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Letterhead",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Lamp-Post-Banner-Mockup.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Codecanyon Market",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "img/portfolio/Website mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Graphicriver Market",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "Moringa Team Project",
        alterText: "Property Management App",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
    ],
  },
  {
    portfoliItems: [
      {
        img: "img/portfolio/tote-bag-mockup-hanging.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Narcolepsy Awareness Campaign",
        alterText: "Tote Bag Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Lightbox",
        alterText: "Waridi Logo",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Letterhead",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Business Card",
        subTitle: "Graphicriver Market",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Lamp-Post-Banner-Mockup.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Codecanyon Market",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "img/portfolio/Website mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "Behance Shot",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Graphicriver Market",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "Moringa Team Project",
        alterText: "Property Management App",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Behance Shot",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
    ],
  },

];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.portfoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;