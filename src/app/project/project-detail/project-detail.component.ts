import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project!: Project;

  constructor(
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService
    ) {  }

  ngOnInit(): void {
    // const id = this.activateRoute.snapshot.paramMap.get('id');
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));
    })
  }

}
