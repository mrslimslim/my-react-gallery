import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import Open from './../../assets/image/open.svg';
import './styel.scss';
import Vivus from 'vivus';
import cs from 'classnames';

const Opening: FunctionComponent<{}> = () => {
  const [hideOpen, setHideOpen] = useState(false);
  const openRef = useRef(document.createElement('div'));

  useEffect(() => {
    const { current } = openRef;
    new Vivus('my-svg', { duration: 400 }, () => {
      setHideOpen(true);
      setTimeout(() => {
        current.style.display = 'none';
      }, 1500);
    });
  }, []);

  return (
    <div ref={openRef} className={cs('opening', { hide: hideOpen })}>
      <object id="my-svg" type="image/svg+xml" data={Open} aria-label="open"></object>
    </div>
  );
};

export default Opening;
