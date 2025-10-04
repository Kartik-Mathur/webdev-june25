import React from "react";

const App = () => {
  let randomNumber = Math.floor(Math.random() * 10);

  return (
    <div>
      Random Number: {randomNumber}
      <br></br>
      {randomNumber == 7 ? (
        <img src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUycGd2YXNhMnp1dng1YzV4OXk0OGE0bzZzaWN0NnRhMW4yaXZkMmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6brH8dM3zeMyA/200.gif"></img>
      ) : (
        <img src="https://media.tenor.com/WvotbqtvuRUAAAAM/reasonsimbroke-kramer.gif"></img>
      )}
    </div>
  );
};

export default App;
