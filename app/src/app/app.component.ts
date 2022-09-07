import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-world';
  name = 'ravin';
  list: string[] = [];
  value1 = 2;

  dataChanged(data: string[]) {
    this.list = data;
  }
}
