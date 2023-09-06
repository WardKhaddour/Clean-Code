abstract class Employee {
  constructor(public name: string, public id: number) {}

  abstract calcSalary(): number;
}

export default Employee;
