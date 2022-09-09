import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { user } from '../type';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent implements OnInit {
  users: user[] = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getRequest<user[]>('http://localhost:3000/users/ravin')
      .subscribe((users) => {
        this.users = users;
        console.log(this.users);
      });
  }

  addUsers() {
    const data: user = {
      name: '',
      email: '',
      profile: { img: '', mobileNo: '' },
    };
    this.appService
      .postRequest('http://localhost:3000/users/ravin', data)
      .subscribe((res) => {});
  }
}
