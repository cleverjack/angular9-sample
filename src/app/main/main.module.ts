import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { A11yFlyoutComponent } from './a11y-flyout/a11y-flyout.component';
import { UserFlyoutComponent } from './user-flyout/user-flyout.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { TopicPickerComponent } from './topic-picker/topic-picker.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    SearchComponent,
    LanguagePickerComponent,
    A11yFlyoutComponent,
    UserFlyoutComponent,
    ClientPickerComponent,
    TopicPickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule
  ],
  exports: [
    HeaderComponent,
    LanguagePickerComponent,
    ClientPickerComponent,
    TopicPickerComponent,
  ]
})
export class MainModule { }
