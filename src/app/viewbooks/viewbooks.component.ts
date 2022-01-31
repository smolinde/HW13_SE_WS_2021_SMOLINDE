import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  public books: Book[] = [];
  constructor(private _service : BookstoreService, private _route : Router) {}

  ngOnInit(): void {
    this.getbooks();
  }
  getbooks() {
    this._service.getBooksFromServer().subscribe(
      data => this.books = data,
    )
  }
  RedirectToAddBook() {
    this._route.navigate(['/addbook'])
  }
  RedirectToOldest() {
    this._route.navigate(['/oldestbook'])
  }
  RedirectToLatest() {
    this._route.navigate(['/latestbook'])
  }
  async deleteBookById(id:number) {
    this._service.deleteBookFromServer(id);
    await new Promise(f => setTimeout(f, 50));
    window.location.reload();
  }
}
