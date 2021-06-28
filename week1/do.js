let i = 1;
j = 0;
do {
  if (i % 2 == 0) {
    i++;
    continue;
  }
  console.log("i=", i);
  j += i;
  i++;
} while (i < 10);
