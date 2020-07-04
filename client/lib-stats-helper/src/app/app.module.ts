import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AccessServicesComponent } from "./access-services/access-services.component";
import { EducationComponent } from "./education/education.component";
import { ResourceComponent } from "./resource/resource.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { InterlibraryComponent } from "./interlibrary/interlibrary.component";
import { TechnicalComponent } from "./technical/technical.component";
import { ElectronicComponent } from "./electronic/electronic.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AddNewComponent } from './access-services/add-new/add-new.component';
import { ViewPastComponent } from './access-services/view-past/view-past.component';
import { YearlyStatComponent } from './yearly-stat/yearly-stat.component';
import { ViewPastEducationComponent } from './education/view-past-education/view-past-education.component';
import { AddNewEducationComponent } from './education/add-new-education/add-new-education.component';
import { AddNewResourceComponent } from './resource/add-new-resource/add-new-resource.component';
import { ViewPastResourceComponent } from './resource/view-past-resource/view-past-resource.component';
import { AddNewMarketingComponent } from './marketing/add-new-marketing/add-new-marketing.component';
import { ViewPastMarketingComponent } from './marketing/view-past-marketing/view-past-marketing.component';
import { AddNewInterlibraryComponent } from './interlibrary/add-new-interlibrary/add-new-interlibrary.component';
import { ViewPastInterlibraryComponent } from './interlibrary/view-past-interlibrary/view-past-interlibrary.component';
import { AddNewTechnicalComponent } from './technical/add-new-technical/add-new-technical.component';
import { ViewPastTechnicalComponent } from './technical/view-past-technical/view-past-technical.component';
import { AddNewElectronicComponent } from './electronic/add-new-electronic/add-new-electronic.component';
import { ViewPastElectronicComponent } from './electronic/view-past-electronic/view-past-electronic.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessServicesComponent,
    EducationComponent,
    ResourceComponent,
    MarketingComponent,
    InterlibraryComponent,
    TechnicalComponent,
    ElectronicComponent,
    HomeComponent,
    LoginComponent,
    AddNewComponent,
    ViewPastComponent,
    YearlyStatComponent,
    ViewPastEducationComponent,
    AddNewEducationComponent,
    AddNewResourceComponent,
    ViewPastResourceComponent,
    AddNewMarketingComponent,
    ViewPastMarketingComponent,
    AddNewInterlibraryComponent,
    ViewPastInterlibraryComponent,
    AddNewTechnicalComponent,
    ViewPastTechnicalComponent,
    AddNewElectronicComponent,
    ViewPastElectronicComponent,
    LogOutComponent,
    RegisterUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
