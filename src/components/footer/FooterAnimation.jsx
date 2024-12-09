import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "#" },
  { Social: <FaTwitter />, link: "https://twitter.com/themaryanjuguna" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/themaryanjuguna/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/themaryanjuguna" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/themaryanjuguna/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
        <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://linktr.ee/themaryanjuguna"
              target="_blank"
              rel="noreferrer"
            >
              Maryanne Nyambura
            </a>{" "}
            All right reserved
        </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
