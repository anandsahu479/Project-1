import React, { useRef, useState } from 'react'
import { useEffect } from 'react'


const Expense = () => {

const [showForm, setShowForm] = useState(true)

const [arr, Setarr]=useState([
  {id:1, Product:"IPhone", Price:45000},
  {id:2, Product:"Samsung", Price:40000},
  {id:3, Product:"Oppo", Price:35000},
  {id:4, Product:"One+", Price:20000}
])

let idRef = useRef()
let ProductRef = useRef()
let PriceRef = useRef()

useEffect(() => {
  const storedExpenses = localStorage.getItem('expenses');
  if (storedExpenses) {
    Setarr(JSON.parse(storedExpenses));
  }
}, []);

const HandleSubmit =(e)=>{
  e.preventDefault();
  let obj =
    {
      id:idRef.current.value,
      Product:ProductRef.current.value,
      Price:PriceRef.current.value,
    }
    if (obj.id && obj.Product && obj.Price) {
      Setarr([...arr, obj]);
      localStorage.setItem('expenses', JSON.stringify([...arr, obj]));
    }
    else{
      return alert("plese fill all field")
    }

    idRef.current.value=""
    Product.current.value=""
    Price.current.value=""
}
    const handleDel =(ans,i)=>{
      // console.log(ans)
      // console.log(i)
      let Copyarr = [...arr]
      Copyarr.splice(i,1)
      Setarr(Copyarr)
}
const toggleForm =()=>{
  setShowForm(!showForm)
}


  return (
    <div className='relative'>
      {/* <h1>Expence App Tracker</h1> */}
      <button onClick={toggleForm} className='flex m-auto text-center justify-center font-bold rounded-md right-0 px-4 py-2 w-[150px] bg-gray-600 hover:bg-gray-800 text-white'>{showForm? 'Hide':'Show'}Form</button>
{showForm && <form action="" className='grid lg:grid-cols-4 md:grid-cols-2 w-full grid-cols-1 text-center m-auto px-4 py- bg-black p-4 gap-2'>
  <input ref={idRef} className='rounded-md px-4 py-2 text-black' type="Number" placeholder='Enter Sr No' />
  <input ref={ProductRef} className='rounded-md px-4 py-2 text-black' type="text" placeholder='Enter Product' />
  <input ref={PriceRef} className='rounded-md px-4 py-2 text-black' type="Number" placeholder='Enter Price' />
  <button onClick={HandleSubmit} className='text-white w-full px-4 py-2 bg-green-800 rounded-md hover:bg-green-500 '>Add Row</button>
</form>      
}

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Sr.No
        </th>
        <th scope="col" className="px-6 py-3">
          Product Name
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Delete
        </th>
      </tr>
    </thead>
    <tbody>
      {
        arr.map((ele, index)=>{
          return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {index+1}
        </th>
        <td className="px-6 py-4">
          {ele.Product}
        </td>
        <td className="px-6 py-4">
          {ele.Price}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=>handleDel(ele, index)} className='px-4 py-2 bg-red-900 hover:bg-red-600 rounded-md'>Delete</button>
        </td>
      </tr>
        })
      }
      
    </tbody>
  </table>
</div>



    </div>
  )
}

export default Expense
