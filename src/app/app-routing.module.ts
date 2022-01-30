import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { LatestbookComponent } from './latestbook/latestbook.component';
import { OldestbookComponent } from './oldestbook/oldestbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';

const routes: Routes = [ { path:'', component:ViewbooksComponent}, { path:'addbook', component:AddbookComponent}, { path:'latestbook', component:LatestbookComponent}, { path:'oldestbook', component:OldestbookComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
