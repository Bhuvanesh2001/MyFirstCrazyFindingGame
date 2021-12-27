import React, { Component, useState } from "react";
import "../styling/Page.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { IoMdReturnRight} from "react-icons/io";


import Hero1 from "../images/hero1.jpg";
import Hero3 from "../images/hero3.jpg";
import Hero4 from "../images/hero4.jpg";
import Hero5 from "../images/hero5.jpg";
import Hero6 from "../images/hero6.jpg";
import Hero7 from "../images/hero7.jpg";
import Hero8 from "../images/her08.jpg";
import Hero2 from "../images/her02.jpg";
import Hero9 from "../images/hero9.jpg";

import { Link } from "react-router-dom";

export default class Heros extends Component {

    constructor(props)
    {
      super(props);
      this.state={
        countNumber:0
      }
    }
    componentDidMount = () => {
      console.log("props data", this.props.location.data.iconName);
    };

  render() {
    return (
      <div>
        <nav>
          {" "}
          <div className="heading">
            <div className="backbutton">
              {/* <button className="buttonup">
                {" "}
                <MdArrowBack />
              </button> */}
            </div>

            <center>
              <h>Select hero that you love</h>
            </center>
          </div>
        </nav>

        <div className="photosContainer">
          <div className="photos">
            <div className="pho">
              <img src={Hero8} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero1} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero3} alt="apple"></img>
            </div>
          </div>
          <div className="photos">
            <div className="pho">
              <img src={Hero7} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero2} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Hero4} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            {/* <div className="first">
              <Link to="./HeroPage1">
                <button className="button1">
                  {" "}
                  <FaCheck />
                </button>
              </Link>
            </div> */}
            <div className="second">
              <Link to="./HeroPage1">
                <button className="button1">
                <IoMdReturnRight />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
