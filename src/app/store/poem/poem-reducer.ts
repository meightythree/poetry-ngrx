import { createReducer, on } from '@ngrx/store';
import { Poem } from 'src/app/models/poem.model';
import { Status } from 'src/app/models/status.enum';
import {
  loadPoems,
  loadPoemsError,
  loadPoemsSuccess,
  setSelectedPoemTitle,
} from './poem-actions';

export interface PoemState {
  status: Status;
  poems: Poem[];
  selectedPoemTitle: string;
}

export const initialState: PoemState = {
  status: Status.Initial,
  poems: [],
  selectedPoemTitle: '',
};

export const poemReducer = createReducer(
  initialState,
  on(loadPoems, (state) => ({ ...state, status: Status.Loading })),
  on(loadPoemsSuccess, (state, { poems }) => ({
    ...state,
    status: Status.Loaded,
    poems: [...poems],
  })),
  on(loadPoemsError, (state) => ({ ...state, status: Status.Error })),
  on(setSelectedPoemTitle, (state, { title }) => ({
    ...state,
    selectedPoemTitle: title,
  }))
);
