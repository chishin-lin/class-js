//年份判斷例子
let year = 2000;
if (year % 1000 == 0) {
  console.log(year, "是閏年");
} else if (year % 400 == 0) {
  console.log(year, "是閏年");
} else if (year % 100 == 0) {
  console.log(year, "不是閏年");
} else if (year % 4 == 0) {
  console.log(year, "是閏年");
} else {
  console.log(year, "不是閏年");
}
//另一方式
if (
  year % 1000 == 0 ||
  year % 400 == 0 ||
  (year % 100 !== 0 && year % 4 == 0)
) {
  console.log(year, "是閏年");
} else {
  console.log(year, "是閏年");
}

//三元運算結合
let Year = 7;
console.log(
  Year,
  Year % 1000 == 0 || Year % 400 == 0 || (Year % 100 !== 0 && Year % 4 == 0)
    ? "是閏年"
    : "不是閏年"
);
