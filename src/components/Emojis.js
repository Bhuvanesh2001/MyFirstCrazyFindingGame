import React, { Component, useState } from "react";
import "../styling/Page.css";

import { IoMdReturnRight } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";

import Emoji1 from "../images/emoji1.jpg";
import Emoji2 from "../images/emoji2.jpg";
import Emoji3 from "../images/emoji3.jpg";
import Emoji4 from "../images/emoji4.jpg";
import Emoji5 from "../images/emoji5.jpg";
import Emoji6 from "../images/emoji6.jpg";
import Emoji7 from "../images/emoji7.jpg";
import Emoji8 from "../images/emoji8.jpg";
import Emoji9 from "../images/emoji9.jpg";

import { Link } from "react-router-dom";

export default class Emojis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countNumber: 0,
    };
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
              <h>Select one emoji that you love</h>
            </center>
          </div>
        </nav>

        <div className="photosContainer">
          <div className="photos">
            <div className="pho">
              <img src={Emoji1} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji3} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji4} alt="apple"></img>
            </div>
          </div>
          <div className="photos">
            <div className="pho">
              <img src={Emoji5} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji8} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji9} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            {/* <div className="first">
              <Link to="./EmojiPage1">
                <button className="button1">
                  {" "}
                  <FaCheck />
                </button>
              </Link>
            </div> */}
            <div className="second">
              <Link to="./EmojiPage1">
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
