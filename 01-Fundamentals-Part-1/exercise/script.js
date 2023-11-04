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
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.92;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// test data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnHeight2 = 1.76;
let johnWeight2 = 85;

markBMI2 = markWeight2 / markHeight2 ** 2;
johnBMI2 = johnWeight2 / johnHeight2 ** 2;

markHigherBMI = markBMI2 > johnBMI2;

console.log(markHigherBMI);