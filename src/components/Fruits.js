import React, { Component, useState } from "react";

import "../styling/Page.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { IoMdReturnRight } from "react-icons/io";

import Fruit1 from "../images/apple.jpg";
import Fruit2 from "../images/banana.jpg";
import Fruit3 from "../images/fruit4.jpg";
import Fruit4 from "../images/grapes.jpg";
import Fruit5 from "../images/kiwi.jpg";
import Fruit6 from "../images/mango.jpg";
import Fruit7 from "../images/papaya.jpg";
import Fruit8 from "../images/pineapple.jpg";
import { Link } from "react-router-dom";

export default class Fruits extends Component {
  
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
              <h1>SELECT ANY ONE FRUIT THAT YOU LOVE</h1>
            </center>
          </div>
        </nav>

        <div className="photosContainer">
          <div className="photos">
            <div className="pho">
              <img src={Fruit8} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit2} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit3} alt="apple"></img>
            </div>
          </div>
          <div className="photos">
            <div className="pho">
              <img src={Fruit1} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit4} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit5} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            {/* <div className="first">
              <Link to="./Page1">
                <button className="button1">
                  {" "}
                  <FaCheck />
                </button>
              </Link>
            </div> */}
            <div className="second">
              <Link to="./Page1">
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
