/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// eslint-disable-next-line prefer-const
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// Array of Numbers

// type inference
let list1 = [1, 2, 3, 4, 5];

// square bracket
let list2: number[];
list2 = [1, 2, 3, 4];

// generic array
let list3: Array<number>;
list3 = [1, 2, 3];

// Array of Strings
// type generic
function doSometing(value: Array<string>): void {
  console.log(value);
}
let myArray: string[] = ["Hello", "World"];
doSometing(myArray);
doSometing(new Array("Hello"));
