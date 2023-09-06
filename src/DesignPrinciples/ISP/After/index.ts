import Admin from "./Admin";
import Role from "./Role";
import User from "./User";

const user = new User("User", "user@mail.com", "12345678", Role.User);

const admin = new Admin("Admin", "admin@mail.com", "12345678", Role.Admin);

// user.changeRole(user, Role.Admin);
admin.changeRole(user, Role.Admin);
