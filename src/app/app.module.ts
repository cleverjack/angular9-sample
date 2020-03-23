import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { ApiModule as ApiClassifyTextModule, BASE_PATH } from 'classify-text-swagger-client';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    SubnavModule,
    BreadcrumbModule,
    HttpClientModule,
    ApiClassifyTextModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: BASE_PATH, useValue: environment.apiBaseUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
