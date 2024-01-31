import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
  lastError: Error | null;
};

const initialState: GlobalState = {
  lastError: null
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({

    updateLastError(error: Error | null) {

    patchState(store, { lastError: error});
    
    }
    
  }))
);