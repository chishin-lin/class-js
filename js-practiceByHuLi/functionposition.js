//請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
//position("abcd") 正確回傳值：-1
//position("AbcD") 正確回傳值：A 0
//position("abCD") 正確回傳值：C 2
function position(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].toUpperCase() === a[i]) {
      console.log(a[i], i);
      return;
    }
  }
  console.log(-1);
}

position("ayuWi");
