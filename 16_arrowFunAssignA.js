console.log("----------------------- step 01 -----------------------");

const show = () => console.log("Good morning, Today is thursday");
show();

console.log(" ");
console.log("----------------------- step 02 -----------------------");

const multiplication = (x, y, z = 1) => {
  const result = x * y * z;
  console.log(`Multiplication of the given values is ${result}`);
};

multiplication(5, 5, 2);
multiplication(10, 4);

console.log(" ");

console.log("----------------------- step 03 -----------------------");

const addition = (a, b, c, d, e) => {
  const result = a + b + c + d + e;
  return `Addition of the given values is ${result}`;
};

console.log(addition(100, 100, 200, 349, 756));
console.log(addition("I am", " learning", " ES6", " features", " in depth"));
