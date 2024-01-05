var interview = function (gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log(`${candidateName} , You are eligible for the interview`);
  } else {
    console.log(
      `${candidateName} , Unfortunately you are not eligible for the interview`
    );
  }
};

interview(80, 86, 90, "Asha");
interview(70, 65, 55, "Raj");
interview(60, 79, 88, "Tina");
