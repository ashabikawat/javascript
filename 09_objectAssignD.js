console.log("------------------------- step 04 -------------------------");
let professor = {
  name: "Asha Bikawat",
  gender: "female",
  subject: "javascript",
  location: "pune",
  collegeName: "ABC sr college",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
    masters: "MCA",
    bachelors: "IT",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certification in IFE course",
    "Certification in Adv programming",
  ],
};

professor.totalExperience = 14;

console.log(professor);
console.log("");

console.log("------------------------- step 05 -------------------------");
console.log(`Location before updating the value ${professor.location}`);
professor.location = "Mumbai";
console.log(`Location after updating the value ${professor.location}`);

console.log("");

console.log("------------------------- step 06 -------------------------");
console.log(`Array before adding new certificate [${professor.certificates}]`);
professor.certificates.splice(2, 0, "Oracle certified");
console.log(`Array after adding new certificate [${professor.certificates}]`);
console.log("");

console.log("------------------------- step 07 -------------------------");
console.log(
  `Last element of the array is ${
    professor.certificates[professor.certificates.length - 1]
  }`
);
console.log("");

console.log("------------------------- step 08 -------------------------");
console.log(professor);
console.log("");

console.log("------------------------- step 09 -------------------------");
for (const certificate of professor.certificates) {
  console.log(certificate);
}
