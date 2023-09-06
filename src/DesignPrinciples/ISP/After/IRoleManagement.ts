import Role from "./Role";
import Account from "./Account";

interface IRoleManagement {
  changeRole(user: Account, newRole: Role): void;
}

export default IRoleManagement;
