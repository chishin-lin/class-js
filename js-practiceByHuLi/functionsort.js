//請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]
// sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  console.log(arr);
}
sort([6, 8, 3, 2]);
sort([1, 2, 7, 5]);
