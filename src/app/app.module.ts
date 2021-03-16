import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { appRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, appRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
