// hoisting
console.log(getRandomInt(4, 8));

//Javascript: functions as first-class citizens

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}//no semicolon because it is a function


//anonymous function:
const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};//semicolon here because it is a declaration

//arrow function:
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};//semicolon here because it is a declaration


//Javascript: functions as first-class citizens, picked back up

//this is a callback function
                                // string, function reference
function genericActionPerformer(name, action) {
    return action(name)
}

// task: eat, Valdemar
// create a callback function called eationgAction
// and use the genericActionPerformer to
// console.log Valdemar is eating
const eatName = "Valdemar";

function eatingAction(name){
return `${name} is eating`;
}

console.log(genericActionPerformer(eatName, eatingAction))

// task: run, Sidi
// declare an anonymous function called runningAction
// make it return "Sidi is running"
// console.log it

const runningAction = function(name) {
    return `${name} is running`;
};

console.log(genericActionPerformer('Sidi', runningAction))

// task: extra challenge
// in a single line below write
// Kristian is laughing

console.log(genericActionPerformer(`Kristian`, (name) => `${name} is laughing`))