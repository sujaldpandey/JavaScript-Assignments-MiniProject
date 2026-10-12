console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("-- First Number > 10 Divisible By 6 --");

let num = 11;

while (true) {

    if (num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }

    num++;
}

console.log("-- Do While Example --");

let x = 0;

do {
    x++;

    if (x === 3) {
        continue;
    }

    console.log(x);

} while (x < 5);