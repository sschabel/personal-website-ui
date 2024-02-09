import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleMenuItem } from '@models/simple-menu-item';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

type GlobalState = {
  bearerToken: string | null;
  lastError: Error | null;
  menuItems: SimpleMenuItem[];
};

const initialState: GlobalState = {
  bearerToken: null,
  lastError: null,
  menuItems: []
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
    }

  })),
);

export type GlobalStore = InstanceType<typeof GlobalStore>;