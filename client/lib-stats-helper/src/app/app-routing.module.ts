import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AccessServicesComponent } from "./access-services/access-services.component";
import { EducationComponent } from "./education/education.component";
import { ResourceComponent } from "./resource/resource.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { InterlibraryComponent } from "./interlibrary/interlibrary.component";
import { TechnicalComponent } from "./technical/technical.component";
import { ElectronicComponent } from "./electronic/electronic.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "access", component: AccessServicesComponent },
  { path: "education", component: EducationComponent },
  { path: "resource", component: ResourceComponent },
  { path: "marketing", component: MarketingComponent },
  { path: "interlibrary", component: InterlibraryComponent },
  { path: "technical", component: TechnicalComponent },
  { path: "electronic", component: ElectronicComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
