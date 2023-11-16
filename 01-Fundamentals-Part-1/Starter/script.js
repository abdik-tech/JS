// let firstName = "Abdi";
// let lastName = "Kitesa";
// console.log(firstName, lastName);

// let JavaScriptIsFun = true;
// console.log(typeof JavaScriptIsFun);

// let firstName = "Abdi";
// console.log(typeof firstName);

// let year;

// console.log(typeof year);
// year = 2020;

// console.log(typeof year);

// const birthYear = 1990;
// console.log(birthYear);
// const now = 2023;
// const ageAbdi = now - 1992;
// const ageKhan = now - 1991;
// console.log(ageAbdi, ageKhan);
// console.log(ageKhan * ageAbdi);
// // exponentiation
// console.log(ageKhan ** ageAbdi);
// // concatination
// console.log('ageKhan' + ' ' + 'ageAbdi');
// // assignment Operators
// let x = 10;
// x += 10;
// console.log(x);
// // comparison Operators
// console.log(ageAbdi === ageKhan);

// const firstName = 'Abdi';
// const job = 'Developer';
// const birthYear = 1992;
// const year = 2023;

// const abdi = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
// console.log(abdi);

// // backticks
// const abdiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`
// console.log(abdiNew);

// control Structure
const age = 2;
const isOldEnough = age >= 18;
const yearLeft = 18 - age;
if (isOldEnough) {
    console.log(`Horay!Horay! Old Enough to Drive 🚗`)
} else {
    console.log(`Grow! there still remains ${yearLeft} year/s left for you to qualify.👆`)
}

const birthYear = 1992;
let century

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Born in the ${century}th century!`);