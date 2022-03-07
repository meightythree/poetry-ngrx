import { createReducer, on } from '@ngrx/store';

import { Status } from 'src/app/models/status.enum';
import {
  loadAuthors,
  loadAuthorsError,
  loadAuthorsSuccess,
} from './author-actions';

export interface AuthorState {
  status: Status;
  authors: string[];
}

export const initialState: AuthorState = {
  status: Status.Initial,
  authors: [],
};

export const authorReducer = createReducer(
  initialState,
  on(loadAuthors, (state) => ({ ...state, status: Status.Loading })),
  on(loadAuthorsSuccess, (state, { authors }) => ({
    ...state,
    status: Status.Loaded,
    authors: [...authors],
  })),
  on(loadAuthorsError, (state) => ({ ...state, status: Status.Error }))
);
