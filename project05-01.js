"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jennipher Medina
      Date:   4-9-2025 

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

//declare variables
let timeID;

let questionList = document.querySelectorAll("div#quiz input");

//runs the function if the start quiz is clicked 
startQuiz.onclick = function() {

   //changes the class name of overlay to showquiz
   overlay.className = "showquiz";
   //sets timeid to the countdown function every second
   timeID = window.setInterval(countdown, 1000)
}
//creates a countdown function
function countdown(){
   if (timeLeft ==0)
   {
      //stops the timed command
      clearInterval(timeID);
   
      //declare variable to value of checkAnswers function
      let totalCorrect = checkAnswers();

      //checks if the total answers is = to length of array 
      if (totalCorrect == correctAnswers.length)
      {
         window.alert("You got a 100%!");
         
      }
      else{
         timeLeft=quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";

         window.alert("You got " +totalCorrect+ "out of "+correctAnswers.length+ 'questions');       
      }
   }
   else{
      timeLeft--;
      quizClock.value = timeLeft;
   }

}
/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

