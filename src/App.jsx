import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import Experiences from './pages/Experiences'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'
import Reservation from './pages/Reservation'
import Login from './pages/login'
import Admin from './pages/Admin'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  )
}

export default App
