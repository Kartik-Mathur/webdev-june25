import React, { useContext } from "react";
import { context, todosContext } from "../App";

function GreatGrandChild() {
  const data = useContext(context);
  const todosData = useContext(todosContext);

  return (
    <div>
      I am Great Grand Child: {data.x}
      {todosData.map((t, i) => {
        return <li key={i}>{t}</li>;
      })}
    </div>
  );
}

// function GreatGrandChild() {
//   return (
//     <context.Consumer>
//         {
//             (data)=>{
//                 return <todosContext.Consumer>
//                     {
//                         (todosData)=>{
//                             return <div>
//                                 I am Great Grand Child: {data.x}
//                                 <ul>
//                                     {todosData.map((t,i)=>{
//                                         return <li key={i}>{t}</li>
//                                     })}
//                                 </ul>
//                             </div>
//                         }
//                     }
//                 </todosContext.Consumer>
//             }
//         }
//     </context.Consumer>
//   );
// }

export default GreatGrandChild;
