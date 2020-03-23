import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { ToogleSliderComponent } from './toogle-slider/toogle-slider.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    SelectBoxComponent,
    ToogleSliderComponent,
    ProgressBarComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BreadcrumbModule,
  ],
  exports: [
    AppGridComponent,
    BreadcrumbsComponent,
    LoadingIndicatorComponent,
    MoreButtonComponent,
    OptionButtonGroupComponent,
    SelectBoxComponent,
    ToogleSliderComponent,
    ProgressBarComponent,
    TooltipComponent,
  ]
})
export class SharedComponentsModule { }
