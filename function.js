function number(a = 1, b = 1) {
  return a * b;
}

console.log(number(2, 4));
console.log(number(2));

let x = function (A, B) {
  return A * B;
};
let y = x;
console.log(y(123, 4));

function test(a, b, fun = y) {
  return fun(a, b);
}
//console.log(test(12, 34, y));
console.log(test(12, 34));
