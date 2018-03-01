import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jb-site-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  buttonTitles = ['Identity', 'Work', 'Hobbies', 'Keep in touch'];
  constructor() { }

  ngOnInit() {
  }

}
