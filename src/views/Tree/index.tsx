import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../../models/Root';

const Tree: FC<{}> = () => {
  const { tree } = useMst();
  return (
    <div>
      <div>{tree.count}</div>
      <div>
        <button
          onClick={() => {
            tree.increment();
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default observer(Tree);
