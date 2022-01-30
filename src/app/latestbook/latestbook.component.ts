import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latestbook',
  templateUrl: './latestbook.component.html',
  styleUrls: ['./latestbook.component.css']
})
export class LatestbookComponent implements OnInit {
  public latest: Book = {} as Book;
  constructor(private _service : BookstoreService, private _route : Router) {}

  ngOnInit(): void {
    this.getLatest();
  }
  getLatest() {
    this._service.getLatestBook().subscribe(
      data => this.latest = data,
    )
  }
  RedirectToLibrary() {
    this._route.navigate(['../'])
  }
}