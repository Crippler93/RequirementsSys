import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  selectedMenu: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isActive(menuName: string): boolean {
    return this.selectedMenu === menuName;
  }

  selectMenu(name: string): void {
    this.selectedMenu = name;
  }

}
