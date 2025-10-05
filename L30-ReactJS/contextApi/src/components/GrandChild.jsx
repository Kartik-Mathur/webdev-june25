import React from 'react'
import GreatGrandChild from './GreatGrandChild';

function GrandChild() {
  return (
    <div>
      I am GrandChild
      <GreatGrandChild />
    </div>
  );
}

export default GrandChild
