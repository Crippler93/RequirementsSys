import { Component, OnInit } from '@angular/core';
import { Link } from '../types/Link';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {
  links: Link[] = [{ route: ['list'], name: 'List' }, { route: ['new'], name: 'Create' }]

  constructor() { }

  ngOnInit(): void {
  }

}
