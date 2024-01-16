console.log("------------- step 01 -------------");

const arrayNum = [11, 3, 4, 11, 4, 7, 3];

let newArray = [];

for (let i = 0; i < arrayNum.length; i++) {
  if (!newArray.includes(arrayNum[i])) {
    newArray.push(arrayNum[i]);
  }
}
console.log(newArray);

console.log(" ");
console.log("------------- step 02 -------------");

const str1 = "How are you mate";

// console.log(str);

const str = str1.split(" ");
let array = [];
for (let i = 0; i < str.length; i++) {
  let word = str[i];
  let caps =
    word[0].toUpperCase() +
    word.slice(1, word.length - 1) +
    word[word.length - 1].toUpperCase();
  array.push(caps);
}

const result = array.join(" ");
console.log(result);
