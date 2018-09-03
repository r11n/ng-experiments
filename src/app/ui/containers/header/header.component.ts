import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.png';
  public title = 'GreyCampus';
  public links = [{
    label: 'blog',
    url: '/blog',
  }];
  constructor() { }

  ngOnInit() {
  }

}
