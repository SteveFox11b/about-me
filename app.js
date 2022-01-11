'use strict';

console.log('Yo, what up');

let user = prompt('Hi there, what is your name?');

alert(`Welcome ${user}! Let's play a guessing game so you can get to know me! Please answer yes or no.`);

let answerOne = prompt('Do I have a daughter?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
 console.log('yes, thats correct');
  alert('Yes you are correct! She\'s 7 right now!');
} else if(answerOne === 'no' || answerOne === 'n') {
  console.log('sorry, you are wrong!');
  alert('Sorry, you are wrong');
} else {
  console.log('follow instructions');
  alert('Please follow instructions and answer with a yes/no!');
}

alert(`Thanks for playing ${user}!`);
