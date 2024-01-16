// meowing(){ // Method Overriding which Runtime Polymorphism
//     console.log(`Baby Cat is meowing and asking for milk`);
//     console.log(`Eye color: ${this.eyeColor} and Total legs is: ${this.totalLegs}`);
//     console.log(`Body color: ${this.bodyColor} and name is: ${this.name}`);
// }

// Polymorphism: The ability to act in more than one form
// 1. Compile Time Polymorphism: Method Overloading
// 2. Run time Polymorphism: Method Overriding

class Student {
  constructor(rollNo, name) {
    this.rollNo = rollNo;
    this.name = name;
  }
  marks(maths, physics) {
    // console.log(`maths: ${maths}, ${physics}`);
    console.log(arguments);
    console.log(typeof arguments);
    console.log(this);
    if (arguments.length == 2) {
      console.log(` Addition of marks is: ${maths + physics}`);
    }
    if (arguments.length == 1 || physics == undefined) {
      console.log(` Addition of marks is: ${maths + 0}`);
    }
    console.log(`==================`);
  }
}
const jenny = new Student(11, "Jenny");
console.log(jenny);
jenny.marks(89, 91);
jenny.marks(60);
