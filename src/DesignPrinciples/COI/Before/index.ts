import Admin from "./Admin";
import AdminModerator from "./AdminModerator";
import Moderator from "./Moderator";

const admin = new Admin("john", "john@mail.com");

const moderator = new Moderator("jane", "jane@mail.com");

const adminAndModerator = new AdminModerator("jack", "jack@mail.com");
