import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value = 0;

  constructor() {}

  ngOnInit(): void {
    console.log('oninit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {}
}
