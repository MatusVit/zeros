module.exports = function zeros(expression) {
  // your solution
  const array = expression.split('*');

  // function ! pair 2 and 5
  function countFact(number) {
    let multip2 = 0;
    let multip5 = 0;

    let i = 1;
    while (2 ** i <= number) {
      multip2 += Math.floor(number / 2**i);
      i++;
    }

    i = 1;
    while (5 ** i <= number) {
      multip5 += Math.floor(number / 5**i);
      i++;
    }
    return { pears2: multip2, pears5: multip5, }
  }


  // function !! pair 2 and 5
  function countDoubleFact(number) {
    let multip2 = 0;
    let multip5 = 0;

    if (number % 2 == 0) {

      let i = 1;
      while (2 ** i <= number) {
        multip2 += Math.floor(number / 2**i);
        i++;
      }

      i = 1;
      while (5**i*2 <= number) {
        multip5 += Math.floor(number / (5**i*2));
        i++;
      }
    }

    if (number % 2 != 0) {

      let i = 1;
      while (5 ** i <= number) {
        multip5 += Math.round(number / (5**i*2));
        i++;
      }

    }


    return { pears2: multip2, pears5: multip5, }
  }


  // sum 2 and 5 count for each
  let sum2 = 0;
  let sum5 = 0;
  
  array.forEach(element => {
    let pearObj = '';
    if (element.endsWith('!!')){
      pearObj = countDoubleFact(element.slice(0, -2));
    }
    else if (element.endsWith('!')){
      pearObj = countFact(element.slice(0, -1));
    }
    
    sum2 += pearObj.pears2;
    sum5 += pearObj.pears5;
  });

  // return min multiplicity 5 or 2 
  return sum5 < sum2 ? sum5 : sum2;
}