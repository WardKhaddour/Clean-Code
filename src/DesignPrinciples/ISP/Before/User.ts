import Account from "./Account";
import Role from "./Role";

class User extends Account {
  login(email: string, password: string): void {
    console.log("Logging in....");
  }
  changePassword(oldPassword: string, newPassword: string): void {
    console.log("Changing password....");
  }
  changeRole(user: Account, newRole: Role): void {
    throw new Error("User cannot change role !!");
  }
}

export default User;
