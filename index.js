/*
console.log("hello world!");
let a = "Hello";
let b = "world";
console.log(a+" "+a+" "+b)

const likelyToRain = true;
const clothingChoice = likelyToRain ? "rain boots" : "sun hat";
console.log(clothingChoice);
/* if its likely to rain then we wear rain boots, and likely to rain is true...so rain boots */
/*
const fall = false;
const iWillFall = fall ? "walkNice" : "trip";
console.log(iWillFall);
/*  i will fall by tripping, anf fall is false...means i walknice */
/*
const rainPercentage = 0.2;
const clothingchoice = rainPercentage > 0.3 ? "rain boots" : "sun hat";
console.log(clothingchoice);
/* if rain is greater than 0.3 then wear rain boots...but it is less so wear sun hat */
/*
const name = "Hello Stranger";
const dropPercentage = 0.4;
const temp = 27;
const message = `${name}! Rain percentage is ` + (dropPercentage > 0.5 ? "greater than 0.4,carry an umbrella " : "less than 0.4,wear lightly ") + `and temp is ` + (temp < 25 ? "less than 25^C, you cool." : "greater than 25^C, beware of a heatstroke!");
console.log(message);
/* this is same code as above */
/*
const namee = "Hello Stranger";
const droppercentage = 0.4;
const tempe = 27;
const toDo = droppercentage > 0.5 ? "greater than 0.4,carry an umbrella " : "less than 0.4,wear lightly ";
const tmp = tempe < 25 ? "less than 25^C, you cool." : "greater than 25^C, beware of a heatstroke!";
const messagee = `${namee}! Rain percentage is ${toDo} and temp is ${tmp}`;
console.log(message);


const first = 2;
const second = 1;
const problem = 99;
const luckyNumber = first > second ? (problem - 1) / 2 : problem / 3;
console.log(luckyNumber);
*/

/* structure of if statement
if (condition) {
  // Block of code
} */
let favoriteNumber = 32;
if (favoriteNumber >= 10) { // evaluating favoriteNumber >= 10 returns true
  favoriteNumber = favoriteNumber + 10
} 
console.log(favoriteNumber);


// boolean if statement
const Agee = 30;

let IsAdult;

if (Agee >= 18) {
  IsAdult = true;
}

console.log(IsAdult);

//boolean with if else statement
const Age = 14;

let Adult;

if (Age >= 18) {
  Adult = true;
} else {
  Adult = false;
}

console.log(Adult);

//above code in ternary expression
const age = 14;

let isAdult;

age >= 18 ? (isAdult = true) : (isAdult = false);

console.log(isAdult);


//example of an else if statement where there are more than two arguments
const agee = 20;

let isadult, canWork, canEnlist, canDrink;

if (agee >= 21) {
  canWork = true;
  canEnlist = true;
  isadult = true;
  canDrink = true;
} else if (agee >= 18) {
  canWork = true;
  canEnlist = true;
  isadult = true;
  canDrink = false;
} else if (agee >= 16) {
  canWork = true;
  canEnlist = false;
  isadult = false;
  canDrink = false;
}

console.log(canWork);
console.log(canEnlist);
console.log(isadult);
console.log(canDrink);

//nesting an if statement uder an existing if statement
//undefined means its false
const aage = 21;

let canwork, isAddult, canenlist, candrink;

if (aage >= 16) {
  canwork = true;

  if (aage >= 18) {
    isAddult = true;
    canenlist = true;

    if (aage >= 21) {
      candrink = true;
    }
  }
}


console.log("Can work:",canwork,"Can enlist:",canenlist,"Is a legal adult:",isAddult,
    "Can drink:",candrink);


//additional code in add.js