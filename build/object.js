/* eslint-disable prefer-const */
/**
 * 1. Object literal
 * 2. Nested Object
 * 3. Nested, Object of Array,
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */
/**
 * 1. Object Literal
 */
const product = {
    id: "ID-1s",
    productName: "Macbook Air",
    price: 2000,
    note: "",
};
console.log(product);
// inline interface
let product1;
product1 = {
    id: "ID-1s",
    productName: "Macbook Air",
    price: 2000,
    note: "Hello world",
};
console.log(product1);
let product4 = {
    id: "ID-1",
    productName: "Helo world",
    price: 21000,
    note: "",
    name: "",
    getName: function () {
        throw new Error("Function not implemented.");
    },
    getPrice: function () {
        throw new Error("Function not implemented.");
    },
};
console.log(product4);
let product5;
product5 = {
    id: "ID-05",
    productName: "Name",
    price: 2000,
    productDetail: {
        year: 2001,
        storage: 2000,
    },
};
console.log(product5);
console.log(typeof product5);
let user;
let address1;
let address2;
let address3;
address1 = {
    street: "Hello world",
    city: "Indramayu",
};
address2 = {
    street: "Hello world",
    city: "Indramayu",
};
address3 = {
    street: "Hello world",
    city: "Indramayu",
};
user = {
    id: "ID-06",
    name: "Mar'i Adhari",
    address: [address1, address2, address3],
};
console.log(user);
let keyboard;
keyboard = {
    idCart: "ID-Cart01",
    dateOrdered: new Date("2022-06-27"),
    items: {
        p1: {
            id: "P-1",
            name: "Mechanical Keyboard",
            qty: 200,
        },
        p2: {
            id: "P-2",
            name: "USB-HUB",
            qty: 200,
        },
    },
};
console.log(keyboard);
/**
 * 5. Object Destructuring
 */
let { idCart, dateOrdered, items } = keyboard;
console.log("ID Cart", idCart);
console.log("Date Order", dateOrdered);
console.log("Items", items);
