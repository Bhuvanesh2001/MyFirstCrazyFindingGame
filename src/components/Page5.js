import React, { Component } from "react";
import "../styling/Page.css";

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
import { Link } from "react-router-dom";

export default class Page5 extends Component {
  componentDidMount=()=>{
    console.log("props data", this.props.location.data);
  }
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
              <h3>5</h3>
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
              <img src={Fruit4} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit6} alt="apple"></img>
            </div>
            <div className="pho">
              <img src={Fruit5} alt="apple"></img>
            </div>
          </div>
        </div>

        <div className="buttons">
          <nav>
            {" "}
            <div className="first">
              <Link 
              to={{
                pathname: "./Output",
                data: { count:this.props.location.data.count+50,name:"fruit"  },
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
                pathname: "./Output",
                data: { count:this.props.location.data.count ,name:"fruit"  },
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
