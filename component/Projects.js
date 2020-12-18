import React from "react";
import * as JQuery from "jquery";
import GoalHero from "./GoalHero";
const $ = JQuery.default;

export const Projects = () => {
  return (

<div data-aos="fade-up">
    <h1 className = 'ProjectsTitle'>Project</h1>
    <div id='projects' class="BigProjectsTable">
      <div className = 'ProjectsContainer'>
      <div class="GoalHeroLeft" >
        <div class="GoalHeroText">
          <h3>GoalHero</h3>
          Goal Hero is a mobile game/lifestyle app. The main purpose of Goal
          Hero is to motivate users to complete goals for themselves, while also
          playing a game. A user can play as a hero and fight against a monster
          to unlock new and stronger heroes. To get strong enough to defeat the
          monster, the user must complete goals they set for themself. Tech
          Used: React Native, Expo, React Native Game Engine, Express, Heroku,
          Matter.js, PostgreSQL
        
        </div>
        <div class = 'GoalHeroDemo'>
<a href ='https://expo.io/@ericfish/projects/GoalHero'>DEMO</a>
<a href ='https://github.com/GoalHero/GoalHero'>GITHUB</a>
        </div>
      </div>
      <div class="GoalHeroRight" >
        <br/>     <br/>     <br/>     <br/>
        <GoalHero />
      </div>
      </div>
      <br/> <br/> 
      <div className = 'ProjectsContainer'>
      <div class="CheeseLeft"  >
        <div class="GoalHeroText">
        <br/> <br/> 
          <h3>Grace Cheese Prime</h3>
          A basic e-commerce website that sells cheeses. Developed with JavaScript, React, Redux, Express and PostgreSQL. Designed and implemented a simple user experience to view and purchase cheeses.Used conventional Rest API and git workflow to manage team development.
       
        </div>
        <div class = 'GoalHeroDemo'>
<a href ='https://grace-cheese-prime.herokuapp.com/'>DEMO</a>
<a href ='https://github.com/2008-FSA-Grace-Shopper-Cheese/GraceShopper'>GITHUB</a>
        </div>
      </div>

      <div class="CheeseRight"  >
        <img src="cheesePrime.jpg" />
      </div>
      </div>

     

{/* <div class="tennis3"></div> */}





</div>
    </div>
  );
};
