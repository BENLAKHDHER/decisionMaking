function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}


const base = parseFloat(prompt("Enter the base number:"));
const exponent = parseInt(prompt("Enter the exponent:"));
console.log(`${base}^${exponent} = ${power(base, exponent)}`);
