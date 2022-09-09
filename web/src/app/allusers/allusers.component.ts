import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User, UserResponse } from '../type';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent implements OnInit {
  users: User[] = [];
  name: string = '';
  email: string = '';
  mobile: string = '';
  img: string = '';
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.appService
      .getRequest<UserResponse[]>(
        'https://testlistforng.azurewebsites.net/users/ravin'
      )
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

  addUsers() {
    const data: UserResponse = {
      name: this.name,
      email: this.email,
      profile: { img: this.img, mobileNo: this.mobile },
    };
    this.appService
      .postRequest('https://testlistforng.azurewebsites.net/users/ravin', data)
      .subscribe((res) => {
        console.log(res);
        this.getUsers();
      });
  }
}
