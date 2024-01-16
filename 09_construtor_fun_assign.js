// function Bank(bankName, location, ifscCode, branchCode) {
//   this.bankName = bankName;
//   this.location = location;
//   this.ifscCode = ifscCode;
//   this.branchCode = branchCode;
// }

// Bank.prototype.getDetails = function () {
//   console.log(
//     `${this.bankName} is located at ${this.location}. Its IFSC code is ${this.ifscCode} and branch code is ${this.branchCode}`
//   );
//   console.log("");
// };

// const yesBank = new Bank("Yes bank", "Thane", "BDFDGH45665", 78785436698);

// const sbiBank = new Bank("SBI", "Dombivli", "TYJOL4563212", 656212346878);

// const mahBank = new Bank(
//   "Maharashtra bank",
//   "Kalva",
//   "PKLKK554212165",
//   4546854821226
// );

// const axisBank = new Bank("Axis", "Kalyan", "WEWSDXFC454121", 54777548754);

// yesBank.getDetails();
// mahBank.getDetails();
// sbiBank.getDetails();
// axisBank.getDetails();

// Bank.prototype.openTime = "9 AM IST";
// Bank.prototype.closeTime = "6 PM IST";

// console.log(
//   `Bank name is ${sbiBank.bankName} its opening time is ${sbiBank.openTime} and its closing time is ${sbiBank.closeTime}`
// );

// console.log("");

// console.log(
//   `Bank name is ${axisBank.bankName} its closing time is ${axisBank.closeTime}`
// );

// console.log("");

// console.log(
//   `Bank name is ${yesBank.bankName} its branch code is ${yesBank.branchCode} and its opening time is ${axisBank.openTime}`
// );

class User {
  name;
  city;
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }

  getDetail() {
    console.log(`You live in ${this.city} and your name is ${this.name}`);
  }
}

const asha = new User("asha", "thane");

asha.getDetail();
