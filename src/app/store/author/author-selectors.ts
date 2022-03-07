import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorState } from './author-reducer';

const selectAuthorState = createFeatureSelector<AuthorState>('author');

export const selectAuthorStatus = createSelector(
  selectAuthorState,
  (state: AuthorState) => state.status
);

export const selectAuthors = createSelector(
  selectAuthorState,
  (state: AuthorState) => state.authors
);
