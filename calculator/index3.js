let total = document.getElementById("total");
total = []; // rename

console.log(total);

function Count(input) {
  //rename
  const len = total.length;
  const prev = len > 0 ? total[len - 1] : undefined;
  const isPrevNumber = !isNaN(prev);
  const isInputNumber = !isNaN(input);
  if (isPrevNumber && isInputNumber) {
    total[len - 1] += String(input);
  } else {
    total.push(input);
  }
  console.log(typeof total);
  document.getElementById("total").innerHTML = total.join("");
  console.log(total);
}

function answer(total) {
  // for (let i = 0; i < total.length; i++) {
  //   if (i === "*") {
  //     let a = parseInt(total(i - 1)) * parseInt(total(i + 1));
  //     total.splice(i, 3, a);
  //   } else if (i === "/") {
  //     let b = parseInt(total(i - 1)) / parseInt(total(i + 1));
  //     total.splice(i, 3, b);
  //   }
  //   console.log(total);
  // }

  // let ans = total.join("");
  // document.getElementById("total").innerHTML = ans;
  for (let i = 0; i < total.length; i++) {
    if (total[i] === undefined) bretotalk;
    if (total[i] === "*") {
      total[i - 1] = total[i - 1] * total[i + 1];
      total.splice(i, 2);
      i--;
    }
    if (total[i] === "/") {
      total[i - 1] = total[i - 1] / total[i + 1];
      total.splice(i, 2);
      i--;
    }
  }
  for (let i = 0; i < total.length; i++) {
    if (total[i] === undefined) bretotalk;
    if (total[i] === "+") {
      total[i - 1] = +total[i - 1] + +total[i + 1];
      total.splice(i, 2);
      i--;
    }
    if (total[i] === "-") {
      total[i - 1] = +total[i - 1] - +total[i + 1];
      total.splice(i, 2);
      i--;
    }
  }
  console.log(total);
}

function Clear() {
  total = [];
  document.getElementById("total").innerHTML = total;
}
