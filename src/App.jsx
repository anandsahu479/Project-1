import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Expense from './Pages/Expense'
import Navbar from './Component/Navbar'
import PNP from './Pages/PNP'
import Todo from './Pages/To do'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Expense' element={<Expense/>}/>
      <Route path='/Todo List' element={<Todo/>}/>
      <Route path='/*' element={<PNP/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
