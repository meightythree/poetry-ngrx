import { createAction, props } from '@ngrx/store';
import { Poem } from 'src/app/models/poem.model';

export const loadPoems = createAction(
  '[Poems] Load',
  props<{ author: string }>()
);

export const loadPoemsSuccess = createAction(
  '[Poems] Load Success',
  props<{ poems: Poem[] }>()
);

export const loadPoemsError = createAction('[Poems] Load Error');

export const setSelectedPoemTitle = createAction(
  '[Poems] Set Selected Poem Title',
  props<{ title: string }>()
);
