import React, {useRef, useState} from 'react'
import { useEffect } from 'react'


const Todo = () => {
    let inputRef = useRef()
  const [task, settask]=useState([
    { id:1, Task:"HTML", Status:"Incompleted"},
    { id:2, Task:"CSS", Status:"Completed"}
  ])

  useEffect(() => {
    const storedTask = localStorage.getItem('todo');
    if (storedTask) {
      settask(JSON.parse(storedTask));
    }
  }, []);

  const handleAdd =(e)=>{
      let obj = {
        id:inputRef.current.value,
        Task:inputRef.current.value,
        Status:"Incomplete"
      }
      if(obj.id && obj.Task && obj.Status){
          settask([...task,obj])
          localStorage.setItem('todo', JSON.stringify([...task, obj]));
      }
      else{
          alert('Add a task')
      }
      inputRef.current.value=''

  }
  const handleUpdate=(ans, i)=>{
      console.log(ans)
      console.log(i)
      let Copyarr = [...task]
      Copyarr[i].Status==="Incompleted"?Copyarr[i].Status='Completed':Copyarr[i].Status='Incompleted'
      settask(Copyarr)
      
  }
  const handleDelete=(ans, i)=>{
        let Copyarr = [...task]
        Copyarr.splice(i,1)
        settask(Copyarr)
  }


  return (
      <div className='bg-black h-[100vh]'>
      <h1 className='font-bold text-4xl m-auto text-center text-white'>To Do List</h1>
      <div className='flex justify-center gap-5 mt-4'>
        <input ref={inputRef} type="text" placeholder='Enter your Task ..' className='px-4 py-2 border-black border-x-2 border-y-2 rounded-md'/>
        <button onClick={handleAdd} className='border px-4 py-2 bg-green-900 hover:bg-green-500 rounded-lg'>Add Task</button>
      </div>
      <div className='m-auto text-center'>
        <table className='w-[90%] bg-gray-800 text-white font-bold m-auto mt-5 border-x-2 border-y-2 border-white'>
          <thead className='w-[90%] bg-gray-800 text-white font-bold uppercase m-auto mt-5 border-x-2 border-y-2 border-white'>
            <tr>
              <th>Sr.No</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='w-[90%] bg-gray-500 text-white font-bold m-auto mt-5 border-2 border-x-2 border-y-2 border-white'>
            {task.map((ele,i)=>{
                return <tr className={`${ele.Status==="Completed"?'bg-green-400':'bg-red-400'}`}>
                          <th>{i+1}</th>
                          <th>{ele.Task}</th>
                          <th>{ele.Status}</th>
                          <button onClick={()=>handleUpdate(ele,i)} className='px-4 py-2 m-5 bg-green-600 rounded-lg hover:bg-green-300'>Update</button>
                          <button onClick={()=>handleDelete(ele,i)} className='px-4 py-2 m-5 bg-red-600 rounded-lg hover:bg-red-300'>Delete</button>

                       </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Todo
