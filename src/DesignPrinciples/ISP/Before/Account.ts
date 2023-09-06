import IAccount from "./IAccount";
import Role from "./Role";

abstract class Account implements IAccount {
  constructor(
    protected name: string,
    protected email: string,
    protected password: string,
    protected role: Role
  ) {}
  abstract login(email: string, password: string): void;
  abstract changePassword(oldPassword: string, newPassword: string): void;
  abstract changeRole(user: Account, newRole: Role): void;
}

export default Account;
