import { SimpleMenuItem } from '@models/simple-menu-item';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
  lastError: Error | null;
  menuItems: SimpleMenuItem[];
};

const initialState: GlobalState = {
  lastError: null,
  menuItems: []
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({

    updateLastError(error: Error | null) {

    patchState(store, { lastError: error});
    
    },

    updateMenuItems(menuItems: SimpleMenuItem[]) {
      patchState(store, {menuItems: menuItems})
    }
    
  }))
);

export type GlobalStore = InstanceType<typeof GlobalStore>;