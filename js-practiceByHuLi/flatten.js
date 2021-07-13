//請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
// flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]
// flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]
// flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
let arr = [];
function flatten(a) {
  //   let arr = [];
  //   for (let j = 0; j < a.length; j++) {
  //     if (Array.isArray(a[j])) {
  //       let f = a[j].flat();
  //       for (let i = 0; i < f.length; i++) {
  //         if (Array.isArray(f[i])) {
  //           let F = f[i].flat();
  //           arr.push(F);
  //         } else {
  //           arr.push(f[i]);
  //         }
  //       }
  //     } else {
  //       arr.push(a[j]);
  //     }
  //   }
  //   console.log(arr);

  /*  let F = a.flat(a.length);
  console.log(F);*/

  const flatten = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }

    return result;
  };
}

flatten([1, 2, 3]);
flatten([1, 2, [1, 2], [1, 3], 6]);
flatten([1, [2, [3, [4]], 5], 6]);
