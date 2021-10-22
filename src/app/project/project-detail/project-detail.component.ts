import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    // console.log(this.activateRoute.snapshot.paramMap.get('id'));
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.projectService.get(+id!).subscribe(data => console.log(data))
  }

}
