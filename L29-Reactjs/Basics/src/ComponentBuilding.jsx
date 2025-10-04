import React from 'react'

function Todos(props){
  // console.log(props)
  let todosData = props.todosData;

  return <div>
    {todosData.map(t=>{
      return <li key={t.id}>{t.name} - {t.description}</li>
    })}
  </div>
}

const App = () => {
  const todosData = [
    { id: 1, name: "Buy groceries", description: "Purchase milk, eggs, bread, and fruits from the supermarket." },
    { id: 2, name: "Workout", description: "Complete a 30-minute cardio session and strength training." },
    { id: 3, name: "Read book", description: "Read at least 50 pages of 'Atomic Habits' by James Clear." },
    { id: 4, name: "Call mom", description: "Catch up with mom and check in on how she’s doing." },
    { id: 5, name: "Finish project report", description: "Complete and submit the monthly project status report." }
  ];


  return (
    <div>
      {/* {Todos()} */}
      {/* <Todos></Todos> */}
      <Todos todosData={todosData} /> 
    </div>
  )
}

export default App
