import {
  createFeatureSelector,
  createSelector,
  DefaultProjectorFn,
  MemoizedSelector,
} from '@ngrx/store';
import { Poem } from 'src/app/models/poem.model';
import { PoemState } from './poem-reducer';

const selectPoemState = createFeatureSelector<PoemState>('poem');

export const selectPoemStatus = createSelector(
  selectPoemState,
  (state: PoemState) => state.status
);

export const selectPoems = createSelector(
  selectPoemState,
  (state: PoemState) => state.poems
);

export const selectPoemsTitle: MemoizedSelector<
  object,
  Pick<Poem, 'title'>[],
  DefaultProjectorFn<Pick<Poem, 'title'>[]>
> = createSelector(selectPoems, (poems: Poem[]) =>
  poems.map((poem) => ({ title: poem.title }))
);

export const selectSelectedPoem = createSelector(selectPoemState, (state) =>
  findPoemByTitle(state.poems, state.selectedPoemTitle)
);

const findPoemByTitle = (poems: Poem[], title: string) => {
  return poems.find((_poem) => _poem.title === title);
};
