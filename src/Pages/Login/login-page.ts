export class LoginPage {
    public username: string = '';
    public password: string = '';
    public loginError: boolean = false;
  
    login() {
      // Dummy check for username and password
      if (this.username === 'user' && this.password === 'password') {
        this.loginError = false;
        // Redirect to another page after successful login
        console.log('Logged in successfully!');
      } else {
        this.loginError = true;
      }
    }
}
  