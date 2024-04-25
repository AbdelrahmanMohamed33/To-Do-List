import { useRef, useState } from "react";
import "./App.css";

  const App = ()=>{
    const [x , setx] = useState([])
    const inputRef = useRef()

    const add = () =>{
         const value = inputRef.current.value
        const newData = {
          completed : false,  value
        }
        setx([...x , newData])
        inputRef.current.value = ""
      }

        const itemDone = (index) => {
          const newX = [...x]
         x[index].completed = !x[index].completed
        
         setx(newX)
    } 
    const tdelete = (index) => {
      const newx = [...x]
      newx.splice(index , 1)
      setx(newx)
    }
    return (
        <div className="app">
            <h2>To Do List</h2>
            <ul>
            {
              x.map(({value , completed}, index) => {
                return <div className="divv">
                 <li className = {completed? "diffStyle" : ""} onClick={ () => itemDone(index)}>{value }</li>
                 <span onClick={() => tdelete(index) }>X</span>
                 </div>
              })
            }  
            </ul>
        <input  ref={inputRef} placeholder="Enter new task "/>
        <button onClick={add}>Add</button>
     
            
        </div>
    );
}

export default App;