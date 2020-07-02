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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
