// Generated by CoffeeScript 2.0.1
var odd;

odd = function(num) {
  if (typeof num === 'number') {
    // body... typeof num is 'number'
    if (num === Math.round(num)) {
      // body...
      if (num > 0) {
        return num % 2 === 1;
      } else {
        throw `${num} is not positive`;
      }
    } else {
      throw `${num} is not an integer`;
    }
  } else {
    throw `${num} is not a number`;
  }
};

console.log(odd(9));
