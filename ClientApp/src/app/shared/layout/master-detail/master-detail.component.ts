import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/types/Link';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  @Input() links: Link[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
