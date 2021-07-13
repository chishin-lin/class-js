//請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）

function reverse(s) {
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str = str + s[i];
  }
  console.log(str);
}
reverse("abcd");
