import React from 'react';

function ParamHeader({ match }) {
  return (
    <h1>{match.params.childId}</h1>
  );
}

export default ParamHeader;
