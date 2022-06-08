import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Type } from '../models/Type';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit, OnDestroy {

  public types: Type[] = [];
  private subject: Subject<any> = new Subject();

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.getAllTypes();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  getAllTypes(): void {
    this.typeService.getTypes()
      .pipe(
        takeUntil(this.subject)
      )
      .subscribe(types => {
      this.types = types;
    })
  }

}
