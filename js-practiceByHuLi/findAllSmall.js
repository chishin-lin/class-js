//請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）

function findAllSmall(a, n) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < n) {
      arr.push(a[i]);
    }
  }
  console.log(arr);
}

findAllSmall([1, 2, 5, 4, 3], 5);
