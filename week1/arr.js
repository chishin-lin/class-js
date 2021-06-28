let arr = [2, 3, 5, 6, 23, 22, 65];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  console.log("arr[", i, "]=", arr[i]);
  sum += arr[i];
}
console.log(sum);
let chi = [];
for (let i = 0; i < arr.length; i++) {
  chi.unshift(arr[i] ** 2);
}
console.log(chi);
