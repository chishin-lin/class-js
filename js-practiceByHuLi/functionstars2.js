//請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形
// let arr = [];
// function star2(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) str += "*";
//     console.log(str);
//   }
//   for (let i = n - 1; i > 0; i--) {
//     let str = "";
//     for (let j = 0; j < i; j++) str += "*";
//     console.log(str);
//   }
// }

// star2(5);

// let arr = [];
let str = "";
function star2(n) {
  for (let i = 0; i < n; i++) {
    str += "*";
    // arr.push(str);
    console.log(str);
  }

  for (let i = n - 1; i > 0; i--) {
    console.log(str.substr(0, i));
  }
  // console.log(arr.join("\n")); //\n換行
}
star2(3);
