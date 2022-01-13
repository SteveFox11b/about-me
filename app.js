'use strict';

console.log('Yo, what up');

let user = prompt('Hi there, what is your name?');

alert(`Welcome ${user}! Let's play a guessing game so you can get to know me a lttle bit! Please answer yes or no.`);

function quest1(){

  let answerOne = prompt('Do I have a daughter?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    console.log('yes, thats correct');
    alert('Yes you are correct! She\'s 7 right now!');
  } else if (answerOne === 'no' || answerOne === 'n') {
    console.log('Sorry, you are wrong');
    alert('Wrong! I do have a daughter! Her name is Teagan, she is 7 and amazing!');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}
quest1();

function quest2(){

  let answerTwo = prompt('Do I have a son?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    console.log('yes, thats correct');
    alert('Yes you are correct! He\'s 3 right now!');
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    console.log('sorry, you are wrong!');
    alert('Actually I do! He is 3 years old, his name is Talon and he is a real life crazy person!');
  } else {
    console.log('follow instructions');
    alert('Please follow instructions and answer with a yes/no!');
  }
}
quest2();



let answerThree = prompt('Do I have a dog?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  console.log('yes, thats correct');
  alert('Yes you are correct! She\'s a 2 year old German Shepard!');
} else if (answerThree === 'no' || answerThree === 'n') {
  console.log('sorry, you are wrong!');
  alert('Sorry, you guessed wrong, I have a german shepard named Kenai, she is almost 2!');
} else {
  console.log('follow instructions');
  alert('Please follow instructions and answer with a yes/no!');
}




let answerFour = prompt('Do I have a wife?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  console.log('yes, thats correct');
  alert('Yes you are correct! She\'s super hot and shes a great mom!');
} else if (answerFour === 'no' || answerFour === 'n') {
  console.log('sorry, you are wrong!');
  alert('Nope!, I sure do and I am very very lucky...');
} else {
  console.log('follow instructions');
  alert('Please follow instructions and answer with a yes/no!');
}



let answerFive = prompt('Am I a picky eater?').toLowerCase();
if (answerFive === 'no' || answerFive === 'n') {
  console.log('yes, thats correct');
  alert('Yes you are correct! I will eat anything!');
} else if (answerFive === 'yes' || answerFive === 'y') {
  console.log('sorry, you are wrong!');
  alert('No way! I will finsh grandmas meal every time with a smile!');
} else {
  console.log('follow instructions');
  alert('Please follow instructions and answer with a yes/no!');
}
alert(`Thanks for playing ${user}!I have 2 kids, Teagan and Talon, a German Shepard named Kenai, a hotass wife, her name is Danielle and I will eat anything in my path!`);
