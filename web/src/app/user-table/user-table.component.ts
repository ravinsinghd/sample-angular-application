import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserTableComponent implements OnInit {
  listOfName: string[] = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.listOfName = this.appService.getUsers();
  }
  updateData() {
    this.listOfName = this.appService.getUsers();
  }
}
