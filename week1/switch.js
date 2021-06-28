let A = 4;
switch (A) {
  case 1:
    console.log("one");
  //break;
  case 2:
    console.log("two");
  //break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
  //break;
  case 5:
    console.log("five");
  //break;
  default:
    console.log("not in the range");
}

console.log("END");

//日期
switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("工作天");
    break;
  default:
    console.log("假日");
}
