import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthguardService } from './loginpage/authguard.service';
import { RegistrationComponent } from './registration/registration.component';
import { UserTableComponent } from './registration/user-table/user-table.component';
import { UserEditComponent } from './registration/user-edit/user-edit.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: "login", component: LoginpageComponent },
 
  { path: "home", component: WelcomepageComponent },
  {
    path: "Registration",
    component: RegistrationComponent,
    canActivate: [AuthguardService],
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: UserTableComponent },
      { path: "new", component: UserEditComponent },
      { path: ":id/edit", component: UserEditComponent },
    ],
  },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
