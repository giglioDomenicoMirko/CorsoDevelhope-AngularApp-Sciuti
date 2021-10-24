import { NgModule } from "@angular/core";
import { Sharedmodule } from "@app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        Sharedmodule,
        DashboardRoutingModule
    ]
})
export class DashboardModule {}