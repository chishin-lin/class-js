//請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
let t = [];
function starReturn(n) {
  for (i = 0; i < n; i++) {
    t.push("*");
  }
  return t.join("");
}
console.log(starReturn(2));
