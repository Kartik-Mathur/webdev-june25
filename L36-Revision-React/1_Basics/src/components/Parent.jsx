import React from 'react'
import Child from './Child'


const Parent = (props) => {
    let data = props.data;
  return (
    <div>
        I am parent
      <Child data={data} />
    </div>
  )
}

export default Parent
