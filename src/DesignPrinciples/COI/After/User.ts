import Role from "./Role";

class User {
  constructor(
    public name: string,
    public email: string,
    public roles: Role[]
  ) {}
}

export default User;
