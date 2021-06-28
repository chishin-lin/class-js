var x = 100;

function foo() {
  var y = 200;
  console.log("x=", x, "y=", y);
}
//console.log("out: x=", x, "y=", y);  //ReferenceError: y is not defined

foo(); //x= 100 y= 200

//array
let fruit = ["apple", "banana"];
console.log(fruit);
fruit.push("water");
console.log(fruit);
fruit[5] = "sun";
console.log(fruit);
fruit.unshift("love");
console.log(fruit);
fruit.pop();
fruit.pop();
console.log(fruit);
fruit.shift();
console.log(fruit);
delete fruit[2];
console.log(fruit);

//logicall
let a = 100;
let b = 200;
console.log(a >= 50 && a <= 100);

a = 50;
console.log(!(a >= 50 && a <= 100));
console.log(!(a >= 50 || a <= 100));
