import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMenu from './components/navbar/navbar';
import SubscribeForm from './components/suscribe/suscribeForm';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

      <SubscribeForm />
    </div>
  );
}

export default App;
