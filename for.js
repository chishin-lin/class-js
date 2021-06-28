let counter = 0;
for (let i = 0; i < 10; i++) {
  // if (i % 2 == 0) continue;
  console.log("i=", i);
  counter += i;
  console.log("counter: ", counter);
  // if (counter > 20) break;
}
console.log("counter end");
console.log("=====================");

counter = 0;
i = 0;
while (i < 20) {
  console.log("while i = ", i);
  counter += i;
  console.log("while : count=", counter);
  if (counter > 20) break;
  i++;
}
