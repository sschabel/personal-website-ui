import { SimpleMenuItem } from '@models/simple-menu-item';
import { User } from '@models/user';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
  bearerToken: string | null;
  lastError: Error | null;
  menuItems: SimpleMenuItem[];
  user: User | null;
};

const initialState: GlobalState = {
  bearerToken: null,
  lastError: null,
  menuItems: [],
  user: null
};

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({

    updateBearerToken(bearerToken: string | null) {
      patchState(store, { bearerToken: bearerToken });
    },

    updateLastError(error: Error | null) {
      patchState(store, { lastError: error });
    },

    updateMenuItems(menuItems: SimpleMenuItem[]) {
      patchState(store, { menuItems: menuItems })
    },

    updateUser(user: User) {
      patchState(store, {user: user})
    }

  })),
);

export type GlobalStore = InstanceType<typeof GlobalStore>;