import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
import { DefaultLanguage } from 'src/constants';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.less' ]
})
export class HeaderComponent implements OnInit {
  defaultLanguage = DefaultLanguage;
  user:User

  constructor (public userService:UserService) { }

  async ngOnInit () {
    this.user = await this.userService.me();
  }

  onUserChangedLanguage (newLanguage:string) {
    // Todo: Update language of page
    console.log('[HeaderComponent] onUserChangedLanguage get newLanguage:', newLanguage);
  }

}
