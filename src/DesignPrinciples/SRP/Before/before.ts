import User from "./User";

const user = new User("john@mail.com", "123456789");

user.sendConfirmEmailToken();
user.sendPasswordResetToken();
