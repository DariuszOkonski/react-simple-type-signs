import React from 'react';

const TransformData = (props) => {
  return (
    <React.Fragment>
      <input
        onChange={props.change}
        type="text"
        value={props.value}
        placeholder='type something...'
      />
      <button onClick={props.click}>Reset</button>
    </React.Fragment>
  );
}

export default TransformData;