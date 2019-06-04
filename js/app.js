'use strict';

//Begining of Minigame
var favoriteColor = prompt('Is my favorite color black?');
favoriteColor = favoriteColor.toLowerCase(); //Accepts User input regardless of case

if(favoriteColor === 'yes' || favoriteColor === 'y'){
  alert('Awesome! How did you know?');
} else if (favoriteColor === 'no' || favoriteColor === 'n'){
  alert('Sorry that is not correct :(');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('FavoriteColor: ' + favoriteColor);


var moveThings = prompt('Can I move things with my mind?');
moveThings = moveThings.toLowerCase();

if(moveThings === 'no' || moveThings === 'n'){
  alert('Awesome! How did you know?');
} else if (moveThings === 'yes' || moveThings === 'y'){
  alert('Sorry that is not correct :(');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('moveThings: ' + moveThings);


var jediMaster = prompt('Am I a Jedi Master?');
jediMaster = jediMaster.toLowerCase();

if(jediMaster=== 'no' || jediMaster === 'n'){
  alert('You are right >:p, The darkside is strong with this one');
} else if (jediMaster === 'yes' || jediMaster === 'y'){
  alert('Sorry that is not correct; The force is not strong with you');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('jediMaster: ' + jediMaster);


var pet = prompt('Do I have any pets?');
pet = pet.toLowerCase();

if(pet === 'yes' || pet === 'y'){
  alert('Awesome! How did you know?');
} else if (pet === 'no' || pet === 'n'){
  alert('Sorry that is not correct :(');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('pet: ' + pet);


var favoriteCar = prompt('Do I have a dream car?');
favoriteCar = favoriteCar.toLowerCase();

if(favoriteCar === 'yes' || favoriteCar === 'y'){
  alert('Awesome! How did you know?');
} else if (favoriteCar === 'no' || favoriteCar === 'n'){
  alert('Sorry that is not correct :(');
} else {
  alert('Sorry, this is a Yes or No question');
}
console.log('favoriteCar: ' + favoriteCar);



