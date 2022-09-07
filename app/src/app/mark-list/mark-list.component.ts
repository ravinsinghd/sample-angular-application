import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html',
  styleUrls: ['./mark-list.component.scss'],
})
export class MarkListComponent implements OnInit {
  rowClass = 'row';
  markList = [
    {
      studentName: 'Stu1',
      examStatus: 'appeared',
      mark: 90,
    },
    {
      studentName: 'Stu2',
      examStatus: 'appeared',
      mark: 30,
    },
    {
      studentName: 'Stu3',
      examStatus: 'Not appeared',
      mark: null,
    },
    {
      studentName: 'Stu1',
      examStatus: 'appeared',
      mark: 80,
    },
    {
      studentName: 'Stu1',
      examStatus: 'appeared',
      mark: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
