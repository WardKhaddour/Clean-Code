import EmailManager from "./EmailManager";
import User from "./User";

const user = new User("john@mail.com", "123456789");

const emailManager = new EmailManager();

user.generateConfirmEmailToken();
emailManager.sendEmail(
  user.email,
  `Your email confirmation token is: ${user.confirmEmailToken}`
);

user.generateResetPasswordToken();
emailManager.sendEmail(
  user.email,
  `Your password reset token is: ${user.resetPasswordToken}`
);
