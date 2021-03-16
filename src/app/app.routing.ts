import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];
export const appRoutingModule = RouterModule.forRoot(routes);
