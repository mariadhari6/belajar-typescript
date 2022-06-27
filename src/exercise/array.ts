//  Array of Number
const score: number[] = [100, 90, 80];
console.log(score);


// Array of String
const names: string[] = ["Rimuru", "Diablo", "Guy Crimson"];
console.log(names);

// Array of Union
let unionsAge: number[] | string[] = ["20", "21"];
console.log(unionsAge);
unionsAge = [21, 20];
console.log(unionsAge);

// Tuple
const tuple: [number, string, boolean] = [10, "Hello", false];
console.log(tuple);

// Array destructuring
const [a, b, c] = tuple; //<= a:10, b:"Hello", c:false
console.log([a, b, c]);

const [d, ...other] = tuple; // <= d:10, other:["Hello", false]
console.log(d);
console.log(other);
const [, , f] = tuple; // <= f:false
console.log(f);

// Array of Objects
const persons: [object, object, object] = [
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
persons.forEach(person => {
    console.log(person);
});

// Array multidimensional
const multiDimensional: number[][] = [[1, 2, 3], [4, 5, 6, 7]];
console.log(multiDimensional);