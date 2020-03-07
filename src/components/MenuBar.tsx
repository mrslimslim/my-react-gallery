import React, { Component } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class MenuBar extends Component {
  render() {
    return (
      <Menu style={{ width: 256 }} mode="inline">
        <SubMenu key="first" title={<span>About</span>}></SubMenu>
      </Menu>
    );
  }
}

export default MenuBar;
