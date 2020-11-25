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
    <div class="logo">
      {/* <img alt="logo" src="images/logo.png" /> */}
    </div>
    <nav>
      <div class="nav-item">
        <a href="#">AboutMe</a>
      </div>
      <div class="nav-item">
        <a href="#">Projects</a>
      </div>
      <div class="nav-item">
        <a href="#">Contact</a>
      </div>
    </nav>
  </header>
 <Head />
 <h1>Projects</h1>
 <Projects />
<Technologies />
<Contact />
  {/* <div  className='item' data-aos="fade-in">fade in</div>
  <div  className='item' data-aos="fade-in">fade in</div>
  <div  className='item' data-aos="fade-in">fade in</div>
  <div  className ='item2'data-aos="slide-right">
    <Dota />
    <br/>
    <br/>
    <br/>
    </div> */}
   




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
// scrollActions();











let ll=60;
let ll2=60;
let tt =4;

setInterval(function (){


  let l = $('.tennis').offset().left+ll
  let l2 = $('.tennis2').offset().left+ll2
  //  let t = $('.tennis').offset().top+tt
$('.tennis').css('left',`${l}px`)
$('.tennis2').css('left',`${l2}px`)
// .css('top',`${t}px`)

// if( $('.tennis').offset().left>=1444)
// $('.tennis').css('left','1000px')
if( $('.tennis').offset().left>=666  ||$('.tennis').offset().left<=0)
ll=0-ll

if( $('.tennis2').offset().left>=1333  ||$('.tennis2').offset().left<=0)
ll2=0-ll2
// if( $('.tennis').offset().top>=700 ||$('.tennis').offset().top<=0)
// tt=0-tt
//console.log($('.tennis').offset().left)
},20)






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




// $(function() {
//    // $("image").each(function () {
//   //   alert("ewgeg")
//     $('.child').hover(
//       function () {
//         alert('awewwwwwwww')
//         $(this).css(
//           "flex-grow", "4" /* default 0 */
//         )
//       },
//       function () {
//         // alert("shutop")
//         $(this).stop(true).animate({
//           width: 200,
//         });
//       }
//     );
//   //  });
// });





// $("image").each(function () {
//   $(this).hover(
//     function () {
//       // over
//       alert("gesdg");
//       $(this).animate({
//         width: 400,
//       });
//     },
//     4000,
//     function () {
//       // out
//       $(this).animate({
//         width: 203.3,
//       });
//     }
//   );
// });

$(() => {
  //alert('weagewg')
});
document.addEventListener("scroll", function () {
  var group = $("img");

  group.each(function () {
    // if ($(this).offset()<600)
    // $(this).hide().show(2)

    if ($(window).scrollTop() >= 11777) $('div').css("border", "4px solid red");

    if ($(this).offset().top - $(window).scrollTop() < 600) {
      //   $("img").hide(1000)
      //  $(this).show(22222)
      // $(this).fadeIn(20)
    }
  });
  //group.css('border','3px solid red')

  console.log(group.offset().top - $(window).scrollTop());
  console.log("***");
  // alert ('dsgsrh')
  //  if($(this).scrollTop()>600)
  //  {
  //   $('div').fadeOut(2000)

  //  }
});
