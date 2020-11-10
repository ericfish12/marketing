import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import Dota from './Dota'
//import {$,jQuery} from 'jquery';
import * as JQuery from "jquery";
const $ = JQuery.default;
import boostrap from 'bootstrap'

//import plugin from 'jquery-plugin'

// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

ReactDOM.render(
  <div>
  
    <Dota/>
  
  
  </div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);


// $(()=>{
// //alert('weagewg')
//   $('div').fadeOut(20000)
// })

// const selection = new $('#main')
// selection.hide() // "hides" the DOM element with the id of "main"
// document.querySelector("div");
//$("div")
//.css("border",'4px solid red')

// $(document).ready(()=>{
//   //$('div')
//   alert("ewgeg")
// })

$('.child').hover(()=>{
  alert('awewwwwwwww')
})


$('image').each(function(){
  $(this).hover(function () {
      // over
      alert('gesdg')
    $(this).animate({
      width:400
    })
    },4000, function () {
      // out 
       $(this).animate({
      width:203.3
    })
    }
  );
})

 $(()=>{
// //alert('weagewg')

 })
document.addEventListener('scroll',function(){
  
  var group = $("img");
   
group.each(function(){$(this).css('border','4px solid red')


// if ($(this).offset()<600)
// $(this).hide().show(2)

if ($(this).offset().top-$(window).scrollTop()<600){

//   $("img").hide(1000)

//  $(this).show(22222)
// $(this).fadeIn(20)
}
})
//group.css('border','3px solid red')

console.log (group.offset().top-$(window).scrollTop())
console.log ('***')
 // alert ('dsgsrh')
//  if($(this).scrollTop()>600)
//  {
//   $('div').fadeOut(2000)

//  }
})