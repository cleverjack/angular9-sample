import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { has } from 'lodash';

const navList = [
  {
    text: 'Home',
    link: '/',
    icon: 'view-dashboard-outline',
  },
  {
    text: 'Policy Guides',
    link: '#',
    icon: 'book-multiple',
  },
  {
    text: 'Filter Quality',
    link: '/filter-quality',
    icon: 'filter-outline',
    subMenu: [
      {
        text: 'Audit Rules',
        link: '/audit-rules',
      },
    ]
  },
  {
    text: 'User Reputation',
    link: '#',
    icon: 'account-check-outline',
  },
  {
    text: 'Reported Content',
    link: '#',
    icon: 'table-of-contents',
  },
  {
    text: 'Transparency Reports',
    link: '#',
    icon: 'chart-bar',
  },
];

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: [ './sub-navigation.component.less' ]
})
export class SubNavigationComponent implements OnInit {
  navList = navList;
  constructor () { }

  @Output() collapseEvent = new EventEmitter<boolean>();

  ngOnInit () {}

  toggleCollapse (event) {
    if (has(event, 'target.checked')) {
      this.collapseEvent.emit(event.target.checked);
    }
  }

}
