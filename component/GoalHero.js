import React from "react";
import allHeros from "../public/data.json";
import * as JQuery from "jquery";
const $ = JQuery.default;

let array = [];
for (let i = 1; i < 13; i++) array[i] = i;

export default class GoalHero extends React.Component {
  render() {
    return (
      <div>
        <div class="GoalHero" id="GoalHero">
          <div class="GoalHeroContainer">
            <div>
              <img src="GoalHero1.png" />
            </div>
            <div>
              <img src="GoalHero2.png" />
            </div>
            <div>
              <img src="GoalHero3.png" />
            </div>
            <div>
              <img src="GoalHero4.png" />
            </div>
            <div>
              <img src="GoalHero5.png" />
            </div>
            <div>
              <img src="GoalHero6.png" />
            </div>
            <div>
              <img src="GoalHero7.png" />
            </div>
            <div>
              <img src="GoalHero8.png" />
            </div>
            <div>
              <img src="GoalHero9.png" />
            </div>
            <div>
              <img src="GoalHero10.png" />
            </div>
            <div>
              <img src="GoalHero11.png" />
            </div>
            <div>
              <img src="GoalHero12.png" />
            </div>
            <div>
              <img src="GoalHero13.png" />
            </div>
            <div>
              <img src="GoalHero1.png" />
            </div>
          </div>
        </div>

        <div class="ol">
          <i id="leftArrow">&#8882;</i>
          <div k={0} class="GoalHeroActive"></div>

          {array.map((element, index) => {
            return <div key={index} k={index}></div>;
          })}
          <i id="rightArrow">&#8883;</i>
        </div>
      </div>
    );
  }
}

$(function () {
  let btn = $(".GoalHero ol li");
  let oul = $(".GoalHero .GoalHeroContainer");
 
//set a timer auto roll
  let currentPng = 0;
  let timer = setInterval(function () {
    currentPng++;
    tab();

    if ($(".ol .GoalHeroActive").next().attr("k") == undefined) {
      $(".ol div")
        .first()
        .attr("class", "GoalHeroActive")
        .siblings()
        .attr("class", "");
    } else $(".ol .GoalHeroActive").next().attr("class", "GoalHeroActive").siblings().attr("class", "");

    console.log($(".ol .GoalHeroActive").attr("k"));
  }, 2000);

  //click the one
  $(".ol div").click(function () {
    $(this).attr("class", "GoalHeroActive").siblings().attr("class", "");
    currentPng = $(this).attr("k");

    let whichOne = $(this).attr("k");

    oul.animate(
      {
        left: whichOne * -240,
      },
      500,
      function () {
        if (currentPng == 13) {
          currentPng = 0;
          oul.css("left", 0);
        }
      }
    );
  });

  //click the left arrow
  $("#leftArrow").click(function () {
    if (currentPng != 0) {
      currentPng--;
      $(".ol .GoalHeroActive")
        .prev()
        .attr("class", "GoalHeroActive")
        .siblings()
        .attr("class", "");
      let moveToWhich = $(".ol .GoalHeroActive").attr("k");
      console.log(moveToWhich);
      oul.animate(
        {
          left: moveToWhich * -240,
        },
        200,
        function () {
          // if(currentPng==13){
          // currentPng=0;
          // oul.css('left',0)}
        }
      );
    }
  });

  //click the right arrow
  $("#rightArrow").click(function () {
    if (currentPng != 12) {
      currentPng++;

      $(".ol .GoalHeroActive")
        .next()
        .attr("class", "GoalHeroActive")
        .siblings()
        .attr("class", "");
      let moveToWhich = $(".ol .GoalHeroActive").attr("k");
      console.log(moveToWhich);
      oul.animate(
        {
          left: moveToWhich * -240,
        },
        200,
        function () {}
      );
    }
  });

  //mouse over
  $(".GoalHero,.ol")
    .mouseenter(function () {
      clearInterval(timer);
    })
    .mouseleave(function () {
      timer = setInterval(function () {
        currentPng++;
        tab();

        if ($(".ol .GoalHeroActive").next().attr("k") == undefined) {
          $(".ol div")
            .first()
            .attr("class", "GoalHeroActive")
            .siblings()
            .attr("class", "");
        } else $(".ol .GoalHeroActive").next().attr("class", "GoalHeroActive").siblings().attr("class", "");

        console.log($(".ol .GoalHeroActive").attr("k"));
      }, 2000);
    });

    //auto function
  function tab() {
    oul.animate(
      {
        left: currentPng * -240,
      },
      500,
      function () {
        if (currentPng == 13) {
          currentPng = 0;
          oul.css("left", 0);
        }
      }
    );
  }
});
