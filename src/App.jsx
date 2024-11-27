import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Braj from './Pages/Braj';
import './styles/App.css';
const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/braj" element={<Braj />} />
    </Routes>
  )
}
export default App;