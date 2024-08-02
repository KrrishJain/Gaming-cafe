import { useState } from 'react'
import Home from './pages/Home'
import Games from './pages/Games'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from  './components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (

        <Router>

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/user' element={<PrivateRoute />}>
              <Route path='book-now' element={<Booking />} />
            </Route>
ç            <Route path='/contact' element={<Contact />} />
          </Routes>

          <Footer />
          
        </Router>
  )
}

export default App
