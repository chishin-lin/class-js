let dixx = function () {
  console.log("123");
};

try {
  dixx("123");
} catch (e) {
  console.log("error");
} finally {
  console.log("end");
}

//練習
function test(a, b) {
  if (typeof b === "undefined") throw "need a number";
  return a + b;
}
try {
  let a = test(123, 456);
  console.log(a);
  console.log(test(123));
} catch (e) {
  console.log("error", e);
} finally {
  console.log("end");
}
