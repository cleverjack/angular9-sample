/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnoseSearchParams } from 'src/constants';

const ENTER_KEY_CODE = 13;
const DIAGNOSE_URL = '/filter-quality/audit-rules/diagnose';

@Component({
  selector: 'app-main-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.less' ]
})
export class SearchComponent implements OnInit {
  keyWord = '';

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {
    // initialize keyword value by url
    this.route.queryParams.subscribe(params => {
      let keyWord = '';
      if (params.hasOwnProperty(DiagnoseSearchParams)) {
        keyWord = params[DiagnoseSearchParams];
      }

      this.keyWord = keyWord;
    });
  }

  ngOnInit () {
  }

  // binding Enter press to onSearch()
  onKey ($event) {
    if ($event.keyCode === ENTER_KEY_CODE && this.keyWord.trim()) {
      this.onSearch();
    }
  }

  onSearch () {
    this.router.navigate([ DIAGNOSE_URL ], {
      queryParams: {
        [DiagnoseSearchParams]: this.keyWord
      }
    });
  }
}
