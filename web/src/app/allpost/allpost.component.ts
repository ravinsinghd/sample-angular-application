import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.scss'],
})
export class AllpostComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getRequest('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
