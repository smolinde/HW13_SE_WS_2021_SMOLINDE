import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oldestbook',
  templateUrl: './oldestbook.component.html',
  styleUrls: ['./oldestbook.component.css']
})
export class OldestbookComponent implements OnInit {
  public oldest: Book = {} as Book;
  constructor(private _service : BookstoreService, private _route : Router) {}

  ngOnInit(): void {
    this.getOldest();
  }
  getOldest() {
    this._service.getOldestBook().subscribe(
      data => this.oldest = data,
    )
  }
  RedirectToLibrary() {
    this._route.navigate(['../'])
  }
}