const numbers = [11, 51, 32, 69, -2, 12, 43];
let positiveNumbers = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    break;
  } else if (numbers[i] >= 0) {
    positiveNumbers.push(numbers[i]);
  }
}
console.log(positiveNumbers);
