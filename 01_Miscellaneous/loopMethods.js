// Loop methods
// .forEach, .map, .filter, .reduce, .sort, .find, .indexOf

//Rules specifically for JavaScript, not neccesarilly other programming languanges

//Rule 1: use loop methods whenever possible
//Rule 3: Only use for loops in JavaScript for finger counting
//Rule 2: use map over forEach if you need the data afterwards

const numbers = [1, 2, 3, 4, 5];

// double the numebers

// .map maps 1:1 to a new array
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers);

//task: Make all the difficulty levels for the balloon animals 3.0 except koala

const baloonAnimals = [
  { type: "Koala", difficulty: 5.1 },
  { type: "Dog", difficulty: 2.5 },
  { type: "Giraffe", difficulty: 1.5 },
];

// this might not be a good solution, if we would need the data of the original array later:
/*
baloonAnimals.forEach((animal) => {
  if (animal.type !== 'Koala') {
    animal.difficulty = 3.0;
  }
      return animal
});

console.log(baloonAnimals);
*/

const balloonAnimalsDifficultyAdjusted = baloonAnimals.map((balloonAnimal) =>{
    if (balloonAnimal.type !== 'Koala'){
        balloonAnimal.difficulty = 3.0;
    }
    return balloonAnimal;
});

console.log(balloonAnimalsDifficultyAdjusted)


//This method in a onliner:
//ternary statement
//condition ? if true : if false
// ... spread operator


const balloonAnimalsDifficultyAdjustedOneliner = baloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimal.type !== 'Koala' ? 3.0 : balloonAnimal.difficulty,
    ...balloonAnimal
}));

console.log(balloonAnimalsDifficultyAdjustedOneliner);
