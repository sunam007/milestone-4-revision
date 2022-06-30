function paperRequirement(firstBookCopy, secondBookCopy, thirdBookCopy) {
  const firstBookPageRequirement = 100;
  const secondBookPageRequirement = 200;
  const thirdBookPageRequirement = 300;

  const totalPageRequired =
    firstBookPageRequirement * firstBookCopy +
    secondBookPageRequirement * secondBookCopy +
    thirdBookPageRequirement * thirdBookCopy;
  return totalPageRequired;
}

console.log(paperRequirement(3, 2, 1));
