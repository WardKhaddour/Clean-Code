import Employee from "./Employee";

class RegularEmployee extends Employee {
  calcSalary() {
    return 3000;
  }
}

export default RegularEmployee;
