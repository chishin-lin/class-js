// 請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
// makeStars(1) 正確回傳值：*
// makeStars(2) 正確回傳值：*\n**
// makeStars(5) 正確回傳值：*\n**\n***\n****\n*****
let total = [];
let str = "";
function makeStars(num) {
  for (i = 0; i < num; i++) {
    str = str + "*";
    total.push(str);
  }

  console.log(total.join("\\n"));
}

makeStars(5);
