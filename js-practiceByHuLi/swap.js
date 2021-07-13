//請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
// swap("Peter") 預期回傳值：pETER
// swap("AbCdE") 預期回傳值：aBcDe
//let arr = [];
function swap(str) {
  let arr = [];
  //str.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      arr.push(str[i].toLowerCase());
    } else {
      arr.push(str[i].toUpperCase());
    }
  }
  console.log(arr.join(""));
}

swap("Peter");
