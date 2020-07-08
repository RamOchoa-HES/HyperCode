import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

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
import { AddNewComponent } from "./access-services/add-new/add-new.component";
import { ViewPastComponent } from "./access-services/view-past/view-past.component";
import { YearlyStatComponent } from "./yearly-stat/yearly-stat.component";
import { AddNewEducationComponent } from "./education/add-new-education/add-new-education.component";
import { ViewPastEducationComponent } from "./education/view-past-education/view-past-education.component";
import { AddNewResourceComponent } from "./resource/add-new-resource/add-new-resource.component";
import { ViewPastResourceComponent } from "./resource/view-past-resource/view-past-resource.component";
import { AddNewMarketingComponent } from "./marketing/add-new-marketing/add-new-marketing.component";
import { ViewPastMarketingComponent } from "./marketing/view-past-marketing/view-past-marketing.component";
import { AddNewInterlibraryComponent } from "./interlibrary/add-new-interlibrary/add-new-interlibrary.component";
import { ViewPastInterlibraryComponent } from "./interlibrary/view-past-interlibrary/view-past-interlibrary.component";
import { AddNewTechnicalComponent } from "./technical/add-new-technical/add-new-technical.component";
import { ViewPastTechnicalComponent } from "./technical/view-past-technical/view-past-technical.component";
import { AddNewElectronicComponent } from "./electronic/add-new-electronic/add-new-electronic.component";
import { ViewPastElectronicComponent } from "./electronic/view-past-electronic/view-past-electronic.component";
import { LogOutComponent } from "./log-out/log-out.component";

export const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "access/add", component: AddNewComponent },
  { path: "access/view", component: ViewPastComponent },
  { path: "access", component: AccessServicesComponent },
  { path: "marketing/add", component: AddNewEducationComponent },
  { path: "marketing/view", component: ViewPastEducationComponent },
  { path: "marketing", component: EducationComponent },
  { path: "research/add", component: AddNewResourceComponent },
  { path: "research/view", component: ViewPastResourceComponent },
  { path: "research", component: ResourceComponent },
  { path: "education/add", component: AddNewMarketingComponent },
  { path: "education/view", component: ViewPastMarketingComponent },
  { path: "education", component: MarketingComponent },
  { path: "interlibrary/add", component: AddNewInterlibraryComponent },
  { path: "interlibrary/view", component: ViewPastInterlibraryComponent },
  { path: "interlibrary", component: InterlibraryComponent },
  { path: "technical/add", component: AddNewTechnicalComponent },
  { path: "technical/view", component: ViewPastTechnicalComponent },
  { path: "technical", component: TechnicalComponent },
  { path: "electronic/add", component: AddNewElectronicComponent },
  { path: "electronic/view", component: ViewPastElectronicComponent },
  { path: "electronic", component: ElectronicComponent },
  { path: "yearly", component: YearlyStatComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
