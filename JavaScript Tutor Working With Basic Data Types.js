// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
let cryforhelp = "AAAH!!!";
let survey = "The room i wake up in appears to have two doors and a ceiling made of metal bars, like a prison cell. One of the doors is closed and the other is open to the scene of a man running for his life. In my direction...";
let dialogue1 = "I was being chased by zombies! Quick! Flip a lever to close the door, only one of them will!";
let choice = "Which lever could it be?";

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
let zombiecount = 47;
let levers = 3;
let timebeforeattack = 30;

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
let thelevers = ['Rusty Lever', 'Wooden Lever', 'Red Lever'];

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
let leverflipped = true;

// TODO: Print your story to the console.
// YOUR CODE GOES HERE

console.log(survey);
console.log("Stranger:" + dialogue1);
console.log("For the first time, i notice the" + levers + "levers.");
console.log("Me:" + choice);
console.log("Stranger: I don't know! But make your choice fast, i saw at least" + zombiecount + "zombies heafed right for us!!!");
console.log("Me: How long until they get here?");
console.log("Stranger: At least" + timebeforeattack + "seconds!!");
console.log("I need to decide, fast!");
console.log("...");
console.log("....");
console.log("Me:" + leverflipped + "Ok ok ok! I flipped a lever, the" + thelevers[2] + "." + "\n");
console.log("The door is open.");