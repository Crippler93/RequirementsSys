import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataItem } from '../../models/dataList';
import { deleteType } from '../../state/type.actions';

@Component({
  selector: 'type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() dataList: DataItem[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteType(id: any): void {
    this.store.dispatch(deleteType({payload: id}));
  }
}
