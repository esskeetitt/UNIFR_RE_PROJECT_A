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
        // For example, navigate to the dashboard page (you can replace this with actual navigation logic)
        // this.router.navigate('dashboard');
      } else {
        this.loginError = true;
      }
    }
}
  