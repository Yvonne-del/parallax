function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"


  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say(`Howdy`, `Partner`));


  //function with loop
  function thirst(answer=Boolean){
    console.log(`Are you thirsty?`)
    if (answer === true){
        return `drink water`;
    }
    else if(answer === false){
        return `stay healthy!`;
    }
    else {
        return `would you like some water`;
    }
  }
console.log(thirst(true));

function minus(num1){
    while(num1 > 7){
        num1--;
        console.log(num1); // See the current value before decrementing
    }
}
minus(10);
//NOTE that while loop must have a calling function after loop to show value when called, that is, the console.log
