import React from 'react';

export const defaultProps = {
  key: 'Image',
  src: 'http://placecage.com/200/300',
  className: '',
};

function Image(props) {
  return (
    <img src={props.src} className={props.className}/>
  );
}

export default Image;
