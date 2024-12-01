/* src/my-app.ts */
import { SignupPage } from './Pages/SignUp/signup-page';
import { LoginPage } from './Pages/Login/login-page';
import { GradesPage } from './Pages/GradesPage/grades-page';
import { CoursesPage } from './Pages/CoursesPage/courses-page';
import { BillsPage } from './Pages/BillsPage/bills-page';
import { WelcomePage } from './Pages/WelcomePage/welcome-page';
import { SchedulePage } from './Pages/SchedulePage/schedule-page';

export class MyApp {
  // Define routes using static routes property
  static routes = [
    { path: '', component: WelcomePage, title: 'Welcome' },
    { path: 'signup', component: SignupPage, title: 'Signup' },
    { path: 'login', component: LoginPage, title: 'Login' },
    { path: 'grades', component: GradesPage, title: 'Grades' },
    { path: 'courses', component: CoursesPage, title: 'Courses' },
    { path: 'bills', component: BillsPage, title: 'Bills' },
    { path: 'schedule', component: SchedulePage, title: 'Schedule' },
  ];
}
