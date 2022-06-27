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
let product1: {
  id: string;
  productName: string;
  price: number;
  note: string;
};
product1 = {
  id: "ID-1s",
  productName: "Macbook Air",
  price: 2000,
  note: "Hello world",
};
console.log(product1);

//
interface Product {
  id?: string;
  productName?: string;
  price: number;
  note?: string;
}

let product4: Product = {
  id: "ID-1",
  productName: "Helo world",
  price: 21000,
  note: "",
  name: "",
  getName: function (): string {
    throw new Error("Function not implemented.");
  },
  getPrice: function (): number {
    throw new Error("Function not implemented.");
  },
};
console.log(product4);

/**
 * 2. Nested Object
/*
  {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
      year: 2019
      storage: 256 
    }
  }
*/
interface Item {
  id: string;
  productName: string;
  price: number;
  productDetail: ItemDetail;
}
interface ItemDetail {
  year: number;
  storage: number;
}

let product5: Item;
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

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/
interface User {
  id: string;
  name: string;
  address: Array<Address>;
}
interface Address {
  street: string;
  city: string;
}
let user: User;
let address1: Address;
let address2: Address;
let address3: Address;
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
/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items:{
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        }
      }
    }
*/
interface CartItem {
  id: string;
  name: string;
  qty: number;
}
interface Cart {
  idCart: string;
  dateOrdered: Date;
  items: {
    [key: string]: CartItem;
  };
}
let keyboard: Cart;
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
