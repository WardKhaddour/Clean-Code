import Employee from "./Employee";
import RegularEmployee from "./RegularEmployee";
import TeamLeader from "./TeamLeader";

const teamLeader: Employee = new TeamLeader("Team Leader", 1);
const regularEmployee: Employee = new RegularEmployee("Employee", 2);

console.log(teamLeader.calcSalary());
console.log(regularEmployee.calcSalary());
teamLeader.manageTeam();

// Allowed, but throws an error
regularEmployee.manageTeam();
