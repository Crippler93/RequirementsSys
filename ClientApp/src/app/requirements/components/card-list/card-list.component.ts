import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Requirement } from '../../state/requirements.state';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() requirements: Requirement[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
