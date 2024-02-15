import { Article } from '@models/article';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalComponentState = {
  currentArticle: Article | null;
};

const initialState: GlobalComponentState = {
  currentArticle: null
};

export const GlobalComponentStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({

    updateCurrentArticle(article: Article | null) {
      patchState(store, {currentArticle: article})
    }

  })),
);

export type GlobalComponentStore = InstanceType<typeof GlobalComponentStore>;