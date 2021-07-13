//請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
// 為方便顯示，因此把空白代換成底線，實際請輸出空白
// tree(2) 預期輸出：
// _*
// ***
// _*
// _*
// tree(5) 預期輸出：
// ____*
// ___***
// __*****
// _*******
// *********
// ____*
// ____*
// ____*
// ____*
// ____*

function tree(n) {
  printtop(n);
  printbottom(n);
}
function printtop(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i) + "*".repeat(i - 1));
  }
}

function printbottom(n) {
  for (i = 1; i <= n; i++) {
    console.log(" ".repeat(n - 1) + "*");
  }
}
tree(10);
