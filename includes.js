const friendsName = ["sadman", "sumon", "siam", "sayma", "kormokar"];
console.log(friendsName.includes("sumon"));
// includes use koire veriable ar vitore kono specific index ke khuje ber kora hoy
console.log(friendsName.includes("sahaf"));

if (friendsName.includes("kormokar")) {
  console.log("tum ak behen ki lori ho bsrike");
} else {
  console.log("oh,ok you can be my friend");
}

let myFriends = ["html", "css", "tailwind", "disyUi"];
myFriends.push("javascript");
myFriends.pop("javascript");

if (myFriends.includes("javascript")) {
  console.log("good job tumi selected");
} else {
  console.log("duro tumi kisui paro nh");
}       