import Role from "./Role";
import User from "./User";

const adminRole = new Role("admin");
const userRole = new Role("user");
const moderatorRole = new Role("moderator");

const admin = new User("john", "john@mail.com", [adminRole]);

const moderator = new User("jane", "jane@mail.com", [moderatorRole]);

const adminAndModerator = new User("jack", "jack@mail.com", [
  adminRole,
  moderatorRole,
]);
