/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Type undefinied
let undefiniedType;
// Type boolean
let isSleep = true;
// Type number
let age = 21;
// Type string
let fullName = "Mar'i Adhari";
// Type bigInt
let big_int = 123n;
// Type Symbol
let symbolType = Symbol("simbol");
// Type null
let typeNull;
let person = {
    name: "Mar'i Adhari",
    age: 21,
    collage: "Polindra Jaya",
};
console.log(person);
// Type function
let getName;
getName = (person) => {
    return person.name;
};
console.log(getName(person));
// Type any
let anyType;
anyType = "Hello world"; // <= Tipe data tidak dideklarasikan di awal, namun ditentukan secara otomatis ketika pertama kali di assign
// Type union
let ageUnion; // <= dapat digunakan jika data dapat berupa lebih dari 1 tipe
ageUnion = 21; // <= contoh, data dapat berupa number ataupun string
ageUnion = "21";
let collagePerson;
collagePerson.name = "Mar'i Adhari";
collagePerson.age = 21;
collagePerson.collage = "Politeknik Negeri Indramyu";
collagePerson.address = "Indramayu, Jawa Barat";
let personCollage;
personCollage.name = "Mar'i Adhari";
// Type Class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
// Instance Object
let bag = new Product("Tas", 200000);
console.log(bag.getName());
// Type enum
/**
 * Enum memungkinkan pengembang untuk mendefinisikan satu set konstanta bernama.
 * Menggunakan enum dapat mempermudah mendokumentasikan maksud,
 * atau membuat kumpulan kasus yang berbeda.
 * TypeScript menyediakan enum numerik dan berbasis string.
 */
var Gender;
(function (Gender) {
    Gender["male"] = "Male";
    Gender["female"] = "Female";
})(Gender || (Gender = {})); // <= contoh penggunan pada data jenis kelamin
let jenisKelmin = Gender.male;
console.log(jenisKelmin);
// Type function
function printName(name) {
    console.log(name);
}
printName("Mar'i Adhari");
let i;
i = {};
