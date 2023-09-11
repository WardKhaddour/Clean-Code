import User from "./User";

class Admin extends User {
  constructor(name: string, email: string) {
    super(name, email);
  }
}

export default Admin;
