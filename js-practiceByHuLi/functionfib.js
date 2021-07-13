//費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 …
// fib(0) = 0
// fib(1) = 1
// for n >=2, fib(n) = fib(n-1) + fib(n-2)
// 現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字
// fib(1) 預期回傳值：1
// fib(2) 預期回傳值：1
// fib(8) 預期回傳值：21
let arr = [1, 1, 2];
function fib(n) {
  for (i = 3; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
    //arr.push(arr[i]);
  }
  console.log(arr);
  console.log(arr[n - 1]);
}
fib(9);
