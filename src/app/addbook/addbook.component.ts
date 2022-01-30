import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookstoreService } from '../bookstore.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  fc = new FormControl('');
  constructor(private _service : BookstoreService, private _route : Router) { }
  public book: Book = {} as Book;
  ngOnInit(): void {
  }
  addbookFormSubmit () {
    this._service.addBookToServer(this.book)
    this._route.navigate(['../'])
  }
  RedirectToLibrary() {
    this._route.navigate(['../'])
    window.location.reload();
  }
}
