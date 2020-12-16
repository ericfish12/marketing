import React from "react";
import Resume from '../public/Resume.pdf'
import * as JQuery from "jquery";
const $ = JQuery.default;

export const Technologies = () => {
  return (
<div class = 'TechnologiesContainer' data-aos = 'fade-up'>
  <br/>
  <br/>
<h1>Technologies unlocked</h1>
<br/>
<h4>Language: </h4>Java, JavaScript (ES6+)
<br/>
<h4>Frontend:</h4> React,React-native, Redux, HTML, CSS, Jquery
<br/>
<h4>Backend: </h4>Node.js, Express, Sequelize, PostgreSQL, Sockit.io
<br/>
<h4>DevOps: </h4>Heroku, Webpack, TDD (Mocha, Chai, Jasmine)
<br/>
<h4>Tools:</h4> npm, GitHub, GIT, Visual Studio Code, Postman, Postico, Eclipse
<br/>
<br/>
<br/>
<br/>
<h1>Resume</h1>
<a href={Resume}>View Resume</a>
<a   href={Resume}
          download>Download Resume</a>
</div>


  )
}