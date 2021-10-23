import { Component, OnInit } from '@angular/core';
import { LogService } from '@app/services/log.service';

@Component({
  selector: 'ngprj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  title = "NGPrj";

  constructor(private logService: LogService) {
    this.logService.log('Adesso sei nella Home');
   }

  ngOnInit(): void {
  }

}
