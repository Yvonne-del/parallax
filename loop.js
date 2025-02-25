//A basic while loop looks like:
    /* 
    while (condition expression) {
        // stuff to do
    } 
    */

/* below is a while loop where In the last line, count = count + 1, 
we are assigning a new value to the count variable, 
where the new value is equal to its current value plus 1....this acts as the natural loop breaker */
let count = 0; // Initialize a counter variable; note that we need to use `let` here
while (count < 3) {
    //A Boolean expression that uses the counter to decide whether to keep looping
    console.log(`I am the ${count}, I love to count!`); // The work the loop does
    count = count + 1; // Update the counter variable; this keeps track of how many times the loop has executed
}