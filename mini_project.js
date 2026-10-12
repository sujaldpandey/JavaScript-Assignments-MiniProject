console.log("--- Initializing Inventory System ---");

let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));

if (productName && productPrice > 0) {

    inventory.push({
        name: productName,
        price: productPrice
    });

} else {

    console.log("Invalid Product Details.");
}

function getCategory(price) {

    if (price < 100) {
        return "Budget";
    }
    else if (price <= 500) {
        return "Standard";
    }
    else {
        return "Premium";
    }
}

function calculateTotalInventoryValue(items) {

    let total = 0;

    items.forEach(item => {
        total += item.price;
    });

    return total;
}

const applyTax = (amount, taxRate = 18) => {
    return amount + (amount * taxRate / 100);
};

console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {

    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
    );
});

console.log("--- Inventory Search ---");

for (let i = 0; i < inventory.length; i++) {

    if (!inventory[i].name) {
        continue;
    }

    if (inventory[i].name === "Laptop") {
        console.log("Laptop Found");
        break;
    }
}

console.log("--- Financial Analytics ---");

let totalInventoryValue =
    calculateTotalInventoryValue(inventory);

console.log(
    `Total Inventory Value: $${totalInventoryValue}`
);

console.log(
    `Total Value With 18% Tax: $${applyTax(totalInventoryValue)}`
);

let affordableItems = inventory.filter(
    item => item.price < 200
);

console.log(
    "Filtered Affordable Items (Under $200):"
);

console.log(
    affordableItems.map(item => item.name)
);

let formattedReport = inventory.map(
    item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:");

console.log(formattedReport);