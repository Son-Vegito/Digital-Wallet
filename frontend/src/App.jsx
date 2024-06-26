import './App.css'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import Update from './pages/Update'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/send' element={<SendMoney/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
