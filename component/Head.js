import React from "react";



export const Head = () => {
  return (
    <div className="tennisTable">

      {/* <div className = 'MePhotoBox'>
       <img class='MePhoto img-fluid' src='me.jpeg'/>
       </div> */}
<div className="card" >
  <img src="me.jpeg" class="card-img-top" alt="me"/>
   
</div>




      {/* <img src='1.png' />  */}
      {/* <img src="coffee.jpeg" /> */}
<div className='aboutMe'>
<br/> <br/>   <br/> <br/> 
<div style={{width:"111%"}}>
    <h2 className='daddy'>FRONT-END WEB DEVELOPER</h2>
    </div>
    <br/> <br/> 
    <h1 className='HeadFont'>  {'\u00A0\u00A0\u00A0\u00A0'} <a href ="mailto:fish.jiang12@gmail.com?subject=HELLO!"> <img src='email.png'/></a>   Fish Jiang </h1>
    <br/>  <br/>
    
   <h2> 
   <button type="button" class="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">improving</button>{'\u00A0'}  

   <button type="button" class="btn btn-secondary" disabled data-bs-toggle="button" autocomplete="off">passionate</button>{'\u00A0'}  

   <button type="button" class="btn btn-success" disabled data-bs-toggle="button" autocomplete="off">open-minded</button>{'\u00A0'}  

   <button type="button" class="btn btn-danger" disabled data-bs-toggle="button" autocomplete="off">data-driven</button>{'\u00A0'}  

   <button type="button" class="btn btn-warning" disabled data-bs-toggle="button" autocomplete="off">elegant</button>
   {'\u00A0'}  
   <button type="button" class="btn btn-info" disabled data-bs-toggle="button" autocomplete="off">creative</button>
   {'\u00A0'}  
   <button type="button" class="btn btn-dark" disabled data-bs-toggle="button" autocomplete="off">anticipate needs</button>{'\u00A0'}  
     
     
  </h2>
   <br/> <br/>  <br/> 
  
</div>
      {/* <div className="tennis"></div>
      <div className="tennis2"></div> */}


      
    </div>
  );
};

