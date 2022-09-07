import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserFormComponent implements OnInit {
  @Output() arrayChanged = new EventEmitter();

  name = '';
  listOfNames: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.listOfNames.push(this.name);
    this.name = '';
    this.arrayChanged.emit(this.listOfNames);
  }
}
