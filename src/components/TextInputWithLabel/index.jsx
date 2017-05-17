import React from 'react';

// props used by style guide
export const defaultProps = {
  key: 'TextInputWithLabel',
  type: 'text',
  value: 'test',
  handleChange: () => console.log('Test text input change'),
  children: 'Label',
};

function TextInputWithLabel(props) {
  return (
    <span>
      {props.children}
      <input type={props.type} value={props.value} onChange={props.handleChange} />
    </span>
  );
}

export default TextInputWithLabel;
