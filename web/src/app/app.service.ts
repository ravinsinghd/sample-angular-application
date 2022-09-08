import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  users: string[] = [];
  constructor() {}

  addUsers(user: string) {
    this.users.push(user);
  }

  getUsers() {
    return [...this.users];
  }
}
