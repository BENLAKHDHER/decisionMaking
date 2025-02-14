function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const n = parseInt(prompt("Enter the position in Fibonacci sequence:"));
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
