import React from 'react';
import { observer } from 'mobx-react';
import { Layout } from 'antd';

function Sider() {
  return <Layout.Sider></Layout.Sider>;
}

export default observer(Sider);
