'use strict';

console.log('Yo, what up');

let user = prompt('Hi there, what is your name?');

let playerScore = 0;

alert(`Welcome ${user}! Let's play a guessing game so you can get to know me a lttle bit! Please answer yes or no.`);

function mission1() {

  let answerOne = prompt('Does my son like jurassic park?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    console.log('yes, thats correct');
    alert('Yes! It is one of the only things we watch in my house!');
    playerScore++;
  } else if (answerOne === 'no' || answerOne === 'n') {
    console.log('Sorry, you are wrong');
    alert('NOPE! He is addicted. He also has every dinosaur toy variation!');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}
mission1();

function mission2() {

  let answerTwo = prompt('Is hockey my favorite sport?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    console.log('yes, thats correct');
    alert('All dayyyyy long! Lets go! Go Bassssten!');
    playerScore++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    console.log('sorry, you are wrong!') ;
    alert('WRONG! I love everthing about it from cold ponds in the morning, Beer leagues and watching Basssssten!');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}
mission2();


function mission3() {

  let answerThree = prompt('Have I ever left my hometown in New Hampshire?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    console.log('yes, thats correct');
    alert('Yup sure have. I have lived in New Hampshire, Alaska, Afghanistan, Utah, Oregon and Idaho.');
    playerScore++;
  } else if (answerThree === 'no' || answerThree === 'n') {
    console.log('sorry, you are wrong!');
    alert('Unfortunetly you are wrong...I have lived in New Hampshire, Alaska, Afghanistan, Utah, Oregon and Idaho.!');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}

mission3();


function mission4() {

  let answerFour = prompt('Am I married with kids?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    console.log('yes, thats correct');
    alert('Yes you are correct! She\'s super hot and shes a great mom! My kids are awesome! Teagan and Talon, girl and boy, 8 and 3.');
    playerScore++;
  } else if (answerFour === 'no' || answerFour === 'n') {
    console.log('sorry, you are wrong!');
    alert('Nope!, I sure am and I am very very lucky... My wife is awesome and super hot and I have 2 kids, Teagan and Talon, girl and boy, 8 and 3.');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}

mission4();

function mission5() {

  let answerFive = prompt('Did grandma get run over by a reindeer?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    console.log('yes, thats correct');
    alert('Yup she sure did. Walking home from our house Christmas eve');
    playerScore++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    console.log('sorry, you are wrong!');
    alert('Nope! She did walking home from our house Christmas eve');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}

mission5();

alert(`Thanks for playing ${user}!I am married with 2 kids that I love more than anything.  My favorite sport is Hockey and me and my wife love to check out new areas in the US. I enjoy weightlifting and hanging with my family.`);

function mission6() {

  let correctAns = 7;
  let attempts = 4;

  while (attempts) {
    let numGuess = +prompt('I want you to guess a number between 1 and 10.');

    attempts--;
    if (numGuess > correctAns) {
      alert('that number is too high.');

    } else if (numGuess < correctAns) {
      alert('that number is too low.');

    } else if (+numGuess === 7) {
      alert('You got it right! Lets Go!');
      playerScore++;
      break;
    }
    if (attempts === 0) {
      alert('Sorry! You only had 4 attempts! Next time!');
    }
  }
}
mission6();

// question 7

let myArr = ['rasberries', 'apple', 'strawberries'];

let newGuess = 6;

while (newGuess){
  newGuess--;
  let rightFruit = prompt('Guess a fruit that is red!');

  for (let i = 0; i < myArr.length; i++) {

    if(rightFruit === myArr[i]) {
      alert('good job, you guessed right!');
      newGuess = 0;
      playerScore++;
    }
  }
  if (newGuess !== 0){
    alert('Oops! you guessed wrong! you have ' + newGuess + ' more guesses');
  } else {
    alert(myArr + ' are all of the correct answers!');
  }
}
  
alert('Oh man, thanks for playing. You got ' + playerScore + ' right out of 7!');




//Add a 7th question that has multiple possible correct answers that are stored in an array.
//Give the user 6 attempts to guess the correct answer.
//The guesses will end once the user guesses a correct answer or they run out of attempts.
//Display all the possible correct answers to the user.
//Consider using a loop of some sort for this question.
//As a user, I would like to know my final score so that I can know how well I did.
//Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

  

