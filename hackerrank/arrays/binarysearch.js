

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (right >= 0) {
    mid = 1 + Math.floor((right - 1) / 2);
    console.log(left, mid, right);
    // If the element is present at the middle
    // itself
    if (x == arr[mid])
      return console.log('found it: ', mid);

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x)
      right = mid - 1;

    // Else the element can only be present
    // in right subarray
    else
      left = mid + 1;
  }
  return -1;
  // We reach here when element is not
  // present in array
  // return -1;

  // let left = 0;
  // let right = arr.length - 1;
  // let mid;

  // while (right >= 1) {

  //   mid = left + Math.floor((right - left) / 2);

  //   if (arr[mid] == valueToFind) {
  //     return mid;
  //   }

  //   if (arr[mid] < valueToFind) {
  //     right = mid - 1;
  //   } else {
  //     left = mid + 1;
  //   }
  // }

  // return -1;

}

/**
 * valueToFind = 1
 * 0 4 mid - 2
 * 1 > 4 nope
 * 0 1
 * 
 * 1 > 3 nope
 * 0 0
 */



arr = [1, 3, 4, 5, 6];
let valueToFind = 1;
console.log(binarySearch(arr, valueToFind));
// valueToFind = 6;
// binarySearch(arr, valueToFind);
// valueToFind = 10;
// binarySearch(arr, valueToFind);





  // This below check covers all cases , so need to check
  // for mid=lo-(hi-lo)/2
  // while (hi - lo > 1) {
  //   let mid = (hi + lo) / 2;
  //   if (arr[mid] < valueToFind) {
  //     lo = mid + 1;
  //   }
  //   else {
  //     hi = mid;
  //   }
  // }
  // if (arr[lo] == valueToFind) {
  //   console.log("Found At Index " + lo);
  // }
  // else if (arr[hi] == valueToFind) {
  //   console.log("Found At Index " + hi);
  // }
  // else {
  //   console.log("Not Found");
  // }


