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

  getRequest<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  postRequest(url: string, data: any) {
    return this.httpClient.post(url, data);
  }
}
