import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    },
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
