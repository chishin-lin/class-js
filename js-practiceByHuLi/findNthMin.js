//請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
// findNthMin([1, 2, 3, 4, 5], 1) 預期回傳值：1
// findNthMin([1, 3, 5, 7, 9], 3) 預期回傳值：5
// findNthMin([1, 1, 1, 1, 1], 2) 預期回傳值：1
//let array = [];
function findNthMin(array, n) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        //交換數字
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array[n - 1]);
}

//   const arr = array.sort((a, b) => a - b);
//   console.log(arr[n - 1]);
findNthMin([9, 3, 3, 4, 5], 2);
