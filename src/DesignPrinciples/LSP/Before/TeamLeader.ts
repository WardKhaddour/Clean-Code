import Employee from "./Employee";

class TeamLeader extends Employee {
  calcSalary(): number {
    return 5000;
  }
  manageTeam(): void {
    console.log("Managing Team ...");
  }
}

export default TeamLeader;
