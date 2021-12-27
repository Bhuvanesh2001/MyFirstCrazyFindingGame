import "./styling/App.css";
import Title from "./components/Title";
import Fruits from "./components/Fruits";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Output from "./components/Output";
import Heros from "../src/components/Heros";
import HeroPage1 from "../src/components/HeroPage1";
import HeroPage2 from "../src/components/HeroPage2";
import HeroPage3 from "../src/components/HeroPage3";
import HeroPage4 from "../src/components/HeroPage4";
import HeroPage5 from "../src/components/HeroPage5";
import Emojis from "./components/Emojis";
import EmojiPage1 from "./components/EmojiPage1";
import EmojisPage2 from "./components/EmojiPage2";
import EmojisPage3 from "./components/EmojiPage3";
import EmojisPage4 from "./components/EmojiPage4";
import EmojisPage5 from "./components/EmojiPage5";

import {
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Route path="/" exact component={Title}></Route>
        <Route path="/Fruits" component={Fruits}></Route>
        <Route path="/Page1" component={Page1}></Route>
        <Route path="/Page2" component={Page2}></Route>
        <Route path="/Page3" component={Page3}></Route>
        <Route path="/Page4" component={Page4}></Route>
        <Route path="/Page5" component={Page5}></Route>
        <Route path="/Output" component={Output}></Route>
        <Route path="/Heros" component={Heros}></Route>
        <Route path="/HeroPage1" component={HeroPage1}></Route>
        <Route path="/HeroPage2" component={HeroPage2}></Route>
        <Route path="/HeroPage3" component={HeroPage3}></Route>
        <Route path="/HeroPage4" component={HeroPage4}></Route>
        <Route path="/HeroPage5" component={HeroPage5}></Route>
        <Route path="/Emojis" component={Emojis}></Route>
        <Route path="/EmojiPage1" component={EmojiPage1}></Route>
        <Route path="/EmojiPage2" component={EmojisPage2}></Route>
        <Route path="/EmojiPage3" component={EmojisPage3}></Route>
        <Route path="/EmojiPage4" component={EmojisPage4}></Route>
        <Route path="/EmojiPage5" component={EmojisPage5}></Route>

        {/* </Switch> */}
      </Router>
      {/* <Title />
      <Fruits />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 /> */}
    </div>
  );
}

export default App;
