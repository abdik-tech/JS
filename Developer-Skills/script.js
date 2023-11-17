// 'use strict';

// const x = 23;
// const calcAge = birthYear => 2023 - birthYear;

//
// make for loop that spans the length of the array
// compare and store the highest temp
// compare and store the lowest temp
// remove index with 'error'

// function tempAmplitude(temprature) {
//   {
//     let highestTemp = tempratures[0];
//     let lowestTemp = tempratures[1];
//     if (lowestTemp < highestTemp) {
//       lowestTemp = tempratures[1];
//       highestTemp = tempratures[0];
//     }
//   }
//   console.log(lowestTemp, highestTemp);
//   for (let i = 2; i < tempratures.length; i++) {
//     if (tempratures[i] < lowestTemp) {
//       lowestTemp = tempratures[i];
//     } else if (tempratures[i] > highestTemp) {
//       highestTemp = tempratures[i];
//     }
//   }
//   return highestTemp - lowestTemp;
// }

// console.log(tempAmplitude());

//   lowestTemp = tempratures[0];
//   highestTemp = tempratures[i];
/**
 * const calcTempAmplitude = function (temps){
 * for (let j =0;j <tempreaturesOne.length; j++){
 *  tempratures.push(tempraturesOne[i]);
 * }
 * let max = temps[0];
 * let min = temps[1];
 * for(i=0;i<tempratures.length;i++){
 *       const curTemp = temps[i];
 *       if(typeof tempratures[i] !== 'numbers') continue;
 * if (curTemp > max) max = curTemp;
 * if (curTemp < min) min = curTemp;
 * }
 * console.log(max,min);
 *};
 */

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C)Fix
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };
//   // B)Find
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A)Identify Bug
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.lenght; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const TempAmplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// console.log(TempAmplitudeBug);
let tempForc = [];
maxTempOne = [17, 21, 23];
maxTempTwo = [12, 5, -5, 0, 4];
function printForcast(arr) {
  for (let i = 0; i < arr.length; i++) {
    // tempForc.push(`...${arr[i]} in ${i + 1} days`);
    tempForc += `...${arr[i]} in ${i + 1} days`;
  }
  return String(tempForc);
}
console.log(printForcast(maxTempOne));
console.log(printForcast(maxTempTwo));
