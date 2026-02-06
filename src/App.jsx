import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import Amenities from './pages/Amenities'
import Experiences from './pages/Experiences'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
