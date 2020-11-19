import React from "react";
import allHeros from "../public/data.json";
import * as JQuery from "jquery";
const $ = JQuery.default;

export default class GoalHero extends React.Component {
    render() {
        return (
            <div class="GoalHero" id="GoalHero">
                <ol>
                    <li class="GoalHeroActive">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ol>

                <div class="GoalHeroContainer">
                    <div>
                        <img src={allHeros[0]} />
                    </div>
                    <div>
                        <img src={allHeros[1]} />
                    </div>
                    <div>
                        <img src={allHeros[2]} />
                    </div>
                    <div>
                        <img src={allHeros[3]} />
                    </div>
                    <div>
                        <img src={allHeros[4]} />
                    </div>
                    <div>
                        <img src={allHeros[5]} />
                    </div>
                    <div>
                        <img src={allHeros[6]} />
                    </div>
                    <div>
                        <img src={allHeros[7]} />
                    </div>
                    <div>
                        <img src={allHeros[8]} />
                    </div>
                    <div>
                        <img src={allHeros[9]} />
                    </div>
                    <div>
                        <img src={allHeros[10]} />
                    </div>
                    <div>
                        <img src={allHeros[11]} />
                    </div>
                    <div>
                        <img src={allHeros[12]} />
                    </div>
                    <div>
                        <img src={allHeros[0]} />
                    </div>
                    <div>
                        <img src={allHeros[1]} />
                    </div>
                    <div>
                        <img src={allHeros[2]} />
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
        left:currentPng*-150
    },500,function(){
if(currentPng==13){
currentPng=0;
oul.css('left',0)}
    })
 

}




})