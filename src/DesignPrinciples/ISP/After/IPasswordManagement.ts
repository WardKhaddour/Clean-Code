interface IPasswordManagement {
  changePassword(oldPassword: string, newPassword: string): void;
}
export default IPasswordManagement;
