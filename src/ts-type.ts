// Type undefinied
let undefiniedType: undefined;

// Type boolean
let isSleep: boolean = true;

// Type number
let age: number = 21;

// Type string
let fullName: string = "Mar'i Adhari";

// Type bigInt
let big_int: bigint = 123n

// Type Symbol
let symbolType: symbol = Symbol("simbol")

// Type null
let typeNull: null;

// Type interface
interface Person {
    name: string;
    age: number;
    collage?: string;
}

let person: Person = {
    name: "Mar'i Adhari",
    age: 21,
    collage: "Polindra Jaya"
}

console.log(person);

// Type function
let getName: (person: Person) => string;
getName = (person: Person) => {
    return person.name;
}
console.log(getName(person));

// Type any
let anyType: any;
anyType = "Hello world" // <= Tipe data tidak dideklarasikan di awal, namun ditentukan secara otomatis ketika pertama kali di assign

// Type union
let ageUnion: number | string; // <= dapat digunakan jika data dapat berupa lebih dari 1 tipe
ageUnion = 21;                 // <= contoh, data dapat berupa number ataupun string
ageUnion = "21";

// Type intersection
interface Person {
    name: string;
    age: number;
}
interface Collage {
    name: string;
    address: string;
}
type CollagePerson = Collage & Person; // <= membuat tipe data baru
let collagePerson: CollagePerson;
collagePerson.name = "Mar'i Adhari";
collagePerson.age = 21;
collagePerson.collage = "Politeknik Negeri Indramyu";
collagePerson.address = "Indramayu, Jawa Barat";

type PersonCollage = Person | Collage
let personCollage: PersonCollage;
personCollage.name = "Mar'i Adhari"

// Type Class
class Product {
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }

}
// Instance Object
let bag = new Product("Tas", 200000)
console.log(bag.getName());

// Type enum
/**
 * Enum memungkinkan pengembang untuk mendefinisikan satu set konstanta bernama. 
 * Menggunakan enum dapat mempermudah mendokumentasikan maksud, 
 * atau membuat kumpulan kasus yang berbeda. 
 * TypeScript menyediakan enum numerik dan berbasis string.
 */
enum Gender {
    male = "Male",
    female = "Female"
} // <= contoh penggunan pada data jenis kelamin
let jenisKelmin = Gender.male
console.log(jenisKelmin);

// Type function
function printName(name: string): void {
    console.log(name);
}
printName("Mar'i Adhari");


