//寫一個函式 star，接收一個參數 n，並印出 n 個 *
// star(1) 預期輸出：
// *
// star(5) 預期輸出：
// *****

let t = [];
function star(n) {
  for (i = 0; i < n; i++) {
    t.push("*");
  }
  console.log(t.join(""));
}
star(10);
