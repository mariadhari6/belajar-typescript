//  Array of Number
let score: number[] = [100, 90, 80];

// Array of String
let names: string[] = ["Rimuru", "Diablo", "Guy Crimson"];

// Array of Union
let unionsAge: number[] | string[] = ["20", "21"];
unionsAge = [21, 20];

// Tuple
let tuple: [number, string, boolean] = [10, "Hello", false];

// Array destructuring
let [a, b, c] = tuple; //<= a:10, b:"Hello", c:false
let [d, ...other] = tuple // <= d:10, other:["Hello", false]
let [, , f] = tuple; // <= f:false
console.log(other);

// Array of Objects
let persons: [object, object, object] = [
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
]

// Array multidimensional
let multiDimensional: number[][] = [[1, 2, 3], [4, 5, 6, 7]];