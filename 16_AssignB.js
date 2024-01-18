class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    (this.emp_salary = emp_salary), (this.emp_company = emp_company);
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

console.log(" ");
console.log("----------------------- step 01 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_company === "TCS") {
    console.log(
      `Employee name is ${employee.emp_name} working in ${employee.emp_company}`
    );
  }
}

console.log(" ");
console.log("----------------------- step 02 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_dept === "Finance") {
    console.log(
      `Employee name is ${employee.emp_name} working in ${employee.emp_dept} department`
    );
  }
}

console.log(" ");
console.log("----------------------- step 03 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_name.startsWith("R")) {
    console.log(employee);
  }
}

console.log(" ");
console.log("----------------------- step 04 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_salary > 75000) {
    console.log(
      `Employee name is ${employee.emp_name} working in ${employee.emp_company} and salary is ${employee.emp_salary}`
    );
  }
}

console.log(" ");
console.log("----------------------- step 05 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
    console.log(employee);
  }
}

console.log(" ");
console.log("----------------------- step 06 -----------------------");

for (const employee of arrayEmployees) {
  if (employee.emp_company === "Infy") {
    console.log(employee);
  }
}
