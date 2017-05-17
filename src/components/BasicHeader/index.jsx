import React from 'react';

export const defaultProps = {
  key: 'BasicHeader',
  children: 'Basic Header',
};

function BasicHeader(props) {
  return (
    <h1>{props.children}</h1>
  );
}

export default BasicHeader;
