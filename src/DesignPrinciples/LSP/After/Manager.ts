import Employee from "./Employee";

abstract class Manager extends Employee {
  abstract manageTeam(): void;
}

export default Manager;
