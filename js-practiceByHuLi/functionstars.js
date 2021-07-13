//請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
let t = [];
function stars(n) {
  for (i = 0; i < n; i++) {
    t.push("*");
    console.log(t.join(""));
  }
}
stars(10);
