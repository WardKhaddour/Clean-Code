import IPasswordManagement from "./IPasswordManagement";
import IUserManagement from "./IUserManagement";
import Role from "./Role";

abstract class Account implements IUserManagement, IPasswordManagement {
  constructor(
    protected name: string,
    protected email: string,
    protected password: string,
    protected role: Role
  ) {}
  abstract login(email: string, password: string): void;
  abstract changePassword(oldPassword: string, newPassword: string): void;
}

export default Account;
