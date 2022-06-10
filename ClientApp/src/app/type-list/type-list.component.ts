import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Type } from '../models/Type';
import { TypeService } from '../type.service';
import { getAllTypes } from '../actions/type.actions';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit, OnDestroy {

  public types: Type[] = [];
  public loading: boolean = false;
  private subject: Subject<any> = new Subject();
  private type$: Observable<{loading: boolean, data: Type[]}>;

  constructor(private typeService: TypeService, private store: Store<{ types: {loading: boolean, data: Type[]} }>) {
    this.type$ = this.store.select('types');
  }

  ngOnInit(): void {
    // this.getAllTypes();
    this.store.dispatch(getAllTypes());
    this.type$.pipe(
      takeUntil(this.subject)
    ).subscribe(({loading, data}) => {
      this.loading = loading;
      this.types = data;
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  // getAllTypes(): void {
  //   this.typeService.getTypes()
  //     .pipe(
  //       takeUntil(this.subject)
  //     )
  //     .subscribe(types => {
  //     this.types = types;
  //   })
  // }

}
