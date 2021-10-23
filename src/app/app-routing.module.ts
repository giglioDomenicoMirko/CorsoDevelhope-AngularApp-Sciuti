import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { ProjectDashboardComponent } from './project/project-dashboard/project-dashboard.component';
import { ProjectDetailComponent } from './modules/project/pages/project-detail/project-detail.component';

const routes: Routes = [
    { path:'projects/detail/:id', component: ProjectDetailComponent },
    { path:'projects', component: ProjectDashboardComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }