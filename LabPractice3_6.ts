export {};

type Category = "Electronics" | "Clothing" | "Food";

interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 30000 },
    { id: 2, name: "T-Shirt", category: "Clothing", price: 500 },
    { id: 3, name: "Phone", category: "Electronics", price: 20000 },
    { id: 4, name: "Rice", category: "Food", price: 50 },
    { id: 5, name: "Jacket", category: "Clothing", price: 1500 }
];

function filterByCategory(items: Product[], category: Category): Product[] {
    const result: Product[] = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i].category === category) {
            result.push(items[i]);
        }
    }

    return result;
}

// Example usage
const electronics = filterByCategory(products, "Electronics");

console.log("Electronics products:");
console.log(electronics);