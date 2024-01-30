import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
  currentMenuItemIndex: number;
};

const initialState: GlobalState = {
  currentMenuItemIndex: -1
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({

    updateCurrentMenuItemIndex(newMenuItemIndex: number) {

    patchState(store, { currentMenuItemIndex: newMenuItemIndex});
    
    }
    
  }))
);