import { Component, OnInit } from '@angular/core';
import { Link } from '../types/Link';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  links: Link[] = [{ route: ['list'], name: 'List' }, { route: ['new'], name: 'Create' }]
  constructor() { }

  ngOnInit(): void {
  }

}
