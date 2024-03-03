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

const tabList = ["All", "Corporate Identity", "Packaging", "App Design", "Marketing Materials"];
const tabListContent = [
  {
    portfolioItems: [
      {
        img: "img/portfolio/tote-bag.png",
        width: 400,
        height: 550,
        title: "Tote Bag Illustration",
        subTitle: "Corporate Identity",
        alterText: "Narcolepsy Awareness Campaign",
        delayAnimation: "",
        portfolioLink:
          "https://usingiziinitiative.medium.com/",
      },
      {
        img: "img/portfolio/waridi-lightbox.png",
        width: 400,
        height: 400,
        title: "Waridi Logo",
        subTitle: "Corporate Identity",
        alterText: "Logo Lightbox",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/waridi-headers.png",
        width: 400,
        height: 700,
        title: "Letterhead Design",
        subTitle: "Corporate Identity",
        alterText: "Letterhead Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/flyer.png",
        width: 400,
        height: 500,
        title: "Flyer Design",
        subTitle: "Corporate Identity",
        alterText: "Flyer Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Hardcover-Book.png",
        width: 400,
        height: 500,
        title: "Flyer Design",
        subTitle: "Corporate Identity",
        alterText: "Flyer Mockup",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/smart-learners.png",
        width: 400,
        height: 400,
        title: "Smart Learners Logo",
        subTitle: "Corporate Identity",
        alterText: "Smart Learners Logo",
        delayAnimation: "0",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/lamp-post-banner.png",
        width: 400,
        height: 700,
        title: "Lamp Post Banner",
        subTitle: "Marketing Materials",
        alterText: "Lamp Post Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Roll=Up-Banner.png",
        width: 400,
        height: 700,
        title: "Roll Up Banner",
        subTitle: "Marketing Materials",
        alterText: "Roll Up Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/billboard-mockup.png",
        width: 400,
        height: 500,
        title: "Billboard Banner",
        subTitle: "Marketing Materials",
        alterText: "Billboard Banner",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/hoodie-mockup-front-View.png",
        width: 400,
        height: 700,
        title: "Hoodiw Design",
        subTitle: "Marketing Materials",
        alterText: "Hoodie Mockup",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Website-mockup.png",
        width: 400,
        height: 500,
        title: "Web Application",
        subTitle: "App Design",
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/handwash.png",
        width: 400,
        height: 700,
        title: "Handwash Label Design",
        subTitle: "Packaging",
        alterText: "Handwash Label Design",
        delayAnimation: "0",
        portfolioLink:
          "linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/Mobile-app-mockup.png",
        width: 400,
        height: 550,
        title: "Property Management App Design",
        subTitle: "App Design",
        alterText: "Moringa Team Project",
        delayAnimation: "100",
        portfolioLink:
          "https://linktr.ee/themaryanjuguna",
      },
      {
        img: "img/portfolio/isic-bank-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Corporate Identity",
        alterText: "ISIC Co-branded Financial Bank Card Design",
        delayAnimation: "200",
        portfolioLink: "https://www.behance.net/gallery/30539859/ISIC-Co-branded-Cards-in-Kenya",
      },
      {
        img: "img/portfolio/isic-academic-cobranded-card.png",
        width: 400,
        height: 400,
        title: "Web Motion",
        subTitle: "Corporate Identity",
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
                  {tabContent.portfolioItems.map((val, i) => (
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