import React from "react";
import allHeros from "../public/data.json";
import * as JQuery from "jquery";
const $ = JQuery.default;

export default class GoalHero extends React.Component {
    render() {
        return (
            <div class="GoalHero" id="GoalHero">
                {/* <ol>
                    <li class="GoalHeroActive">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ol> */}

                <div class="GoalHeroContainer">
                    
                    <div>
                        <img src='GoalHero1.png' />
                    </div>
                    <div>
                        <img src='GoalHero2.png'/>
                    </div>
                    <div>
                        <img src='GoalHero3.png' />
                    </div>
                    <div>
                        <img src='GoalHero4.png' />
                    </div>
                    <div>
                        <img src='GoalHero5.png' />
                    </div>
                    <div>
                        <img src='GoalHero6.png' />
                    </div>
                    <div>
                        <img src='GoalHero7.png' />
                    </div>
                    <div>
                        <img src='GoalHero8.png' />
                    </div>
                    <div>
                        <img src='GoalHero9.png' />
                    </div>
                    <div>
                        <img src='GoalHero10.png' />
                    </div>
                    <div>
                        <img src='GoalHero11.png' />
                    </div>
                    <div>
                        <img src='GoalHero12.png' />
                    </div>
                    <div>
                        <img src='GoalHero13.png' />
                    </div>
                    <div>
                        <img src='GoalHero1.png' />
                    </div>
                   
                </div>
            </div>
        );
    }
}


$(function(){

let btn = $(".GoalHero ol li")
let oul = $('.GoalHero .GoalHeroContainer')
// btn.click(function(){

//    $(this).attr("class",'GoalHeroActive').siblings().attr("class","")

//    oul.animate({
//        left:$(this).index()*-150
//    },500)
// })

let currentPng = 0
setInterval(function(){
currentPng++
tab()
//console.log(currentPng)
},2000)




function tab (){
    oul.animate({
        left:currentPng*-240
    },500,function(){
if(currentPng==13){
currentPng=0;
oul.css('left',0)}
    })
 

}




})