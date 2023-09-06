import Account from "./Account";
import IRoleManagement from "./IRoleManagement";
import Role from "./Role";

class Admin extends Account implements IRoleManagement {
  login(email: string, password: string): void {
    console.log("Logging in....");
  }
  changePassword(oldPassword: string, newPassword: string): void {
    console.log("Changing password....");
  }
  changeRole(user: Account, newRole: Role): void {
    console.log("Changing role....");
  }
}

export default Admin;
