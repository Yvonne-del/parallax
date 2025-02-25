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

