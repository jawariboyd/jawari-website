import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
