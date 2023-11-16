/*
coding challenge #1

Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).

1. store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even imprlement both versions)
3. create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.92 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.


*/

// test data 1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.92;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// // test data 2
// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnHeight2 = 1.76;
// let johnWeight2 = 85;

// markBMI2 = markWeight2 / markHeight2 ** 2;
// johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// markHigherBMI = markBMI2 > johnBMI2;
// console.log(markBMI2, johnBMI2);
// console.log(markHigherBMI);

// test data 1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.92;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark 💪 at ${markBMI} has a higher BMI than John`);
// } else {
//     console.log(`John 💪 at ${johnBMI} has a higher BMI than Mark`);
// }

// // test data 2
// let markWeight2 = 95;
// let markHeight2 = 1.88;
// let johnHeight2 = 1.76;
// let johnWeight2 = 85;

// markBMI2 = markWeight2 / markHeight2 ** 2;
// johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// markHigherBMI = markBMI2 > johnBMI2;
// console.log(markBMI2, johnBMI2);
// console.log(markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark at 💪 ${markBMI2} has a higher BMI than John`);
// } else {
//     console.log(`John at 💪 ${johnBMI2}has a higher BMI than Mark`);
// }

// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// // 5 falsy values: 0, '', undefined, null, NaN

// let n = '1' + 1; 
// n = n -1;
// console.log(n); 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Abdi'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let height;
// if (height) {
//     console.log('Height is defined');}
// else {  
//     console.log('Height is not defined');
// }

// const age = '18';
// if (age === 18) 
//     console.log('Age is defined(strict)');
// if (age == 18)
//     console.log('Age is not defined(loose)');


// const userName = prompt('What is your name?');
// console.log(userName);

// if (userName === 'Abdi') {
//     console.log('Welcome to my website');
// }else {
// console.log('OOps, you are not welcome here');
// }

// const userAge = Number(prompt('What is your age?'));
// console.log(userAge);

// if (userAge >= 18) {
//     console.log('You are old enough to vote');
// }
// else {
//     console.log('You are not old enough to vote');
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision); 
// console.log(hasDriversLicense || hasGoodVision); 
// console.log(!hasDriversLicense && hasGoodVision); 

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log('You should drive');
// } else 
// {
//     console.log('You should not drive');
// }

// const dolphinScoreOne = 96;
// const dolphinScoreTwo = 108;
// const dolphinScoreThree = 89;
// const koalasScoreOne = 88;
// const koalasScoreTwo = 91;
// const koalasScoreThree = 110;

// averageDolphinScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// averagekoalasScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

// let competitionWinner;

// if ((averageDolphinScore > averagekoalasScore) && (averageDolphinScore >= 100)) {
// competitionWinner = 'Team Dolphin';
// } else if ((averagekoalasScore > averageDolphinScore) && (averagekoalasScore >= 100)){
// competitionWinner = 'Team Koalas';
// } else if ((averagekoalasScore === averageDolphinScore) && (averagekoalasScore >= 100) && (averageDolphinScore >= 100)) {
//     competitionWinner = 'It\'s a draw';
// } else {
//     competitionWinner = 'neither';
// }

// console.log(`Average dolphin score is ${averageDolphinScore} and average koalas score is ${averagekoalasScore}`);
// console.log(`The competition winner is ${competitionWinner} 🏆`);

// const dolphinScoreOne = 97;
// const dolphinScoreTwo = 112;
// const dolphinScoreThree = 101;
// const koalasScoreOne = 109;
// const koalasScoreTwo = 95;
// const koalasScoreThree = 123;

// averageDolphinScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// averagekoalasScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

// let competitionWinner;

// if ((averageDolphinScore > averagekoalasScore) && (averageDolphinScore >= 100)) {
// competitionWinner = 'Team Dolphin';
// } else if ((averagekoalasScore > averageDolphinScore) && (averagekoalasScore >= 100)){
// competitionWinner = 'Team Koalas';
// } else if ((averagekoalasScore === averageDolphinScore) && (averagekoalasScore >= 100) && (averageDolphinScore >= 100)) {
//     competitionWinner = 'It\'s a draw';
// } else {
//     competitionWinner = 'neither';
// }

// console.log(`Average dolphin score is ${averageDolphinScore} and average koalas score is ${averagekoalasScore}`);
// console.log(`The competition winner is ${competitionWinner} 🏆`);

// const dolphinScoreOne = 96;
// const dolphinScoreTwo = 108;
// const dolphinScoreThree = 89;
// const koalasScoreOne = 109;
// const koalasScoreTwo = 95;
// const koalasScoreThree = 106;

// averageDolphinScore = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// averagekoalasScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

// let competitionWinner;

// if ((averageDolphinScore > averagekoalasScore) && (averageDolphinScore >= 100)) {
// competitionWinner = 'Team Dolphin';
// } else if ((averagekoalasScore > averageDolphinScore) && (averagekoalasScore >= 100)){
// competitionWinner = 'Team Koalas';
// } else if ((averagekoalasScore === averageDolphinScore) && (averagekoalasScore >= 100) && (averageDolphinScore >= 100)) {
//     competitionWinner = 'It\'s a draw';
// } else {
//     competitionWinner = 'neither';
// }

// console.log(`Average dolphin score is ${averageDolphinScore} and average koalas score is ${averagekoalasScore}`);
// console.log(`The competition winner is ${competitionWinner} 🏆`);

// const day = "monday";

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednsday':
//     case 'thursday':
//         console.log('write code example');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('ENjoy the Weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// const day = 'wednsday'

// if (day === 'monday')
// {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday')
// {
//     console.log('Prepare theory videos');
// } else if (day === 'wednsday' || day === 'thursday')
// {
//     console.log('write code example');
// } else if (day === 'saturday' || day === 'sunday')
// {
//     console.log('Enjoy the Weekend');
// } else
// {
//     console.log('Not a valid day!');
// }

// if (23 > 10)

// {
//     const str = '23 is bigger';
// }

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine'):
// // console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I Like to drink ${age >= 18 ? 'Beer': 'Water'}`)

// billValue  >= 50 && billValue <= 300 then tip = 15%
// else tip = 20%
// The bill was [], the tip was [], and the total value [].
// Test for bill values 275, 40 and 430

// const billValueOne = 275;
// const billValueTwo = 40;
// const billValueThree = 430;
// let tip;

// console.log(`One - The bill was ${billValueOne}, the tip was ${tip = billValueOne >= 50 && billValueOne <= 300 ? ((15 * billValueOne)/100) : ((20 * billValueOne)/100)}, and the total value ${ billValueOne + tip}.`);
// console.log(`Two - The bill was ${billValueTwo}, the tip was ${tip = billValueTwo >= 50 && billValueTwo <= 300 ? ((15 * billValueTwo)/100) : ((20 * billValueTwo)/100)}, and the total value ${ billValueTwo + tip}.`);
// console.log(`Three - The bill was ${billValueThree}, the tip was ${tip = billValueThree >= 50 && billValueThree <= 300 ? ((15 * billValueThree)/100) : ((20 * billValueThree)/100)}, and the total value ${ billValueThree + tip}.`);

// ecmaScript 
// transpile and polfill -> to convert code back to ES5 using BABEL