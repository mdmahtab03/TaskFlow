import { useState } from 'react'
import Navigation from './components/Navigation';

function App() {
  const [tasks, settasks] = useState([]);
  const [task, settask]=useState("");
  const handlechange=(e)=>{
    settask(e.target.value);
  }
  // adding task
  const addTask=()=>{
    settasks([...tasks,task]);
    settask("");
  }

  // deleting task
  const deleteTask= (index)=>{
   const temp = [];
   let count=0;
   for(let i=0; i<tasks.length;i++){
     if(i!=index){
      temp[count]=tasks[i];
      count++;
     }
   }
   settasks(temp);
  }
  //editing task
  const editTask=(item,index)=>{
    settask(item)
    deleteTask(index);
  }
  return (
    <>
      <Navigation />
      <div className='w-screen py-2 '>
        <div className='gap-4 flex justify-center items-center py-4'>
          <input value={task} onChange={handlechange} type="text" placeholder="Add tasks..." className="input border border-green-400" />
          <button className='btn btn-success' onClick={addTask}>Add</button>
        </div>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
            {tasks.map((item,idx)=>( 
              <div key={idx} className='flex bg-green-200 justify-between items-center w-2/3 rounded-lg px-4 py-3 h-16'>
                <div>{item}</div>
                <div className='flex gap-4'>
                <button className='btn btn-success' onClick={()=>editTask(item,idx)}>Edit</button>
                <button className='btn btn-success' onClick={()=>deleteTask(idx)}>Delete</button>
                </div>
              </div> 
              ))}
        </div>
      </div>
    </>
  );
}

export default App
