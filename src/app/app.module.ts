import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectDashboardComponent } from './modules/project/pages/project-dashboard/project-dashboard.component';
import { ProjectDetailComponent } from './modules/project/pages/project-detail/project-detail.component';
import { ProjectListComponent } from './modules/project/component/project-list/project-list.component';
import { ProjectFormComponent } from './modules/project/component/project-form/project-form.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { Sharedmodule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Sharedmodule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
