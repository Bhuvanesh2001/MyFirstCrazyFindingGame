import React, { Component, useState } from "react";
import "../styling/Output.css";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

import Fruit1 from "../images/apple.jpg";
import Fruit2 from "../images/banana.jpg";
import Fruit3 from "../images/fruit4.jpg";
import Fruit4 from "../images/grapes.jpg";
import Fruit5 from "../images/kiwi.jpg";
import Fruit6 from "../images/mango.jpg";
import Fruit7 from "../images/papaya.jpg";
import Fruit8 from "../images/pineapple.jpg";
import Fruit9 from "../images/straberry.jpg";
import Invalid from "../images/invalid.jpg";

import Hero1 from "../images/hero1.jpg";
import Hero2 from "../images/her02.jpg";
import Hero3 from "../images/hero3.jpg";
import Hero4 from "../images/hero4.jpg";
import Hero5 from "../images/hero5.jpg";
import Hero6 from "../images/hero6.jpg";
import Hero7 from "../images/hero7.jpg";
import Hero8 from "../images/her08.jpg";
import Hero9 from "../images/hero9.jpg";

import Emoji1 from "../images/emoji1.jpg";
import Emoji2 from "../images/emoji2.jpg";
import Emoji3 from "../images/emoji3.jpg";
import Emoji4 from "../images/emoji4.jpg";
import Emoji5 from "../images/emoji5.jpg";
import Emoji6 from "../images/emoji6.jpg";
import Emoji7 from "../images/emoji7.jpg";
import Emoji8 from "../images/emoji8.jpg";
import Emoji9 from "../images/emoji9.jpg";

import {
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: null,
      // fruitName: "",
      // fruit: null,
      // heroName: "",
      // hero: null,
      // emojiName: "",
      // emoji: null,
    };
  }
  componentDidMount = () => {
    console.log("props data", this.props.location.data);
    if (this.props.location.data.name == "fruit") {
      if (this.props.location.data.count == 70) {
        this.setState({ image: Fruit1 });
        this.setState({ name: "Apple" });
      } else if (this.props.location.data.count == 110) {
        this.setState({ image: Fruit8 });
        this.setState({ name: "PineApple" });
      } else if (this.props.location.data.count == 120) {
        this.setState({ image: Fruit5 });
        this.setState({ name: "Kiwi" });
      } else if (this.props.location.data.count == 80) {
        this.setState({ image: Fruit4 });
        this.setState({ name: "Grape" });
      } else if (this.props.location.data.count == 100) {
        this.setState({ image: Fruit3 });
        this.setState({ name: "DragonFruit" });
      } else if (this.props.location.data.count == 90) {
        this.setState({ image: Fruit2 });
        this.setState({ name: "Banana" });
      } else {
        this.setState({ image: Invalid });
        this.setState({ name: "not given because Invalid input" });
      }
    } else if (this.props.location.data.name == "hero") {
      console.log("hiii this is hero section", this.props.location.data.name);
      if (this.props.location.data.count == 70) {
        this.setState({ image: Hero1 });
        this.setState({ name: "Mahesh babu" });
      } else if (this.props.location.data.count == 110) {
        this.setState({ image: Hero8 });
        this.setState({ name: "Nithin" });
      } else if (this.props.location.data.count == 120) {
        this.setState({ image: Hero7 });
        this.setState({ name: "Ram" });
      } else if (this.props.location.data.count == 80) {
        this.setState({ image: Hero4 });
        this.setState({ name: "Allu Arjun" });
      } else if (this.props.location.data.count == 100) {
        this.setState({ image: Hero3 });
        this.setState({ name: "Prabhas" });
      } else if (this.props.location.data.count == 90) {
        this.setState({ image: Hero2 });
        this.setState({ name: "Pavan Kalyan" });
      } else {
        this.setState({ image: Invalid });
        this.setState({ name: "not given because invalid input" });
      }
    } else {
      console.log("hiii this is emoji section", this.props.location.data.name);
      if (this.props.location.data.count == 70) {
        this.setState({ image: Emoji1 });
        this.setState({ name: "Love" });
      } else if (this.props.location.data.count == 110) {
        this.setState({ image: Emoji8 });
        this.setState({ name: "All the best" });
      } else if (this.props.location.data.count == 120) {
        this.setState({ image: Emoji5 });
        this.setState({ name: "Tempting" });
      } else if (this.props.location.data.count == 80) {
        this.setState({ image: Emoji4 });
        this.setState({ name: "Stylish" });
      } else if (this.props.location.data.count == 100) {
        this.setState({ image: Emoji3 });
        this.setState({ name: "sad" });
      } else if (this.props.location.data.count == 90) {
        this.setState({ image: Emoji9 });
        this.setState({ name: " Singing" });
      } else {
        this.setState({ image: Invalid });
        this.setState({ name: "not given because invalid input" });
      }
    }
  };
  render() {
    return (
      <div>
        <nav>
          {" "}
          <div className="heading">
            {/* <div className="backbutton">
              <button className="buttonup">
                {" "}
                <MdArrowBack />
              </button>
            </div> */}

            <center>
              <h1>
                Hey dude! Your favourite {this.props.location.data.name} is{" "}
                {this.state.name}..
              </h1>
              <img
                src={this.state.image}
                style={{
                  height: "300px",
                  width: "300px",
                  padding: "50px",
                  borderRadius: "50%",
                }}
              ></img>

              <Link
                to={{
                  pathname: "./",
                }}
              >
                <div className="bottom">
                  <button>Play Again</button>
                </div>
              </Link>
            </center>
          </div>
        </nav>

        {/* <div className="photos">
          <div className="pho">
            <img src={Fruit8} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Fruit7} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Fruit9} alt="apple"></img>
          </div>
        </div>
        <div className="photos">
          <div className="pho">
            <img src={Fruit1} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Fruit6} alt="apple"></img>
          </div>
          <div className="pho">
            <img src={Fruit5} alt="apple"></img>
          </div>
        </div>

        <div className="buttons">
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
        </div> */}
      </div>
    );
  }
}
