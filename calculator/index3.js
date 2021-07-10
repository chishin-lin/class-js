let tatal = document.getElementById("tatal");
tatal = [];
console.log(tatal);

function push(a) {
  tatal.push(a);
  document.getElementById("tatal").innerHTML = tatal.join("");
  console.log(tatal);
}

tatal.forEach(function () {
  for (i = 0; i < length; i++) {
    return tatal;
  }
});

function answer() {
  let ans = tatal.join("");
  document.getElementById("tatal").innerHTML = ans;
}
function Clear() {
  tatal = [];
  document.getElementById("tatal").innerHTML = tatal;
}
