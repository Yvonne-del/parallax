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
  const agge = 14;
  
  let issAdult;
  
  age >= 18 ? (isAdult = true) : (isAdult = false);
  
  console.log(isAdult);
  
  
  //example of an else if statement where there are more than two arguments
  const agee = 20;
  
  let isadult, cannWork, cannEnlist, cannDrink;
  
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
  

//this is a switch statement code
const Name = "Alice";
let greeting;

switch (Name) {
  case "Alice":
    greeting = "Hello, Alice!";
    break;
  case "The White Rabbit":
    greeting = "Don't be late, White Rabbit";
    break;
  case "The Mad Hatter":
    greeting = "Welcome to the tea party, Mad Hatter";
    break;
  case "The Queen of Hearts":
    greeting = "Please don't chop off my head!";
    break;
  default:
    greeting = "Whoooo are you?";
}

console.log(greeting);

//We can also assign the same set of statements to multiple cases in switch
const namee = "Evil Queen";
let characterType;

switch (namee) {
  case "Sleepy":
  case "Sneezy":
  case "Happy":
  case "Grumpy":
  case "Bashful":
  case "Dopey":
  case "Doc":
    characterType = "dwarf";
    break;
  case "Handsome Prince":
    characterType = "hero";
    break;
  case "Evil Queen":
    characterType = "villain";
    break;
  case "Snow White":
    characterType = "heroine";
    break;
  default:
    characterType = "minor character";
}

console.log(characterType);

/* sometimes we want to potentially match multiple cases, 
and we will need to leave out break in order to do this */
//do not forget, undefined means the value is false
const age = 19;
let isAdult, canWork, canEnlist, canDrink;

switch (true) {
  case age >= 21:
    canDrink = true;
  case age >= 18:
    isAdult = true;
    canEnlist = true;
  case age >= 16:
    canWork = true;
}
console.log(canWork);
console.log(canEnlist);
console.log(isAdult);
console.log(canDrink);
/*Because we did not include any break statements, once one case statement matches, 
all subsequent statements will execute. */

//below is a type of infromative concole.log()
console.log("Age:",age,"Can work:",canWork,"Can enlist:",canEnlist,"Is a legal adult:",isAdult,
    "Can drink:",canDrink); //additional exapmle in index.js last code

// alternatively, we can use string interpolation inside our console.log() to do the same thing
console.log(
    `Age: ${age}, Can work: ${canWork}, Can enlist: ${canEnlist}, Is a legal adult: ${isAdult}, Can drink: ${canDrink}`
  );



//A basic while loop looks like:
    
    while (condition-expression) {
        // stuff to do
    } 

/* below is a while loop where In the last line, count = count + 1, 
we are assigning a new value to the count variable, 
where the new value is equal to its current value plus 1....this acts as the natural loop breaker */
let count = 0; // Initialize a counter variable; note that we need to use `let` here
while (count < 3) {
    //A Boolean expression that uses the counter to decide whether to keep looping
    console.log(`I am the ${count}, I love to count!`); // The work the loop does
    count = count + 1; // Update the counter variable; this keeps track of how many times the loop has executed
}