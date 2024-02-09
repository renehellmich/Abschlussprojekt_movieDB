import { Route ,Routes} from 'react-router-dom'
import './App.css'
import Detail from './pages/detail/Detail'
import Trailer from './pages/trailer/trailer'

function App() {

  return (
    <>
      <Routes>
        <Route path= '/detail' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
