const bankSbi = {
  name: "SBI",
  branch: "Mumbai",
  IFSC: "BGT67889GGH",
  foundedIn: 2000,
};

const bankLocation = {
  street: "Tata power",
  city: "kalyan",
  pin: 421306,
};

console.log("------------------- step 03 -------------------");

const cloneObjectLocation = Object.assign(bankLocation);
const cloneObjectSbi = Object.assign(bankSbi);

// for (const index in cloneObjectLocation) {
//   console.log(cloneObjectLocation[index]);
// }

const bankLocationValues = Object.values(bankLocation);
const bankSbiValues = Object.values(bankSbi);
// const message = `Bank name : ${bankSbiValues[0]}\nBranch : ${bankSbiValues[1]}\nIFSC code : ${bankSbiValues[2]}\nFounded in : ${bankSbiValues[3]}`;
// console.log(message);

const message = `Bank name is ${bankSbiValues[0]} it is located at ${bankSbiValues[1]} its IFSC code is ${bankSbiValues[2]} and 
founded in ${bankSbiValues[3]}. Full address is ${bankLocationValues[0]}, ${bankLocationValues[1]} ${bankLocationValues[2]}`;
console.log(message);

const rateOfInterest = {
  homeInterest: 2.5,
  personaLoanInterest: 3.2,
  dueInterest: 5,
};

console.log("");
console.log("------------------- step 05 -------------------");

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
const sbiDetailsValues = Object.values(sbiDetails);

const message2 = `Bank name is ${sbiDetailsValues[0]} it is located at ${sbiDetailsValues[1]} its IFSC code is ${sbiDetailsValues[2]} and 
founded in ${sbiDetailsValues[3]}. Full address is ${sbiDetailsValues[4]}, ${sbiDetailsValues[5]} ${sbiDetailsValues[6]}. 
Home interest is ${sbiDetailsValues[7]} and personal loan interest ${sbiDetailsValues[8]}. Interest due ${sbiDetailsValues[9]}`;
console.log(message2);

console.log("");
console.log("------------------- step 06 -------------------");

const user = {
  name: "Asha",
  age: 32,
  gender: "female",
};

const array = [];
for (const index in sbiDetails) {
  array.push(sbiDetails[index]);
}
console.log(array);
