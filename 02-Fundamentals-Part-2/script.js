// strict mode helps us avoid accidental bugs
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can Drive');

// const interface = 'Audio';
// const private = 500;

// function logger () {
//     console.log('My name is Abdi');
// }

// // calling /running/ invoking function
// logger();

// // functions are like machines take in something -> process it -> give an output

// function fruitProcessor(apples, oranges){
// console.log(apples, oranges);
// const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleJuice);

// function declaration

// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// const age1 = calcAge1(1992);
// console.log(age1);

// // **function expression**

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear
// }

// const age2 = calcAge2(1992);

// console.log(age2);

// const calcAge2 = function (birthYear) {
//         return 2023 - birthYear
//     }
//  Arrow function

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {

//    return `${firstName} retires in ${60 - (2023 - birthYear)} Years.`;
// }

// console.log(yearUntilRetirement(1992, "Abdi"));
// console.log(yearUntilRetirement(1993, "Nehemiah"));
// console.log(yearUntilRetirement(1995, "Sisay"));
// console.log(yearUntilRetirement(1987, "Tekea"));
// console.log(yearUntilRetirement(1988, "Misrak"));

// machine that cuts the fruits into multiple pieces

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// // functions are like machines take in something -> process it -> give an output

// function fruitProcessor(apples, oranges){

//    const applePieces = cutFruitPieces(apples);
//    const orangesPieces = cutFruitPieces(oranges);
// const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} orange pieces.`;
// return juice;
// }

// console.log(fruitProcessor(2,3));

// a function that calculates the age
// const calcAge = birthYear => 2023 -birthYear;

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;
//     let retStatement;
//     if (retirement <= 0){
//          retStatement = `Already retired`
//     }else
//     {
//         retStatement = `${firstName} retires in ${retirement} Years.`
//     }

//    return retStatement;
// }

// console.log(yearUntilRetirement(1992, "Abdi"));
// console.log(yearUntilRetirement(1993, "Nehemiah"));
// console.log(yearUntilRetirement(1995, "Sisay"));
// console.log(yearUntilRetirement(1987, "Tekea"));
// console.log(yearUntilRetirement(1988, "Misrak"));
// console.log(yearUntilRetirement(1958, "Akmel"));

// **it is better to return a number over anything else**

// const calcAge = birthYear => 2023 -birthYear;

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 60 -age;
//     if (retirement > 0)
//     {
//         console.log(`${firstName} retires in ${retirement} Years.`)
//         return retirement;
//     }else 
//     {
//         console.log(`${firstName} has already retired`)
//         return -1;
//     }
// }
// console.log(yearUntilRetirement(1992, "Abdi"));
// console.log(yearUntilRetirement(1993, "Nehemiah"));
// console.log(yearUntilRetirement(1995, "Sisay"));
// console.log(yearUntilRetirement(1987, "Tekea"));
// console.log(yearUntilRetirement(1988, "Misrak"));
// console.log(yearUntilRetirement(1958, "Akmel"));

// function summary 1 - function declaration
//                  2 - function expression
//                  3 - arrow function

// function coding challenge
// 2 - teams
// 3 - competitions
// 1 - average score
// winning team - 2x of the opponent team

//      const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//         return (scoreOne+scoreTwo+scoreThree)/3;
//     }

//     let avgDolphins =  calcAverage(85,54,41);
//     let avgKoalas = calcAverage(23,34,27);
    
// const checkWinner = (avgDolphins, avgKoalas) => {
   
//     if(avgDolphins >= avgKoalas * 2 )
//     {  
//         console.log(`Team Dolphin wins ${avgDolphins} vs. ${avgKoalas}`);
//     }else if(avgKoalas >= avgDolphins * 2){
//         console.log(`Team Koala wins ${avgKoalas} vs. ${avgDolphins}`);
//     }else{
//         console.log(`No team wins`);
//     }
    
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// // test data 2
//  avgDolphins =  calcAverage(44,23,71);
//  avgKoalas = calcAverage(65,54,49);

//  console.log(checkWinner(avgDolphins, avgKoalas)); 

// Data Structure

// literal syntax
// const friends = ['Thomas','Nehemiah','Alemseged'];
// console.log(friends);

// // alternatively

// const years = new Array(1992, 1967, 1956, 2020);
// console.log(years[2]);
// console.log(friends[friends.length - 1]);

// // array is not a primitive data type

// friends[1] = 'Amanuel';
// console.log(friends[1]);

// Exercise

// const calcAge = function (birthYear){
//     return 2023 - birthYear;
// }

// const years = [1992, 1967, 1956, 2020];

// let i;

// for (i=0 ;i<years.length-1;i++)
// {
//     console.log(calcAge(years[i]));
// }

// // Add elements

// const friends = ['Thomas','Nehemiah','Alemseged'];
// friends.push('Amanuel');
// console.log(friends)
// friends.unshift('Dagi');
// console.log(friends);

// // Remove elements

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(friends);
// console.log(friends);

// console.log(friends.indexOf('Thomas'));

// if(friends.includes('Nehemiah')){
//     console.log('You have a friend called Nehemiah');
// }

// bill >=50 && bill <=300 tips = bill * 0.15
// else tip = bill * 0.2
// const tips = new Array();
// const total = new Array();
// let i;
// const calcTip = (bill) => 
// {if(bill <= 50 && bill <= 300){
//    return bill * 0.15;
// } else {
//     return bill * 0.2
// };}

// const bills = new Array(125, 555, 44);
// for (i = 0; i <= bills.length - 1; i++){
//     tips[i] = calcTip(bills[i]);

//     total[i] = (bills[i] + calcTip(bills[i]));

// }

// console.log(bills,tips,total);

// * use Array for an ordered data and Objects for datas to be retrieved using their name.

// const abdi = {
//     firstName: 'Abdi',
//     lastName: 'Kitessa',
//     dob: 1992,
//     job: 'Software Engineer',
//     friends: ['Thomas','Nehemiah','Alemseged']
// };

// console.log(abdi.friends[0]);
// const nameKey = 'Name';
// console.log(abdi['first' + nameKey]);
// console.log(abdi['last' + nameKey]);

// const interestedIN = prompt('choose firstName, lastName, Job or dob about Abdi');


// if(abdi[interestedIN]){
//     console.log(abdi[interestedIN]);
// }else{
//     console.log('wrong request! Choose between firstName, lastName, Job or dob about Abdi')
// }

// abdi['twitter'] = '@abdikitesa-tech';
// console.log(abdi);

// // challenge
// console.log(`${abdi['firstName']} has ${abdi.friends.length} friends, and his best friend is called ${abdi.friends[0]}`);

//  ***a function attached to an object is called a method***


// const abdi = {
//     firstName: 'Abdi',
//     lastName: 'Kitessa',
//     dob: 1992,
//     job: 'Software Engineer',
//     friends: ['Thomas','Nehemiah','Alemseged'],
//     // calcAge: function (dob) {
//     //     2023 - dob;
//     // },
//     calcAge: function (){
//         this.age = 2023 - this.dob;
//         return this.age;
//     },
//     hasDriversLicense: true,
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a':'no'} driver's license`;
//     }
// };

// console.log(abdi.calcAge()); 
// console.log(abdi.age);

// // challenge

// // 
// console.log(abdi.getSummary());

// BMI = mass / height ** 2

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     markBMI: function(){
//             return this.mass / this.height ** 2;
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     johnBMI: function(){
//             return this.mass / this.height ** 2;
//     }
// };

// // console.log(`${markBMI>johnBMI ? 'Mark BMI' ${mark.markBMI} 'is higher than John' ${john.johnBMI} '!':'John BMI' (${john.johnBMI}) 'is higher than Mark' ${john.markBMI}!}`);
// console.log(mark.markBMI()>john.johnBMI() ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.markBMI()}) is higher than ${john.firstName} ${john.lastName}'s (${john.johnBMI()})!` : `${john.firstName} ${john.lastName}'s BMI (${john.johnBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.markBMI()})`);


