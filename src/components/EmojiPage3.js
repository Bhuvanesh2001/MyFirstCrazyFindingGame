import React, { Component, useState } from "react";
import "../styling/Page.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
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

export default class EmojiPage3 extends Component {
  componentDidMount = () => {
    console.log("props data", this.props.location.data);
  };
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
              <h3>3</h3>
            </center>
          </div>
        </nav>

        <div className="photosContainer">
          <div className="photos">
            <div className="pho">
              <img src={Emoji5} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji7} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji9} alt="apple"></img>
            </div>
          </div>
          <div className="photos">
            <div className="pho">
              <img src={Emoji2} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji6} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Emoji3} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            <div className="first">
              <Link
                to={{
                  pathname: "./EmojiPage4",
                  data: { count: this.props.location.data.count + 30 },
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
                  pathname: "./EmojiPage4",
                  data: { count: this.props.location.data.count },
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
