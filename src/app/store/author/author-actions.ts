import { createAction, props } from '@ngrx/store';

export const loadAuthors = createAction('[Authors] Load');

export const loadAuthorsSuccess = createAction(
  '[Authors] Load Success',
  props<{ authors: string[] }>()
);

export const loadAuthorsError = createAction('[Authors] Load Error');