// for (let i = 1; i <= 10; i++){
//     console.log(`Lifting weights repitition ${i}`);
// }
// const types = [];
// const abdiArray = [
//     'Abdi',
//     'Kitesa',
//     1992,
//     'Software Engineer',
// ['Thomas','Alemseged','Nehemiah','Amanuel']

// ];

// for (let i=0; i <abdiArray.length;i++){
//     // console.log(abdiArray[i]);
//     // types[i] = typeof abdiArray[i];
//     // console.log(types[i]);
//     // **to do it a little bit cleaner**
//     types.push(typeof abdiArray[i]);
// }
// console.log(abdiArray,types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(years, ages);

// for (let i=0; i < abdiArray.length; i++){
//     if(typeof abdiArray[i] !== 'string')
//     continue;
//     console.log(typeof abdiArray[i], abdiArray[i]);
// }

// for (let i=0; i < abdiArray.length; i++){
//     if(typeof abdiArray[i] === 'number') break;
//     console.log(typeof abdiArray[i], abdiArray[i]);
// }

// const abdiArray = [
//     'Abdi',
//     'Kitesa',
//     1992,
//     'Software Engineer',
// ['Thomas','Alemseged','Nehemiah','Amanuel']

// ];

// // backward loop

// for (let i = abdiArray.length - 1; i >= 0; i--){
//     console.log(i, abdiArray[i]);
// }

// for(let i = 1; i < 4; i++){
//     console.log(`---starting exercise ${i}`);
//     for (let j = 1; j < 6; j++){
//         console.log(`Lifting weight repitition ${j}`);
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while(dice !== 6){
// console.log(`You rolled a ${dice}`);
// dice = Math.trunc(Math.random() * 6) + 1;
// }

// coding challenge #4

const bills = new Array(22,395,176,440,37,105,10,1100,86,52);
const tips = [];
const totals = [];
let sum = 0;
let average = 0;
const calcTip = function(bill){
    {
        if(bill >= 50 && bill <= 300){
            return bill * 0.15;
        } else {
            return bill * 0.2;
        }
    }
}; 

for(let i=0;i < bills.length;i++){
    const tip = calcTip(bills[i])  
    tips.push(tip);
    totals.push(tip+bills[i]);
}

function calcAverage(arr){
    for (let i = 0; i < bills.length; i++){
        sum = sum + bills[i];
    }
    return sum/bills.length;
};

console.log(bills,tips,totals);
console.log(calcAverage(bills));
console.log(calcAverage(totals));