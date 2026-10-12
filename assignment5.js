function calculateArea(length = 5, width = 4) {
    return length * width;
}

const calculateAreaArrow = (length = 10, width = 3) => {
    return length * width;
};

console.log(
    `Standard Function Area (Default 5x4): ${calculateArea()}`
);

console.log(
    `Arrow Function Area (Custom 10x3): ${calculateAreaArrow()}`
);

{
    let blockVar = "Inside Block";
    console.log(blockVar);
}

try {
    console.log(blockVar);
}
catch (error) {
    console.log(`Scope Test Error: ${error}`);
}