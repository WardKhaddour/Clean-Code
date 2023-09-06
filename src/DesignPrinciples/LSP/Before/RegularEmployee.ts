import Employee from "./Employee";

class RegularEmployee extends Employee {
  calcSalary() {
    return 3000;
  }
  manageTeam(): void {
    throw new Error("Regular Employee can't manage team!");
  }
}

export default RegularEmployee;
