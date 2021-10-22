import { Component/* , OnDestroy */, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable/* , Subscription */ } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})

export class ProjectComponent implements OnInit/* , OnDestroy */ {

  // subscription!: Subscription;
  // selectedProject!: Project;
  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }
 
  selectProject(project: Project) {
    // this.subscription = this.projectService.get(project.id).subscribe(data => {
    //   this.selectedProject = data;
    // })
    this.router.navigate(['/projects', 'detail', project.id]);
  }
  
  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll());
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
