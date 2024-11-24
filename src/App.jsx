import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Braj from './Pages/Braj';
import Store from './Pages/store';
import './styles/App.css';
const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/braj" element={<Braj />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  )
}
export default App;