import React from "react";
// import Resume from '../public/Resume.pdf'
import * as JQuery from "jquery";
const $ = JQuery.default;

export const Technologies = () => {
  return (
<div class = 'TechnologiesContainer' data-aos = 'fade-up'>
  
  <br/>  <br/>  <br/>   
<h1 className='ProjectsTitle'>Technologies unlocked</h1>
<br/>
<h4>Technologies/Language: </h4>Java, JavaScript, TypeScript, SQL, NoSQL, XML, Hibernate, Spring Boot
<br/>
<h4>Web Technologies:</h4> Angular, TypeScript, HTML5, CSS3, JQuery, JavaScript, Bootstrap, Angular Material, PrimeNG, React, Redux
<br/>
<h4>Testing/Debugging: </h4>Jasmine, Karma, Postman, mocha, chai
<br/>
<h4>Databases/IDE Tool: </h4>Eclipse, VS Code, SQL Server, PostgreSQL, Express, IntelliJ
<br/>
<h4>Others:</h4> SVN, GIT, Agile(Scrum), Waterfall, JIRA
<br/>
<br/>
<br/>
<br/>
{/* <h1 className='ProjectsTitle'>Resume</h1>
<br/>  <br/>  
<a href={Resume}>View Resume</a>
<a   href={Resume}
          download>Download Resume</a> */}
</div>


  )
}