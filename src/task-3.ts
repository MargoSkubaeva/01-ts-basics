const usernames: string[] = ["Alice", "Bob", "Charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 25000 },
  { id: 2, name: "Phone", price: 15000 },
];

console.log(usernames);
console.log(ratings);
console.log(products);
