# OBJECTS
Note: The spread operator has been around for a while, but there's still a chance you'll encounter similar code written using another method, Object.assign()Links to an external site.. Like the spread operator, Object.assign allows us to combine properties from multiple Objects into a single Object.

In other languages (like Ruby), this behavior is called "merging." You take an original base Object (maybe with some typical "standard" attribute / value pairs already set), and then you "merge" in additional Object(s).BJECTS

# NOTE
For accessing elements in an Array, always use integers.
Be wary of setting Object-style properties on an Array. There's rarely any reason to, and it's usually more trouble than it's worth.
const name = ["Charlie", "Samip", "Ali"];
function whiteCard(name){
    for (let i=0; i<name.length; i++){
        console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`)
    }
    return name;
}
whiteCard(name);Remember that all Object keys, including Array indexes, are strings. This will really come into play when we learn how to iterate over Objects, so keep it in the back of your mind.

# Debugging using node.js
Place one or more breakpoints in your code using the debugger keyword
Run node inspect <filename> in the terminal to launch the debugger
Run cont at the debug prompt to start execution of the code and advance to the first breakpoint
Run repl at the debug prompt to enter the debugger's REPL
Check the value of any variables by entering the variable name at the > prompt
Exit the REPL using ctrl-c
Continue stepping through the code using cont
Run .exit or type ctrl-c twice to exit the debugger