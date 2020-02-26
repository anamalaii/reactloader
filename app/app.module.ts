import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgxContentLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
