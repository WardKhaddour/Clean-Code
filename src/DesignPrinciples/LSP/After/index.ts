import Employee from "./Employee";
import Manager from "./Manager";
import RegularEmployee from "./RegularEmployee";
import TeamLeader from "./TeamLeader";

const teamLeader: Manager = new TeamLeader("Team Leader", 1);
const regularEmployee: Employee = new RegularEmployee("Regular Employee", 2);

console.log(teamLeader.calcSalary());
console.log(regularEmployee.calcSalary());
teamLeader.manageTeam();
// regularEmployee.manageTeam(); NOT ALLOWED!!
