import React from 'react';
import Loadable from '@loadable/component';
import PageLoading from '@components/PageLoading';

const loadComponent = (loader: () => Promise<any>) => {
  return Loadable(loader, { fallback: <PageLoading /> });
};

export const asynchronousComponents = {
  Tree: loadComponent(() => import(/* webpackChunkName: "tree" */ '@views/Tree')),
};

export type AsynchronousComponentKeys = keyof typeof asynchronousComponents;

export interface IMenu {
  title: string;
  id: number;
  pid?: number;
  path?: string;
  icon?: JSX.Element;
  component?: AsynchronousComponentKeys;
  exact?: boolean;
}

export interface IMenuInTree extends IMenu {
  children?: IMenuInTree;
}

export const menu: IMenu[] = [
  {
    id: 1,
    path: '/',
    title: 'Tree',
    icon: null,
    component: 'Tree',
    exact: true,
  },
];

export default menu;
