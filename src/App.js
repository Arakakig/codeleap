import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'
import ComentStep from './components/ComentStep/ComentStep'
import Steps from './pages/Coments/Steps'

export default function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />

          <Route path="/step" element={<Steps />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

