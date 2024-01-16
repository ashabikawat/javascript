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

const message = `Bank name is ${cloneObjectSbi.name} it is located at ${cloneObjectSbi.branch} its IFSC code is ${cloneObjectSbi.IFSC} and 
founded in ${cloneObjectSbi.foundedIn}. Full address is ${cloneObjectLocation.street}, ${cloneObjectLocation.city} ${cloneObjectLocation.pin}. `;
console.log(message);

const rateOfInterest = {
  homeInterest: 2.5,
  personaLoanInterest: 3.2,
  dueInterest: 5,
};

console.log("");
console.log("------------------- step 05 -------------------");

const sbiDetails = Object.assign({}, bankLocation, bankSbi, rateOfInterest);

const message2 = `Bank name is ${sbiDetails.name} it is located at ${sbiDetails.branch} its IFSC code is ${sbiDetails.IFSC} and 
founded in ${sbiDetails.foundedIn}. Full address is ${sbiDetails.street}, ${sbiDetails.city} ${sbiDetails.pin}. 
Home interest is ${sbiDetails.homeInterest} and personal loan interest ${sbiDetails.personaLoanInterest}. Interest due ${sbiDetails.dueInterest}`;
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
