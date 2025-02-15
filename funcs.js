function isFive(num) {
  if (num !== 5) {
    return false;
  }

  return true;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw new Error ("Not a number!")
  }
  
  if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function myRange(min, max, step = 1) {
  let arr = [];


  if (min < max){
  
    for (i = min; i <= max; i += step) {
    arr.push(i);
  }
}

  return arr;
}


module.exports = { isFive, isOdd, myRange };