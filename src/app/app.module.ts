import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormNameComponent } from './form-name/form-name.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    FormNameComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
