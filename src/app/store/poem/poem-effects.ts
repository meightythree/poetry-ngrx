import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PoemRepository } from 'src/app/repositories/poem-repository.service';
import { loadPoems, loadPoemsError, loadPoemsSuccess } from './poem-actions';

@Injectable()
export class PoemEffects {
  constructor(
    private actions$: Actions,
    private poemRepository: PoemRepository
  ) {}

  loadPoems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPoems),
      switchMap((action) =>
        this.poemRepository.getPoems(action.author).pipe(
          map((poems) => loadPoemsSuccess({ poems })),
          catchError((err) => of(loadPoemsError()))
        )
      )
    )
  );
}
