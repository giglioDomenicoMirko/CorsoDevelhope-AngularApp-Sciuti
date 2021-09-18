import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngprj-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  label = 'Io sono una label';

  constructor() {
    setTimeout(
      () => this.label = 'Io sono una label aggiornata'
      ,3000);
  }

  ngOnInit(): void {
  }

}
