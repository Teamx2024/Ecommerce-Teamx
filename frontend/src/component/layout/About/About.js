import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "#";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="#"
              alt="Founder"
            />
            <Typography>Your Name</Typography>
           
            <span>
              Slogan/Message
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Let's Talk</Typography>
            <a href="/#" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>
            <a href="/#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="/#" target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
