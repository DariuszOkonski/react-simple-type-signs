import React from 'react';

const DisplayResult = (props) => {
  return (
    <h2 className='result'>{props.result.toUpperCase()}</h2>
  );
}

export default DisplayResult;