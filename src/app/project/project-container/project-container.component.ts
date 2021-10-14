import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectComponent implements OnInit {

  selectedProject!: Project;

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
    });
  }
 
  selectProject(project: Project) {
    this.selectedProject = this.projectService.get(project.id);
  }
  
  submitProjectForm(project: Project) {
    this.projectService.add(project);
    // this.projects.push({
    //   ...project,
    //   id: this.projects.length,
    //   code: Math.random().toString(36).replace('0.', '').substring(2, 9),
    //   done: false,
    // });
  }


}
