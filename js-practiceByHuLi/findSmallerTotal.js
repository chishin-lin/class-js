//請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
let amount = 0;
function findSmallerTotal(a, n) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < n) {
      amount += a[i];
    }
  }
  console.log(amount);
}
findSmallerTotal([1, 2, 5, 4, 3], 5);
