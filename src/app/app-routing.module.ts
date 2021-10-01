import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProjectComponent } from './project/project-container/project-container.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path:'projects', component: ProjectComponent}
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