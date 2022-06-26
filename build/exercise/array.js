//  Array of Number
let score = [100, 90, 80];
// Array of String
let names = ["Rimuru", "Diablo", "Guy Crimson"];
// Array of Union
let unionsAge = ["20", "21"];
unionsAge = [21, 20];
// Tuple
let tuple = [10, "Hello", false];
// Array destructuring
let [a, b, c] = tuple; //<= a:10, b:"Hello", c:false
let [d, ...other] = tuple; // <= d:10, other:["Hello", false]
let [, , f] = tuple; // <= f:false
console.log(other);
// Array of Objects
let persons = [
    {
        name: "Mar'i Adhari",
        age: 21
    },
    {
        name: "Firman Maulana"
    },
    {
        name: "Iin Nuryani",
        gender: "Female",
        isCute: true
    }
];
// Array multidimensional
let multiDimensional = [[1, 2, 3], [4, 5, 6, 7]];
