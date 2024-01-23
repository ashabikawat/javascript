class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    (this.emp_salary = emp_salary), (this.emp_company = emp_company);
  }

  getDetails() {
    console.log(
      `Employee name is ${this.emp_name} working in ${this.emp_company} with id ${this.emp_id} in ${this.emp_dept} department having salary of rs.${this.emp_salary}`
    );
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log("--------------------- step 01 --------------------- ");

// const wiproEmployees = arrayEmployees
//   .filter((employee) => {
//     return employee.emp_company === "Wipro";
//   })
//   .map((employee) => {
//     return employee.getDetails();
//   });

const wiproEmployees = arrayEmployees.filter((employee) => {
  return employee.emp_company === "Wipro";
});

for (employe of wiproEmployees) {
  console.log(
    `Employee name is ${employe.emp_name} working in ${employe.emp_company} with id ${employe.emp_id} in ${employe.emp_dept} department having salary of rs.${employe.emp_salary}`
  );
}

console.log("");
console.log("--------------------- step 02 --------------------- ");

const hrItDept = arrayEmployees
  .filter((employee) => {
    return employee.emp_dept === "IT" || employee.emp_dept === "HR";
  })
  .map((employee) => {
    return employee.getDetails();
  });

console.log("");
console.log("--------------------- step 03 --------------------- ");

const idGt50 = arrayEmployees
  .filter((employee) => {
    return employee.emp_id > 50;
  })
  .map((employee) => {
    employee.getDetails();
  });

console.log("");
console.log("--------------------- step 04 --------------------- ");

const nameVowels = arrayEmployees
  .filter((employee) => {
    return (
      employee.emp_name.startsWith("A") ||
      employee.emp_name.startsWith("V") ||
      employee.emp_name.startsWith("M")
    );
  })
  .map((employee) => {
    employee.getDetails();
  });

console.log("");
console.log("--------------------- step 05 --------------------- ");

const avgSalary = arrayEmployees.reduce((curr, acc) => {
  return curr + acc.emp_salary / arrayEmployees.length;
}, 0);

console.log(avgSalary);

console.log("");
console.log("--------------------- step 06 --------------------- ");

const itSalary = arrayEmployees.filter((employee) => {
  return employee.emp_dept === "IT";
});
//   .map((employee) => {
//     return employee.getDetails();
//   });

const avgItSalary = itSalary.reduce((curr, acc) => {
  return curr + acc.emp_salary / itSalary.length;
}, 0);

console.log(avgItSalary);
