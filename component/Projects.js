import React from "react";
import * as JQuery from "jquery";
import GoalHero from "./GoalHero";
const $ = JQuery.default;

export const Projects = () => {
  return (
    <div class="BigProjectsTable" data-aos="flip-up">
      <div class="GoalHeroLeft" data-aos="slide-left">
        <div class="GoalHeroText">
          <h3>GoalHero</h3>
          Goal Hero is a mobile game/lifestyle app. The main purpose of Goal
          Hero is to motivate users to complete goals for themselves, while also
          playing a game. A user can play as a hero and fight against a monster
          to unlock new and stronger heroes. To get strong enough to defeat the
          monster, the user must complete goals they set for themself. Tech
          Used: React Native, Expo, React Native Game Engine, Express, Heroku,
          Matter.js, PostgreSQL
          <a href="https://twitter.com/Dave_Conner" class="btn btn-2">
            Hover
          </a>
        </div>
      </div>
      <div class="GoalHeroRight" data-aos="slide-right">
        <GoalHero />
      </div>
      <div class="CheeseLeft" data-aos="slide-left">
        <div class="GoalHeroText">
          <h3>GoalHero</h3>
          Worked with a team to create a mobile game and lifestyle app. The user
          creates goals for themselves to level up their hero. The user can play
          as their hero to fight against an enemy. Tech Used: React Native,
          Expo, React Native Game Engine, Express, Heroku, Matter.js, PostgreSQL
          <a href="https://twitter.com/Dave_Conner" class="btn btn-2">
            Hover
          </a>
        </div>
      </div>

      <div class="CheeseRight" data-aos="slide-right">
        <img src="cheesePrime.jpg" />
      </div>


<div class ='IntroLeft'>
<img src = 'me2.jpeg'/>
</div>
<div class = 'IntroRight'>
<div class="GoalHeroText">
          <h3>GoalHero</h3>
         This guy graduated from Dalian Polytechnic University, his major was Information and Computation Science. After graduation, he worked as a buyer in a international trading company for three years and ran a pizza restaurant for another three years. Four years ago, he came to United State to start a new life. He learned English and enhanced Computer Science skills at Nassau Community College.Recently, he wanted to learn more and build actual projects instead of only acedamic which then led him to enroll in a 17 weeks immersive full-stack program in Fullstack Academy. Now he is ready to start his next journey as a software engineer in a company that allows him to contribute and learn in equal parts.
                 </div>
</div>







    </div>
  );
};
