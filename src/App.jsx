
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './page/home/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
