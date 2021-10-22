import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Project } from '@app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  // @Input() project!: Project;
  project$!: Observable<Project>;

  constructor(
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService
    ) {  }

  ngOnInit(): void {
    this.project$ = this.activateRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(+params.get('id')!))
    )/* .subscribe(data => console.log(data)) */
  }

}
