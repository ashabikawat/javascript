console.log(
  "===================== Print numbers from 5 to 15 ====================="
);

for (var index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(
  "===================== Print numbers from 50 to 40 ====================="
);

for (var index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(
  "===================== Find first 15 odd numbers ====================="
);

var count = 1;
for (var index = 1; count <= 15; index = index + 2) {
  console.log(index);
  count++;
}

console.log(
  "===================== Find first 10 even numbers ====================="
);

for (var index = 2; index <= 20; index = index + 2) {
  console.log(index);
}

console.log("===================== Print table of 5 =====================");

for (var i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

console.log("===================== Print table of 10 =====================");

for (var i = 10; i <= 100; i = i + 10) {
  console.log(i);
}

console.log("===================== Print table of 10 =====================");

for (var i = 100; i >= 10; i = i - 10) {
  console.log(i);
}
