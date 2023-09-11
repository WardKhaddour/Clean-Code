import User from "./User";

class AdminModerator extends User {
  constructor(name: string, email: string) {
    super(name, email);
  }
}

export default AdminModerator;
