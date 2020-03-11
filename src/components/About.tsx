import React, { FunctionComponent, useState } from 'react';

const About: FunctionComponent<{}> = () => {
  const [starter] = useState('my react gallery');
  return <div>{starter}</div>;
};

export default About;
