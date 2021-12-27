import React, { Component } from "react";
import "../styling/Title.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

import Photo1 from "../images/banana.jpg";
import Photo2 from "../images/hero1.jpg";
import Photo3 from "../images/emoji2.jpg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "",
    };
  }

  

  render() {
    return (
      <div>
        <nav>
          {" "}
          <div className="theading">
            {/* <div className="backbutton">
              <button className="buttonup">
                {" "}
                <MdArrowBack />
              </button>
            </div> */}

            <center>
              <h>Select interested categories</h>
            </center>
          </div>
        </nav>

        <div className="tphotos">
          <div className="tpho">
            <Link
              to={{
                pathname: "./Fruits",
                data: { iconName: "Fruit" },
              }}
            >
              <img src={Photo1} alt="apple"></img>
            </Link>
            <h2>Fruits</h2>
          </div>
          <div className="tpho">
            <Link
              to={{
                pathname: "./Heros",
                data: { iconName: "Hero" },
              }}
            >
              <img src={Photo2} alt="Heroes"></img>
            </Link>
            <h2>Heros</h2>
          </div>
          <div className="tpho">
            <Link
              to={{
                pathname: "./Emojis",
                data: { iconName: "Emoji" },
              }}
            >
              {" "}
              <img src={Photo3} alt="emoji"></img>
            </Link>
            <h2>Emojis</h2>
          </div>
        </div>
        {/* <div className="photos">
          <div className="pho">
            <img src={Photo3} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Photo2} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Photo1} alt="apple"></img>
          </div>
        </div> */}

        {/* <div className="buttons">
          <nav>
              {" "}
              <div className="first">
                <button className="button1">
                  {" "}
                  <FaCheck />
                </button>
              </div>
            
            <div className="second">
              <button className="button2">
                <FaTimes />
              </button>
            </div>
          </nav>
        </div>
         */}
      </div>
    );
  }
}
