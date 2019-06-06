'use strict';

//sets counter that will keep track of questions answered correctly
var counter = 0;

//Begining of Minigame
var username = prompt('What is your name?');
var usernameMessage = 'Hey there ' + username + ' welcome to my site! I am going to be asking you a series of Yes or No questions. Have fun!';
alert(usernameMessage);

var question1 = function (){

  //Question 1
  var favoriteColor = prompt('Is my favorite color black?');
  favoriteColor = favoriteColor.toLowerCase(); //Accepts User input regardless of case
  
  if(favoriteColor === 'yes' || favoriteColor === 'y'){
    alert('Awesome! How did you know?');
    counter++;
  } else if (favoriteColor === 'no' || favoriteColor === 'n'){
    alert('Sorry that is not correct :(');
  } else {
    alert('Sorry, this is a Yes or No question');
  }
  console.log('FavoriteColor: ' + favoriteColor);
};
question1 ();

//Question2
var question2 = function (){

  var moveThings = prompt('Can I move things with my mind?');
  moveThings = moveThings.toLowerCase();
  if(moveThings === 'no' || moveThings === 'n'){
    alert('Awesome! How did you know?');
    counter++;
  } else if (moveThings === 'yes' || moveThings === 'y'){
    alert('Sorry that is not correct :(');
  } else {
    alert('Sorry, this is a Yes or No question');
  }
  console.log('moveThings: ' + moveThings);
};
question2 ();

var question3 = function (){

  //Question 3
  var jediMaster = prompt('Am I a Jedi Master?');
  jediMaster = jediMaster.toLowerCase();
  if(jediMaster=== 'no' || jediMaster === 'n'){
    alert('You are right >:p, The darkside is strong with this one');
    counter++;
  } else if (jediMaster === 'yes' || jediMaster === 'y'){
    alert('Sorry that is not correct; The force is not strong with you');
  } else {
    alert('Sorry, this is a Yes or No question');
  }
  console.log('jediMaster: ' + jediMaster);
};
question3 ();

var question4 = function (){

  //Question 4
  var pet = prompt('Do I have any pets?');
  pet = pet.toLowerCase();
  
  if(pet === 'yes' || pet === 'y'){
    alert('Awesome! How did you know?');
    counter++;
  } else if (pet === 'no' || pet === 'n'){
    alert('Sorry that is not correct :(');
  } else {
    alert('Sorry, this is a Yes or No question');
  }
  console.log('pet: ' + pet);
};
question4 ();

//Question 5
var favoriteCar = prompt('Do I have a dream car?');
favoriteCar = favoriteCar.toLowerCase();

if(favoriteCar === 'yes' || favoriteCar === 'y'){
  alert('Awesome! How did you know?');
  counter++;
} else if (favoriteCar === 'no' || favoriteCar === 'n'){
  alert('Sorry that is not correct :(');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('favoriteCar: ' + favoriteCar);

//Question 6
alert('I am thinking of a number between 1-10, I\'ll give you 4 tries to get it right. Let\'s do it');

var reachedLimit = 1;

// allows user 4 tries to guess secret number
for (var i = 0; i < 4; i++){
  var guessNum = prompt('What number am I thinking of?');
  reachedLimit++;

  if (guessNum <= 6) {
    alert('Sorry that\'s too low');
  } else if (guessNum >= 8){
    alert('Sorry that is too high');
  } else if (guessNum === 7 || guessNum === '7'){
    alert('You got it!');
    counter++;
    break;
  } else {
    alert('This is not an acceptable answer');
  }
  if(reachedLimit > 4){
    alert('Seems like you ran out of tries :/ ');
  }
}
console.log('number Guessed: '+ guessNum);


//Question 7
var favoriteFood = ['pizza','hamburger','bread'];

var userAnswer = prompt('One last question. What is my favorite thing to eat? Hint: This one has multiple answers').toLowerCase();

var numOfAttepts = 0;

// Source:https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript

loop1:
while(numOfAttepts < 5){
  for (var j = 0; j < favoriteFood.length; j++){
    if (userAnswer === favoriteFood[j]){
      alert('You got it! here are all my favorite foods: ' + favoriteFood);
      counter++;
      break loop1;
    }
  }
  userAnswer = prompt('Sorry this is wrong you have failed us all, Try again: ');
  numOfAttepts++;
}
console.log('Favorite food: ' + favoriteFood);
console.log('User answers: ' + userAnswer);
console.log('Counter: ' + counter);

alert('Here are the number of questions you got right ' + username +' '+ counter + ' out of 7');
