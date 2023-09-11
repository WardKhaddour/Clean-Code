import User from "./User";

class Moderator extends User {
  constructor(name: string, email: string) {
    super(name, email);
  }
}

export default Moderator;
