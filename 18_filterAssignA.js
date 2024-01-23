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

console.log("--------------------- step 01 --------------------- ");

const tscEmployee = arrayEmployees
  .filter((employee) => employee.emp_company === "TCS")
  .map((employee) => {
    return `Employee name is  ${employee.emp_name} working in ${employee.emp_company}`;
  });

console.log(tscEmployee);

console.log("");
console.log("--------------------- step 02 --------------------- ");

const avg = arrayEmployees.reduce((curr, acc) => {
  return curr + acc.emp_salary;
}, 0);

console.log(avg);

console.log("");
console.log("--------------------- step 03 --------------------- ");

const avgSalary = arrayEmployees
  .filter((employee) => {
    return employee.emp_company === "Wirpo" || employee.emp_company === "Infy";
  })
  .reduce((curr, acc) => {
    return curr + acc.emp_salary;
  }, 0);

console.log(avgSalary);
