let x = 0,
  y = 0;
out_loop: while (true) {
  console.log("out:", x);
  x += 1;
  y = 1;
  while (true) {
    console.log("in:", y);
    y++;
    if (y === 3 && x === 3) {
      break out_loop;
    } else if (y === 3) {
      break;
    }
  }
}
//法二
/*
out_loop: while (true) {
  console.log("out:", x);
  x += 1;
  y = 1;
  while (true) {
    console.log("in:", y);
    y++;
    if (y === 3) {
      break;
    }
  }
  if (x === 0) {
    break;
  }
}*/

//另練習
let a = 0,
  b = 0;
loop1: for (a = 0; a < 3; a++) {
  loop2: for (b = 0; b < 3; b++) {
    //做排除：
    if (a === 1 && b === 1) {
      continue; //loop1;
    }
    console.log("a=", a, "b=", b);
  }
}
