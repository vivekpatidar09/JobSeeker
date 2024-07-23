import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Vivek.</div>
      <div>
          <FaFacebookF />
          <FaYoutube />
          <FaLinkedin />
          <RiInstagramFill />
        {/* <Link target="_blank">
        </Link>
        <Link  target="_blank">
        </Link>
        <Link target="_blank">
        </Link>
        <Link target="_blank">
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
