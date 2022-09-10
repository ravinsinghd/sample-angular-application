import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { User, UserResponse } from '../type';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserTableComponent implements OnInit {
  listOfName: string[] = [];
  users: User[] = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUsers();
    this.listOfName = this.appService.getUsers();
    this.appService.dataUpdated.subscribe(() => {
      this.getUsers();
    });
  }
  getUsers() {
    this.appService
      .getRequest<UserResponse[]>('http://localhost:3000/users/ravin')
      .subscribe((users) => {
        this.users = users.map((user) => {
          const updatedUser: User = {
            name: user.name,
            email: user.email,
            mobileNo: user?.profile?.mobileNo,
            img: user?.profile?.img,
          };
          return updatedUser;
        });
      });
  }

  updateData() {
    this.listOfName = this.appService.getUsers();
  }
}
