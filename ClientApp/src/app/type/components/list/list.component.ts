import { Component, Input, OnInit } from '@angular/core';
import { DataItem } from '../../models/dataList';

@Component({
  selector: 'type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() dataList: DataItem[] = [];
  constructor() {}

  ngOnInit(): void {}
}
