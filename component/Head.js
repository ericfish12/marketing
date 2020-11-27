import React from "react";

import * as JQuery from "jquery";
const $ = JQuery.default;

export const Head = () => {
  return (
    <div class="tennisTable">
       <img class='MePhoto' src='me.jpeg'/>
      {/* <img src='1.png' />  */}
      {/* <img src="coffee.jpeg" /> */}
<div class = 'aboutMe'>
   
    <h1 class='daddy'>FULL-STACK SOFTWARE ENGINEER & WEB DEVELOPER</h1>
    <h1 class='HeadFont'> Shan Jiang(Fish) </h1>
    <br/>
    
   <h1> Also a tennis player, a pizza maker, a pop singer, a racing driver, <br/>a traveller...</h1>
  <div class ='GitEmail'>
   <a href ="mailto:ericfish1221@gmail.com?subject=HELLO!"> <img src='email.png'/></a>
  
   <a href ="https://www.linkedin.com/in/ericfish12/"> <img src='linkedin.png'/></a>
   <a href ="https://github.com/ericfish12"> <img src='github.png'/></a>

  </div>
</div>
      <div class="tennis"></div>
      <div class="tennis2"></div>
    </div>
  );
};

