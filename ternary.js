// ******* SIMPLE TERNARY ******* //

const myAge = 22;

myAge >= 18 ? console.log("You are adult") : console.log("You are underaged");

// ******* COMPLEX TERNARY ******* //

let foodPrice = 1000;
let vipDiscountPercent = 40;
let casualDiscount = 20;
let member = !true;
let vipMember = true;

foodPrice =
  vipMember === true
    ? foodPrice - (foodPrice * vipDiscountPercent) / 100
    : (foodPrice =
        member === true
          ? foodPrice - (foodPrice * casualDiscount) / 100
          : foodPrice);

console.log(foodPrice);

// ******* ADVANCE TERNARY ******* //

let ticketPrice = 50;
const student = true;

ticketPrice =
  student === !false
    ? ticketPrice < 60
      ? ticketPrice - (ticketPrice * 50) / 100 
      : ticketPrice = ticketPrice - 10 
    : price; 
console.log(ticketPrice);
