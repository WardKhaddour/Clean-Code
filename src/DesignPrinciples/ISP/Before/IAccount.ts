import Account from "./Account";
import Role from "./Role";

interface IAccount {
  login(email: string, password: string): void;
  changePassword(oldPassword: string, newPassword: string): void;
  changeRole(user: Account, newRole: Role): void;
}

export default IAccount;
