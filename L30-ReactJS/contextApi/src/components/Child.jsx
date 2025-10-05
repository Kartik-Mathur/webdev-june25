import React from 'react'
import GrandChild from './GrandChild';

function Child() {
  return (
    <div>
      I am Child
      <GrandChild />
    </div>
  );
}

export default Child
