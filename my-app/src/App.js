import React from 'react';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './Home';
import Orders from './Orders'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Orders' element={<Orders/>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
