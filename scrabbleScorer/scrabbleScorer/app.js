const input = require("readline-sync");
//original scoring structure to be converted with transform func.
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
}
let newPointStructure = {};
//initlalPrompt function asks for menu selection
function initialPrompt() {
    for (i = 0; i < 3; i++) {
        let initialResponse = Number(input.question("Welcome to the Scrabble score calculator!\n\nWhich scoring algorithm would you like to use?\n\n0 - Scrabble: The traditional scoring algorithm.\n1 - Simple Score: Each letter is worth 1 point.\n2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.\n\nEnter 0, 1, or 2: "));
        //if input valid send the input to next block of code.
        if (initialResponse === 0 || initialResponse === 1 || initialResponse === 2) {
            return initialResponse

        }
        //else if input is invalid, then provide error message with remaining attempts displayed.
        else {
            console.log(`Error: The input provided is invalid. You ${2 - [i]} attempts remaining.`)
            input.question('')
            console.clear();
        }
    }
    //after three attempts without valid input terminates application
    process.exit();
}
//secondPrompt function asks for word to be scored
function secondPrompt() {
    let inputToScore = input.question("\nEnter a word to be scored, or 'Stop' to quit: ");
    return inputToScore.toLowerCase();
}
//transform the old object into a new object
function transform(object) {
    for (item in object) {
        for (let i = 0; i < object[item].length; i++) {
            newPointStructure[(object[item][i]).toLowerCase()] = Number(item);
        }
    }
}
//3 different scoring functions for assigning point
//Uses object to determine the scrabble score
let scoringAlgorithms = [{ 
    name: "Scrabble",
    description: "The traditional scoring algorithm",
    scoreFunction: function (word) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += Number(newPointStructure[word[i]]);
        }
        return score
    }
}, {
    //Uses the newPointStructure object to determine simple score
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoreFunction: function (word) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += 1
        }
        return score
    }
    }, {
    //Uses the newPointStructure object to determine bonus vowel score
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoreFunction: function (word) {
        let bonus = ['a', 'e', 'i', 'o', 'u'];
        let score = 0
        for (let i = 0; i < word.length; i++) {
            if (bonus.includes(word[i])) {
                score += 3
            }
            else {
                score += 1
            }
        }
        return score
    }
}];
//Create a the program here>>
function runProgram() {
    for (let x = 0; x < 3; x++) {
        let i = initialPrompt()
        switch (i) {
            case i:
                console.log("\nUsing Algorithm: ", scoringAlgorithms[i].name);
                while (true) {
                    var inputScore = secondPrompt();
                    if (inputScore != "stop") {
                        console.log(`Score for '${inputScore}' :`, scoringAlgorithms[i].scoreFunction(inputScore));
                    }
                    else {
                        console.clear();
                        input.question("Press any key to continue...");
                        console.clear();
                        break;
                    }
                }
        }
    }
}
//runs program
transform(oldPointStructure);
runProgram();



