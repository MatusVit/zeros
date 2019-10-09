// module.exports = function zeros(expression) {
//   // your solution
// }


function zeros(expression) {
  // your solution
  


}

function countZeroFact (number) {
  
  let sumZeros = 0;

  if(number > 4) sumZeros += Math.floor(number/5);
  if(number > 24) sumZeros += Math.floor(number/25);
  if(number > 124) sumZeros += Math.floor(number/125);

  return sumZeros;  
} 



let step = 0;
function countZeroDoubFact (number) {
  console.log("Вызов начало SETP- " + ++step + ", number - " + number);
  
  let sumZeros = 0;

  if(number != 0) {
    // sumZeros = countZeroFact(number) - countZeroDoubFact(number - 1); 
    sumZeros = countZeroFact(number) - countZeroDoubFact(number - 1); 



    console.log("выход STEP- " + step-- + ", sumZeros - " + sumZeros);
  }
  return sumZeros;  
} 

// let testStr = '100';
// console.log("рузультат ! = " + countZeroFact (testStr));


 let testStr2 = '22';
console.log("рузультат !! = " + countZeroDoubFact (testStr2));
 

















// testStr = '';
// console.log("рузультат = " + zeros (testStr));
 