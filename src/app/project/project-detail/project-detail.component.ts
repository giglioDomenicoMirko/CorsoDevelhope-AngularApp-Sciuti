import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project!: Partial<Project>;

  constructor() {
    this.project = {id: 1, name: 'prova'};
  }

  ngOnInit(): void {
  }

}
