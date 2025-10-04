import React from "react";

const todos = [
  { id: 1, name: "Buy groceries", description: "Purchase milk, eggs, bread, and fruits from the supermarket." },
  { id: 2, name: "Workout", description: "Complete a 30-minute cardio session and strength training." },
  { id: 3, name: "Read book", description: "Read at least 50 pages of 'Atomic Habits' by James Clear." },
  { id: 4, name: "Call mom", description: "Catch up with mom and check in on how she’s doing." },
  { id: 5, name: "Finish project report", description: "Complete and submit the monthly project status report." }
];


const App = () => {
  return <ul>
    {todos.map(t=>{
      return <li key={t.id}>{t.name} - {t.description}</li>
    })}
  </ul>;
};

export default App;
