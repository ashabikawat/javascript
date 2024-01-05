function marriageEligibilityChecker(gender, age) {
  if (gender === "male" && age >= 21) {
    console.log(
      `You are ${gender} and your age is ${age}. So, you are eligible for marriage`
    );
  } else if (gender === "female" && age >= 18) {
    console.log(
      `You are ${gender} and your age is ${age}. So, you are eligible for marriage`
    );
  } else if (gender === "others") {
    console.log(
      `You are ${gender} and your age is ${age}. same caste marriages are not allowed for marriage`
    );
  } else {
    console.log(
      `You are ${gender} and your age is ${age}. So, you are not eligible for marriage`
    );
  }
}

marriageEligibilityChecker("male", 17);
marriageEligibilityChecker("male", 25);
marriageEligibilityChecker("female", 28);
marriageEligibilityChecker("female", 16);
marriageEligibilityChecker("others", 35);
marriageEligibilityChecker("others", 41);
