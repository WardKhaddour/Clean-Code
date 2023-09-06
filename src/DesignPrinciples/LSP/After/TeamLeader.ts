import Manager from "./Manager";

class TeamLeader extends Manager {
  calcSalary(): number {
    return 5000;
  }
  manageTeam(): void {
    console.log("Managing Team ...");
  }
}

export default TeamLeader;
