//請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
// findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1
// findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10

function findMin(str) {
  let min = str[0];
  for (i = 0; i < str.length; i++) {
    if (min > str[i]) {
      min = str[i];
    }
  }
  console.log(min);
}
findMin([1, 6, 0, 33, 44, 88, -10]);
