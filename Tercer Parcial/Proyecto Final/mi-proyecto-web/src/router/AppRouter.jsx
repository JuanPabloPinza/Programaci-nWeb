import {Routes, Route} from 'react-router-dom'
import Portada from '../pages/Portada'
import Tabla from '../Tabla'
import Login from '../Login'
import TempApp from '../TempApp'


function AppRouter() {
  
  return (
    <Routes>
      <Route path="/" element={<TempApp />} />
      <Route path="/tabla" element={<Tabla />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter