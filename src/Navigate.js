import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginpage from './Login/Loginpage'
import HomePage from './pages/HomePage'
import SignUp from './Signup/signup'
const Navigate = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginpage/>}></Route>
            
            <Route path="/Home" element={<HomePage/>}></Route>
                </Routes>
                </BrowserRouter>
    </div>
  )
}

export default Navigate