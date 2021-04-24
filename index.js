import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Dota from "./Dota";
//import {$,jQuery} from 'jquery';
import * as JQuery from "jquery";
const $ = JQuery.default;
import AOS from 'aos';
import GoalHero from "./component/GoalHero";
import {Head} from './component/Head'
import{Projects}from './component/Projects'
import{Technologies}from './component/Technologies'
import{Contact}from './component/Contact'
import {AboutMe}from'./component/AboutMe'
//import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
//import plugin from 'jquery-plugin'

// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

ReactDOM.render(
  
  <div>
  <header>
   
    <div className="logo">
    <a href="#">Fish Jiang</a> 
     
    </div>
    <nav>
      <div className="nav-item">
        <a href="#intro">AboutMe</a>
      </div>
      <div className="nav-item">
        <a href="#projects">Projects</a>
      </div>
      <div className="nav-item">
        <a href="#contactMe">Contact</a>
      </div>
    </nav>
  </header>
  <div class="alert alert-info" role="alert">


</div>
 <Head />
 <Projects />
 <AboutMe/>
<Technologies />
<Contact />




  </div>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);

const header = document.getElementsByTagName("header")[0]; // We're interested in the first element
const sections = Array.from(document.querySelectorAll("section"));

// Activation Margins
const HEADER_MARGIN = 65;
const SECTION_MARGIN = 300;

const scrollActions = () => {
  // 1. Sets whether the header is visible or not
  if (window.scrollY > HEADER_MARGIN) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", () => {
 
    window.requestAnimationFrame(scrollActions);
   
  
});
