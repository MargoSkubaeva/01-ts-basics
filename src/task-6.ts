function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["apple", "banana", "orange"]);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber);
console.log(firstString);
console.log(firstBoolean);
