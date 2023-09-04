import User from "./User";

const user = new User("John", "john@mail.com");

user.sendConfirmEmailToken();
user.sendPasswordResetToken();
