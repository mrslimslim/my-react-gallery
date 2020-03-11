import { types } from 'mobx-state-tree';

export const Tree = types
  .model({
    count: types.number,
  })
  .actions(self => ({
    increment() {
      self.count++;
    },
    decrement() {
      self.count--;
    },
  }));
