import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { AuthorRepository } from 'src/app/repositories/author-repository.service';
import {
  loadAuthors,
  loadAuthorsError,
  loadAuthorsSuccess,
} from './author-actions';

@Injectable()
export class AuthorEffects {
  constructor(
    private actions$: Actions,
    private authorRepository: AuthorRepository
  ) {}

  loadAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAuthors),
      delay(5000),
      switchMap(() =>
        this.authorRepository.getAuthors().pipe(
          map((authors) => loadAuthorsSuccess({ authors })),
          catchError((err) => of(loadAuthorsError()))
        )
      )
    )
  );
}
