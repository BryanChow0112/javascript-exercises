const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  return n ? n * factorial(n - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
