console.log(
  "============================= Step 1 ============================="
);

function greet() {
  console.log("Hello World, How are you?");
}

greet();

function education() {
  console.log("Pursuing Web Development.");
}

education();

console.log(
  "============================= Step 2 ============================="
);

function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "My full name is",
    firstName,
    lastName,
    "and my college name is",
    collegeName
  );
}

personalDetails("Asha", "Bikawat", "E.B.Madhavi sr.college");

console.log(
  "============================= Step 3 ============================="
);

function swapValues(a, b) {
  console.log("Before swap values are :", a, b);
  var temp = a;
  a = b;
  b = temp;
  console.log("After swap values are :", a, b);
}

swapValues("virat", "anushka");
swapValues(1000, 2000);

console.log(
  "============================= Step 4 ============================="
);

function addThreeValues(x, y, z) {
  console.log(x + y + z);
}

addThreeValues(10.23, 600, 40);
addThreeValues("hello", "good", "morning");
