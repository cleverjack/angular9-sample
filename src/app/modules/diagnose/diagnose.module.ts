import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { DiagnoseComponent } from './diagnose.component';
import { DiagnoseRoutingModule } from './diagnose-routing.module';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { MainModule } from 'src/app/main/main.module';
import { TopicComponent } from './topic/topic.component';
import { PolicyGuideComponent } from './policy-guide/policy-guide.component';
import { RightUnderscorePipe, RiskLevelToColorPipe } from 'src/app/pipes';
import { DiagnoseTextComponent } from './diagnose-text/diagnose-text.component';
import { RegressionTestBoxComponent } from './regression-test-box/regression-test-box.component'

@NgModule({
  declarations: [
    DiagnoseComponent,
    TopicComponent,
    PolicyGuideComponent,
    RightUnderscorePipe,
    RiskLevelToColorPipe,
    DiagnoseTextComponent,
    RegressionTestBoxComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DiagnoseRoutingModule,
    SharedComponentsModule,
    MainModule,
  ]
})
export class DiagnoseModule { }
