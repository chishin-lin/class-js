//global.document = new DOM("index.html").window.document;
//document.getElementById("submit").addEventListener.onckick = {
//document.getElementById("submit").onclick = {
function myFunction() {
  let N1 = parseInt(document.getElementById("num1").value);
  let N2 = parseInt(document.getElementById("num2").value);
  let caculate = document.getElementById("caculate").value;
  switch (caculate) {
    case "+":
      Answer = N1 + N2;
      break;
    case "-":
      Answer = N1 - N2;
      break;
    case "*":
      Answer = N1 * N2;
      break;
    case "/":
      Answer = N1 / N2;
      break;
  }
  document.getElementById("answer").innerHTML = Answer;
}
