import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserFormComponent implements OnInit {
  name = '';
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  buttonClick() {
    this.appService.addUsers(this.name);
    this.name = '';
  }
}
