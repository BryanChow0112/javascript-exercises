const sumAll = function (min, max) {
    // Check if both arguments are numbers
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    // Check if both numbers are positive
    if (min < 0 || max < 0) return "ERROR";
    // Check if min is greater than max and swap the values if needed
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
  
    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };
  
module.exports = sumAll;
