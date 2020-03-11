import React, { FunctionComponent } from 'react';
import './style.scss';
import { observer } from 'mobx-react';
import { useMst } from '../../models/Root';

const Header: FunctionComponent<{}> = () => {
  const { tree } = useMst();
  return <div className="gallery-header">this is header, {tree.count}</div>;
};

export default observer(Header);
