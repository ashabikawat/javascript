function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

console.log(` 2 is Prime Number ==> ${isPrime(2)}`);
console.log(` 5 is Prime Number ==> ${isPrime(5)}`);
console.log(` 9 is Prime Number ==> ${isPrime(9)}`);
console.log(` 11 is Prime Number ==> ${isPrime(11)}`);
console.log(` 19 is Prime Number ==> ${isPrime(19)}`);
