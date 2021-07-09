let tatal = document.getElementById("tatal");
tatal = [];
console.log(tatal);

function push(a) {
  let num = tatal.push(a);
  document.getElementById("tatal").innerHTML = tatal.join("");
}
function answer() {
  let ans = eval(tatal.join(""));

  document.getElementById("tatal").innerHTML = ans;

  console.log(typeof tatal.join(""));
  console.log(ans);
}
function Clear() {
  tatal = [];
  document.getElementById("tatal").innerHTML = tatal;
}
