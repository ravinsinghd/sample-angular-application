import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getRequest('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
