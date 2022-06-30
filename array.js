/* const arr = ["Dhaka", "Rajshahi", "Chittagong", "Barisal", "Khulna", "Sylhet"];
const length = arr.length;
console.log(length);
// changing the element of forth position.
arr[3] = "Rangpur";
console.log(arr);

// add to element in an array

arr.push("Barishal", "Mymensingh");
console.log(arr);

// remove the last element from an array;

console.log(arr.pop());
console.log(arr);

//  loop through an array to get all the elements

//using for-of loop
console.log("******************using for-of loop**************");
for (const element of arr) {
  console.log(element);
}

// using traditional for loop
console.log("****************using traditional for loop*********");
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

// console.log() only numbers greater than 80;

const arrNum = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 35, 45, 55, 105];

for (i = 0; i < arrNum.length; i++) {
  if (arrNum[i] > 80) {
    console.log(arrNum[i]);
  }
}
