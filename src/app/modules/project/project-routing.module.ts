import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";

const routes: Routes = [
    {
        path: 'projects',
        children: [
            { path:'detail/:id', component: ProjectDetailComponent },
            { path:'', component: ProjectDashboardComponent }
        ]
    }
    
    /* // la parte sottostante viene sositutita da quella sopra
    { path:'projects/detail/:id', component: ProjectDetailComponent },
    { path:'projects', component: ProjectDashboardComponent },
    { path: '**', redirectTo: '/home' } /* NON DOVREBBE STARE QUA LA WILDCARD MA PER FARLA FUNZIONARE MOMENTANEAMENTE LA INSERIAMO IN QUESTO PUNTO DELLA CODEBASE */
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule {}