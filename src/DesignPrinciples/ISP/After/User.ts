import Account from "./Account";

class User extends Account {
  login(email: string, password: string): void {
    console.log("Logging in....");
  }
  changePassword(oldPassword: string, newPassword: string): void {
    console.log("Changing password....");
  }
}

export default User;
