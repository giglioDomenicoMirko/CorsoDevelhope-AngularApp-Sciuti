import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Sharedmodule } from "@app/shared/shared.module";
import { ProjectFormComponent } from "./component/project-form/project-form.component";
import { ProjectListComponent } from "./component/project-list/project-list.component";
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectRoutingModule } from "./project-routing.module";

@NgModule ({
    declarations: [
        ProjectDashboardComponent,
        ProjectDetailComponent,
        ProjectListComponent,
        ProjectFormComponent
    ],
    imports: [
        Sharedmodule,
        CommonModule,
        FormsModule,
        ProjectRoutingModule
    ]
})
export class ProjectModule {}