import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Braj from './Pages/Braj';
import Panaroma from './Pages/Panaroma';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/braj" element={<Braj />} />
      <Route path="/panaroma/:temple" element={<Panaroma />} />
    </Routes>
  )
}
export default App;