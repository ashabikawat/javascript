console.log("--------------------- step 01 --------------------- ");

function isPalindrome(str) {
  const palindromeStr = str.split("").reverse().join("");
  if (str === palindromeStr) {
    console.log(`${str} is a palindrome string`);
  } else {
    console.log(`${str} is not a palindrome string`);
  }
}

isPalindrome("hello");
isPalindrome("dad");
isPalindrome("madam");

console.log("");
console.log("--------------------- step 02 --------------------- ");

function isAnagram(str1, str2) {
  const fword = str1.split("").sort().join("");
  const sword = str2.split("").sort().join("");
  if (fword === sword) {
    console.log(`${str1} ${str2} is anagram string`);
  } else {
    console.log(`${str1} ${str2} is not anagram string`);
  }
}

isAnagram("silent", "listen");
isAnagram("hello", "world");
isAnagram("much", "such");
