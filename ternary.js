// ************************simple ternary***********************//
// ********** example - 1 *********
// const ageNum = 22;

// ageNum >= 18
//   ? console.log("Congratulation You can vote now !!")
//   : console.log("Sorry you are under age");

// ******** example - 2 *********
// let price = 200;
// const vipMember = true;

// if (vipMember === true) {
//   price = price - (price * 20) / 100;
// } else {
//   price = price + (price * 20) / 100;
// }
// console.log(price);

// ************ example - 3 **************
// let price = 200;
// let vipMember = false;

// price = vipMember == true ? price - (price * 20) / 100 : price + (price * 20) / 100;
// console.log(price);

// ************* example -4 ***************//
// ************** Advance Ternary **************//
let price = 520;
const vipMember = true;

// price = vipMember===false ? price>500? price/2 : price=0 : price*2;
price =
  vipMember === false ? (price > 500 ? price / 2 : (price = 0)) : price * 2;
console.log(price);
