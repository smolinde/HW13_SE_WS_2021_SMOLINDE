import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { OldestbookComponent } from './oldestbook/oldestbook.component';
import { LatestbookComponent } from './latestbook/latestbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbooksComponent,
    OldestbookComponent,
    LatestbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
