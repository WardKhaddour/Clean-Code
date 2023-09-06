abstract class Employee {
  constructor(public name: string, public id: number) {}

  abstract calcSalary(): number;
  abstract manageTeam(): void;
}

export default Employee;
