import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Type } from '../../models/Type';
import { getAllTypes } from '../../state/type.actions';
import { DataItem } from '../../models/dataList';
import { ListState, TypeStorage } from '../../models/TypeStorage';
import { selectFeatureList } from '../../state/type.selectors';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent implements OnInit, OnDestroy {
  public types: DataItem[] = [];
  public loading: boolean = false;
  private subject: Subject<any> = new Subject();
  private type$: Observable<ListState>;

  constructor(private store: Store<TypeStorage>) {
    this.type$ = this.store.select(selectFeatureList);
  }

  ngOnInit(): void {
    this.store.dispatch(getAllTypes());
    this.type$.pipe(takeUntil(this.subject)).subscribe(({loading, data}) => {
      this.loading = loading;
      this.types = data.map((type: Type) => ({ item: type.typeName, id: type.typeID ?? 0 }));
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }
}
