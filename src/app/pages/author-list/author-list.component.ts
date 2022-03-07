import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil } from 'rxjs';
import { Status } from 'src/app/models/status.enum';
import { loadAuthors } from 'src/app/store/author/author-actions';
import {
  selectAuthors,
  selectAuthorStatus,
} from 'src/app/store/author/author-selectors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit, OnDestroy {
  readonly Status = Status;
  status$ = this.store.select(selectAuthorStatus);
  authors$ = this.store.select(selectAuthors);

  private _destroy = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.status$
      .pipe(
        takeUntil(this._destroy),
        filter((status) => status === Status.Initial)
      )
      .subscribe({
        next: (authors) => this.store.dispatch(loadAuthors()),
      });
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
    this._destroy.complete();
  }
}
