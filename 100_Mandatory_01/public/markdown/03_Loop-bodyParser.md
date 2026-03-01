2/12/2026
## Nodemon
From now on we run the server with this:
Nodemon <filename>

## Express Body parser
Body parser:
To make the API understand our data objects, we use a bodyparser, that comes with express.
to use it, we need to import it:
app.use(express.json());


## Loop Methods:
#### Rules:
 1. use loop methods whenever possible
 2. Only use for loops in JavaScript for finger counting
 3. use map over forEach if you need the data afterwards

there’s different methods for iteration over arrays in javascript:
`// .forEach, .map, .filter, .reduce, .sort, .find, .indexOf`


example of .map method being used:
`
const balloonAnimalsDifficultyAdjusted = baloonAnimals.map((balloonAnimal) =>{
    if (balloonAnimal.type !== 'Koala'){
        balloonAnimal.difficulty = 3.0;
    }
    return balloonAnimal;
});
`

ternary statement:
`
condition ? if true : if false
`
spread operator: `...`
takes something grouped together and “spreads” it out into individual pieces.


example of tenary and spread operator used to refactor the above code:
`
const balloonAnimalsDifficultyAdjustedOneliner = baloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimal.type !== 'Koala' ? 3.0 : balloonAnimal.difficulty,
    ...balloonAnimal
}));
`


## XSS:
when manipulation HTML through the DOM, we want vulnerabilities, in the events of “Cross site scripting”.

that can happen when we expose .innerHTML in the javascript. If we really want to use .innerHTML, we would need to sanitize it first:
That can be achieved with a sanitation function like this
   `
   function sanitizeXSS(string) {
            return string
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#39;')
                .replaceAll('`', '&#x60;')
                .replaceAll('/', '&#x2F;');
        }
`