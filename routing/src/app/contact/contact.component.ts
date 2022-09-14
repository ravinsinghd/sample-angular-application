import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private router: Router) {}
  contacts = [
    { id: 1, name: 'users1', mobile: 98765 },
    { id: 2, name: 'users2', mobile: 987654 },
    { id: 3, name: 'users3', mobile: 9876543 },
  ];

  editContact(contact: any) {
    this.router.navigate([`edit-contact/${contact.id}`]);
  }
}
