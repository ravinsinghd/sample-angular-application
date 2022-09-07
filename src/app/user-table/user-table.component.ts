import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserTableComponent implements OnInit {
  @Input() listOfName: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
