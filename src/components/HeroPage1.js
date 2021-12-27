import React, { Component, useState } from "react";
import "../styling/Page.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

import Hero1 from "../images/hero1.jpg";
import Hero2 from "../images/her02.jpg";
import Hero3 from "../images/hero3.jpg";
import Hero4 from "../images/hero4.jpg";
import Hero5 from "../images/hero5.jpg";
import Hero6 from "../images/hero6.jpg";
import Hero7 from "../images/hero7.jpg";
import Hero8 from "../images/her08.jpg";
import Hero9 from "../images/hero9.jpg";

import { Link } from "react-router-dom";

export default class HeroPage1 extends Component {
  render() {
    return (
      <div>
        <nav>
          {" "}
          <div className="heading">
            <div className="backbutton">
              <button className="buttonup">
                {" "}
                <MdArrowBack />
              </button>
            </div>

            <center>
              <h3>1</h3>
            </center>
          </div>
        </nav>

        <div className="photosContainer">
          <div className="photos">
            <div className="pho">
              <img src={Hero2} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero5} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero1} alt="apple"></img>
            </div>
          </div>
          <div className="photos">
            <div className="pho">
              <img src={Hero9} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero6} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero4} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            <div className="first">
              <Link
                to={{
                  pathname: "./HeroPage2",
                  data: { count: 10 },
                }}
              >
                <button className="button1">
                  {" "}
                  <FaCheck />
                </button>
              </Link>
            </div>
            <div className="second">
              <Link
                to={{
                  pathname: "./HeroPage2",
                  data: { count: 0 },
                }}
              >
                <button className="button2">
                  <FaTimes />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
