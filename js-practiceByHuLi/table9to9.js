//請寫出一個 function table9to9，並列出 1*1 ~ 9*9
function table9to9() {
  for (i = 1; i <= 9; i++) {
    for (n = 1; n <= 9; n++) {
      count = n * i;
      console.log(i, "*", n, "=", count);
    }
  }
}
table9to9();
