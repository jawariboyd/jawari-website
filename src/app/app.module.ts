import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { MaterialModule } from './modules/material/material.module';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { SidenavListButtonComponent } from './components/sidenav-list-button/sidenav-list-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SidenavListComponent,
    SidenavListButtonComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
