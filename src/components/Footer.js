import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <a href="https://www.instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shadow-is-live-715760212/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Achalchy" target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <h5 className="footerInc">© 2000-2021 by PrimeVideo.com, Inc.</h5>
    </div>
  );
};

export default Footer;
