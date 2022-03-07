import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, pluck, Subject, takeUntil } from 'rxjs';
import { Status } from 'src/app/models/status.enum';
import {
  loadPoems,
  setSelectedPoemTitle,
} from 'src/app/store/poem/poem-actions';
import {
  selectPoemStatus,
  selectPoemsTitle,
  selectSelectedPoem,
} from 'src/app/store/poem/poem-selectors';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss'],
})
export class PoemListComponent implements OnInit, OnDestroy {
  readonly Status = Status;
  author$ = this.activatedRoute.params.pipe(
    pluck('author'),
    distinctUntilChanged()
  );
  status$ = this.store.select(selectPoemStatus);
  poemTitles$ = this.store.select(selectPoemsTitle);
  selectedPoem$ = this.store.select(selectSelectedPoem);

  private _destroy = new Subject();

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.author$.pipe(takeUntil(this._destroy)).subscribe({
      next: (author) => this.store.dispatch(loadPoems({ author })),
    });
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
    this._destroy.complete();
  }

  setSelectedPoem(title: string): void {
    this.store.dispatch(setSelectedPoemTitle({ title }));
  }
}
