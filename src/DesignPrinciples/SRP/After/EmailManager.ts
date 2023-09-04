class EmailManager {
  sendEmail(email: string, content: string) {
    console.log(`
      Hello, ${email}
      ${content}`);
  }
}

export default EmailManager;
