//請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和

function sum(a) {
  let tatal = 0;
  for (let i = 0; i < a.length; i++) {
    tatal = tatal + a[i];
  }
  console.log(tatal);
}
sum([1, 2, 9]);
