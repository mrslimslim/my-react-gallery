import React from 'react';
import Menu from 'antd/es/menu';

import { arrayToTree } from '@utils/index';
import menu from '../../../menu';
const { SubMenu } = Menu;

interface INumerberObject {
  [propName: string]: number;
}

const SiderMenu = () => {
  const levelMap: INumerberObject = {};
  const getMenus = (menuTree: any[]) => {
    return menuTree.map(item => {
      if (item.children) {
        if (item.pid) {
          levelMap[item.id] = item.pid;
        }
        return (
          <SubMenu
            key={String(item.id)}
            title={
              <span>
                {item.icon}
                <span>{item.title}</span>
              </span>
            }
          >
            {getMenus(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={String(item.id)}>
          {item.icon}
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };

  const getMenuTree = () => {
    return arrayToTree(menu, 'id', 'pid');
  };
  const menuTree = getMenuTree();
  const menuItems = getMenus(menuTree);
  return <Menu>{menuItems}</Menu>;
};

export default SiderMenu;
