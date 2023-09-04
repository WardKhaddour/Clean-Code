class User {
  email: string;
  password: string;
  confirmEmailToken: string | undefined;
  resetPasswordToken: string | undefined;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  generateConfirmEmailToken() {
    this.confirmEmailToken = "123456789";
  }

  generateResetPasswordToken() {
    this.resetPasswordToken = "123456789";
  }
}

export default User;
