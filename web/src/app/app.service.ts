import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  users: string[] = [];
  constructor(private httpClient: HttpClient) {}

  addUsers(user: string) {
    this.users.push(user);
  }

  getUsers() {
    return [...this.users];
  }

  getRequest(url: string) {
    return this.httpClient.get(url);
  }
}
