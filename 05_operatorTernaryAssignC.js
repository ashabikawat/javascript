console.log("========================== step 01 ==========================");

function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender === "male" && age >= 21
      ? `Hey ${boyName}, you are eligible for marriage`
      : `Not eligible for marriage`;

  return result;
}

console.log(maleMarriageEligibility("male", 25, "Bill gates"));
console.log(maleMarriageEligibility("male", 17, "Steve Jobs"));

console.log("========================== step 02 ==========================");
function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender === "female" && age <= 18
      ? `Hey ${girlName}, you are eligible for marriage`
      : `Not eligible for marriage`;

  return result;
}

console.log(femaleMarriageEligibility("female", 16, "jenifer"));
console.log(femaleMarriageEligibility("female", 27, "malinda"));
