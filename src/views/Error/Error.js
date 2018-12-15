// @flow

import * as React from 'react';

type Props = {
  text: string,
};

const Error = ({ text }: Props) => (
  <div>
    {text}
  </div>
);

export default Error;
