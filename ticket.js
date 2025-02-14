function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}


const age = parseInt(prompt("Enter your age:"));
console.log(`The ticket price is $${getTicketPrice(age)}.`);
