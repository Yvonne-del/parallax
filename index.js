
console.log("hello world!");
let a = "Hello";
let b = "world";
console.log(a+" "+a+" "+b)

const likelyToRain = true;
const clothingChoice = likelyToRain ? "rain boots" : "sun hat";
console.log(clothingChoice);
/* if its likely to rain then we wear rain boots, and likely to rain is true...so rain boots */

const fall = false;
const iWillFall = fall ? "walkNice" : "trip";
console.log(iWillFall);
/*  i will fall by tripping, anf fall is false...means i walknice */

const rainPercentage = 0.2;
const clothingchoice = rainPercentage > 0.3 ? "rain boots" : "sun hat";
console.log(clothingchoice);
/* if rain is greater than 0.3 then wear rain boots...but it is less so wear sun hat */

const name = "Hello Stranger";
const dropPercentage = 0.4;
const temp = 27;
const message = `${name}! Rain percentage is ` + (dropPercentage > 0.5 ? "greater than 0.4,carry an umbrella " : "less than 0.4,wear lightly ") + `and temp is ` + (temp < 25 ? "less than 25^C, you cool." : "greater than 25^C, beware of a heatstroke!");
console.log(message);
/* this is same code as above */

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


