import React from 'react'

const Todos = ({todos}) => {
  return (
    <div>
      {todos.map(t=>{
        return <li style={{
            margin:'20px',
            borderBottom: '1px solid #ccc',
            padding: '10px'
        }} key={t._id}>
            Task: {t.task} <br/>
            Description: {t.description} <br/>
        </li>
      })}
    </div>
  )
}

export default Todos
