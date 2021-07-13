//請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果
function table(n) {
  for (let i = 1; i <= 9; i++) {
    count = n * i;
    console.log("n * 1 =", count);
  }
}
table(10);
