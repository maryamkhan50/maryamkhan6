//exersice 4.1
//a variable with a Boolean value
let myVariable = true;

//Output the value of the variable
console.log("Value of myVariable:", myVariable);

//Check if the variable is true and output a message
if (myVariable) {
    console.log("myVariable is true.");
}
if (!myVariable) {
    console.log("myVariable is not true.");
} else {
    console.log("myVariable is true with else statement.");
}

//Change the variable to the opposite value
myVariable = false;

// Check again with the opposite value
if (myVariable) {
    console.log("myVariable is true.");
}

if (!myVariable) {
    console.log("myVariable is not true.");
} else {
    console.log("myVariable is true with else statement.");
}
//exersice 4.2
//Prompt the user for their age
const userAgeInput = prompt("Please enter your age:");

//Convert the response from the prompt to a number
const userAge = parseInt(userAgeInput);

//Declare a message variable to hold the console message
let message;

//Check if age is equal to or greater than 21
if (userAge >= 21) {
    message = "You are confirmed for entry to the venue and can purchase alcohol.";
}
//Check if age is equal to or greater than 19
else if (userAge >= 19) {
    message = "You are confirmed for entry to the venue but cannot purchase alcohol.";
}
//Default to deny entry if none of the conditions are met
else {
    message = "Sorry, you are denied entry to the venue.";
}
//Output the response message to the console
console.log(message);

//exersice 4.3
//Create a Boolean value for an ID variable
let isIDValid = true; 
//Use a ternary operator to create a message variable
let message2 = isIDValid ? "You are allowed into the venue." : "You are not allowed into the venue.";
//Output the response to the console
console.log(message2);

//exersice 4.4
//Generate a random number between 0 and 5
const randomNumber = Math.floor(Math.random() * 6);

//Prompt the user for a question
const userQuestion = prompt("Ask me a question:");

//Create 6 responses using a switch statement
let response;

switch (randomNumber) {
    case 0:
        response = "Yes, definitely.";
        break;
    case 1:
        response = "It is likely.";
        break;
    case 2:
        response = "I'm not sure, try again.";
        break;
    case 3:
        response = "Don't count on it.";
        break;
    case 4:
        response = "No, definitely not.";
        break;
    case 5:
        response = "Ask again later.";
        break;
    default:
        response = "I don't have an answer right now.";
        break;
}

//Create the final response
const finalResponse = `You asked: "${userQuestion}"\nMy response: "${response}"`;

//Output the user's question and the response to the console
console.log(finalResponse);

//exersice 4.5
//Prompt the user to select a number between 0 and 10
const prizeInput = prompt("Select a number between 0 and 10 to win a prize:");

//Convert the prompt response to a number data type
const selectedNumber = parseInt(prizeInput);

//Create a variable for the output message
const outputMessage = "My Selection: ";

//Use a switch statement to provide a response based on the selected number
let prize;

switch (selectedNumber) {
    case 0:
        prize = "You win a shiny new car!";
        break;
    case 1:
        prize = "Congratulations! You've won a tropical vacation!";
        break;
    case 2:
        prize = "You get a lifetime supply of chocolate!";
        break;
    case 3:
        prize = "You win a big-screen TV!";
        break;
    case 4:
        prize = "You've won a $1000 shopping spree!";
        break;
    case 5:
        prize = "Enjoy your new smartphone!";
        break;
    case 6:
        prize = "You get a fancy dinner for two at a top restaurant!";
        break;
    case 7:
        prize = "You win a weekend getaway at a luxury resort!";
        break;
    case 8:
        prize = "Congratulations! You've won a year's supply of coffee!";
        break;
    case 9:
        prize = "You've won a spa day for ultimate relaxation!";
        break;
    case 10:
        prize = "You get a gift card worth $500!";
        break;
    default:
        prize = "Sorry, no prize for that selection.";
        break;
}

//Combine the output message and prize strings
const fullMessage = outputMessage + prize;

//Output the message to the user
console.log(fullMessage);

//chapter project
//Evaluating a number game
//Define a dynamic number value (you can change this value as needed)
const dynamicNumber = 50;

//Prompt the user to enter a number
const userNumberInput = prompt("Enter a number:");

//Convert the user's input to a number
const userNumber = parseFloat(userNumberInput);

//Check and compare the user's number with the dynamic number
if (userNumber > dynamicNumber) {
    console.log(`Your number (${userNumber}) is greater than the dynamic number (${dynamicNumber}).`);
} else if (userNumber < dynamicNumber) {
    console.log(`Your number (${userNumber}) is less than the dynamic number (${dynamicNumber}).`);
} else {
    console.log(`Your number (${userNumber}) is equal to the dynamic number (${dynamicNumber}).`);
}
//Evaluating a number game
//Prompt the user to enter a name
const userName = prompt("Please enter your name:");

//Use a switch statement to check if the name is known
let resPonse;

switch (userName) {
    case "Dania":
    case "wasifa":
    case "Noman":
        resPonse = "You are a friend!";
        break;
    default:
        resPonse = "I don't know you.";
        break;
}

//Output the result to the console
console.log(resPonse);
//Rock Paper Scissors game
// Step 1: Create an array with Rock, Paper, and Scissors
const options = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random selections for the player and computer
const playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
const computerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2

// Step 3: Create a variable to hold the response message
let responseMessage = "";

// Step 4: Check for a tie (both player and computer select the same)
if (playerIndex === computerIndex) {
    responseMessage = "It's a tie!";
} else {
    // Step 5: Apply game logic for other cases
    if (
        (playerIndex === 0 && computerIndex === 2) ||
        (playerIndex === 1 && computerIndex === 0) ||
        (playerIndex === 2 && computerIndex === 1)
    ) {
        responseMessage = "You win!";
    } else {
        responseMessage = "Computer wins!";
    }
}

// Step 6: Output the game result message
console.log(`Player: ${options[playerIndex]} vs. Computer: ${options[computerIndex]}`);
console.log(responseMessage);

