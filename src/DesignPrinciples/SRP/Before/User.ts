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

  sendConfirmEmailToken() {
    this.generateConfirmEmailToken();

    console.log(`
    Hello, ${this.email}
    You email confirmation token is: ${this.confirmEmailToken}`);
  }

  sendPasswordResetToken() {
    this.generateResetPasswordToken();
    console.log(`
    Hello, ${this.email}
    You password reset token is: ${this.resetPasswordToken}`);
  }
}

export default User;
