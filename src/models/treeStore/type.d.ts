import { TreeStore as TreeStoreModel } from './index';

export as namespace ITreeStore;

export interface TreeStore extends TreeStoreModel {}

export interface ITree {
  count: Number;
  handleCount: Function;
}
