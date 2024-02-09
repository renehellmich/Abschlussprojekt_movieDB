import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingpage/LandingPage'
import Detail from './pages/detail/Detail'
import Trailer from './pages/trailer/trailer'
import Nav from './components/nav/Nav'
import Home from './page/home/Home'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path= '/detail' element={<Detail/>}/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
