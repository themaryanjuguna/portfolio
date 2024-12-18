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

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
