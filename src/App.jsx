import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingpage/LandingPage'
import Detail from './pages/detail/Detail'
// import Trailer from './pages/trailer/trailer'
import Home from './pages/home/Home'
import Trailer from './pages/trailer/Trailer'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Home />} />
        <Route path='/trailer' element={<Trailer />} />
      </Routes>
    </>
  )
}

export default App
