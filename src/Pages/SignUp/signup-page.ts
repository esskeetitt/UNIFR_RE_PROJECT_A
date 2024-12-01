export class SignupPage {
    username: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    signupError: string = '';
  
    // Function to handle signup action (this will be implemented later)
    signup() {
      if (this.password !== this.confirmPassword) {
        this.signupError = 'Passwords do not match!';
        return;
      }
      // Call your signup logic here (e.g., API request)
      console.log('Sign Up Successful!');
      // Clear the fields after successful sign up
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
  