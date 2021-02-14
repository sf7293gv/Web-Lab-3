let requiredAge = 30;
let requiredCitizenTime = 9;

let age = 40;
let citizenTime = 9;

let state = "MINNESOTA";
let stateToBeaSenatorIn = "minnesota";

if (age >= requiredAge && citizenTime >= requiredCitizenTime && state.toUpperCase() === stateToBeaSenatorIn.toUpperCase()) {
    console.log("You are eligible");
} else {
    console.log("You are not eligible");
}