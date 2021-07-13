//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n

let count = 0;
function position(a, n) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < n) {
      count++;
    }
  }
  console.log(count);
}

position([1, 2, 5, 4, 3], 5);
