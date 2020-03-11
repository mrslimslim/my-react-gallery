import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

import { Tree } from './treeStore';

const RootModel = types.model({
  tree: Tree,
});

export const rootStore = RootModel.create({
  tree: {
    count: 0,
  },
});

onSnapshot(rootStore, snapshot => console.log('Snapshot: ', snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
