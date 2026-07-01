export {};

interface Product {
    id: number;
    name: string;
    price: number;
}

type Status = "Available" | "Out of Stock";

function showProductSummary(product: Product, status: Status): void {
    console.log(`Product ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Status: ${status}`);
}

// Example usage
const item: Product = {
    id: 1,
    name: "Laptop",
    price: 30000
};

showProductSummary(item, "Available");