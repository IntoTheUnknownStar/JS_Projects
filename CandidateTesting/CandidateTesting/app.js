//candidate questions with correct answers and grade
//Import readline-sync below:
const input = require('readline-sync');

//Declared variables and arrays
let name = ("");
let question = ['\n\n1) True or false: 5000 meters = 5 kilometers.]', '\n\n2) (5 + 3)/2 * 10 = ?', '\n\n3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', '\n\n4) Who was the first American woman in space?', '\n\n5) What is the minimum crew size for the International Space Station (ISS)?'];
let answer = ["true", "40", "trajectory", "sally ride", "3"]
let responseKey = [];
let correct = 0;

//Retrieves candidate name
name = input.question("Candidate Name: ");

//Initializes series of candidate questions
for (let i = 0; i < question.length; i++) {
    console.log(question[i]);
    let response = input.question("Your Answer: ")
    responseKey.push(response.toLowerCase());
    console.log("Correct Answer: ", answer[i]);

    //counts correct answers and stores into variable, "correct"
    if (responseKey[i] === answer[i]) {
        correct++
    }
}
//Grade Calculation
let score = (correct / answer.length) * 100;
//Response descision determined by Grade
if (score < 80) {
    //Fail response
    console.log(`\n\n>>> Overall Grade: ${score}% (${correct} of ${answer.length} responses correct) <<<\n>>> Status: Failed <<<`);
}
else {
    //Pass response
    console.log(`\n\n>>> Overall Grade:${score}% (${correct} of ${answer.length}`)
}
