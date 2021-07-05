let fs = require("fs");
//同步讀取檔案
let data = fs.readFileSync("./server.js", "uft8");
console.log(data);

//非同步讀取檔案
//fs.readFile("fileName",[option,] callback_function)
let data2 = "";
fs.readFile("./server.js", function (err, file_data) {
  if (err) throw err;
  console.log("readFile: " + file_data);
});
console.log("After readFile()");
