import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit, OnDestroy {
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.count = this.count + 1;
  }
  ngOnDestroy() {
    console.log('destroy', this.count);
  }
}
