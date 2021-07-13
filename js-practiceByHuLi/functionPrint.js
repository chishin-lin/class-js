//請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n

function print(n) {
  let i = 1;
  while (i < n + 1) {
    console.log(i);
    i++;
  }
}
print(10);
