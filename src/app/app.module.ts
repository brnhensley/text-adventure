import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormNameComponent } from './form-name/form-name.component';
import { StartComponent } from './start/start.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JoinComponent } from './join/join.component';
import { FleeComponent } from './flee/flee.component';
import { TridentComponent } from './trident/trident.component';
import { NetComponent } from './net/net.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNameComponent,
    StartComponent,
    JoinComponent,
    FleeComponent,
    TridentComponent,
    NetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
